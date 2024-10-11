//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "255673750170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxJdm04M05MV2prcDNNZ1dGNTNReTk4VmcvdkJuLzlDRm8xU1Uwbjhrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1o4bHE3cnRPUVlWaTY2d0NWMGszeFB2b2czd0VuUkt6dkE1NlIrQjVFRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TjNocldUNjlza2FpU0FKR3VjY3dFdjBPVUJLZnZERGN2QUxvbmpHU1hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhZ0UrZ3VNVFl6bFlrTVNBd29xV3I2RjZra2pGTjdIYXRxL1lvSUZPYlF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PY2FBelBOVmtiTEtmSUU3OGJFRnczb0RwRVRqc2RJS0ZVSGE5aVJSWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9vZTU1SnVQdzN1U3c0alV0YU1xa1JWYU1TRkp1Mkwwc1VVTGJBdlNJREk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0YxT0VkLytscHFqM1lVR2lvK3cwNFdGc013aXlzZCsyOVVGUTdNVWlWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialY0MFVmVzc3MDZDQzhud2tDSFhzd0V4dkFUb0hLUWZCNWJoa09kNUpqTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRYclo0MHpkNHdlbEVWYXhSdDdnT0lHWVZVdG9NYVpyK0RkczZ1WGxyZEdnRWNpZnhodmFZQ1dLbld0RHlXL094bE4wb2d1N3NvL3BLbndXYlovMmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6InNnTWJ4TzdIdmNURVR3eDlGRzJvSUhYZTVNTXBCNldVbi9XUmgweXFtVFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEzNzkyMDYyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQjcxOTQwRDEyQTZDMEMzQTM1OUE5OEFDQkVBNjVBMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4NjIzNjI3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTM3OTIwNjIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM4MDczQjBEMEU1MTM5OTkzNjZFQzlBMDVGRkQyQzRBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg2MjM2Mjh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndYUXd3cTBnVERpYkd6Vm5IZUJKTWciLCJwaG9uZUlkIjoiZDI0M2M5M2EtNjRmMC00YjgwLThiMjktZGIyZDU2MWY1MzNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik93TXFCWnRzbFcvR0dBMWdsQUNCM3BSMGVBWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMLytkVC8vTDlLd1cySVU5cUZaekk2NXVROFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVFXOUhUNkMiLCJtZSI6eyJpZCI6IjIzNDkxMzc5MjA2MjI6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJlbGl6YWJldGhvcGV5ZW1pYXllbmkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A2WmlOVUVFUHJub3JnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNqNzlzbisxYktZeXVIK1dFMnB1UDlsMjJrbU4remc5WHFQVUFXS3Fzelk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVTcjNibWxzaFVoRmRBZnczdVFXaXBUa0J1L0hDd21nT0xBTTBOMzI1YUlSQXlHa1ZLT3lyaGVQSlQzbHZZcjNVMWc5SHM2MEJRSEJxTTIxWXNXUUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvaEhyOUdGRGxobkw1NVhWQzBEck5wRGw3Z2J3cGkzcDUvVy9vTGZtcVhEdmtaM1QxNTdOdjlNbkJRMklUYnl1WFJZdCtsSVcrSUZGZ3BtSGJWVzhpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzc5MjA2MjI6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiSSsvYkovdFd5bU1yaC9saE5xYmovWmR0cEpqZnM0UFY2ajFBRmlxck0yIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NjIzNjI0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUt2YyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
