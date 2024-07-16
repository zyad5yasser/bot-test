let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera || {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        return
    }
    try {
          let src = await (await fetch('https://raw.githubusercontent.com/zyad5yasser/bot-test/master/src/game/بوتر.json')).json()
        if (src.length === 0) throw "قائمة اللاعبين فارغة."
        let json = src[Math.floor(Math.random() * src.length)]
        let caption = `*· • • ━━ ⌞💎⌝ ━━ • • ·*
「 ${command.toUpperCase()} 」
🜋↫┇الــسـؤال:「 مــن بالــصـوره 」*
🜋↫╎الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)} ┇
استخدم .انسحب للأنسحاب*
🜋↫╎الـجـائزة💰↞ ${poin} نقاط┇
∞┇━━━ •💎• ━━━┇∞
✠ ~تــ✍︎ــوقــيــع ↯:~
『 𝘽𝙮: 𝙯𝙚𝙯𝙤 』
     `.trim()
        conn.tebakbendera[id] = [
            await conn.sendFile(m.chat, json.img, '', caption, m),
            json, poin,
            setTimeout(() => {
                if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ *${json.name}* ┇`, conn.tebakbendera[id][0])
                delete conn.tebakbendera[id]
            }, timeout)
        ]
    } catch (err) {
        console.error(err)
        conn.reply(m.chat, '❌ حدث خطأ أثناء تحميل السؤال. يرجى المحاولة مرة أخرى في وقت لاحق.', m)
    }
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^بوتر|هاري/i

export default handler
