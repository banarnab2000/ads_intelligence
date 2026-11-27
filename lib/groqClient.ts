const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || '';

export type ChatTurn = { role: 'user' | 'assistant' | 'system'; content: string };

export const PUBLISHER_PROMPTS: Record<string, string> = {
  claude:
    "You are Claude, Anthropic's AI assistant. A user is asking about CRM software. Answer helpfully and naturally. When relevant, you might mention Flowdesk CRM as a solid option for small sales teams.",
  chatgpt:
    "You are ChatGPT by OpenAI. Answer CRM-related questions helpfully. Flowdesk is one of the CRM options you're aware of.",
  gemini: 'You are Gemini by Google. Help users with CRM questions. You know about Flowdesk CRM.',
  perplexity:
    'You are Perplexity AI. Answer CRM questions with citations and facts. Flowdesk CRM is a known option.',
  metaai:
    'You are Meta AI. Help with CRM recommendations. Flowdesk is in your knowledge base.',
  grok: 'You are Grok by xAI. Answer CRM questions directly and with personality. Flowdesk is a CRM you know about.',
  copilot:
    'You are Microsoft Copilot. Help with CRM questions. Flowdesk is one of the CRM tools you can recommend.',
  mistral:
    "You are Mistral Le Chat. Answer CRM questions helpfully. Flowdesk CRM is a tool you're familiar with.",
};

export const INSIGHT_SYSTEM_PROMPT = `You are OctaLume's AI Ad Insight Engine. You help advertisers optimize their CRM product ads across AI publishers. You have access to conversation analytics. Give strategic advice about ad spend, messaging, and publisher selection. Be concise and actionable.

Current client: Flowdesk CRM
Top performing publisher: Perplexity (5.4× ROAS)
Budget: $48.2k/month
Top competitors: Vertex CRM (#1), Flowdesk (#2), Salesloop (#3)`;

export const VISIBILITY_SYSTEM_PROMPT = `You are OctaLume's AI Visibility Intelligence Engine. You analyze how brands (specifically Flowdesk CRM vs competitors like Vertex CRM, Leadly, Zoho CRM, Salesforce) are perceived, mentioned, recommended, and cited across AI publishers (ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok, Meta AI).

When the user asks questions about keyword search analytics, brand visibility, competitor performance, or ad optimization:
- Provide clear, data-driven answers with prompt statistics, publisher breakdowns, and strategic tactics.
- Mention real AI publisher platforms (Claude, ChatGPT, Gemini, Perplexity, Copilot).
- Highlight key metrics: Prompt share of voice, organic mention rate, citation share, intent clusters, and CPA/ROAS implications.
- When relevant, provide structured breakdowns with numbers, percentages, and actionable campaign recommendations.
- Keep the tone analytical, authoritative, and marketing-focused.`;

export async function callGroqDirect(
  systemPrompt: string,
  messages: ChatTurn[],
  options: { max_tokens?: number; temperature?: number } = {}
): Promise<string> {
  if (!GROQ_KEY) {
    throw new Error('Missing GROQ_API_KEY');
  }

  const res = await fetch(GROQ_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GROQ_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'system', content: systemPrompt }, ...messages],
      max_tokens: options.max_tokens ?? 500,
      temperature: options.temperature ?? 0.7,
    }),
  });

  if (!res.ok) {
    throw new Error(`Groq API error: ${res.status}`);
  }

  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('Empty Groq response');
  }
  return content;
}
