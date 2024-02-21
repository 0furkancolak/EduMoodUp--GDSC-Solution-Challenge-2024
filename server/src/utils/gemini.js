const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = async function ({ mutluluk, heyecan, endise, saskinlik, yorgunluk }) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Vereceğim veriler bir dersin bir haftasının öğrencinin psikolojik durumunu maksimum 5 puan olacak şekilde içeriyor. Bu veriler ile dersi veren öğretmene tek cümlede ne önerebilirsin. Lütfen nazik, dostcanlısı ve Türkçe cevap ver. 
    Mutluluk: ${mutluluk},
    Heyecan: ${heyecan},
    Endişe: ${endise},
    Şaşkınlık: ${saskinlik},
    Yorgunluk: ${yorgunluk},
    `

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}

