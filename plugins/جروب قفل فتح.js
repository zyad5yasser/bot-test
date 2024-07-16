.cp group let handler = async (m, { conn, args, usedPrefix, command }) => {
  let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './Menu.jpg'
  
  let isClose = { // Switch Case Like :v
      'فتح': 'not_announcement',
      'قفل': 'announcement',
  }[(args[0] || '')];
  
  if (isClose === undefined)
      return conn.sendButton(
      m.chat,
      'اخـتـر', 
      '𝘽𝙔: 𝙕𝙀𝙕𝙊 𝘽𝙊𝙏',
      pp,
      [
        ['افـتـح', `${usedPrefix + command} فتح`],
        ['اقـفـل', `${usedPrefix + command} قفل`],
      ],
      m
    );
    
  await conn.groupSettingUpdate(m.chat, isClose);
};

handler.help = ['group *open/close*'];
handler.tags = ['group'];
handler.command = ['group', 'جروب','room'];
handler.admin = true;
handler.botAdmin = true;

export default handler;
