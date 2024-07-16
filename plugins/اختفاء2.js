let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        await conn.reply(m.chat, `✴️ *A F K* ✴️
        *▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
        *@${m.sender.split("@")[0]}* مرحبا بك مجدداً. يبدو أنك كنت بعيدًا عن لوحة المفاتيح.${user.afkReason ? `\nالسبب: 👉 ` + user.afkReason : ''}

        وقت غيابك كان:\n👉 *${(new Date - user.afk).toTimeString()}*`.trim(), m, { mentions: [m.sender] })
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        await conn.reply(m.chat, `✴️ *A F K* ✴️
        *▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
        😾 المستخدم كان بعيدًا عن لوحة المفاتيح.\nالسبب: ${reason ? `👉 ` + reason : `لم يتم ذكر السبب.`}

        وقت غيابه كان:\n👉 *${(new Date - user.afk).toTimeString()}*`.trim(), m)
    }
    return true
}
export default handler
