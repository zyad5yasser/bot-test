import fg from 'api-dylux';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `*✳️ من فضلك، قم بإرسال رابط فيديو من Facebook*\n\n📌 *مثال:*\n*${usedPrefix + command}* https://www.facebook.com/Ankursajiyaan/videos/981948876160874/?mibextid=rS40aB7S9Ucbxw6v`;
  }

  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    throw '*⚠️ يرجى إدخال رابط صحيح.*';
  }


  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
⊱ ─── {* 𝑧ₑ𝑧ₒ_𝑏ₒ𝑡 *} ─── ⊰
↳ *عنوان الفيديو:* ${result.title}
⊱ ────── {⋆♬⋆} ────── ⊰`;

    const response = await fetch(result.videoUrl);
    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    conn.sendFile(m.chat, videoBuffer, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    console.log(error);
    m.reply('*⚠️ طلبك جاهز.*');
  }
};

handler.help = ['facebook <url>'];
handler.tags = ['downloader'];
handler.command = /^((فيس|فيسبوك)(downloder|dl)?)$/i;
handler.diamond = true;

export default handler;
