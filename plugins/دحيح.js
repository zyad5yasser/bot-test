import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return conn.sendMessage(m.chat, {
	text: "أنا نموذج لغة اصطناعية معتمد على تكنولوجيا GPT-3.5 Turbo، مصمم لمساعدتك في الحصول على المعلومات والإجابة على أسئلتك. كيف يمكنني مساعدتك اليوم؟", 
  contextInfo: {
	externalAdReply: {
	title: 'بوت زيزو',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg',
	sourceUrl: 'https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
  try {
    var apii = await fetch(`https://zoro-api-zoro-bot-5b28aebf.koyeb.app/api/turbo?text=${encodeURIComponent(text)}`);
    var res = await apii.json();
let view = res.result;

    if (res.result && text.trim().length > 0) {
      await conn.sendMessage(m.chat, {
	text: view, 
        contextInfo: {
	externalAdReply: {
	title: '𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg',
	sourceUrl: 'https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})

    } else if (res.result) {
      await conn.sendFile(m.chat, 'https://telegra.ph/file/34bd1de01d59fb18833cc.jpg', res.result, m);
    } else {
      throw '> *خطأ ⚠️*';
    }

  } catch (error) {
    console.error(error);
    throw '> *خطأ في Api 🗿*';
  }
};

handler.command = ['بوت','دحيح'];
handler.help = ['blackbox'];
handler.tags = ['أدوات'];
export default handler;
