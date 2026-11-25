'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Send,
  Sparkles,
  BarChart3,
  TrendingUp,
  RotateCcw,
  Bot,
  User,
  Copy,
  Check,
  Search,
  Award,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  richData?: 'crm-analytics' | 'improve-visibility' | 'competitor-compare' | 'publisher-quality';
  timestamp: string;
}

const suggestedQuestions = [
  'Give search analytics for keyword "CRM"',
  'How to improve ad visibility over the competitors?',
  'Compare Flowdesk vs Vertex CRM visibility in buyer prompts',
  'Which AI publisher generates the highest quality CRM leads?',
];

export default function VisibilityChatWidget({
  heightClass = 'h-[calc(100vh-5.5rem)]',
  showTitle = true,
}: {
  heightClass?: string;
  showTitle?: boolean;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Welcome to **OctaLume AI Visibility Intelligence**. I continuously monitor buyer prompts, keyword prevalence, and competitor positioning across 8 major AI publishers (ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok, Meta AI).\n\nAsk any question about keyword search analytics, competitor share of voice, or how to outrank rival CRMs in AI-generated recommendations.',
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          'Welcome to **OctaLume AI Visibility Intelligence**. I continuously monitor buyer prompts, keyword prevalence, and competitor positioning across 8 major AI publishers (ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok, Meta AI).\n\nAsk any question about keyword search analytics, competitor share of voice, or how to outrank rival CRMs in AI-generated recommendations.',
        timestamp: 'Just now',
      },
    ]);
  };

  const handleSend = async (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!questionText) setInput('');
    setLoading(true);

    const lower = textToSend.toLowerCase();

    // Check for rich dummy responses
    if (lower.includes('crm') && (lower.includes('search analytics') || lower.includes('keyword') || lower.includes('analytics'))) {
      setTimeout(() => {
        const assistantMsg: ChatMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: 'Here is the comprehensive search and prompt frequency analytics for the keyword **"CRM"** across monitored AI publishers:',
          richData: 'crm-analytics',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setLoading(false);
      }, 700);
      return;
    }

    if (lower.includes('improve') || lower.includes('competitor') && lower.includes('visibility') || lower.includes('outrank')) {
      setTimeout(() => {
        const assistantMsg: ChatMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: 'Here is the strategic visibility playbook to outrank Vertex CRM, Leadly, and Zoho in AI buyer conversations:',
          richData: 'improve-visibility',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setLoading(false);
      }, 700);
      return;
    }

    if (lower.includes('compare') || lower.includes('vertex')) {
      setTimeout(() => {
        const assistantMsg: ChatMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: 'Here is the head-to-head visibility benchmark comparing **Flowdesk CRM** against **Vertex CRM** across AI publishers:',
          richData: 'competitor-compare',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setLoading(false);
      }, 700);
      return;
    }

    if (lower.includes('quality') || lower.includes('highest')) {
      setTimeout(() => {
        const assistantMsg: ChatMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: 'Here is the lead quality ranking and conversion efficiency across AI publisher platforms for Flowdesk CRM:',
          richData: 'publisher-quality',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setLoading(false);
      }, 700);
      return;
    }

    // Call API route
    try {
      const res = await fetch('/api/visibility-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.concat(userMsg).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: data.response || 'Unable to generate response. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const assistantMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content:
          'OctaLume AI Visibility Engine is currently in static preview mode. Click on any of the suggested prompts above to see complete prompt distributions, competitor share of voice, and tactical playbooks.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`max-w-[1200px] mx-auto space-y-5 pb-4 ${heightClass} flex flex-col`}>
      {/* Top Header */}
      {showTitle && (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 flex-shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
              AI Visibility Intelligence
            </h1>
            <span className="text-xs bg-[#e8ecff] text-[#2447ff] font-semibold px-2.5 py-0.5 rounded-full border border-blue-200">
              Copilot Engine
            </span>
          </div>
          <p className="text-sm text-[#667085] mt-0.5">
            Query prompt volume, keyword prevalence across AI publishers, and actionable visibility strategies
          </p>
        </div>

        <button
          onClick={resetChat}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#667085] hover:text-[#0e1116] bg-white border border-[#e3e6ec] px-3 py-1.5 rounded-lg hover:bg-[#f3f4f7] transition-colors self-start sm:self-auto"
        >
          <RotateCcw size={13} />
          Reset Chat
        </button>
      </div>
      )}

      {/* Suggested Dummy Questions Chips */}
      <div className="flex-shrink-0">
        <div className="text-xs font-semibold text-[#667085] mb-2 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles size={13} className="text-[#2447ff]" />
          Suggested Intelligence Queries:
        </div>
        <div className="flex gap-2 flex-wrap">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="text-xs px-3.5 py-1.5 rounded-full bg-white border border-[#e3e6ec] text-[#0e1116] hover:border-[#2447ff] hover:text-[#2447ff] hover:bg-[#e8ecff]/50 font-medium transition-all shadow-2xs flex items-center gap-1.5"
            >
              <Search size={11} className="text-[#2447ff]" />
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Stream Container */}
      <div className="flex-1 bg-white border border-[#e3e6ec] rounded-2xl overflow-hidden shadow-sm flex flex-col min-h-0">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {messages.map((m) => {
            const isUser = m.role === 'user';
            return (
              <div key={m.id} className={`flex gap-3.5 ${isUser ? 'justify-end' : 'justify-start'}`}>
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2447ff] to-[#7c3aed] flex items-center justify-center text-white flex-shrink-0 shadow-sm mt-0.5">
                    <Bot size={16} />
                  </div>
                )}

                <div className={`max-w-[92%] sm:max-w-[85%] space-y-2 ${isUser ? 'items-end' : 'items-start'}`}>
                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl p-4 sm:p-5 text-sm leading-relaxed ${
                      isUser
                        ? 'bg-[#0e1116] text-white rounded-tr-xs shadow-sm ml-auto'
                        : 'bg-[#f8f9fb] border border-[#e3e6ec] text-[#0e1116] rounded-tl-xs shadow-2xs'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{m.content}</div>

                    {/* Rich Data Card: CRM Analytics */}
                    {m.richData === 'crm-analytics' && (
                      <div className="mt-4 pt-4 border-t border-[#e3e6ec] space-y-5 text-xs text-[#0e1116]">
                        {/* Summary KPI Callout */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3 shadow-2xs">
                            <span className="text-[#667085] block mb-1">Monthly "CRM" Prompts</span>
                            <span className="text-xl font-bold text-[#2447ff]">142,500</span>
                            <span className="text-[11px] text-green-700 block mt-0.5">↑ +18% MoM growth</span>
                          </div>
                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3 shadow-2xs">
                            <span className="text-[#667085] block mb-1">Top Platform Volume</span>
                            <span className="text-xl font-bold text-[#0e1116]">ChatGPT (33.8%)</span>
                            <span className="text-[11px] text-[#667085] block mt-0.5">48,200 prompts</span>
                          </div>
                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3 shadow-2xs">
                            <span className="text-[#667085] block mb-1">Flowdesk Share of Voice</span>
                            <span className="text-xl font-bold text-[#0f9d6e]">24.2%</span>
                            <span className="text-[11px] text-[#667085] block mt-0.5">Rank #2 in category</span>
                          </div>
                        </div>

                        {/* Keyword Frequency by Publisher Platform */}
                        <div className="bg-white border border-[#e3e6ec] rounded-xl p-4 shadow-2xs">
                          <div className="font-semibold text-sm text-[#0e1116] mb-3 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <BarChart3 size={15} className="text-[#2447ff]" />
                              Frequency of "CRM" Keyword by AI Publisher
                            </span>
                            <span className="text-xs text-[#667085] font-normal">Sample: 142.5k prompts</span>
                          </div>

                          <div className="space-y-3">
                            {[
                              { pub: 'ChatGPT (OpenAI)', count: '48,200', pct: 33.8, color: '#16a34a' },
                              { pub: 'Claude (Anthropic)', count: '36,400', pct: 25.5, color: '#d97706' },
                              { pub: 'Google Gemini', count: '24,100', pct: 16.9, color: '#2563eb' },
                              { pub: 'Perplexity AI', count: '18,900', pct: 13.3, color: '#0d9488' },
                              { pub: 'Microsoft Copilot', count: '9,200', pct: 6.5, color: '#0078d4' },
                              { pub: 'Meta AI & Grok', count: '5,700', pct: 4.0, color: '#3b82f6' },
                            ].map((row) => (
                              <div key={row.pub} className="space-y-1">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="font-medium text-[#0e1116]">{row.pub}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[#667085]">{row.count} prompts</span>
                                    <span className="font-bold text-[#0e1116] w-12 text-right">{row.pct}%</span>
                                  </div>
                                </div>
                                <div className="w-full bg-[#f3f4f7] rounded-full h-2">
                                  <div
                                    className="h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${row.pct * 2.8}%`, backgroundColor: row.color }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Competitor SOV Breakdown */}
                        <div className="bg-white border border-[#e3e6ec] rounded-xl p-4 shadow-2xs">
                          <div className="font-semibold text-sm text-[#0e1116] mb-3 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <Award size={15} className="text-[#2447ff]" />
                              Competitor Share of Voice for "CRM" Queries
                            </span>
                            <span className="text-xs text-[#0f9d6e] font-medium bg-green-50 px-2 py-0.5 rounded-full">
                              Flowdesk in Top 2
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                            <div className="p-3 bg-[#fafafa] rounded-lg border border-[#e3e6ec]">
                              <span className="text-xs text-[#667085] block">#1 Vertex CRM</span>
                              <span className="text-lg font-bold text-[#0e1116]">38%</span>
                              <span className="text-[10px] text-[#667085] block">High prompt citations</span>
                            </div>
                            <div className="p-3 bg-[#e8ecff]/40 rounded-lg border border-[#2447ff]/30">
                              <span className="text-xs text-[#2447ff] font-semibold block">#2 Flowdesk (You)</span>
                              <span className="text-lg font-bold text-[#2447ff]">24%</span>
                              <span className="text-[10px] text-[#2447ff] block">Strong on Claude/Perp.</span>
                            </div>
                            <div className="p-3 bg-[#fafafa] rounded-lg border border-[#e3e6ec]">
                              <span className="text-xs text-[#667085] block">#3 Leadly</span>
                              <span className="text-lg font-bold text-[#0e1116]">21%</span>
                              <span className="text-[10px] text-[#667085] block">Free-tier mentions</span>
                            </div>
                            <div className="p-3 bg-[#fafafa] rounded-lg border border-[#e3e6ec]">
                              <span className="text-xs text-[#667085] block">#4 Pipewise / Others</span>
                              <span className="text-lg font-bold text-[#0e1116]">17%</span>
                              <span className="text-[10px] text-[#667085] block">Niche comparisons</span>
                            </div>
                          </div>
                        </div>

                        {/* Co-occurring Prompt Clusters */}
                        <div className="bg-gradient-to-r from-[#fafbff] to-[#f5f8ff] border border-blue-100 rounded-xl p-3.5 flex items-start gap-3">
                          <Layers size={18} className="text-[#2447ff] flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-xs text-[#0e1116] block">
                              High-Opportunity Prompt Cluster Identified:
                            </span>
                            <span className="text-xs text-[#667085] leading-relaxed block mt-0.5">
                              Queries matching <em>"CRM with automated follow-up"</em> surged <strong>+41%</strong> this week. Competitor visibility is unusually low in this cluster (Vertex: 14%, Leadly: 8%). Activating a dedicated $120/day Claude campaign will capture ~1,800 monthly high-intent buyer conversations.
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Rich Data Card: Improve Visibility */}
                    {m.richData === 'improve-visibility' && (
                      <div className="mt-4 pt-4 border-t border-[#e3e6ec] space-y-4 text-xs text-[#0e1116]">
                        <div className="font-semibold text-sm text-[#0e1116] flex items-center gap-1.5">
                          <TrendingUp size={16} className="text-[#0f9d6e]" />
                          4-Step Strategic Plan to Outrank Vertex CRM in AI Recommendations
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3.5 space-y-1.5 shadow-2xs">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-[#2447ff] text-white flex items-center justify-center text-[10px] font-bold">1</span>
                              <span className="font-semibold text-xs text-[#0e1116]">Reallocate Spend to Claude & Perplexity</span>
                            </div>
                            <p className="text-[#667085] leading-relaxed">
                              Claude generates your highest qualified lead rate (41%) at an acquisition CPA of $31, but only receives 25% of current budget. Shifting 15% from Meta AI to Claude and Perplexity directly increases top-ranked recommendations.
                            </p>
                          </div>

                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3.5 space-y-1.5 shadow-2xs">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-[#2447ff] text-white flex items-center justify-center text-[10px] font-bold">2</span>
                              <span className="font-semibold text-xs text-[#0e1116]">Target Uncontested Intent Clusters</span>
                            </div>
                            <p className="text-[#667085] leading-relaxed">
                              Configure ad context triggers for "automated lead follow-up" and "AI pipeline scoring". Vertex CRM is currently unrepresented in these search prompts, allowing Flowdesk to achieve 70%+ sponsored share of voice.
                            </p>
                          </div>

                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3.5 space-y-1.5 shadow-2xs">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-[#2447ff] text-white flex items-center justify-center text-[10px] font-bold">3</span>
                              <span className="font-semibold text-xs text-[#0e1116]">Citation Source Engineering</span>
                            </div>
                            <p className="text-[#667085] leading-relaxed">
                              Perplexity and Gemini cite third-party reviews (G2, Capterra, TechRadar) in 78% of responses. Launching a targeted review push on G2 will increase organic citations by an estimated +35% in model grounding runs.
                            </p>
                          </div>

                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3.5 space-y-1.5 shadow-2xs">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-[#2447ff] text-white flex items-center justify-center text-[10px] font-bold">4</span>
                              <span className="font-semibold text-xs text-[#0e1116]">Calibrate Relevancy Floor to 0.76</span>
                            </div>
                            <p className="text-[#667085] leading-relaxed">
                              Increasing the relevancy floor prevents ads from serving on casual, non-commercial CRM questions, preserving budget exclusively for teams actively evaluating software switches.
                            </p>
                          </div>
                        </div>

                        {/* Execution Timeline Diagram */}
                        <div className="bg-white border border-[#e3e6ec] rounded-xl p-3.5 shadow-2xs">
                          <span className="font-semibold text-xs text-[#0e1116] block mb-2">
                            Recommended 30-Day Execution Timeline:
                          </span>
                          <div className="flex items-center justify-between text-[11px] text-[#667085] border-t border-[#e3e6ec] pt-2">
                            <div className="text-center">
                              <span className="font-bold text-[#2447ff] block">Week 1</span>
                              <span>Shift $5k to Claude</span>
                            </div>
                            <span className="text-[#e3e6ec]">→</span>
                            <div className="text-center">
                              <span className="font-bold text-[#2447ff] block">Week 2</span>
                              <span>Launch Automation Ad</span>
                            </div>
                            <span className="text-[#e3e6ec]">→</span>
                            <div className="text-center">
                              <span className="font-bold text-[#2447ff] block">Week 3</span>
                              <span>G2 Review Sync</span>
                            </div>
                            <span className="text-[#e3e6ec]">→</span>
                            <div className="text-center">
                              <span className="font-bold text-[#0f9d6e] block">Week 4</span>
                              <span>+12pt SOV Lift</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Rich Data Card: Competitor Compare */}
                    {m.richData === 'competitor-compare' && (
                      <div className="mt-4 pt-4 border-t border-[#e3e6ec] space-y-4 text-xs text-[#0e1116]">
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs bg-white border border-[#e3e6ec] rounded-xl overflow-hidden shadow-2xs">
                            <thead>
                              <tr className="bg-[#fafafa] border-b border-[#e3e6ec]">
                                <th className="px-3 py-2.5 text-left font-semibold text-[#667085]">Metric</th>
                                <th className="px-3 py-2.5 text-right font-bold text-[#2447ff]">Flowdesk (You)</th>
                                <th className="px-3 py-2.5 text-right font-semibold text-[#0e1116]">Vertex CRM</th>
                                <th className="px-3 py-2.5 text-right font-semibold text-[#667085]">Advantage</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-[#e3e6ec]">
                                <td className="px-3 py-2.5 font-medium text-[#0e1116]">Paid Share of Voice</td>
                                <td className="px-3 py-2.5 text-right font-bold text-[#2447ff]">24%</td>
                                <td className="px-3 py-2.5 text-right font-semibold text-[#0e1116]">38%</td>
                                <td className="px-3 py-2.5 text-right text-red-600 font-medium">Vertex (+14%)</td>
                              </tr>
                              <tr className="border-b border-[#e3e6ec]">
                                <td className="px-3 py-2.5 font-medium text-[#0e1116]">Organic Mention Share</td>
                                <td className="px-3 py-2.5 text-right font-bold text-[#2447ff]">27%</td>
                                <td className="px-3 py-2.5 text-right font-semibold text-[#0e1116]">31%</td>
                                <td className="px-3 py-2.5 text-right text-red-600 font-medium">Vertex (+4%)</td>
                              </tr>
                              <tr className="border-b border-[#e3e6ec]">
                                <td className="px-3 py-2.5 font-medium text-[#0e1116]">Citation Grounding Share</td>
                                <td className="px-3 py-2.5 text-right font-bold text-[#2447ff]">19%</td>
                                <td className="px-3 py-2.5 text-right font-semibold text-[#0e1116]">34%</td>
                                <td className="px-3 py-2.5 text-right text-red-600 font-medium">Vertex (+15%)</td>
                              </tr>
                              <tr>
                                <td className="px-3 py-2.5 font-medium text-[#0e1116]">Buyer Sentiment Score</td>
                                <td className="px-3 py-2.5 text-right font-bold text-[#0f9d6e]">71% Positive</td>
                                <td className="px-3 py-2.5 text-right font-semibold text-[#0e1116]">64% Positive</td>
                                <td className="px-3 py-2.5 text-right text-green-700 font-medium">Flowdesk (+7%)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-[#667085] leading-relaxed">
                          <strong>Strategic Summary:</strong> Flowdesk enjoys higher organic buyer sentiment (+7% higher positive sentiment regarding pricing and onboarding simplicity), but Vertex CRM leads on raw citation volume across Gemini and Copilot.
                        </p>
                      </div>
                    )}

                    {/* Rich Data Card: Publisher Quality */}
                    {m.richData === 'publisher-quality' && (
                      <div className="mt-4 pt-4 border-t border-[#e3e6ec] space-y-3 text-xs text-[#0e1116]">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3 shadow-2xs">
                            <span className="text-xs font-bold text-[#d97706] block">#1 Claude (Opus)</span>
                            <span className="text-base font-bold text-[#0e1116] block mt-1">41% QL Rate</span>
                            <span className="text-[#667085] text-[11px] block">$31 CPA · 5.2× ROAS</span>
                          </div>
                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3 shadow-2xs">
                            <span className="text-xs font-bold text-[#16a34a] block">#2 ChatGPT (OpenAI)</span>
                            <span className="text-base font-bold text-[#0e1116] block mt-1">38% QL Rate</span>
                            <span className="text-[#667085] text-[11px] block">$34 CPA · 4.7× ROAS</span>
                          </div>
                          <div className="bg-white border border-[#e3e6ec] rounded-xl p-3 shadow-2xs">
                            <span className="text-xs font-bold text-[#0d9488] block">#3 Perplexity AI</span>
                            <span className="text-base font-bold text-[#0e1116] block mt-1">36% QL Rate</span>
                            <span className="text-[#667085] text-[11px] block">$26 CPA · 4.2× ROAS</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Message Metadata & Action Buttons */}
                  <div className="flex items-center gap-2 px-1 text-[11px] text-[#667085]">
                    <span>{m.timestamp}</span>
                    <span>·</span>
                    <button
                      onClick={() => handleCopy(m.id, m.content)}
                      className="hover:text-[#0e1116] flex items-center gap-1 transition-colors"
                    >
                      {copiedId === m.id ? <Check size={11} className="text-green-600" /> : <Copy size={11} />}
                      {copiedId === m.id ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-[#0e1116] flex items-center justify-center text-white flex-shrink-0 shadow-sm mt-0.5">
                    <User size={15} />
                  </div>
                )}
              </div>
            );
          })}

          {loading && (
            <div className="flex gap-3.5 items-start">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2447ff] to-[#7c3aed] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <Bot size={16} />
              </div>
              <div className="bg-[#f8f9fb] border border-[#e3e6ec] rounded-2xl rounded-tl-xs p-4 text-sm text-[#667085] flex items-center gap-2 shadow-2xs">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2447ff] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#2447ff] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#2447ff] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span>Analyzing prompt clusters and publisher metrics...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-[#e3e6ec] bg-[#fafafa]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Ask about keyword analytics, competitor visibility, prompt share of voice (e.g. Give search analytics for keyword "CRM")...'
              className="flex-1 bg-white border border-[#e3e6ec] rounded-xl px-4 py-3 text-sm text-[#0e1116] placeholder:text-[#667085]/70 focus:outline-none focus:border-[#2447ff] focus:ring-1 focus:ring-[#2447ff] shadow-2xs"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-[#2447ff] text-white p-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex-shrink-0"
            >
              <Send size={16} />
            </button>
          </form>
          <div className="flex items-center justify-between text-[11px] text-[#667085] mt-2 px-1">
            <span>OctaLume AI Visibility Engine · Model: llama-3.3-70b-versatile via Groq</span>
            <span>Real-time Prompt Intelligence</span>
          </div>
        </div>
      </div>
    </div>
  );
}
