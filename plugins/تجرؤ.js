import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';

let yoMamaJokeHandler = async (m, { conn, text }) => {
  try {
    let res = await fetch(`https://shizoapi.onrender.com/api/texts/dare?apikey=shizo`);

    if (!res.ok) {
      throw new Error(`فشل طلب API مع الحالة ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let yoMamaJoke = `${json.result}`;
    
    let translation = await translate(yoMamaJoke, { to: 'ar' });

    let translatedYoMamaJoke = translation.text;

    m.reply(translatedYoMamaJoke);
  } catch (error) {
    console.error(error);
  }
};

yoMamaJokeHandler.help = ['yomamajoke'];
yoMamaJokeHandler.tags = ['fun'];
yoMamaJokeHandler.command = /^(تجرؤ)$/i;

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
