import axios from 'axios';
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
const handler = async (m, { command, conn, usedPrefix }) => {
const row = [
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ اكـيـرا ❛❛", description: '', id: ".اكيرا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ اكيما ❛❛", description: '', id: ".اكيما" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ انــا ❛❛", description: '', id: ".انا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ اسـونـا ❛❛", description: '', id: ".اسونا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ Ayuzawa ❛❛", description: '', id: ".ayuzawa" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ بـوروتـو ❛❛", description: '', id: ".بوروتو" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ شـيـهـو ❛❛", description: '', id: ".شيهو" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ شـيـتـوجـو ❛❛", description: '', id: ".شيتوجو" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ ديـادرا ❛❛", description: '', id: ".ديادرا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ ايرازا ❛❛", description: '', id: ".ايرازا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ الـيـنـا ❛❛", description: '', id: ".الينا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ اـيـبـا ❛❛", description: '', id: ".ايبا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ ايـمـيـلـيـا ❛❛", description: '', id: ".ايميليا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ Hestia ❛❛", description: '', id: ".hestia" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ هـيـنـاتـا ❛❛", description: '', id: ".هيناتا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ Inori ❛❛", description: '', id: ".inori" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ Isuzu ❛❛", description: '', id: ".isuzu" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ ايتاشي ❛❛", description: '', id: ".ايتاشي" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ Itori ❛❛", description: '', id: ".itori" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ Kaga ❛❛", description: '', id: ".kaga" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ كاجورا ❛❛", description: '', id: ".كاجورا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ Kaori ❛❛", description: '', id: ".kaori" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ كـانـيـكـي ❛❛", description: '', id: ".كانيكي" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ كـوتـوري ❛❛", description: '', id: ".كوتوري" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ Kurumi ❛❛", description: '', id: ".kurumi" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ مـادرا ❛❛", description: '', id: ".مادرا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ مـيـكاسـا ❛❛", description: '', id: ".ميكاسا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ ميـكـو ❛❛", description: '', id: ".ميكو" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ ميناتو ❛❛", description: '', id: ".ميناتو" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ نـاروتـو ❛❛", description: '', id: ".ناروتو" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ نـيـزوكـو ❛❛", description: '', id: ".نيزوكو" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ Sagiri ❛❛", description: '', id: ".sagiri" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ سـاسـكـي ❛❛", description: '', id: ".ساسكي" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ سـاكـورا ❛❛", description: '', id: ".ساكورا" }
]; 
 const row2 = [
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ نـيـزوكو ❛❛", description: '', id: ".ايديت-نيزوكو" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ سـاسـكـي ❛❛", description: '', id: ".ايديت-ساسكي" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ مـادارا ❛❛", description: '', id: ".ايديت-مادارا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ گـانـگـي ❛❛", description: '', id: ".ايديت-كانكي" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ مـيـگــاسـا ❛❛", description: '', id: ".ايديت-ميكاسا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ هـنـاتـا ❛❛", description: '', id:".ايديت-هيناتا" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ ايـتـاتـشـي ❛❛", description: '', id: ".ايديت-ايتاتشي" },
]; 
  const menu = `
 ┓───⌈قـسـم الـانــمـي⌋─────┏
 ┃ 🐦┇↜『 اڪـيـرا 』
 ┃ 🧏🏻‍♀️┇↜『 اڪـيـمـا 』
 ┃🔥 ┇↜『 اﻧــا 』
 ┃💥 ┇↜『 سـاڪـوࢪا 』
 ┃💫 ┇↜『 سـاسـكـي 』
 ┃👁️ ┇↜『 نـﯾـزوڪـو 』
 ┃🍻 ┇↜『 نـاࢪوتو 』
 ┃💠 ┇↜『 ﻤـيـنـاتـو 』
 ┃🩸 ┇↜『 مـيـڪـو 』
 ┃💍 ┇↜『 مـيـگـاسـا 』
 ┃💥 ┇↜『 مـيـگـاسـا 』
 ┃🌝 ┇↜『 مـادࢪا 』
 ┃🐚 ┇↜『 گـوتـوࢪي 』
 ┃🌻 ┇↜『 اﯾـبـا 』
 ┃🍴 ┇↜『 اﯾـمـيـلـيـا 』
 ┃🍷 ┇↜『 ه‍ـيـنـاتـــا 』
 ┃👑 ┇↜『 ايـتـاشـي 』
 ┃🍯 ┇↜『 ڪـاجـوࢪا 』
 ┃🌼 ┇↜『 گـانـيـڪـي 』
 ┃🛕 ┇↜『 اسـوﻧـا 』
 ┃🌀 ┇↜『 بـوࢪوتـو 』
 ┃🧊 ┇↜『 شـﯾـه‍ـو 』
 ┃🎹 ┇↜『 شـﯾـتـوجـو 』
 ┃🍷 ┇↜『 ديـادࢪا 』
 ┃👁️ ┇↜『 اﯾـࢪازا 』
 ┃🎄 ┇↜『 الـﯾـنـا 』
 ┃ 🐦┇↜『 ايديت-نيزوكو 』
 ┃ 🧏🏻‍♀️┇↜『 ايديت-ساسكي 』
 ┃🔥 ┇↜『 ايديت-هيناتا 』
 ┃💥 ┇↜『 ايديت-ايتاتشي 』
 ┃💫 ┇↜『 ايديت-كانكي 』
 ┃👁️ ┇↜『 ايديت-ميكاسا 』
 ┃🍻 ┇↜『 ايديت-مادارا 』
 ┛━━━━━━⌈زيـزو⌋━━━━┗
  `;

  const commands = ['اكيرا', 'اكيما', 'انا', 'اسونا', 'ayuzawa', 'بوروتو', 'شيهو', 'شيتوجو', 'ديادرا', 'ايرازا', 'الينا', 'ايبا', 'ايميليا', 'hestia', 'هيناتا', 'inori', 'isuzu', 'ايتاشي', 'itori', 'kaga', 'كاجورا', 'kaori', 'كانيكي', 'كوتوري', 'kurumi', 'مادرا', 'ميكاسا', 'ميكو', 'ميناتو', 'ناروتو', 'نيزوكو', 'sagiri', 'ساسكي', 'ساكورا', 'cosplay'];

  if (command === 'animes' || command === 'منيو-انمي' || command === 'انميس' || command ==='ايديت') {
    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: menu +'\n> يـمـكـنـك كـتـابـة الـامـࢪ او الـاخـتـيـاࢪ مـن الـزࢪ'},
            footer: { text: '𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡' },
            header: {
              hasMediaAttachment: false,
            },
            nativeFlowMessage: {
              buttons: [ 
                {
                  name: 'single_select',
                   buttonParamsJson: JSON.stringify({
                   title: '『🕸️』الـانـمـيـات',
                   sections: [
                   {
                     title: '『❤️‍🔥』الــصــوࢪ《',
                     highlight_label: '⌈ 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡ ⌋',
                       rows: row },
                     {
                     title: '『❤️‍🔥』الـايـديـت《',
                     highlight_label: '⌈ 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡ ⌋',
                       rows: row2 },
                   ] 
                   }), 
                  messageParamsJson: ''
                 },
                {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "『✨』قـنـاتـي",                   
                                    url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a",
                                    merchant_url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a"
                                })
                }, 
              ] 
             } 
            } 
          } 
        } 
      }, {userJid: conn.user.jid, quoted: m});
    conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});
    } else if (commands.includes(command)) {
    try {
      const response = await axios.get(`https://raw.githubusercontent.com/zyad5yasser/bot-test/master/src/JSON/anime-${command}.json`);
      const data = response.data;
      const randomImage = data[Math.floor(data.length * Math.random())];
      var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `صـوره لـ ⌈${command}⌋`},
            footer: { text: '𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡' },
            header: {
              hasMediaAttachment: true,
              imageMessage: messa.imageMessage, 
            },
            nativeFlowMessage: {
              buttons: [ 
                {
                  name: 'single_select',
                   buttonParamsJson: JSON.stringify({
                   title: '『🕸️』الـانـمـيـات',
                   sections: [
                   {
                     title: '『❤️‍🔥』انــمـيـات《',
                     highlight_label: '⌈ 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡ ⌋',
                       rows: row },
                     {
                     title: '『❤️‍🔥』انــمـيـات《',
                     highlight_label: '⌈ 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡ ⌋',
                       rows: row2 },
                   ] 
                   }), 
                  messageParamsJson: ''
                 },
                {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'صـورة اخــرى',
                  id: `${usedPrefix + command}`
                })
               },
                {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "『✨』قـنـاتـي",                   
                                    url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a",
                                    merchant_url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a"
                                })
                }, 
              ]
             } 
            } 
          } 
        } 
      }, {userJid: conn.user.jid, quoted: m});
    conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id}); 
    } catch (error) {
      m.reply('حدث خطأ أثناء جلب البيانات. الرجاء المحاولة مرة أخرى لاحقاً.');
      console.error(error);
    }
  } else {
    m.reply('الأمر غير صحيح، الرجاء اختيار أمر من القائمة.');
  }
};

handler.command = handler.help = ['ايديت', 'انميس','منيو-انمي','animes', 'اكيرا', 'اكيما', 'انا', 'اسونا', 'ayuzawa', 'بوروتو', 'شيهو', 'شيتوجو', 'ديادرا', 'ايرازا', 'الينا', 'ايبا', 'ايميليا', 'hestia', 'هيناتا', 'inori', 'isuzu', 'ايتاشي', 'itori', 'kaga', 'كاجورا', 'kaori', 'كانيكي', 'كوتوري', 'kurumi', 'مادرا', 'ميكاسا', 'ميكو', 'ميناتو', 'ناروتو', 'نيزوكو', 'sagiri', 'ساسكي', 'ساكورا', 'cosplay'];
handler.tags = ['anime'];

export default handler;
