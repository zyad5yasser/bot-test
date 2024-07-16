import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/zyad5yasser/bot-test/master/src/JSON/${command}.json`)).data;
  const haha = await res[Math.floor(res.length * Math.random())];
    await conn.sendMessage(m.chat, {audio: {url: haha}, fileName: `error.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
//conn.sendButton(m.chat, `_${command}_`.trim(),'𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡', [['صـوت آخـر', `${usedPrefix + command}`]], m)
};
handler.command = handler.help = ['صوت-مادارا','صوت-ايرين','صوت-سكونا']
  handler.tags = ['anime'];
export default handler;
