let handler = async (m, { conn, text, command }) => {
  const skf = ['https://telegra.ph/file/866f84289c45a81ddad32.jpg','https://telegra.ph/file/866f84289c45a81ddad32.jpg','https://telegra.ph/file/8a43282ec131e3b9e80f3.jpg'];
  const Erth = ['https://telegra.ph/file/2d9e02440f5eab022919a.jpg','https://telegra.ph/file/866f84289c45a81ddad32.jpg','https://telegra.ph/file/866f84289c45a81ddad32.jpg'];
  const hawat = ['https://telegra.ph/file/c81b1a42444858fd36e33.jpg','https://telegra.ph/file/c81b1a42444858fd36e33.jpg','https://telegra.ph/file/51470f13fb51583724b44.jpg'];
if (command === 'صور_سقف') { 
  const _skf = await skf[Math.floor(skf.length *Math.random ())];
 conn.sendButton (m.chat, '','',skf,[['صورة اخري',`${usedPrefix + command}`]],m)
} else if (command === 'صور_مكتب') {
  const _Erth = await Erth[Math.floor(Erth.length *Math.random ())];
 conn.sendButton (m.chat, '','',Erth,[['صورة اخري',`${usedPrefix + command}`]],m)
}else if (command === 'صور_حوائط') {
  const _hawat = await hawat[Math.floor(hawat.length *Math.random ())];
 conn.sendButton (m.chat, '','',hawat,[['صورة اخري',`${usedPrefix + command}`]],m)
 }
};
handler.help = ['style'].map(v => v + ' <key> <text>');
handler.tags = ['tools'];
handler.command = ['صور_حوائط','صور_مكتب','صور_سقف'];
export default handler;
