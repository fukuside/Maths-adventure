import { createServer } from 'node:http';
import { randomBytes, randomInt } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const skillPool = ['reveal', 'check', 'change', 'swap', 'hide', 'mark'];
const idleLimit = 30 * 60_000;

async function loadRoster(spriteDirectory) {
  const sprites = new Set(await readdir(spriteDirectory));
  const packs = fileURLToPath(new URL('../../src/content/packs/', import.meta.url));
  const cards = await Promise.all(['builtin', 'kindergarten'].map(async pack => {
    const dir = join(packs, pack, 'cards');
    const files = (await readdir(dir)).filter(file => file.endsWith('.js')).sort();
    return Promise.all(files.map(async file => (await import(pathToFileURL(join(dir, file)).href)).default));
  }));
  return Object.fromEntries(cards.flat().flatMap(card => {
    const key = card.id + '_UR';
    return sprites.has(key + '.webp') ? [[key, { name: card.name }]] : [];
  }));
}

function validNumber(value, digits) {
  return typeof value === 'string' && value.length === digits && /^[0-9]+$/.test(value) && new Set(value).size === digits;
}

function isSwap(secret, next) {
  const changed = [...secret].map((digit, i) => digit === next[i] ? -1 : i).filter(i => i >= 0);
  const [a, b] = changed;
  return changed.length === 2 && secret[a] === next[b] && secret[b] === next[a];
}

const numbers = new Map([3, 4].map(digits => [
  digits, Array.from({ length: 10 ** digits }, (_, i) => String(i).padStart(digits, '0'))
    .filter(value => validNumber(value, digits)),
]));
const pick = options => options[randomInt(options.length)];

function score(secret, guess) {
  let hits = 0, blocks = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) hits++;
    else if (secret.includes(guess[i])) blocks++;
  }
  return { hits, blocks };
}

function resolveTurn(room) {
  for (const player of room.players) {
    if (player.skill?.name === 'change' || player.skill?.name === 'swap') {
      player.secret = player.skill.secret;
      player.revision++;
      player.changeKind = player.skill.name;
    }
    if (player.skill?.name === 'hide') player.hideAt = room.turn + 1;
    if (player.skill) player.usedSkill = true;
  }
  const skills = room.players.map(({ skill }, i) => {
    if (!skill) return null;
    const { secret, revision } = room.players[1 - i];
    if (skill.name === 'reveal') return { name: 'reveal', digit: pick([...secret]), revision };
    if (skill.name === 'check') return { name: 'check', digit: skill.digit, present: secret.includes(skill.digit), revision };
    if (skill.name === 'mark') {
      const previous = room.history.at(-1).guesses[i];
      const position = pick(previous.hitPositions);
      return { name: 'mark', position, digit: previous.guess[position - 1], revision: previous.revision };
    }
    return { name: skill.name };
  });
  const guesses = room.players.map(({ guess }, i) => ({
    guess, ...(guess === null ? { hits: null, blocks: null } : score(room.players[1 - i].secret, guess)),
    revision: room.players[1 - i].revision,
    hidden: room.players[1 - i].hideAt === room.turn,
    hitPositions: guess === null ? [] : [...guess].flatMap((digit, index) =>
      digit === room.players[1 - i].secret[index] ? [index + 1] : []),
  }));
  room.history.push({ turn: room.turn, guesses, skills });
  for (const player of room.players) {
    player.guess = null;
    player.skill = null;
  }
  const [a, b] = guesses.map(guess => guess.hits === room.digits);
  if (a || b || room.turn === 12) {
    room.result = a === b ? 'draw' : a ? 0 : 1;
  } else {
    room.turn++;
  }
}

function playerFor(hero, secret) {
  const first = pick(skillPool);
  return {
    hero, secret, token: randomBytes(24).toString('hex'), guess: null,
    skills: [first, pick(skillPool.filter(skill => skill !== first))],
    skill: null, usedSkill: false, revision: 0, changeKind: null, hideAt: 0,
  };
}

function canReveal(room, seat) {
  const previous = room.history.at(-1)?.guesses[seat];
  return Boolean(previous && !previous.hidden && previous.blocks > 0);
}

function canMark(room, seat) {
  return (room.history.at(-1)?.guesses[seat].hits ?? 0) > 0;
}

function chooseCpuGuess(room) {
  const { revision, changeKind } = room.players[0];
  return pick(numbers.get(room.digits).filter(candidate => room.history.every(({ guesses: [, previous], skills: [, skill] }) => {
    if (skill?.name === 'reveal' && (skill.revision === revision || changeKind === 'swap') && !candidate.includes(skill.digit)) return false;
    if (skill?.name === 'check' && (skill.revision === revision || changeKind === 'swap') && candidate.includes(skill.digit) !== skill.present) return false;
    if (skill?.name === 'mark' && skill.revision === revision && candidate[skill.position - 1] !== skill.digit) return false;
    if (previous.guess === null) return true;
    const reordered = previous.revision !== revision;
    if (reordered && (changeKind !== 'swap' || previous.hidden)) return true;
    const { hits, blocks } = score(candidate, previous.guess);
    if (reordered) return hits + blocks === previous.hits + previous.blocks;
    return hits === previous.hits && (previous.hidden || blocks === previous.blocks);
  })));
}

function chooseCpuSkill(room, cpu) {
  if (cpu.usedSkill || room.turn < 2) return null;
  const available = cpu.skills;
  if (available.includes('reveal') && canReveal(room, 1)) return { name: 'reveal' };
  if (available.includes('mark') && canMark(room, 1)) return { name: 'mark' };
  if (available.includes('swap') && room.history.at(-1).guesses[0].hits >= 1) {
    const digits = [...cpu.secret];
    const first = randomInt(digits.length);
    const second = (first + randomInt(1, digits.length)) % digits.length;
    [digits[first], digits[second]] = [digits[second], digits[first]];
    return { name: 'swap', secret: digits.join('') };
  }
  if (available.includes('hide') && room.turn >= 4 && room.turn < 12) return { name: 'hide' };
  if (available.includes('check') && room.turn === 4) return { name: 'check', digit: String(randomInt(10)) };
  return null;
}
function roomView(room, seat) {
  return {
    code: room.code, mode: room.mode, digits: room.digits, seat, turn: room.turn, result: room.result,
    canReveal: canReveal(room, seat), canMark: canMark(room, seat),
    history: room.history.map(({ turn, guesses, skills }) => ({
      turn,
      guesses: guesses.map(({ hidden, hitPositions, ...guess }, index) => ({
        ...guess, blocks: hidden && index === seat ? null : guess.blocks,
      })),
      skills: skills.map((skill, index) => skill && (index === seat ? skill : { name: skill.name })),
    })),
    players: room.players.map(({ hero, guess, secret, revision, usedSkill, skill, changeKind, skills }, index) => ({
      hero, revision, changeKind, skills, ready: guess !== null || skill !== null,
      ...(index === seat ? { secret, guess, usedSkill } : room.result !== null ? { secret } : {}),
    })),
  };
}

async function readJson(req) {
  let body = '';
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 4096) throw new Error('入力が大きすぎます。');
  }
  return JSON.parse(body);
}

export function createArenaServer({ spriteDirectory, bgmFile } = {}) {
  spriteDirectory ??= process.env.ARENA_SPRITES || fileURLToPath(new URL('../../public/reward-games/sprites/', import.meta.url));
  bgmFile ??= process.env.ARENA_BGM || join(spriteDirectory, '..', '..', 'maths-adventure-bgm-loop.mp3');
  const rooms = new Map();
  let rosterPromise;
  return createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const reply = (code, data) => {
      res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(JSON.stringify(data));
    };
    try {
      if (req.method === 'GET' && url.pathname === '/') {
        const body = await readFile(new URL('./monster-arena.html', import.meta.url));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(body);
      }
      const roster = await (rosterPromise ??= loadRoster(spriteDirectory));
      if (req.method === 'GET' && url.pathname === '/api/roster') return reply(200, { roster });
      if (req.method === 'GET' && url.pathname === '/maths-adventure-bgm-loop.mp3') {
        const body = await readFile(bgmFile);
        const headers = { 'Content-Type': 'audio/mpeg', 'Accept-Ranges': 'bytes' };
        if (!req.headers.range) {
          res.writeHead(200, { ...headers, 'Content-Length': body.length });
          return res.end(body);
        }
        const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
        const start = range?.[1] ? Number(range[1]) : Math.max(0, body.length - Number(range?.[2]));
        const end = range?.[1] && range[2] ? Math.min(Number(range[2]), body.length - 1) : body.length - 1;
        if (!range || !(start <= end) || start >= body.length) {
          res.writeHead(416, { ...headers, 'Content-Range': 'bytes */' + body.length });
          return res.end();
        }
        const slice = body.subarray(start, end + 1);
        res.writeHead(206, { ...headers, 'Content-Length': slice.length, 'Content-Range': `bytes ${start}-${end}/${body.length}` });
        return res.end(slice);
      }
      const sprite = url.pathname.match(/^\/sprites\/([^/]+)\.webp$/)?.[1];
      if (req.method === 'GET' && sprite && Object.hasOwn(roster, sprite)) {
        const body = await readFile(join(spriteDirectory, sprite + '.webp'));
        res.writeHead(200, { 'Content-Type': 'image/webp' });
        return res.end(body);
      }
      if (!['/api/create', '/api/join', '/api/state', '/api/guess'].includes(url.pathname)) {
        return reply(404, { error: 'ページが見つかりません。' });
      }
      const isState = url.pathname === '/api/state';
      if (req.method !== (isState ? 'GET' : 'POST')) return reply(405, { error: '操作をやり直してください。' });
      const data = isState ? Object.fromEntries(url.searchParams) : await readJson(req);
      if (!data || typeof data !== 'object') return reply(400, { error: '入力を確認してください。' });
      for (const [key, room] of rooms) {
        if (Date.now() - room.updatedAt > idleLimit) rooms.delete(key);
      }
      const isCreate = url.pathname === '/api/create';
      const isJoin = url.pathname === '/api/join';
      if ((isCreate || isJoin) && (typeof data.hero !== 'string' || !Object.hasOwn(roster, data.hero))) {
        return reply(400, { error: 'URモンスターを選んでください。' });
      }
      const digits = data.digits ?? 3;
      if ((isCreate || isJoin) && !numbers.has(digits)) {
        return reply(400, { error: '3桁か4桁を選んでください。' });
      }
      if (isCreate) {
        const mode = data.mode ?? 'friend';
        if (mode !== 'friend' && mode !== 'cpu') return reply(400, { error: '対戦方法を選んでください。' });
        if (!validNumber(data.secret, digits)) {
          return reply(400, { error: `異なる数字を${digits}つ使って、ひみつの数を決めてください。` });
        }
        if (rooms.size >= 100) return reply(503, { error: '対戦部屋が混み合っています。' });
        let code;
        do { code = randomBytes(4).toString('hex').toUpperCase(); } while (rooms.has(code));
        const player = playerFor(data.hero, data.secret);
        const players = [player];
        if (mode === 'cpu') {
          const opponents = Object.keys(roster).filter(hero => hero !== player.hero);
          const opponent = playerFor(pick(opponents), pick(numbers.get(digits)));
          opponent.token = null;
          players.push(opponent);
        }
        const room = { code, mode, digits, players, turn: 1, history: [], result: null, updatedAt: Date.now() };
        rooms.set(code, room);
        return reply(201, { token: player.token, room: roomView(room, 0) });
      }
      const room = rooms.get(data.code);
      if (!room) return reply(404, { error: '部屋が見つかりません。合言葉を確認してください。' });
      if (isJoin) {
        if (room.mode === 'cpu') return reply(404, { error: '友だちとの対戦部屋が見つかりません。' });
        if (room.players.length !== 1) return reply(409, { error: 'この部屋にはすでに2人います。' });
        if (digits !== room.digits) {
          return reply(409, { error: `この部屋は${room.digits}桁勝負です。桁数を合わせてください。` });
        }
        if (!validNumber(data.secret, digits)) {
          return reply(400, { error: `異なる数字を${digits}つ使って、ひみつの数を決めてください。` });
        }
        const player = playerFor(data.hero, data.secret);
        room.players.push(player);
        room.updatedAt = Date.now();
        return reply(200, { token: player.token, room: roomView(room, 1) });
      }
      const token = req.headers.authorization;
      const seat = room.players.findIndex(player => player.token && token === 'Bearer ' + player.token);
      if (seat < 0) return reply(403, { error: 'この部屋の参加情報がありません。' });
      if (isState) return reply(200, { room: roomView(room, seat) });
      const player = room.players[seat];
      if (room.players.length !== 2 || room.result !== null || data.turn !== room.turn || player.guess || player.skill) {
        return reply(409, { error: '今のターンには送れません。画面の更新を待ってください。' });
      }
      if (data.skill == null && !validNumber(data.guess, room.digits)) {
        return reply(400, { error: `0〜9から異なる数字を${room.digits}つ選んで、予想してください。` });
      }
      if (data.skill != null) {
        if (data.guess != null) return reply(400, { error: 'スキルを使う回は予想を送れません。' });
        const { name, secret, digit } = data.skill;
        if (player.usedSkill) {
          return reply(400, { error: 'スキルは1試合に1つだけ使えます。' });
        }
        if (!player.skills.includes(name)) {
          return reply(400, { error: 'この対戦で引いたスキルを使ってください。' });
        }
        if (name === 'reveal' && !canReveal(room, seat)) {
          return reply(400, { error: '数字オープンは、直前にブロックが見えたときに使えます。' });
        }
        if (name === 'hide' && room.turn >= 12) {
          return reply(400, { error: '次の回がないため、ブロックかくしは使えません。' });
        }
        if (name === 'check' && (typeof digit !== 'string' || digit.length !== 1 || !/^[0-9]$/.test(digit))) {
          return reply(400, { error: '調べる数字を0〜9から1つ選んでください。' });
        }
        if (name === 'mark' && !canMark(room, seat)) {
          return reply(400, { error: 'ヒットの目印は、直前の予想にヒットがあったときに使えます。' });
        }
        if (name === 'change' && (!validNumber(secret, room.digits) || [...secret].filter((digit, i) => digit !== player.secret[i]).length !== 1)) {
          return reply(400, { error: '同じ数字を使わず、自分の数を1か所だけ変えてください。' });
        }
        if (name === 'swap' && (!validNumber(secret, room.digits) || !isSwap(player.secret, secret))) {
          return reply(400, { error: '今の暗号の数字を2つ選び、場所だけを入れ替えてください。' });
        }
        player.skill = { name, secret, digit };
      }
      if (room.mode === 'cpu') {
        const cpu = room.players[1];
        cpu.skill = chooseCpuSkill(room, cpu);
        if (!cpu.skill) cpu.guess = chooseCpuGuess(room);
      }
      player.guess = player.skill ? null : data.guess;
      room.updatedAt = Date.now();
      if (room.players.every(p => p.guess || p.skill)) resolveTurn(room);
      return reply(200, { room: roomView(room, seat) });
    } catch (error) {
      const bad = error instanceof SyntaxError || error.message === '入力が大きすぎます。';
      if (!bad) console.error(error);
      reply(bad ? 400 : 500, { error: bad ? '入力を確認してください。' : '通信に失敗しました。' });
    }
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const host = process.env.ARENA_HOST || '127.0.0.1';
  const port = Number(process.env.ARENA_PORT || 4318);
  createArenaServer().listen(port, host, () => console.log('Monster Arena: http://' + host + ':' + port));
}
