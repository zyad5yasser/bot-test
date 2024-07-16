import fs from 'fs';

let timeout = 60000;
let poin = 500;

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {};
    let id = m.chat;
    if (id in conn.tekateki) {
        conn.reply(m.chat, '*❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯*', conn.tekateki[id][0]);
        throw false;
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/قرآن.json`));
    let json = tekateki[Math.floor(Math.random() * tekateki.length)];
    let _clue = json.response;
    let clue = _clue.replace(/[A-Za-z]/g, ''); // Fixed this line
    let caption = `
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
    ${json.question}

❐↞┇الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)}

❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇

⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
> 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕
`.trim();
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n ❐↞┇الاجـابـة✅↞ ${json.response}┇`, conn.tekateki[id][0]);
            delete conn.tekateki[id];
        }, timeout)
    ];
};

handler.help = ['دين'];
handler.tags = ['fun'];
handler.command = /^(قرآن|سؤال-قران|سؤال-ايه)$/i;

export default handler;
