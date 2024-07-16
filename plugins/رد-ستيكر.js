import { Sticker, StickerTypes } from 'wa-sticker-formatter';
import fetch from 'node-fetch';

let handler = m => m;

handler.all = async function (m, conn) {
    let img =["https://telegra.ph/file/57911e3e331dd31b4d565.png",
              "https://telegra.ph/file/732b86b3159728d2a9c1f.png",
             "https://telegra.ph/file/d9f64f2f785720606f720.png",
             "https://telegra.ph/file/c42776b402bb9fca8ca04.png",
             "https://telegra.ph/file/d870091e1b346afd2d30f.png",
             "https://telegra.ph/file/f7799a1459cac6eb1346c.png",
             "https://telegra.ph/file/4e84292a76a07ab824228.png",
             "https://telegra.ph/file/0001a337cfcf778d4736c.png"];
    let num = "201508628077";
    let img1 = await img[Math.floor(img.length * Math.random())];
    if (m.mentionedJid && m.mentionedJid[0]) {
        let phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
            // تحميل الصورة
            let response = await fetch(img1);
            let buffer = await response.buffer();

            // تحويل الصورة إلى ملصق
            let sticker = new Sticker(buffer, {
                pack: 'Sticker Pack',
                author: 'Your Name',
                type: StickerTypes.FULL, // يمكنك استخدام StickerTypes.CROP لتنسيق مختلف
                quality: 50 // جودة الملصق
            });

            let stickerBuffer = await sticker.toBuffer();

            // إرسال الملصق
            return this.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
        }
    } else {
        return;
    }
}

export default handler;
