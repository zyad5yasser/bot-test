import axios from 'axios';
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
const handler = async (m, {command, conn, usedPrefix}) => {
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
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ زوࢪو ❛❛", description: '', id: ".ايديت-ايانوكوجي" },
{ header: '⌈ 𝒂𝒏𝒊𝒎𝒆𝒔 ⌋', title: "❛❛ ايـانــوكـوجي ❛❛", description: '', id: ".ايديت-زورو" },   
]; 

 if (command ==='ايديت-زورو'){
   const zoro =[
'https://telegra.ph/file/0de3d724cc7ff6719e671.mp4',
'https://telegra.ph/file/8711c85e060a892ecce8d.mp4',
'https://telegra.ph/file/4382948309a4e0e870230.mp4',
'https://telegra.ph/file/fd37dd25204898350a696.mp4',
'https://telegra.ph/file/bb75fad7c528982d38765.mp4',
'https://telegra.ph/file/dd7792e5c4ad8c3619df1.mp4',
'https://telegra.ph/file/2a709171b97bfdfa52af0.mp4',
'https://telegra.ph/file/fcf4b7a7647cd96882dd9.mp4',
'https://telegra.ph/file/b918b17e2ec2601ed8e1d.mp4',
'https://telegra.ph/file/cbaa57c12c567828e1e21.mp4',
'https://telegra.ph/file/47af25d732650b1ab7487.mp4',
];
     let haha = await zoro[Math.floor(zoro.length * Math.random())];
  var messa = await prepareWAMessageMedia({ image: { url: haha } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `ايـديـت لـ: ⌈${command}⌋`},
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
                  display_text:'ايـديـت آخـر',
                  id: `${usedPrefix + command}`
                })
               },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'رجـوع لـقـائـمة الـانـمـي',
                  id: `${usedPrefix +'انميس'}`
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
   } else if (command ==='ايديت-ايانوكوجي'){
   const ayano =['https://telegra.ph/file/f36ae02e21b619da17eb0.mp4',
  'https://telegra.ph/file/56692b4048a053e1521f4.mp4',
  'https://telegra.ph/file/d9df33bfb77ae89df2e2e.mp4',
  'https://telegra.ph/file/f32a3bbd398a1b45a5172.mp4',
  'https://telegra.ph/file/46d7addbecd24cc71ea03.mp4',
  'https://telegra.ph/file/74a2750804e658472fd9a.mp4',
  'https://telegra.ph/file/5c3bf8a3d4d9742877a45.mp4',
  'https://telegra.ph/file/002668dc33c9b2a12ae03.mp4',
  'https://telegra.ph/file/7d122c46f77c68185ea20.mp4',
];
   let haha = await ayano[Math.floor(ayano.length * Math.random())];
  var messa = await prepareWAMessageMedia({ image: { url: haha } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `ايـديـت لـ: ⌈${command}⌋`},
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
                  display_text:'ايـديـت آخـر',
                  id: `${usedPrefix + command}`
                })
               },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'رجـوع لـقـائـمة الـانـمـي',
                  id: `${usedPrefix +'انميس'}`
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
 }else if (command ==='ايديت-نيزوكو'){
    const nezuko = [
  "https://telegra.ph/file/95956566f324b9f8cb739.mp4",
  "https://telegra.ph/file/0a66757c508c5f5d8e1f7.mp4",
  "https://telegra.ph/file/2bc2a954f01a982418352.mp4",
  "https://telegra.ph/file/d2394d3b26a74ca0ed273.mp4",
  "https://telegra.ph/file/7691b06a9fd11ba3cb538.mp4",
  "https://telegra.ph/file/f2d6949d5d964b7823a3e.mp4"
];
  let haha = await nezuko[Math.floor(nezuko.length * Math.random())];
  var messa = await prepareWAMessageMedia({ image: { url: haha } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `ايـديـت لـ: ⌈${command}⌋`},
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
                  display_text:'ايـديـت آخـر',
                  id: `${usedPrefix + command}`
                })
               },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'رجـوع لـقـائـمة الـانـمـي',
                  id: `${usedPrefix +'انميس'}`
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
  }else if (command ==='ايديت-ساسكي') {
    const saske = [
    "https://telegra.ph/file/a56b97c43ab7ef17f3163.mp4",
    "https://telegra.ph/file/71d2306f073fdfda0d86e.mp4",
    "https://telegra.ph/file/71d2306f073fdfda0d86e.mp4",
    "https://telegra.ph/file/235da6c53575dab24efa9.mp4",
    "https://telegra.ph/file/adbeff04eff441a96399f.mp4",
    "https://telegra.ph/file/5b95de4fb64bb9bb9ea96.mp4",
    "https://telegra.ph/file/f21cfb38b6fa311bef956.mp4",
    "https://telegra.ph/file/745e04370f51a8702c401.mp4",
    "https://telegra.ph/file/c00ec665fcd24eaf5dc9c.mp4"
  ]
    let haha = await saske[Math.floor(saske.length * Math.random())];
    var messa = await prepareWAMessageMedia({ image: { url: haha } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `ايـديـت لـ: ⌈${command}⌋`},
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
                  display_text:'ايـديـت آخـر',
                  id: `${usedPrefix + command}`
                })
               },
                
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'رجـوع لـقـائـمة الـانـمـي',
                  id: `${usedPrefix +'انميس'}`
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
  }else if (command ==='ايديت-هيناتا') {
    const henata = [
    "https://telegra.ph/file/66f0db42de2db45eb57da.mp4",
    "https://telegra.ph/file/45ac6b449aa8e7128c451.mp4",
    "https://telegra.ph/file/0280c58ca5ff180476e25.mp4",
    "https://telegra.ph/file/7221fe7b89c6447b2f97e.mp4",
    "https://telegra.ph/file/0faade62d715649245f59.mp4",
    "https://telegra.ph/file/a4d76de46442996cf262e.mp4",
    "https://telegra.ph/file/1f0b02c6ea59e90d6c8af.mp4",
    "https://telegra.ph/file/b41c986fb1ea99a74a639.mp4"
  ]
  let haha = await henata[Math.floor(henata.length * Math.random())];
  var messa = await prepareWAMessageMedia({ image: { url: haha } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `ايـديـت لـ: ⌈${command}⌋`},
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
                  display_text:'ايـديـت آخـر',
                  id: `${usedPrefix + command}`
                })
               },
                
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'رجـوع لـقـائـمة الـانـمـي',
                  id: `${usedPrefix +'انميس'}`
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
 }else if (command ==='ايديت-ايتاتشي') {
    const itachi = ["https://telegra.ph/file/ddebebc9e84bb23359ac6.mp4", "https://telegra.ph/file/a5645f1f9bc1b3a0a1a46.mp4", "https://telegra.ph/file/1f2e49f57941cfe3e81bc.mp4", "https://telegra.ph/file/6b50d14dc3bb4253920c1.mp4", "https://telegra.ph/file/5f5478b1174281b8e3d52.mp4", "https://telegra.ph/file/4f3e94ebe2f000af832d6.mp4", "https://telegra.ph/file/f66d39b52e8b5962184cd.mp4", "https://telegra.ph/file/ab154b3e813ccde09d8b2.mp4", "https://telegra.ph/file/04af66310157329c624fc.mp4"];
    let haha = await itachi[Math.floor(itachi.length * Math.random())];
    var messa = await prepareWAMessageMedia({ image: { url: haha } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `ايـديـت لـ: ⌈${command}⌋`},
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
                  display_text:'ايـديـت آخـر',
                  id: `${usedPrefix + command}`
                })
               },
                
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'رجـوع لـقـائـمة الـانـمـي',
                  id: `${usedPrefix +'انميس'}`
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
 }else if (command ==='ايديت-كانكي') {
    const keneki = ["https://telegra.ph/file/0109b2e2b0aeb635064ec.mp4", "https://telegra.ph/file/f856572db77ffb932c7b9.mp4", "https://telegra.ph/file/70ac401f4b83bd0abed40.mp4", "https://telegra.ph/file/88e059da1bc1044683c72.mp4", "https://telegra.ph/file/ebfa3738b54eded25f1e4.mp4", "https://telegra.ph/file/3fdc5c33ffdcd2da99044.mp4"];
    let haha = await keneki[Math.floor(keneki.length * Math.random())];
   var messa = await prepareWAMessageMedia({ image: { url: haha } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `ايـديـت لـ: ⌈${command}⌋`},
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
                  display_text:'ايـديـت آخـر',
                  id: `${usedPrefix + command}`
                })
               },
                
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'رجـوع لـقـائـمة الـانـمـي',
                  id: `${usedPrefix +'انميس'}`
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
 }else if (command ==='ايديت-ميكاسا') {
    const mikasa = ["https://telegra.ph/file/319e2ea6383eebfbd1823.mp4", "https://telegra.ph/file/8426a4e879adca3389d05.mp4", "https://telegra.ph/file/65a59fdbd9057e400c6bf.mp4", "https://telegra.ph/file/bd5e9e73352d875453628.mp4", "https://telegra.ph/file/23e36a8f6be40b1fa3e29.mp4", "https://telegra.ph/file/a8df47707a589ce929c45.mp4", "https://telegra.ph/file/228309782a9c54de79595.mp4", "https://telegra.ph/file/0a8f3eb41dd28dbebbce1.mp4", "https://telegra.ph/file/b6fc739ec215478222282.mp4", "https://telegra.ph/file/08f6b7227ea798d339400.mp4"]
    let haha = await mikasa[Math.floor(mikasa.length * Math.random())];
   var messa = await prepareWAMessageMedia({ image: { url: haha } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `ايـديـت لـ: ⌈${command}⌋`},
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
                  display_text:'ايـديـت آخـر',
                  id: `${usedPrefix + command}`
                })
               },
                
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'رجـوع لـقـائـمة الـانـمـي',
                  id: `${usedPrefix +'انميس'}`
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
 }else if ( command ==='ايديت-مادارا') {
    const madara = [
        "https://telegra.ph/file/654d3f2ac965fc49ecbc9.mp4",
        "https://telegra.ph/file/7e4a1e8adb3b375503e88.mp4",
        "https://telegra.ph/file/ecdf5117314cf3136c9c3.mp4",
        "https://telegra.ph/file/cb0ddce2952e84384a48b.mp4",
        "https://telegra.ph/file/75357523f2c5d41064ee9.mp4",
        "https://telegra.ph/file/d7bba58b59887e0bf630e.mp4",
        "https://telegra.ph/file/556716edc93833b35a70c.mp4",
        "https://telegra.ph/file/9f90819c953cfa74648d9.mp4"
    ];
    let haha = await madara[Math.floor(madara.length * Math.random())];
    var messa = await prepareWAMessageMedia({ image: { url: haha } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: `ايـديـت لـ: ⌈${command}⌋`},
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
                  display_text:'ايـديـت آخـر',
                  id: `${usedPrefix + command}`
                })
               },
                
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                  display_text:'رجـوع لـقـائـمة الـانـمـي',
                  id: `${usedPrefix +'انميس'}`
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
 }
};
handler.command = handler.help = ['ايديت-ايانوكوجي','ايديت-زورو','ايديت-نيزوكو','ايديت-ساسكي','ايديت-هيناتا','ايديت-ايتاتشي','ايديت-كانكي','ايديت-ميكاسا','ايديت-مادارا'];
handler.tags = ['anime'];
export default handler;
