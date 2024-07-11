let handler = async (m, { conn, text, command,usedPrefix }) => {
    let lister = ["سقف", "بنوهات", "مكاتب"];
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ");
    const pp = '';
    const skf = [
        "https://telegra.ph/file/1d0cfaa5edc276c0aee24.jpg",
        "https://telegra.ph/file/2e34df869daceff8b0854.jpg",
        "https://telegra.ph/file/f9c37a38668a226115382.jpg",
        "https://telegra.ph/file/8526942a7978b2767cb58.jpg",
        "https://telegra.ph/file/972cc7992408cb569a881.jpg",
        "https://telegra.ph/file/891471a3784c8ae7e9aa9.jpg",
        "https://telegra.ph/file/7d33781899219fc554281.jpg",
        "https://telegra.ph/file/3802d34be42131e03518c.jpg",
        "https://telegra.ph/file/500646c2f92f253479705.jpg",
        "https://telegra.ph/file/8251bf6a99455d71525c3.jpg",
        "https://telegra.ph/file/9b7dd69166000ea9bf5b8.jpg",
        "https://telegra.ph/file/ff481262cdaae5e861c00.jpg",
        "https://telegra.ph/file/40a5c398f32f32091b5f5.jpg",
        "https://telegra.ph/file/3912e45e43fb32d1eb4be.jpg",
        "https://telegra.ph/file/e704ae5b0040b2f88395f.jpg",
        "https://telegra.ph/file/34f897ec3955d89a5d126.jpg",
        "https://telegra.ph/file/a10e6ab32e2c06af43134.jpg",
        "https://telegra.ph/file/c47bfe822feda388128ce.jpg",
        "https://telegra.ph/file/9d1cdc12acba04e3c6401.jpg",
        "https://telegra.ph/file/56abbda7bafbc44144987.jpg",
        "https://telegra.ph/file/b7a35f1d69e92351a7577.jpg",
        "https://telegra.ph/file/2a0e05027064257f1a484.jpg",
        "https://telegra.ph/file/bde74f688639e0bcc9a63.jpg",
        "https://telegra.ph/file/96cac398506075c2b9648.jpg",
        "https://telegra.ph/file/39dbf71c7506169a524c4.jpg",
        "https://telegra.ph/file/e456ff3993dc16b11e9ea.jpg",
        "https://telegra.ph/file/2ba16072fd1e3288500a0.jpg",
        "https://telegra.ph/file/0804656c5b52c38e94af6.jpg",
        "https://telegra.ph/file/c82b1daf13238a07128c4.jpg",
        "https://telegra.ph/file/bc57a0545fc58b1b4a712.jpg",
        "https://telegra.ph/file/cc146cbc679012385601e.jpg",
        "https://telegra.ph/file/ed4fa7e6df832a6c4d3a7.jpg",
        "https://telegra.ph/file/ce0681055c0dab24cf1ce.jpg",
        "https://telegra.ph/file/7633dcc65e15a91d065b1.jpg",
        "https://telegra.ph/file/a0d15eefe525c03f3193d.jpg",
        "https://telegra.ph/file/1896beb52e3f0f7bb9f5c.jpg",
        "https://telegra.ph/file/80711ab1fbe6398676b5f.jpg",
        "https://telegra.ph/file/9a570c1271720b0f3561e.jpg",
        "https://telegra.ph/file/038769de81e4637a134a6.jpg",
        "https://telegra.ph/file/86117af49de9a0c8c2d4a.jpg",
        "https://telegra.ph/file/d5bbdaab90c33b46020b8.jpg",
        "https://telegra.ph/file/bda892b40f3100531bc57.jpg",
        "https://telegra.ph/file/d874eecc05509ca02d61c.jpg",
        "https://telegra.ph/file/4979f4d9ac0615b10a771.jpg",
        "https://telegra.ph/file/1b42d5309f161737c119b.jpg",
        "https://telegra.ph/file/28c0bfb59f19193584af6.jpg",
        "https://telegra.ph/file/ed91f359f33c3701f7628.jpg",
        "https://telegra.ph/file/13b7076d8915b936c873e.jpg"
    ];
    
    const Erth = [
        'https://telegra.ph/file/2d9e02440f5eab022919a.jpg',
        'https://telegra.ph/file/866f84289c45a81ddad32.jpg',
        'https://telegra.ph/file/866f84289c45a81ddad32.jpg'
    ];
    
    const hawat = [
    "https://telegra.ph/file/44dcfe4efd1b85071b307.jpg",
    "https://telegra.ph/file/d5e89af69dc23779aedd9.jpg",
    "https://telegra.ph/file/9880138bde78ced8a75f9.jpg",
    "https://telegra.ph/file/c56114c07ceeeae9f5fcd.jpg",
    "https://telegra.ph/file/e7d371fed434fd7e79868.jpg",
    "https://telegra.ph/file/aad0ec6464ebad007d8f2.jpg",
    "https://telegra.ph/file/7c2c1a93a91136159cefa.jpg",
    "https://telegra.ph/file/1ab1993f0615387623850.jpg",
    "https://telegra.ph/file/f42517e892b2339194c06.jpg",
    "https://telegra.ph/file/5ff12a915d17daeb66d9f.jpg",
    "https://telegra.ph/file/def8d26036ce2652f1625.jpg",
    "https://telegra.ph/file/9843523a39b22e8621abe.jpg",
    "https://telegra.ph/file/3a05aabbea0b800b706ef.jpg",
    "https://telegra.ph/file/20f62f97f5a3c60e9ca55.jpg",
    "https://telegra.ph/file/277eb079e07a57036214d.jpg",
    "https://telegra.ph/file/fbd93c1a4e4110ea77bca.jpg",
    "https://telegra.ph/file/761e139f37e915ec961cf.jpg",
    "https://telegra.ph/file/a7748fdcc0d3c0db6f6c2.jpg",
    "https://telegra.ph/file/aac298d2ced1684e3b667.jpg",
    "https://telegra.ph/file/17f2b3285987e2f876ada.jpg",
    "https://telegra.ph/file/cf2944f4c6d2e4613c0a2.jpg",
    "https://telegra.ph/file/6846f9b433aa45606445c.jpg",
    "https://telegra.ph/file/92e482512860b9e38cf9a.jpg",
    "https://telegra.ph/file/eb8f7b87b6063ad8ac246.jpg",
    "https://telegra.ph/file/76e7cef2835b9ab8fb048.jpg",
    "https://telegra.ph/file/1ba1187ad3eed54e3e578.jpg",
    "https://telegra.ph/file/71bbb78175cee05778013.jpg",
    "https://telegra.ph/file/314d8adbfb2e17b61796b.jpg",
    "https://telegra.ph/file/fdba73ba30a48b67e2101.jpg",
    "https://telegra.ph/file/48f420cfa699c2480bcd3.jpg",
    "https://telegra.ph/file/941d5add7d29c827949c3.jpg",
    "https://telegra.ph/file/d86de4b1082b7451fcee9.jpg"
  ];
    
    if (!lister.includes(feature)) {
        return conn.sendButton(m.chat, 'عليك اختيار احد الازرار لعرض الصور', 'zezo',pp, [['صور السقف', `${usedPrefix + command} سقف`],['صور بانوهات',`${usedPrefix + command} بنوهات`],['صور المكاتب',`${usedPrefix + command} مكاتب`]],null,null, m);
    }
    
    if (feature == 'سقف') {
        const _skf = skf[Math.floor(skf.length * Math.random())];
        conn.sendButton(m.chat, '', '', _skf, [['صورة أخرى', `${usedPrefix + command} سقف`]],null,null, m);
    } else if (feature == 'مكاتب') {
        const _Erth = Erth[Math.floor(Erth.length * Math.random())];
        conn.sendButton(m.chat, '', '', _Erth, [['صورة أخرى', `${usedPrefix + command} مكاتب`]],null,null, m);
    } else if (feature == 'بنوهات') {
        const _hawat = hawat[Math.floor(hawat.length * Math.random())];
        conn.sendButton(m.chat, '', '', _hawat, [['صورة أخرى', `${usedPrefix + command} بنوهات`]],null,null, m);
    }
};

handler.help = ['Z E Z O'];
handler.tags = ['Z E Z O'];
handler.command = ['تست'];

export default handler;
