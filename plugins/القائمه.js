import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'
let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/95efbe8ea4dd02499b669.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `
        *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ❄ ༻𓆪⟢* 
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
*༺ مـنـــور يــاقــلـبـي 〘 ${m.pushName} 〙༻*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
*〘 معلومات البوت 〙*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
المــســتــخــدمــيـن: ${rtotalreg} 
الــتـشـغـيـل: ${uptime} 
الــوقــت: ${wib} 
الـتـاريــخ: ${date} 
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
*⌬ ❛╏دي اوامر البوت متنساش ال ( . ) قبل اي امر*

*⌬ ❛╏استمتع بالبوت بدون التسبب بازعاج للاعضاء*

*⌬ ❛╏ممنوع طلب اشياء تخالف الشرع*

*⌬ ❛╏ممنوع سب البوت اطلاقا باي الفاظ*

*〘 مخالفة الشروط = حرمانك من البوت 〙*

*⌬ ❛╏اذا كان هناك شئ لا يعجبك اكتب 〘 .ابلاغ  + مشكلتك〙*

⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
      *༺ قــســم الـجـروب ༻*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
│✯ ❯ .انذار                         
│✯ ❯ .الغاءالانذار.               
│✯ ❯ .الانذارات.                 
│✯ ❯ .دعوه.                      
│✯ ❯ .منشن.                     
│✯ ❯ .مخفي.  
│✯ ❯ .ضيف 〘 لا تستخدم هذا الامر كثيرا حتي لا يحظر رقم البوت〙                  
│✯ ❯ .المشرفين.                
│✯ ❯ .جروب.                    
│✯ ❯ .طرد.   
│✯ ❯ .الارقام + رمز الدوله
>  〘 يعطيك قائمة الارقام البادئه برمز الدوله 〙    
│✯ ❯ .طرد_الارقام.
> 〘 يطردلك كل الارقام برمز الدوله 〙                
│✯ ❯ .رستر.                      
│✯ ❯ .حذف.                    
│✯ ❯ .واتس.                     
│✯ ❯ .لينك.                      
│✯ ❯ .تغيرالترحيب.           
│✯ ❯ .تغيرالوداع. 
│✯ ❯ .رفع. 
│✯ ❯ .خفض. 
│✯ ❯ .تغير-الاسم. 
│✯ ❯ .تغيرالوصف. 
│✯ ❯ .تغيرالصوره. 
              *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ༻𓆪⟢*
⟣┈┈┈┈⟢𓆩〘❄〙𓆪⟣┈┈┈┈┈⟢
   *༺ شــرح الــالــقــاب ༻*
༺⟣┈┈┈┈⟢𓆩〘❄〙𓆪⟣┈┈┈┈⟢༻
│✯ ❯ .تسجيل. 
> 『 تضع القب بعد الامر لحفظه للادمن فقط 』
│✯ ❯ .لقبي. 
> 『 لمعرفة لقبك المسجل 』
│✯ ❯ .لقبه. 
> 『 لمعرفة لقب شخص للادمن فقط 』
│✯ ❯ .الالقاب. 
> 『 لمعرفة الالقاب المسجله 』
│✯ ❯ .حذف_لقب. 
> 『 لحذف لقب من الالقاب المسجله 』

༺⟣┈┈┈┈⟢𓆩〘۞〙𓆪⟣┈┈┈┈⟢༻
          *༺ قـــســم الــديــن ۞ ༻*
༺⟣┈┈┈┈⟢𓆩〘۞〙𓆪⟣┈┈┈┈⟢༻
│۞ ❯ .الله
│۞ ❯ .قران
│۞ ❯ .اذكار
│۞ ❯ .ايات
│۞ ❯ .ايه-الكرسي
│۞ ❯ .سوره
           *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ༻𓆪⟢*

⟣┈┈┈┈⟢〘۞〙⟣┈┈┈┈⟢
         *༺ قــســم الــتـــحـويــلات ༻*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢

│✯ ❯ .ملصق
│✯ ❯ .ميم
│✯ ❯ .كود
│✯ ❯ .فضح
│✯ ❯ .سرقه
│✯ ❯ .لصوره
│✯ ❯ .لانمي
│✯ ❯ .لكرتون
│✯ ❯ .لفيديو
│✯ ❯ .لصوت
│✯ ❯ .تليجراف
│✯ ❯ .دمج
│✯ ❯ .نرد
│✯ ❯ .مطلوب
          *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ༻𓆪⟢*

⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
           *༺ قــسـم الــعــاب ༻*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
│✯ ❯ .رياضه. 
│✯ ❯ .اكس او. 
│✯ ❯ .رياضيات. 
│✯ ❯ .رهان. 
│✯ ❯ .شخصية. 
│✯ ❯ .احزر. 
│✯ ❯ .عين. 
│✯ ❯ .ايموجي. 
│✯ ❯ .سؤال. 
│✯ ❯ .كت. 
│✯ ❯ .خمن. 
│✯ ❯ .فكك. 
│✯ ❯ .رتب. 
│✯ ❯ .اجابه. 
│✯ ❯ .دين. 
│✯ ❯ .لغز. 
│✯ ❯ .لعبه. 
        *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ༻𓆪⟢*

⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈┈⟢
           *༺ قــســم الــتــرفــيــه ༻*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
│✯ ❯ .هل
│✯ ❯ .لو
│✯ ❯ .نصيحه
│✯ ❯ .صراحه
│✯ ❯ .تاج
│✯ ❯ .زواج   ⃟❄محذوف بناء علي طلب المتابعين
│✯ ❯ .طلاق   ⃟❄نفس الشئ
│✯ ❯ .صداقه
│✯ ❯ .تحداني
│✯ ❯ .توب
│✯ ❯ .مقولات
│✯ ❯ .الحب
│✯ ❯ .شخصيه
│✯ ❯ .ذكاء
│✯ ❯ .غباء
│✯ ❯ .بوست
│✯ ❯ .اقتباس
│✯ ❯ .رجوله
│✯ ❯ .انوثه
│✯ ❯ .شاذ
│✯ ❯ .يحبني
│✯ ❯ .يكرهني
          *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ༻𓆪⟢*

⟣┈┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
         *༺ قــســم الـأداوات ༻*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
│✯ ❯ .كومنت. 
│✯ ❯ .جوده. 
│✯ ❯ .زخرف. 
│✯ ❯ .كود. 
│✯ ❯ .ترجمه. 
│✯ ❯ .فيك. 
│✯ ❯ .دحيح.   〘 ذكاء اصطناعي يقرا الصور ايضا 〙
│✯ ❯ . شوف.  〘 نفس الشئ 〙
│✯ ❯ .انطق. 
         *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ༻𓆪⟢*

⟣┈┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
        *༺ قـسـم الـتـنزيـلات ༻*
⟣┈┈┈┈┈⟢〘❄〙⟣┈┈┈┈┈⟢
│✯ ❯ .اغنيه
│✯ ❯ .فيديو
│✯ ❯ .يوتيوب
│✯ ❯ .انستا
│✯ ❯ .فيس
│✯ ❯ .مود
│✯ ❯ .تطبيق
│✯ ❯ .صوره
│✯ ❯ .خلفيات
│✯ ❯ .تيك
│✯ ❯ .شغل
⟣┈┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
         *༺ قــســم الـــصـور ༻*
⟣┈┈┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
│✯ ❯ .ايديت
│✯ ❯ .خلفيات
│✯ ❯ .تطقيم
│✯ ❯ .تطقيم-اولاد
│✯ ❯ .كريستيانو
│✯ ❯ .ميسي
│✯ ❯ .جبل
│✯ ❯ .ببجي
│✯ ❯ .هكر
          *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ༻𓆪⟢*
          
⟣┈┈┈┈⟢𓆩〘❄〙𓆪⟣┈┈┈┈┈┈⟢
    *༺ قــــســم الـصــوتــيــات ༻*
⟣┈┈┈┈⟢𓆩〘❄〙𓆪⟣┈┈┈┈┈⟢
│✯ ❯ .عميق
│✯ ❯ .رفيع
│✯ ❯ .سنجاب
│✯ ❯ .عميق2
│✯ ❯ .روبوت
│✯ ❯ .بطئ
│✯ ❯ .ناعم
│✯ ❯ .تخين
│✯ ❯ .صاخب

⟣┈┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
         *༺  قــســم الاعـضـاء ༻*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
│✯ ❯ .المطور
│✯ ❯ .تسجيل
│✯ ❯ .اقتباس
│✯ ❯ .بروفايل
│✯ ❯ .الدعم
│✯ ❯ .بنج
│✯ ❯ .بوت
│✯ ❯ .ابلاغ
     *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ❄ ༻𓆪⟢*

⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
     *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ❄ ༻𓆪⟢*
`.trim();



conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['10'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
  }
