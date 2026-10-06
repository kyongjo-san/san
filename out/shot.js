const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage({viewport:{width:1240,height:1754}});
await p.goto('file:///home/user/san/out/infographic.html');await p.screenshot({path:'/home/user/san/out/infographic.png'});await b.close()})()
