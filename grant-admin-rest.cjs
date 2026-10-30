const {execFileSync}=require('node:child_process');
const project='maths-adventure-f4d17',uid='CkdCjxLDCwN7gI8M25SXQ8r7LKB2';
(async()=>{
const token=execFileSync('powershell.exe',['-NoProfile','-Command',"& 'C:/Users/user/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin/gcloud.ps1' auth print-access-token"],{encoding:'utf8',windowsHide:true,stdio:['ignore','pipe','pipe']}).trim();
const call=async(method,body)=>{const r=await fetch(`https://identitytoolkit.googleapis.com/v1/projects/${project}/accounts:${method}`,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json','x-goog-user-project':project},body:JSON.stringify(body)});const data=await r.json();if(!r.ok)throw Error(data.error?.message||r.status);return data;};
const u=(await call('lookup',{localId:[uid]})).users?.[0];if(!u||u.disabled||!u.emailVerified||!u.providerUserInfo?.some(p=>p.providerId==='google.com'))throw Error('Enabled verified Google user required');
console.log('Verified account',u.localId);
if(!process.argv.includes('--apply'))return;
const claims={...JSON.parse(u.customAttributes||'{}'),analyticsAdmin:true};
const fs=require('node:fs');fs.writeFileSync('docs/history/analytics-admin-claims-before.json',JSON.stringify({uid,claims:JSON.parse(u.customAttributes||'{}')},null,2),{flag:'wx'});
await call('update',{localId:uid,customAttributes:JSON.stringify(claims)});
const check=(await call('lookup',{localId:[uid]})).users[0];if(!JSON.parse(check.customAttributes||'{}').analyticsAdmin)throw Error('Verification failed');console.log('analyticsAdmin saved and verified; existing claims preserved.');
})().catch(e=>{console.error(e.message);process.exitCode=1;});
