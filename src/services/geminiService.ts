import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getSalonLocationData() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Get detailed information about 'The Nail Spa' located at 150 Avenida Friedrich Engels, Maputo, Mozambique. Include its exact coordinates, rating, and any recent review snippets.",
      config: {
        tools: [{ googleMaps: {} }],
      },
    });

    return {
      text: response.text,
      groundingChunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks,
    };
  } catch (error) {
    console.error("Error fetching location data:", error);
    return null;
  }
}
