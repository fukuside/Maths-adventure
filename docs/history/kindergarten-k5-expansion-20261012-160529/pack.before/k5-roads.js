export const roadTypes=["straight","bend","curve","river","river-bend","maze-top","maze-bottom"];
export function buildRoadScene(route,blocked=false){
  if(!roadTypes.includes(route))throw new Error(`Unknown road: ${route}`);
  const maze=route.startsWith("maze"),river=route.startsWith("river");
  const raised=route==="bend"||route==="river-bend";
  const nodes=maze?{S:[20,60],J:[65,60],U:[65,25],V:[155,25],K:[155,60],T:[205,60],D:[65,95],E:[155,95]}
    :{S:[20,60],J:[75,raised?35:60],K:[145,raised?35:60],T:[205,60]};
  if(route==="maze-bottom")for(const node of Object.values(nodes))node[1]=120-node[1];
  const edges=maze?[["S","J"],["J","U"],["V","K"],["K","T"],["J","D"],["K","E"]]:[["S","J"],["K","T"]];
  if(!blocked)edges.push(maze?["U","V"]:["J","K"]);
  return {route,nodes,edges,start:"S",goal:"T",river,maze,blocked};
}
export function canReachHome(scene){
  const visited=new Set([scene.start]),todo=[scene.start];
  while(todo.length){const node=todo.pop();if(node===scene.goal)return true;for(const [a,b] of scene.edges){const next=a===node?b:b===node?a:null;if(next&&!visited.has(next)){visited.add(next);todo.push(next);}}}
  return false;
}
