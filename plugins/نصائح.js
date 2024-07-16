import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg

var handler = async (m, { conn, usedPrefix }) => {
const tips = [
  'احرص على تناول وجبة الإفطار يومياً للحصول على الطاقة اللازمة لبدء يومك بنشاط.',
  'مارس الرياضة بانتظام لتحسين صحتك الجسدية والعقلية.',
  'احصل على قسط كافٍ من النوم كل ليلة لتحسين وظائفك العقلية والجسدية.',
  'تجنب التوتر عبر ممارسة التأمل أو اليوغا أو الأنشطة الترفيهية.',
  'اشرب كميات كافية من الماء يومياً للحفاظ على ترطيب جسمك.',
  'تناول الفواكه والخضروات بكثرة لتحصل على الفيتامينات والمعادن اللازمة.',
  'حدد أهدافك واكتبها لتزيد من احتمالية تحقيقها.',
  'تجنب التسويف عبر تنظيم وقتك وإنشاء جدول زمني.',
  'تعلم شيئاً جديداً كل يوم لتحافظ على نشاط عقلك.',
  'احرص على بناء علاقات إيجابية وداعمة مع من حولك.',
  'خذ فترات راحة منتظمة خلال عملك لتجنب الإرهاق.',
  'تعامل بلطف واحترام مع الآخرين لتحصل على نفس المعاملة.',
  'اقرأ الكتب والمقالات لتنمية معرفتك وثقافتك.',
  'استمع للموسيقى الهادئة لتخفيف التوتر وتحسين المزاج.',
  'احرص على تنظيف وتنظيم مكان عملك لزيادة إنتاجيتك.',
  'تجنب تناول الوجبات السريعة والمشروبات الغازية للحفاظ على صحتك.',
  'تعلم كيفية إدارة مالك بحكمة لتجنب الديون والمشاكل المالية.',
  'خصص وقتاً لممارسة هواياتك وأنشطتك المفضلة لتحافظ على توازنك النفسي.',
  'احرص على التواصل الفعال مع الآخرين والاستماع الجيد لهم.',
  'تعلم كيفية قول "لا" عندما تحتاج إلى ذلك لحماية وقتك وطاقتك.',
  'اعترف بأخطائك وتعلم منها لتتحسن وتتقدم في حياتك.',
  'مارس الامتنان يومياً عبر التفكير في الأشياء الجيدة في حياتك.',
  'استشر أخصائيين في حال شعورك بأي مشاكل صحية أو نفسية.',
  'اعمل على تحسين مهاراتك الاجتماعية والمهنية باستمرار.',
  'استغل وقتك الفارغ في تعلم مهارات جديدة ومفيدة.',
  'تجنب الأشخاص السلبيين وابحث عن الأشخاص الذين يدعمونك ويشجعونك.'
];
/*const randomImage = hekma[Math.floor(Math.random() * hekma.length)];
const url = ['https://telegra.ph/file/a69f4e9cf361408214a3b.jpg', 
             'https://telegra.ph/file/995e4fe8d4371d4a9693b.jpg', 
             'https://telegra.ph/file/f7a08e8795b30c396120d.jpg', 
             'https://telegra.ph/file/a1e458b7b401438c4d042.jpg', 
             'https://telegra.ph/file/bf83eff9c3ac97ae622f6.jpg', 
             'https://telegra.ph/file/95b96de8542d96ac3523b.jpg', 
             'https://telegra.ph/file/46f96abe2d0486290a40f.jpg', 
             'https://telegra.ph/file/636f8e455d8d8263ec80b.jpg'
             ];*/
  const randomImage = tips[Math.floor(Math.random() * tips.length)];
   var messa = await prepareWAMessageMedia({ image: { url:'https://telegra.ph/file/d8fd7845649fdcab77f5b.png' } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${randomImage}*\n*⊱─═⪨༻𓆩⚡𓆪༺⪩═─⊰*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝒁𝒆𝒛𝒐 𝑩𝒐𝒕"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*⊱⪨༻𓆩〘 نــــصــائـــــح 💗〙𓆪༺⪩⊰*",
            subtitle: "",
            hasMediaAttachment: true, 
            imageMessage: messa.imageMessage, 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
               name: "quick_reply",
               buttonParamsJson:JSON.stringify({
                 "display_text":"التالي","id":".نصيحه" 
                })
               }, 
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"الدعم\",\"id\":\".الدعم\"}"
               } 
              ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

} 
handler.tags = ['frasss'];
handler.command = ['نصائح','نصيحه'];
export default handler; 
