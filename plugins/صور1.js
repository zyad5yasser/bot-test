import fetch from 'node-fetch';
import cheerio from 'cheerio';

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*يمكنك تحميل صور ذات جودة عالية وممتازة من منصة Pinterest عبر كتابة الأمر متبوعًا باسم الصورة التي تريد تحميلها مثال*\n\n*${usedPrefix + command} صورة الكون*`;
  m.react('⌛');

  try {
    const hasil = await pinterest(text);
    let gambarUrls = hasil.slice(0, 20); // اختيار 20 صورة أولية

    // خلط الصور عشوائياً
    for (let i = gambarUrls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gambarUrls[i], gambarUrls[j]] = [gambarUrls[j], gambarUrls[i]];
    }

    // إعداد قائمة الرسائل
    const messages = [];
    for (let i = 0; i < 10; i++) {
      let imageUrl = gambarUrls[i];
      let imageRes = await fetch(imageUrl);
      let imageBuffer = await imageRes.buffer();

      messages.push([
        `صورة ${i + 1}`,
        '𝒁𝒆𝒛𝒐 𝑩𝒐𝒕',
        imageBuffer,
[['','']],[],[['قناتي','https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a']] 

      ]);

      // إضافة تأخير لمنع إرسال الصور بسرعة كبيرة
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // إرسال الصور كـ Carousel
    await conn.sendCarousel(m.chat, 'تم العثور على نتائج', '𝒁𝒆𝒛𝒐 𝑩𝒐𝒕', 'IMAGES', messages, m);
    m.react('✅') 
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, 'حدث خطأ أثناء تنزيل الصورة.', m);
    m.react('❌')
  }
};

handler.help = ['pinterest3'];
handler.tags = ['downloader'];
handler.command = /^صور$/i;
handler.diamond = true;
handler.limit = 3;

export default handler;

async function pinterest(text) {
  try {
    const response = await fetch(`https://id.pinterest.com/search/pins/?autologin=true&q=${encodeURIComponent(text)}`, {
      headers: {
        "cookie": "_auth=1; _b=\"AXOtdcLOEbxD+qMFO7SaKFUCRcmtAznLCZY9V3z9tcTqWH7bPo637K4f9xlJCfn3rl4=\"; _pinterest_sess=TWc9PSZWcnpkblM5U1pkNkZ0dzZ6NUc5WDZqZEpGd2pVY3A0Y2VJOGg0a0J0c2JFWVpQalhWeG5iTTRJTmI5R08zZVNhRUZ4SmsvMG1CbjBWUWpLWVFDcWNnNUhYL3NHT1EvN3RBMkFYVUU0T0dIRldqVVBrenVpbGo5Q1lONHRlMzBxQTBjRGFSZnFBcTdDQVgrWVJwM0JtN3VRNEQyeUpsdDYreXpYTktRVjlxb0xNanBodUR1VFN4c2JUek1DajJXbTVuLzNCUDVwMmRlZW5VZVpBeFQ5ZC9oc2RnTGpEMmg4M0Y2N2RJeVo2aGNBYllUYjRnM05VeERzZXVRUVVYNnNyMGpBNUdmQ1dmM2s2M0txUHRuZTBHVFJEMEE1SnIyY2FTTm9DUEVTeWxKb3V0SW13bkV3TldyOUdrdUZaWGpzWmdaT0JlVnhWb29xWTZOTnNVM1NQSzViMkFUTjBpRitRRVMxaUFxMEJqell1bVduTDJid2l3a012RUgxQWhZT1M3STViSVkxV0dSb1p0NTBYcXlqRU5nPT0ma25kRitQYjZJNTVPb2tyVnVxSWlleEdTTkFRPQ==; _ir=0"
      }
    });
    const data = await response.text();
    const $ = cheerio.load(data);
    const result = [];
    const hasil = [];
    $('div > a').get().map(b => {
      const link = $(b).find('img').attr('src');
      result.push(link);
    });
    result.forEach(v => {
      if (v && v.includes('236')) {
        hasil.push(v.replace(/236/g, '736'));
      }
    });
    hasil.shift();
    return hasil;
  } catch (error) {
    throw error;
  }
}
