import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    return conn.sendMessage(m.chat, {
	text: "⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢\n> *مرحبًا، أنا خدمة `Gemini Ai`، خدمة قادرة على كتابة المقالات وكتابة الاكواد البرمجية، على سبيل المثال:*\n\n- .جيمني `كتابة مقال عن الذكاء الاصطناعي`\n⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢", 
  contextInfo: {
	externalAdReply: {
	title: 'بوت زيزو',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg',
	sourceUrl: 'https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
  }

  try {

    const apiUrl = `https://aemt.me/gemini?text=${text}`;
    const response = await fetch(apiUrl);
    const res = await response.json();

    if (res.result.length > 0) {
      conn.sendMessage(m.chat, {
	text: res.result, 
  contextInfo: {
	externalAdReply: {
	title: 'بوت زيزو',
	body: 'قسم الذكاء الاصطناعي',
	thumbnailUrl: 'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg',
	sourceUrl: 'https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
    } else {
      throw '⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢\n> خطأ : لم يتم العثور على الإجابة، يرجى المحاولة مجددًا.\n⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢';
    }

  } catch (error) {
    console.error(error);
    throw '⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢\n> خطأ : انتهت مدة الجلسة، يرجى المحاولة لاحقًا.\n⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢';
  }
};

handler.command = ['gi', 'gemini', 'جيمني','جيميني'];
handler.help = ['gemini'];
handler.tags = ['أدوات'];
export default handler;
