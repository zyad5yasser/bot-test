import axios from "axios";

let handler = async (m, { command, conn, usedPrefix }) => {
  // جلب بيانات JSON من الرابط المحدد
  let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-Venom.json`)).data;  
  let haha = await res[Math.floor(res.length * Math.random())];  
  const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  
  // استخدم حقل الصورة من البيانات التي تم جلبها
//  let imagen4 = haha.image;

  // إرسال الصورة
  await conn.sendFile(m.chat, imagen4, 'image.jpg', `
*◉═ • ❁ 『』WELCOME 《 ❁ • ═◉*
*_WELCOME_* ➳『 ${m.pushName} 』
*_شروط دخول البوت لجروبك_*

*✿ 1  -  ⟦تضيف خمس اعضاء لجروب دعم البوت⟧*➪

*_『』الرابط《_*

『 https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0 』

*✿ 2  -  ⟦خمسه من طرفك يفعلو البوت⟧*➪

> ملحوظه اقل حاجه خمسه لكن تقدر تزيد اذا بتقدر كل ما بتزيد بتزيد فرصة ان البوت يعمل لفتره اطول 

*_『』الرابط《_*

『 https://t.me/De66VBoT?start=100270194 』

*✿ ⟦نفذ الشروط وجيب الاثبات وبتلقي البوت بجروبك⟧*➪

*_『』رقم المطور《_*

『 https://wa.me/201508628077 』

*_『』اسم المطور《_*

*『 ᴹᴿ᭄࿐𝒁𝒆𝒛𝒐࿐ᴹᴿ᭄ 』*

*_『1』لا يكون جروبك فيه 20 شخص وتيجي تحكي انك بدك البوت اقل شي يكون بجروبك 50 عضو《_*

*_『』يتم اثتثناء الشرط السابق اذا ضفت 15 عضو لجروب الدعم و 15 يفعلو البوت التاني《_*

*_『🌚』تحت رعاية 𝒁𝒆𝒛𝒐࿐𝑩𝒐𝒕᭄《_*

*◉═══ • ❁ BAY ❁ • ═══◉* 
`);

}

handler.command = handler.help = ['شروط','20'];
handler.tags = ['kaneki'];

export default handler;
