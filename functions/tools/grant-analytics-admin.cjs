const {execFileSync}=require('node:child_process');
const {initializeApp}=require('firebase-admin/app');
const {getAuth}=require('firebase-admin/auth');
const uid=process.argv[2];
if(!uid||! /^[A-Za-z0-9_-]{20,128}$/.test(uid))throw Error('UID required');
const projectId='maths-adventure-f4d17';
const gcloud='C:/Users/user/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin/gcloud.cmd';
// Use the existing local administrator login; never print or persist its token.
initializeApp({projectId,credential:{getAccessToken:async()=>({access_token:execFileSync('powershell.exe',['-NoProfile','-Command', "& 'C:/Users/user/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin/gcloud.ps1' auth print-access-token"],{encoding:'utf8',windowsHide:true,stdio:['ignore','pipe','pipe']}).trim(),expires_in:300})}});
(async()=>{const auth=getAuth(),u=await auth.getUser(uid);if(u.disabled||!u.emailVerified||!u.providerData.some(x=>x.providerId==='google.com'))throw Error('Enabled verified Google account required');
console.log('Verified Google account:',u.uid,'analyticsAdmin:',u.customClaims?.analyticsAdmin===true);
if(!process.argv.includes('--apply')){console.log('Read-only check; no permissions changed.');return;}
await auth.setCustomUserClaims(uid,{...(u.customClaims||{}),analyticsAdmin:true});
const updated=await auth.getUser(uid);if(updated.customClaims?.analyticsAdmin!==true)throw Error('Verification failed');console.log('analyticsAdmin permission saved and verified. Existing claims preserved.');
})().catch(e=>{console.error(e.code||'setup-error',e.message);process.exitCode=1;});

