let handler = m => m;
handler.all = async function (m) {
  let chat = global.db.data.chats[m.chat];
  
  // التحقق من حالة الدردشة المحظورة أولاً
  if (chat.isBanned) {
    return; // عدم معالجة الرسائل إذا كانت الدردشة محظورة
  }
  
  // فحص الرسائل وإرسال الردود الصوتية
  if (/^احا|احااا$/i.test(m.text)) {
    let vn = 'https://i.top4top.io/m_3116xc3cw0.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {
      audio: { url: vn },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: `shawaza_zizo_2024.opp`
    }, { quoted: m });
  }

  if (/^الجن|جن$/i.test(m.text)) {
    let vn = 'https://qu.ax/OiSk';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {
      audio: { url: vn },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: `shawaza_zizo_2024.opp`
    }, { quoted: m });
  }

  if (/^سبحانه$/i.test(m.text)) {
    let vn = 'https://qu.ax/nGFt.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {
      audio: { url: vn },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: `shawaza_zizo_2024.opp`
    }, { quoted: m });
  }

  if (/^علاوي$/i.test(m.text)) {
    let vn = 'https://qu.ax/vXcL.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {
      audio: { url: vn },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: `shawaza_zizo_2024.opp`
    }, { quoted: m });
  }

  if (/^دانس$/i.test(m.text)) {
    let vn = 'https://qu.ax/NDrj.m4a';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {
      audio: { url: vn },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: `shawaza_zizo_2024.opp`
    }, { quoted: m });
  }

  if (/^نعم|😂$/i.test(m.text)) {
    let vn = 'https://qu.ax/HdPo.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {
      audio: { url: vn },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: `shawaza_zizo_2024.opp`
    }, { quoted: m });
  }

  return !0;
};
export default handler;
