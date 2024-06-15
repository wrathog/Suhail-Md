const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254111249639" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_57_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMixcbiAgICAgICAgMTkwLFxuICAgICAgICAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib09iOVhpVkJqM01QZGhkYjZjakRpWXp3Unc3dlhaNnorVjYwUW1nWFE1Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY3BIU1Y0cFhUTFNpUFBHZE5qakZsUVwiLFxuICBcInBob25lSWRcIjogXCI5ZTIzMTRiZi1mNDRhLTQ5MmQtYjE3Mi1hNGQyNDAyYTEwMWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxOTgsXG4gICAgICAxNTEsXG4gICAgICAxMzAsXG4gICAgICAyMzEsXG4gICAgICA5LFxuICAgICAgOTEsXG4gICAgICAwLFxuICAgICAgMTc3LFxuICAgICAgNDksXG4gICAgICA1OSxcbiAgICAgIDIyOSxcbiAgICAgIDIxNSxcbiAgICAgIDExNyxcbiAgICAgIDU5LFxuICAgICAgMTc4LFxuICAgICAgMTgxLFxuICAgICAgMTM2LFxuICAgICAgMjUsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMjE0LFxuICAgICAgODksXG4gICAgICAxMDksXG4gICAgICAxNTcsXG4gICAgICAxMzIsXG4gICAgICA2OSxcbiAgICAgIDc0LFxuICAgICAgMzQsXG4gICAgICAyNTUsXG4gICAgICAxOTAsXG4gICAgICAxMzMsXG4gICAgICAxMSxcbiAgICAgIDEwMixcbiAgICAgIDIwNSxcbiAgICAgIDMyLFxuICAgICAgODMsXG4gICAgICAxMjMsXG4gICAgICAyMDAsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFo2RVhXWkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExMTI0OTYzOToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE4MTg4NjY3MTgzMjQ1OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEMytBUVFtT1Mzc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiamRNdUQ3K3ROT2pCL2l6eXRPbzF6ckk4REVFVElQMWFaNjlJR3pWNmZCaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBOGVqeVlIck5iM05ueHlkeWZyZkRTUjlQSXNOOWExeXBkZ0M1SFVxQUUxS21xTHpDdXdOZWx5TnJoTGlBK3NwRmY4ZjZvdXlaR01qUktmazFBYzNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHQ3FMZDQ1WjgxTitCb3EvQys5cDQxbHhpb1hRZndYZTQ2c0hlMWQ5QS8wb0E1L2h1T3U4bFE2NXZUcjk0TGwzOXVBa21ETTVPMUZLcGJGb0pMZmNCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTEyNDk2Mzk6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg0ODE0Mzhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
