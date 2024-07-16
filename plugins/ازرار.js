let  handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊${m.sender.split("@")[0]}⌉*
── • ◈ • ──

*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
           *⩥🎮│الترفيه│🎮⩤*
*⟣┈┈┈┈┈┈⟢┈┈┈ـ⟣┈┈┈┈┈┈┈⟢*
*│✮ ⃟❓❯ .هل*
*│✮ ⃟❓❯ .لو*
*│✮ ⃟💡❯ .نصيحه*
*│✮ ⃟🤐❯ .صراحه*
*│✮ ⃟👑❯ .تاج*
*│✮ ⃟💍❯ .زواج*
*│✮ ⃟💔❯ .طلاق*
*│✮ ⃟👬❯ .صداقه*
*│✮ ⃟🙋‍♂️❯ .تحداني*
*│✮ ⃟🏆❯ .توب*
*│✮ ⃟😂❯ .ميمز*
*│✮ ⃟🗣❯ .مقولات*
*│✮ ⃟💕❯ .الحب*
*│✮ ⃟🐱‍👤❯ .شخصيه*
*│✮ ⃟👽❯ .ذكاء*
*│✮ ⃟🤡❯ .غباء*
*│✮ ⃟🤙❯ .بوست*
*│✮ ⃟🌟❯ .اقتباس*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*`
            },
            body: {
              text: '> استمتع بالبوت'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'قسم الالعاب',
                        highlight_label: 'new',
                        rows: [
                          {
                            header: 'info',
                            title: '⌬ ❛╏',
                            description: '',
                            id: '.المطور'
                          }, 
                          {
                                header: 'العاب', 
                                title:'⌬ ❛╏زواج', 
                                description: '', 
                                id: '.زواج', 
                         }, 
                            {
                                header: 'العاب', 
                                title: '⌬ ❛╏لو', 
                                description: '', 
                                id: '.لو', 
                         }, 
                            {
                                header: 'العاب', 
                                title: '⌬ ❛╏طلاق', 
                                description: '', 
                                id: '.طلاق', 
                         }, 
                          
                            {
                                header: 'العاب', 
                                title: '⌬ ❛╏صراحه', 
                                description: '', 
                                id: '.صراحه', 
                         }, 
                      
                            {
                                header: 'العاب', 
                                title: '⌬ ❛╏احزر', 
                                description: '', 
                                id: '.احزر', 
                         }, 

                            {
                                header: 'العاب', 
                                title: '⌬ ❛╏خمن', 
                                description: '', 
                                id: '.خمن', 
                         }, 

                            {
                                header: 'العاب', 
                                title: '⌬ ❛╏تاج', 
                                description: '', 
                                id: '.تاج', 
                         }, 
                          
                            {
                                header: 'العاب', 
                                title: '⌬ ❛╏اقتباس', 
                                description: '', 
                                id: '.اقتباس', 
                         }, 


                        ]
                      }
                    ]
                  }),
                  messageParamsJson:''
                }
              ]
            }
          }
        }
      }
    },{})

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['1']

export default handler
