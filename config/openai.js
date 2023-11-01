import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function chatGPT(strInput = "") {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a reliable assistant." },
      { role: "user", content: strInput }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0];
}
