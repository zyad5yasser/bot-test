import Presence from '@whiskeysockets/baileys';


const handler = async (m, {conn, args, text}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const tradutor = JSON.parse(fs.readFileSync(`./language/ar.json`))
// const tradutor = _translate.plugins.gc_setname

  if (!text) throw tradutor.texto1;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw tradutor.texto2;
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname|اسم-الجروب|اسمجروب|اسمالجروب)$/i;
handler.group = true;
handler.admin = true;
export default handler;
