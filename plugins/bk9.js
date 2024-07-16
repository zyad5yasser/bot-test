import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
import fs from 'fs';
import uploader from '../lib/uploadImage.js';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  const BK9 = 'https://api.bk9.site';

  let fakecontact = { 
    key: { 
      participants: '0@s.whatsapp.net', 
      remoteJid: 'status@broadcast', 
      fromMe: false, 
      id: '𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡' 
    }, 
    message: { 
      contactMessage: { 
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
      } 
    }, 
    participant:'201508628077@s.whatsapp.net' 
  };

  if (command === 'تخيل' || command ==='ارسم') {
    if (!text) throw '「 خــطــأ!! 」\nفــيـن الــنــص عــشــان اتــخـيــلو 🗿';
   m.react ('⌛'); 
    await conn.sendMessage(m.chat, { text: 'انــتــظـࢪ قــلـيـلـا حـتـى اتــخـيــل...' }, { quoted: fakecontact });
if (!text && m.quoted && m.quoted.text) text = m.quoted.text;

const datas = global;
let lange = datas.db.data.users[m.sender].language;

let lang

if (lange === 'en') {

lang = lange;

} else {

lang = 'en';

}
    const result2 = await translate(text, { to: lang, autoCorrect: true });
    
  // await conn.sendMessage(m.chat, { text: result.text}, { quoted: m });
    try {
      const response = await fetch(`${BK9}/ai/photoleap?q=${encodeURIComponent(result2.text)}`);
      const result = await response.json();

      if (result.status) {
        await conn.sendButton(
          m.chat,
          `لــقــد تــخــيــلــت : 「 ${text} 」`, 
          '𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡',
          result.BK9,
          [['「 صــوره آخــرى 」', `${usedPrefix + command} ${text}`]],null,[['「 قــنــاتــي 」','https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a']],m);
        m.react ('✅'); 
      }
    } catch (error) {
      throw 'اســف لـم اســتـطـيـع تــخـيـل ذالــگ 🗿';
    }
  } else if (command === 'كانيكي' || command ==='ناغي') {
    if (!text) throw 'خــطــأ!! 」\n ادخــل نــص لـكـي ارد عـلـيـك';

    try {
      conn.sendPresenceUpdate('composing', m.chat);
      const response = await fetch(`${BK9}/ai/gpt4?q=${encodeURIComponent(text)}`);
      const result = await response.json();

      if (result.status && result.BK9) {
        conn.sendMessage(m.chat,{text: result.BK9 +'\n\n> 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡'}, { quoted: fakecontact });
      } else {
        throw 'اســف لـم اجــد اجــابــه 🙂';
      }
    } catch (error) {
      throw 'اســف لـم اجــد اجــابــه 🙂';
    }
  } else if (command ==='انظر') {
    let quotedMessage = m.quoted ? m.quoted : m;
    let mediaType = (quotedMessage.msg || quotedMessage).mimetype || quotedMessage.mediaType || '';

    if (/image/g.test(mediaType) && !/webp/g.test(mediaType)) {
      conn.sendMessage (m.chat,{text:'انــتــظــر ســوف آرى... '}, { quoted: fakecontact }); 
      try {
        let imageBuffer = await quotedMessage.download();
        let uploadedImageUrl = await uploader(imageBuffer);
        let response = await fetch(`${BK9}/ai/geminiimg?url=${uploadedImageUrl}&q=${text}`);
        let result = await response.json();

        conn.sendMessage(m.chat, { text: result.BK9 +'\n\n> 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡' }, { quoted: fakecontact });
      } catch (error) {
        throw 'اســف لـم اجــد اجــابــه 🙂';
      }
    } else {
      throw '「 خــطــأ!! 」\n ايــن الــصــوره الــتـي اࢪاهــا';
    }
  }
};

handler.command = ['تخيل','ناغي', 'انظر','كانيكي','ارسم'];
handler.tags = ['ai'];
export default handler;
