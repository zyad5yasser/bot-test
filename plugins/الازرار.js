import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import moment from 'moment-timezone';

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

let handler = async (m, { conn, args, usedPrefix, command }) => {
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let user = global.db.data.users[who];
    let prem = global.prems.includes(who.split`@`[0]);
    const time = moment.tz('Africa/Egypt').format('HH');
    let wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
    let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });
    let { role, premium, money, level, limit, exp, lastclaim, registered, regTime, age, warn, credit } = global.db.data.users[who];
    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

    // قائمة عناوين URL للصور
    const images = [
        'https://telegra.ph/file/a79388f9fa9385f59d6a3.png',
        'https://telegra.ph/file/9c5f3db7081f5fc0f8ad2.jpg',
        'https://telegra.ph/file/187d2833c018e15d866c4.jpg',
        'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg' // أضف عنوان URL ثالث هنا
    ];

    // اختيار عشوائي لعنوان URL من القائمة
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // إعداد رسالة الوسائط
    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

      let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `
╭──────────────╮
 ◉—⌈مــرحــبــا ${m.pushName}⌋—◉                                          
╰──────────────╯
╮─❮ مـعـلـومـات الـبـوت ❯ ─⊷❍
│🤖 اســم الــبـوت: 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕
│📚 الــمـنـصـه: scalingo 
│💻 رقــم الـمـطـور: https://wa.me/201508628077
│🕵🏻‍♂️ اســم الـمـطـور: 𝒁𝒆𝒛𝒐 
│⏰ وقــت الـتــشـغـيـل: ${uptime} 
╯─────『 زيزو 』────⊷❍
> ┄┄┄┄┄┄┄┄┄┄┄┄┄┄
╮─❮ الـوـقـت و الـتـاريــخ ❯ ─⊷❍
│📆 تـاريـخ الـيـوم: ${date} 
│🕛 الــوقــت: ${wib} 
╯─────『 زيزو 』────⊷❍
> ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
╮─❮ مـعـلـومـاتـك ❯ ─⊷❍
│👥 اســمـك: ${m.pushName} 
│🧏🏻‍♀️ عــمـرك: ${user.registered ? age : 'لست مسجل استخدم\n. سجلني اسمك. عمرك'}
│🕵🏻‍♂️ الـخـبـرة: ${exp} 
│⚽ لـفـلـك: ${level}
│💎 ألـمـاسـك: ${limit} 
│❤️‍🔥 مـسـجـل: ${registered ? 'نعم': 'لست مسجل استخدم\n.سجلني اسمك.عمرك'}
│✨ بـريـمـيـوم: ${prem ? 'نعم' : 'لا'}
│🚨 انـذاراتـك:  ${warn}/5
╯─────『 زيزو 』────⊷❍`
                    },
                    footer: {
                        text: '⌈ 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡ ⌋'
                    },
                    header: {
                        title: '',
                        hasMediaAttachment: true,
                        imageMessage: messa.imageMessage
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
                                buttonParamsJson: JSON.stringify({
                                    title: '『📜』الـقـوائــم',
                                    sections: [
                                        {
                                            title: '『❤️‍🔥』الـمـالــك《',
                                            highlight_label: '⌈ 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡ ⌋',
                                            rows: [
                                                {
                                                    header: 'info',
                                                    title: '❛❛ الـمـالــك ❛❛',
                                                    description: '',
                                                    id: '.المطور'
                                                }
                                            ]
                                        },
                                        {
                                            title: '『👥』الـجـروبـات『👥』',
                                            highlight_label: '⌈ 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡ ⌋',
                                            rows: [                                        
                                                {
                                                    header: '『』MENU《',
                                                    title: '❛❛ قـسـم الـالـقـاب ❛❛',
                                                    description: '',
                                                    id: '.3'
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '❛❛ عـرض الـجـروبـات ❛❛',
                                                    description: '',
                                                    id: '.5'
                                                },   
                                            ] 
                                       }, 
                                       {
                                            title: '『🪀』الـتـرفـيـه والـادوات『🪀』',
                                            highlight_label: '⌈ 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡ ⌋',
                                            rows: [
                                               {
                                                    header: '『』MENU《',
                                                    title: '❛❛ قـسـم الـتـنـزيـلـات ❛❛',
                                                    description: '',
                                                    id: '.4'
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '❛❛ قـسـم الـالـعـاب ❛❛',
                                                    description: '',
                                                    id: '.6'
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '❛❛ قـسـم الـتـرفـيـة ❛❛',
                                                    description: '',
                                                    id: '.6'
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '❛❛ قـسـم الـصـور ❛❛',
                                                    description: '',
                                                    id: '.2'
                                                },
                                                {
                                                    header: '『』MENU《',
                                                    title: '❛❛ الــادوات ❛❛',
                                                    description: '',
                                                    id: '.7'
                                                },
                                           ] 
                                        }, 
                                            {
                                            title: '❛❛ كـل الـاوامر ❛❛',
                                            highlight_label: '⌈ 𝐙𝐞𝐙𝐨 𝐁𝐨𝐓 ᥫ᭡ ⌋',
                                            rows: [
                                                {
                                                    header: '『📜』All MENU《',
                                                    title: '❛❛ كـل الـاوامـر ❛❛',
                                                    description: '',
                                                    id: '.10'
                                                }
                                            ]
                                        },
                                        {
                                            title: '❛❛ مــعـلـومـات ❛❛',
                                            highlight_label: '⌈ 𝚒𝚗𝚏𝚘 𝚋𝚘𝚝 ⌋',
                                            rows: [
                                                {
                                                    header: '『🤖』𝚒𝚗𝚏𝚘 𝚋𝚘𝚝',
                                                    title: '❛❛ الــدعــم ❛❛',
                                                    description: '',
                                                    id: '.الدعم'
                                                },
                                                {
                                                    header: '『🤖』𝚒𝚗𝚏𝚘 𝚋𝚘𝚝',
                                                    title: '❛❛ الـشـروط ❛❛',
                                                    description: '',
                                                    id: '.20'
                                                }
                                            ]
                                        }
                                    ]
                                }),
                                messageParamsJson: ''
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"『❤️‍🔥』الـمـالـك\",\"id\":\".المطور\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: "{\"display_text\":\"『🌐』مـوقـعــي\",\"url\":\"https://atom.bio/zyad_yasser\",\"merchant_url\":\"https://atom.bio/zyad_yasser\"}"
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "『✨』قـنـاتـي",                   
                                    url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a",
                                    merchant_url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a"
                                })
                            }
                        ]
                    }
                }
            }
        }
    }, {userJid: conn.user.jid, quoted: m});
conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});
    } 
handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['اوامر','الاوامر','menu','المهام'];

export default handler;
