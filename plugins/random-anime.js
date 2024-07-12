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
  }else if (command ==='ايديت-ايتاتشي') {
    const itachi = ["https://telegra.ph/file/ddebebc9e84bb23359ac6.mp4", "https://telegra.ph/file/a5645f1f9bc1b3a0a1a46.mp4", "https://telegra.ph/file/1f2e49f57941cfe3e81bc.mp4", "https://telegra.ph/file/6b50d14dc3bb4253920c1.mp4", "https://telegra.ph/file/5f5478b1174281b8e3d52.mp4", "https://telegra.ph/file/4f3e94ebe2f000af832d6.mp4", "https://telegra.ph/file/f66d39b52e8b5962184cd.mp4", "https://telegra.ph/file/ab154b3e813ccde09d8b2.mp4", "https://telegra.ph/file/04af66310157329c624fc.mp4"];
    let haha = await itachi[Math.floor(itachi.length * Math.random())];
    conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['المزيد', `${usedPrefix + command}`],['القائمه الاساسيه',`${usedPrefix + 'انميس'}`]],null, null, m)
  }else if (command ==='ايديت-كانكي') {
    const keneki = ["https://telegra.ph/file/0109b2e2b0aeb635064ec.mp4", "https://telegra.ph/file/f856572db77ffb932c7b9.mp4", "https://telegra.ph/file/70ac401f4b83bd0abed40.mp4", "https://telegra.ph/file/88e059da1bc1044683c72.mp4", "https://telegra.ph/file/ebfa3738b54eded25f1e4.mp4", "https://telegra.ph/file/3fdc5c33ffdcd2da99044.mp4"];
    let haha = await keneki[Math.floor(keneki.length * Math.random())];
    conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['المزيد', `${usedPrefix + command}`],['القائمه الاساسيه',`${usedPrefix + 'انميس'}`]],null, null, m)
  }else if (command ==='ايديت-ميكاسا') {
    const mikasa = 
    let haha = await mikasa[Math.floor(mikasa.length * Math.random())];
    conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['المزيد', `${usedPrefix + command}`],['القائمه الاساسيه',`${usedPrefix + 'انميس'}`]],null, null, m)
  }
};
handler.command = handler.help = ['ايديت-نيزوكو','ايديت-ساسكي','ايديت-هيناتا','ايديت-ايتاتشي','ايديت-كانكي'];
handler.tags = ['anime'];
export default handler;
