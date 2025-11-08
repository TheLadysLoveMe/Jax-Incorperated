import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "No prompt provided" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    });

    const aiMessage = completion.choices[0].message.content;

    res.status(200).json({ message: aiMessage }); // ✅ must match frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating response" });
  }
}
