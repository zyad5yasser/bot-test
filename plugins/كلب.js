import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://api.thedogapi.com/v1/images/search');
    const img = await res.json();
    const caption = `*_⌬ ❛╏𝒁𝒆𝒛𝒐 𝑩𝒐𝒕_*`.trim();
    conn.sendFile(m.chat, img[0].url, 'dog.jpg', caption, m);
  } catch {
    throw '*⌬ ❛╏ خطأ!*';
  }
};
handler.help = ['dog'];
handler.tags = ['random'];
handler.command = /^كلب$/i;
handler.fail = null;
export default handler;
