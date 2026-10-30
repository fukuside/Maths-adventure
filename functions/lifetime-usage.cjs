// Account counts only; never return identity or contact details to the dashboard.
async function countLifetime(auth){
 let pageToken,total=0,excludedAdmins=0,scanned=0;
 do{
  const page=await auth.listUsers(1000,pageToken);
  scanned+=page.users.length;
  if(scanned>20000)throw new Error('lifetime-count-limit');
  for(const user of page.users){
   if(user.customClaims?.analyticsAdmin===true){excludedAdmins++;continue;}
   if(user.metadata?.lastSignInTime)total++;
  }
  pageToken=page.pageToken;
 }while(pageToken);
 return {accounts:total,excludedAdmins,asOf:Date.now(),source:'firebase-auth',scope:'current-retained-accounts'};
}
module.exports={countLifetime};
