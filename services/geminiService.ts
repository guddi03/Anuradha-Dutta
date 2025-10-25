import { GoogleGenAI } from "@google/genai";
import { CHATBOT_CONTEXT } from '../constants';

const getAi = () => {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
    }
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getChatbotResponse = async (userMessage: string): Promise<string> => {
  try {
    const ai = getAi();
    const fullPrompt = `${CHATBOT_CONTEXT}\n\nUser Question: "${userMessage}"\n\nAnswer:`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
        config: {
            temperature: 0.5,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 200,
        }
    });

    return response.text.trim();

  } catch (error) {
    console.error("Error getting response from Gemini API:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};
