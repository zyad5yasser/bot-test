import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

const handler = async (m, {command, conn, usedPrefix}) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw '*قم بالرد على الفيديو أو الصوت الذي ترغب في تحويله إلى MP3*'
    if (command ==='لصوت' || command ==='لصوتي'){
    let media = await q.download()
    let isAudio = /audio/.test(mime) // تحقق من نوع الصوت
    let isVideo = /video/.test(mime) // تحقق من نوع الفيديو
    let link = await (isAudio ? uploadFile : uploadImage)(media)
    
    // إرسال الرد بصيغة MP3 كرسالة نصية
    conn.sendMessage(m.chat, {audio: {url: link}, mimetype: 'audio/mpeg', fileName: `converted_audio.mp3`}, {quoted: m});
    } else if (command ==='لريك' || command ==='لفويس'){
    let media = await q.download()
let isTele = /audio\/mp3|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
conn.sendMessage(m.chat, {audio: {url: link}, ptt: true, mimetype: 'audio/mpeg', fileName: `shawaza_zizo_2024.opp`}, {quoted: m});
        } 
}; 

handler.help = ['sendmp3 <reply video>', 'sendmp3 <reply audio>']
handler.tags = ['convert'] 
handler.command = /^(لصوت|لريك|لفويس|لصوتي)$/i

export default handler
