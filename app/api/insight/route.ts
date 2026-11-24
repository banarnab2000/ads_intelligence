import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const INSIGHT_SYSTEM_PROMPT = `You are OctaLume's AI Ad Insight Engine. You help advertisers optimize their CRM product ads across AI publishers. You have access to conversation analytics. Give strategic advice about ad spend, messaging, and publisher selection. Be concise and actionable.

Current client: Flowdesk CRM
Top performing publisher: Perplexity (5.4× ROAS)
Budget: $48.2k/month
Top competitors: Vertex CRM (#1), Flowdesk (#2), Salesloop (#3)`;

export async function POST(req: NextRequest) {
  try {
    const { messages, selectedPublisher } = await req.json();

    const publisherContext = selectedPublisher && selectedPublisher !== 'all'
      ? `\nFocus on publisher: ${selectedPublisher}`
      : '\nAnalyze across all publishers.';

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: INSIGHT_SYSTEM_PROMPT + publisherContext },
        ...messages,
      ],
      max_tokens: 400,
      temperature: 0.6,
    });

    return NextResponse.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('Insight API error:', error);
    return NextResponse.json({ error: 'Failed to generate insight' }, { status: 500 });
  }
}
