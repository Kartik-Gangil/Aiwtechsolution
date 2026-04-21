'use server'
import { GoogleGenAI } from '@google/genai';
import { config } from 'dotenv';
config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });


const createPrompt = (businessName, category, address) => {
    return `
   Act as an expert marketing copywriter.

I will provide you with the following business details:

Business Name: ${businessName}
Category/Industry: ${category}
Location (optional): ${address}

Your task is to generate a highly engaging, interactive, and professional business description that:

Captures attention within the first 2 lines
Clearly explains what the business does
Highlights unique value and strengths
Uses a friendly and persuasive tone
Feels modern and customer-focused
Includes a subtle call-to-action
Keeps it concise (100–150 words)

Make the description suitable for platforms like Google Business, websites, or social media.

Example Input:

Business Name: Urban Brew Cafe
Category: Coffee Shop
Location: Delhi

strictly follow these rules
dont give markdown format.
only give short description in plain text
    `;
}



async function generateDescription(businessName, category, address) {
    const content = createPrompt(businessName, category, address)
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: content,
    });
    return response.text;
}

export default generateDescription;