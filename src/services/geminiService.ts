import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getChatResponse(message: string, history: { role: string, parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: "Tu es l'assistant IA de l'ISP Gemena (Institut Supérieur Pédagogique de Gemena) en RDC. Ton rôle est d'aider les étudiants pour l'inscription, les informations académiques, et les questions administratives. Sois professionnel, accueillant et utilise un ton adapté au contexte éducatif africain. Réponds en français.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Veuillez réessayer plus tard.";
  }
}
