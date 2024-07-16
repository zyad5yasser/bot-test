import fetch from 'node-fetch';

let handler = async (m, { conn, text, command }) => {
    if (!text) throw `「 خــطــأ!! 」\n┇⤺ ايــن الــنـص؟\n┇⤺ مــثـال: ${command} مـن اخــر الـانـبـيـاء? `;

    try {
        await conn.sendMessage(m.chat, { text: "انتظر لحظة بينما أفكر في إجابتك... 🧠💭" }, { quoted: m });

        const kurosakiApi = `https://api-kurosaki-dev0.osc-fr1.scalingo.io/api/ai/gpt4?q=${encodeURIComponent(text)}`;
        const response = await fetch(kurosakiApi);
        const res = await response.json();

        if (res.status) {
            if (res.kurosaki) {
                await conn.sendMessage(m.chat, { text: `${res.kurosaki}\n> 𝘽𝙮: 𝙯𝙚𝙯𝙤 & 𝙠𝙪𝙧𝙤𝙨𝙖𝙠𝙞` }, { quoted: m });
            } else {
                await conn.sendMessage(m.chat, { text: "لم يتم العثور على نتيجة مناسبة لإجابتك. حاول مرة أخرى." }, { quoted: m });
            }
        } else {
            await conn.sendMessage(m.chat, { text: "حدث خطأ أثناء محاولة الحصول على الإجابة. الرجاء المحاولة لاحقاً." }, { quoted: m });
        }
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, { text: "فشل، الرجاء المحاولة في وقت لاحق." }, { quoted: m });
    }
};

handler.command = ['gpt4', 'جبت4', 'زيزو', 'جيبيتي'];
handler.tags = ['ai'];
handler.help = ['gpt4 <النص> - للحصول على إجابة باستخدام GPT-4'];

export default handler;
