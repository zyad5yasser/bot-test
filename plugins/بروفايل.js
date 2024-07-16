import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn }) => {
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Loading_'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing',
        'Pon',
        'Wage',
        'Kliwon',
        'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, {
        weekday: 'long'
    })
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
    if (typeof db.data.users[who] == 'undefined') return m.reply('Pengguna tidak ada didalam data base')
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
    let bio = await conn.fetchStatus(who).catch(_ => 'Tidak Ada Bio')
    let { role, premium, money, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[who]
    let username = conn.getName(who)
    let user = db.data.users[who]
    let name = `${user.registered ? user.name : conn.getName(who)}`
    if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
    let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` }: {} )}, message: { 'contactMessage': { 'displayName': name, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${name},;;;\nFN:${name},\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp, thumbnail: pp, sendEphemeral: true }}}
    let str = `
┌ • *الاسم:* ${user.registered ? user.name : conn.getName(who)}
│ • *العمر:* ${user.registered ? age : ''}
│ • *السيرة الذاتية:* ${bio.status ? bio.status : bio}
│ • *العلامة:* @${who.replace(/@.+/, '')}
│ • *الرقم:* ${new PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
└ • *الرابط:* https://wa.me/${who.split`@`[0]}

– *الحالة:* ${who.split`@`[0] === global.nomorwa ? '🎗️مطور🎗️' : user.premiumTime > 0 ? '👑مميز👑' : user.level >= 1000 ? 'مستخدم النخبة' : 'مستخدم مجاني'}

– *ملف تعريف RPG*
┌ • *الدور:* ${role}
│ • *المستوى:* ${level}
└ • *الخبرة:* ${exp}

– *هل هو مميز؟*
┌ • *مميز:* ${user.premiumTime > 0 ? "☑️" : "❌"} ${user.premiumTime > 0 ? `
│ • *وقت الميزة المتبقي:*
${clockString(user.premiumTime - new Date())}` : ''}
└ • *مسجل:* ${user.registered ? '☑️ ( ' + new Date(regTime).toLocaleString('ar-EG') + ' )' : '❌'}

⻝  التاريخ: ${week} ${date}
⻝  الوقت: ${wktuwib}`.trim()
    await conn.sendFile(m.chat, pp, 'profile.jpeg', str, fkon, false, { mentions: [who] })
}
handler.help = ['profile [@user]']
handler.tags = ['info', 'xp']
handler.command = /^(profile|profil|me|my|بروفايل)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
    let ye = isNaN(ms) ? '--': Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? '--': Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? '--': Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? '--': Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--': Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--': Math.floor(ms / 1000) % 60
    return ['┊ ', ye, ' *Years 🗓️*\n', '┊ ', mo, ' *Month 🌙*\n', '┊ ', d, ' *Days ☀️*\n', '┊ ', h, ' *Hours 🕐*\n', '┊ ', m, ' *Minute ⏰*\n', '┊ ', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
        }
