const handler = async (m, { conn, text, command, usedPrefix, args }) => {
  const pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg';
  let taguser = global.db.data.users[m.sender];
  const cooldown = 10000;
  const user = global.db.data.users[m.sender];
  const currentTime = new Date();
  const waitTime = user.wait + cooldown;
  const write = `
╮─❮ مــرحــبــا ${m.pushName} ❯ ─⊷❍
│ اهـلا بك في لـعـبـة "حجرة ورقة مقص" 
│ اخـتـار اخـتيـار عـشـوائـي مـن الـثـلاثـه
│ الـلـعبـه تـعـتـمـد عـلـي الـحـظ
│ يــجـب عـلـيـك اسـتـخـدام الازرار
╯─────『 زيزو 』────⊷❍
`;

  if (currentTime - user.wait < cooldown) {
    const waitSeconds = Math.floor((waitTime - currentTime) / 1000);
    throw `*🕓 سوف تضطر للانتظار ${waitSeconds} ثواني قبل أن تتمكن من اللعب مرة أخرى*`;
  }

  const choices = ['حجرة', 'مقص', 'ورقة'];
  const astro = choices[Math.floor(Math.random() * choices.length)];
  const textm = text.toLowerCase();

  if (!textm || textm === command || !choices.includes(textm)) {
    return conn.sendButton(
      m.chat,
      write, 
      '𝘽𝙔: 𝙕𝙀𝙕𝙊 𝘽𝙊𝙏',
      pp,
      [
        ['حجرة 🗿', `${usedPrefix + command} حجرة`],
        ['ورقـه 📄', `${usedPrefix + command} ورقة`],
        ['مـقـص ✂️', `${usedPrefix + command} مقص`],
      ],
      m
    );
  }

  if (textm === astro) {
    user.exp += 500;
    m.reply(`🔰 تعادل!\n\nانت: ${text}\nالبوت: ${astro}\n🎁 لقد حصلت علي +500 نقطة`);
  } else if (
    (textm === 'ورقة' && astro === 'حجرة') ||
    (textm === 'مقص' && astro === 'ورقة') ||
    (textm === 'حجرة' && astro === 'مقص')
  ) {
    user.exp += 1000;
    m.reply(`🥳 لقد فزت! 🎉\n\nانت: ${text}\nالبوت: ${astro}\n🎁 لقد حصلت علي +1000 نقطة`);
  } else {
    user.exp -= 300;
    m.reply(`☠️ انت تخسر! ❌\n\nانت: ${text}\nالبوت: ${astro}\n❌ تم خصم -300 نقطة`);
  }
};

handler.help = ['ppt'];
handler.tags = ['games'];
handler.command = /^(لعبه|لعبة)$/i;

export default handler;
