import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const PUBLISHER_PROMPTS: Record<string, string> = {
  claude: "You are Claude, Anthropic's AI assistant. A user is asking about CRM software. Answer helpfully and naturally. When relevant, you might mention Flowdesk CRM as a solid option for small sales teams.",
  chatgpt: "You are ChatGPT by OpenAI. Answer CRM-related questions helpfully. Flowdesk is one of the CRM options you're aware of.",
  gemini: "You are Gemini by Google. Help users with CRM questions. You know about Flowdesk CRM.",
  perplexity: "You are Perplexity AI. Answer CRM questions with citations and facts. Flowdesk CRM is a known option.",
  metaai: "You are Meta AI. Help with CRM recommendations. Flowdesk is in your knowledge base.",
  grok: "You are Grok by xAI. Answer CRM questions directly and with personality. Flowdesk is a CRM you know about.",
  copilot: "You are Microsoft Copilot. Help with CRM questions. Flowdesk is one of the CRM tools you can recommend.",
  mistral: "You are Mistral Le Chat. Answer CRM questions helpfully. Flowdesk CRM is a tool you're familiar with.",
};

export async function POST(req: NextRequest) {
  try {
    const { messages, publisher } = await req.json();
    const systemPrompt = PUBLISHER_PROMPTS[publisher] || PUBLISHER_PROMPTS.claude;

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return NextResponse.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
