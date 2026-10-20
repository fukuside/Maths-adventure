export const SURVEY_URL='https://forms.gle/ShTYzgLvBHxwnjvD7';
const SNOOZE_KEY='maths-adventure.survey-snooze-until';
export function surveyLink(){return '<a class="landing-contact survey-permanent-link" href="'+SURVEY_URL+'" target="_blank" rel="noopener noreferrer">📝 保護者の方へ｜使用感アンケート</a>';}
export function isSurveySnoozed(storage,now=Date.now()){try{const until=Number(storage.getItem(SNOOZE_KEY));return Number.isFinite(until)&&until>now;}catch{return false;}}
export function snoozeSurvey(storage,now=Date.now()){try{storage.setItem(SNOOZE_KEY,String(now+7*24*60*60*1000));}catch{}}
export function surveyInvitation(storage,now=Date.now()){if(isSurveySnoozed(storage,now))return '';return '<aside class="survey-invitation" aria-label="保護者向けアンケート"><strong>保護者の方へ</strong><p>楽しんでいたところ、操作で迷ったところなど、率直なご意見を教えてください。回答は任意です。</p><div class="survey-invitation-actions"><a class="button secondary" href="'+SURVEY_URL+'" target="_blank" rel="noopener noreferrer">使用感アンケートに答える ↗</a><button class="button secondary" data-action="survey-later">あとで</button></div></aside>';}
