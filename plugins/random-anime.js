.cp test import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
  if (command ==='ايديت-نيزوكو'){
    const nezuko = [
  "https://telegra.ph/file/95956566f324b9f8cb739.mp4",
  "https://telegra.ph/file/0a66757c508c5f5d8e1f7.mp4",
  "https://telegra.ph/file/2bc2a954f01a982418352.mp4",
  "https://telegra.ph/file/d2394d3b26a74ca0ed273.mp4",
  "https://telegra.ph/file/7691b06a9fd11ba3cb538.mp4",
  "https://telegra.ph/file/f2d6949d5d964b7823a3e.mp4"
];
  let haha = await nezuko[Math.floor(nezuko.length * Math.random())];
  //conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m);
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['المزيد', `${usedPrefix + command}`],['القائمه الاساسيه',`${usedPrefix + 'انميس'}`]],null, null, m)
  }else if (command ==='ايديت-ساسكي') {
    const Sasken = [
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
    conn.sendButton(m.chat, `صوره ل: ساسكي`.trim(), author, haha, [['المزيد', `${usedPrefix + command}`],['القائمه الاساسيه',`${usedPrefix + 'انميس'}`]],null, null, m)
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
  conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['المزيد', `${usedPrefix + command}`],['القائمه الاساسيه',`${usedPrefix + 'انميس'}`]],null, null, m)
  }
};
handler.command = handler.help = ['ايديت-نيزوكو','ايديت-ساسكي','ايديت-هيناتا'];
handler.tags = ['anime'];
export default handler;
