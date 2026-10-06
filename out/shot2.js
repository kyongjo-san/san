const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage({deviceScaleFactor:2,viewport:{width:650,height:920}});
await p.goto('file:///home/user/san/out/infographic2.html');await p.screenshot({path:'/home/user/san/out/infographic2.png'});await b.close()})()
