import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {


if (!text) return conn.sendMessage(m.chat, {
	text: "◉─━════════════━─◉\n> *مرحبًا، أنا خدمة `Dex Ai`، خدمة ذكاء اصطناعي قادرة على برمجة الأكواد بجميع اللغات وحل مشاكل البرمجة وكتابة المقالات، على سبيل المثال:*\n\n- .ديكس `كتابة مقال عن الذكاء الاصطناعي`\n◉─━════════════━─◉",
	contextInfo: {
	externalAdReply: {
	title: ' بوت زيزو ',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg',
	sourceUrl: 'https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
conn.sendMessage(m.chat, {
	text: waitt, 
    contextInfo: {
	externalAdReply: {
	title: ' بوت زيزو ',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg',
	sourceUrl: 'https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
try {
// Contoh penggunaan
let result = await CleanDx(text)
conn.sendMessage(m.chat, {
	text:result, 
  contextInfo: {
	externalAdReply: {
	title: 'بـوت زيـزو',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg',
	sourceUrl: 'https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
} catch (e) {
await m.reply(`◉─━════════════━─◉\n> خطأ : انتهت مدة الجلسة، يرجى المحاولة لاحقًا.\n◉─━════════════━─◉`)
}
}
handler.help = ["cleandx"]
handler.tags = ["internet"]
handler.command = /^(dx|ديكس)$/i
export default handler

/* New Line */
async function CleanDx(your_qus) {
  let linkaiList = [];
  let linkaiId = generateRandomString(21);
  let Baseurl = "https://vipcleandx.xyz/";

  console.log(formatTime());
  linkaiList.push({
    "content": your_qus,
    "role": "user",
    "nickname": "",
    "time": formatTime(),
    "isMe": true
  });
  linkaiList.push({
    "content": "正在思考中...",
    "role": "assistant",
    "nickname": "AI",
    "time": formatTime(),
    "isMe": false
  });
  if (linkaiList.length > 10) {
    linkaiList = linkaiList.shift();
  }

 let response = await fetch(Baseurl + "v1/chat/gpt/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": generateRandomIP(),
      "Referer": Baseurl,
      "accept": "application/json, text/plain, */*"
    },
    body: JSON.stringify({
      "list": linkaiList,
      "id": linkaiId,
      "title": your_qus,
      "prompt": "",
      "temperature": 0.5,
      "models": "0",
      "continuous": true
    })
  })
  const data = await response.text();
    
    return data;
}

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

function generateRandomIP() {
  const ipParts = [];
  for (let i = 0; i < 4; i++) {
    const randomPart = Math.floor(Math.random() * 256);
    ipParts.push(randomPart);
  }
  return ipParts.join('.');
}

function formatTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
