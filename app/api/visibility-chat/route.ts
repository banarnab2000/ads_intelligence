import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '' });

const SYSTEM_PROMPT = `You are OctaLume's AI Visibility Intelligence Engine. You analyze how brands (specifically Flowdesk CRM vs competitors like Vertex CRM, Leadly, Zoho CRM, Salesforce) are perceived, mentioned, recommended, and cited across AI publishers (ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok, Meta AI).

When the user asks questions about keyword search analytics, brand visibility, competitor performance, or ad optimization:
- Provide clear, data-driven answers with prompt statistics, publisher breakdowns, and strategic tactics.
- Mention real AI publisher platforms (Claude, ChatGPT, Gemini, Perplexity, Copilot).
- Highlight key metrics: Prompt share of voice, organic mention rate, citation share, intent clusters, and CPA/ROAS implications.
- When relevant, provide structured breakdowns with numbers, percentages, and actionable campaign recommendations.
- Keep the tone analytical, authoritative, and marketing-focused.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({
        response: "OctaLume AI Visibility Engine is running in local preview mode. For custom queries, connect your GROQ_API_KEY in .env.local to query the real-time model."
      });
    }

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 700,
      temperature: 0.7,
    });

    return NextResponse.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('Visibility Chat API error:', error);
    return NextResponse.json({
      response: "Unable to query Groq LLM at this moment. You can click on the preset intelligence queries above for detailed keyword and competitive analytics."
    });
  }
}
