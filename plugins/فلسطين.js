
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Menu2.jpg')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  
  let media;
  if (mime.startsWith('image/')) {
    media = await q.download()
  } else {
    let res = await fetch(pp)
    media = await res.buffer()
  }
  
  let link = await uploadImage(media)
  let Zoro = `https://api-me-4ef1b6491458.herokuapp.com/api/makers/Palestine?image=${link}`
  let message = `*🇵🇸 Free Palestine 🇵🇸*\n\n*اللهم انصر إخواننا في فلسطين وفرج همهم وكربهم واحفظهم يا رب العالمين*`
  
  await conn.sendFile(m.chat, Zoro, 'Palestine.png', message, m)
  m.react('🇵🇸')
}

handler.help = ['Palestine']
handler.tags = ['Palestine']
handler.command = ['بروفايلي','فلسطين','فلسطيني']

export default handler
