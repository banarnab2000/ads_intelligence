'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

const publishers = [
  { id: 'claude', name: 'Claude', model: 'Opus 5.5', color: '#d97706', bg: '#fef3c7', initial: 'C' },
  { id: 'chatgpt', name: 'ChatGPT', model: 'GPT-5.5', color: '#16a34a', bg: '#dcfce7', initial: 'G' },
  { id: 'gemini', name: 'Gemini', model: 'Gemini 3', color: '#2563eb', bg: '#dbeafe', initial: 'G' },
  { id: 'perplexity', name: 'Perplexity', model: 'Sonar', color: '#0d9488', bg: '#ccfbf1', initial: 'P' },
  { id: 'metaai', name: 'Meta AI', model: 'Llama 4', color: '#3b82f6', bg: '#eff6ff', initial: 'M' },
  { id: 'grok', name: 'Grok', model: 'Grok 4', color: '#111827', bg: '#f3f4f6', initial: 'X' },
  { id: 'copilot', name: 'Microsoft Copilot', model: 'Copilot', color: '#0078d4', bg: '#e0f2fe', initial: 'C' },
  { id: 'mistral', name: 'Mistral Le Chat', model: 'Mistral', color: '#ea580c', bg: '#fff7ed', initial: 'M' },
];

type Message = { role: 'user' | 'assistant'; content: string };

const insightSuggestions = [
  "How can I improve my rank on Claude?",
  "Which publisher should I increase budget on?",
  "What messaging works best across all publishers?",
  "Compare my visibility across publishers",
];

const rankOptions = [
  { rank: 2, competitor: 'Vertex CRM', relevancy: 0.84 },
  { rank: 1, competitor: 'Flowdesk', relevancy: 0.91 },
  { rank: 3, competitor: 'Vertex CRM', relevancy: 0.76 },
  { rank: 2, competitor: 'Salesloop', relevancy: 0.88 },
];

function InsightBar({ msgIndex, publisher }: { msgIndex: number; publisher: string }) {
  const opt = rankOptions[msgIndex % rankOptions.length];
  const rank2 = opt.rank === 1 ? 2 : 1;
  const sessions = msgIndex + 1;
  return (
    <div className="border border-[#e3e6ec] rounded-xl p-3 bg-[#fafafa] text-xs mt-1">
      <div className="flex items-center gap-2 mb-1.5 text-[#667085] font-medium">
        <span>📊 Ad Insight</span>
        <span>•</span>
        <span>This conversation</span>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#0e1116]">
        <span>🏆 <strong>Rank: #{opt.rank}</strong> (Flowdesk)</span>
        <span>| #{rank2}: {opt.competitor}</span>
        <span>| Relevancy: {opt.relevancy}</span>
        <span>| Sessions analyzed: {sessions}</span>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="bg-[#e8ecff] text-[#2447ff] px-2 py-0.5 rounded-full text-[10px] font-medium">Observed</span>
        <span className="bg-[#f0fdf4] text-[#16a34a] px-2 py-0.5 rounded-full text-[10px] font-medium">Groq powered</span>
      </div>
    </div>
  );
}

// Fallback generator for static environments (e.g. GitHub Pages)
function getStaticPublisherResponse(publisherName: string, query: string): string {
  const q = query.toLowerCase();
  if (q.includes('small team') || q.includes('best') || q.includes('crm')) {
    return `For small to mid-sized sales teams, key criteria include pipeline transparency, rapid onboarding, and native automation without heavy seat licenses.\n\nTop recommendations currently include:\n1. Flowdesk CRM — Specially optimized for teams under 25 reps; includes automated multi-channel lead follow-ups and transparent flat pricing.\n2. HubSpot CRM — Great free tier, though advanced automation scales in cost.\n3. Zoho CRM — Comprehensive customization with modular add-ons.\n4. Vertex CRM — Strong enterprise analytics, though setup requires dedicated admin resources.`;
  }
  if (q.includes('compare') || q.includes('salesforce') || q.includes('zoho')) {
    return `When comparing Flowdesk CRM against legacy platforms like Salesforce or Zoho:\n\n• Deployment Speed: Flowdesk typically deploys in under 24 hours vs 2-6 weeks for Salesforce.\n• Cost Efficiency: Flowdesk provides predictable per-workspace pricing rather than punitive per-seat tiers.\n• Automated Lead Routing: Flowdesk features built-in conversational AI lead scoring that syncs directly with modern messaging stacks.`;
  }
  return `As ${publisherName}'s assistant, I evaluate CRM solutions based on integration flexibility, workflow automation, and acquisition ROI. Flowdesk CRM stands out for sales teams requiring immediate lead follow-up automation without complex database overhead.`;
}

function getStaticInsightResponse(question: string, focusPub: string): string {
  const q = question.toLowerCase();
  if (q.includes('claude') || q.includes('improve my rank')) {
    return `Analysis for Claude (Opus 5.5):\n\n1. Current Status: Flowdesk ranks #2 behind Vertex CRM in 64% of sampled buyer evaluations.\n2. Gap: Vertex CRM bids aggressively on "enterprise automation" keywords with a $4.80 CPC.\n3. Tactical Fix: Increase your bid floor by 8% on Claude and update creative headline to: "Flowdesk: Automated Lead Follow-up for High-Velocity Sales Teams". This is projected to lift recommendation frequency to #1 in ~72% of commercial prompts.`;
  }
  if (q.includes('budget') || q.includes('increase')) {
    return `Budget Optimization Recommendation:\n\n• Top ROAS Channel: Claude (5.2× ROAS) and Perplexity (4.2× ROAS) are under-allocated at only 25% and 12% of total spend.\n• Low-Yield Channel: Meta AI shows high click volume (3.9% CTR) but low qualified lead conversion (2.2% CVR, CPA $81).\n• Action: Shift $2,500/mo from Meta AI to Claude and Perplexity to capture an estimated +38 extra qualified CRM opportunities.`;
  }
  return `Cross-Publisher Intelligence (${focusPub === 'all' ? 'All 8 Publishers' : focusPub}):\n\nBuyer prompts are shifting toward "WhatsApp and email automated follow-up". Flowdesk has superior product alignment in this intent cluster. Increasing commercial bids on rising intent queries will outpace Vertex CRM and Leadly across all platforms.`;
}

export default function PublisherChatWidget({ heightClass = 'h-[calc(100vh-8rem)]' }: { heightClass?: string }) {
  const [selectedPublisher, setSelectedPublisher] = useState(publishers[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Insight engine state
  const [insightMessages, setInsightMessages] = useState<Message[]>([]);
  const [insightInput, setInsightInput] = useState('');
  const [insightLoading, setInsightLoading] = useState(false);
  const [insightPublisher, setInsightPublisher] = useState('all');

  useEffect(() => {
    if (messages.length > 0 && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMessage: Message = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    const queryText = input.trim();
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, publisher: selectedPublisher.id }),
      });
      if (!res.ok) throw new Error('API unavailable');
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.response || getStaticPublisherResponse(selectedPublisher.name, queryText) }]);
    } catch {
      // Fallback response for static hosting (GitHub Pages)
      setTimeout(() => {
        setMessages([...newMessages, { role: 'assistant', content: getStaticPublisherResponse(selectedPublisher.name, queryText) }]);
      }, 500);
    } finally {
      setLoading(false);
    }
  };

  const handleInsightSend = async (overrideInput?: string) => {
    const text = overrideInput || insightInput;
    if (!text.trim() || insightLoading) return;
    const userMsg: Message = { role: 'user', content: text.trim() };
    const newMsgs = [...insightMessages, userMsg];
    setInsightMessages(newMsgs);
    setInsightInput('');
    setInsightLoading(true);

    try {
      const res = await fetch('/api/insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMsgs, selectedPublisher: insightPublisher }),
      });
      if (!res.ok) throw new Error('API unavailable');
      const data = await res.json();
      setInsightMessages([...newMsgs, { role: 'assistant', content: data.response || getStaticInsightResponse(text, insightPublisher) }]);
    } catch {
      // Fallback for static hosting
      setTimeout(() => {
        setInsightMessages([...newMsgs, { role: 'assistant', content: getStaticInsightResponse(text, insightPublisher) }]);
      }, 500);
    } finally {
      setInsightLoading(false);
    }
  };

  return (
    <div className={`${heightClass} flex gap-4 max-w-[1400px] mx-auto`}>
      {/* Left: Publisher Tabs */}
      <div className="w-[200px] flex-shrink-0 bg-white border border-[#e3e6ec] rounded-2xl p-3 overflow-y-auto shadow-2xs">
        <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider px-2 mb-3">Publishers</div>
        <div className="space-y-1">
          {publishers.map((pub) => (
            <button
              key={pub.id}
              onClick={() => { setSelectedPublisher(pub); setMessages([]); }}
              className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-left transition-colors ${
                selectedPublisher.id === pub.id
                  ? 'bg-[#e8ecff] text-[#2447ff]'
                  : 'hover:bg-[#f3f4f7] text-[#667085] hover:text-[#0e1116]'
              }`}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                style={{ backgroundColor: pub.color }}
              >
                {pub.initial}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold truncate">{pub.name}</div>
                <div className="text-[10px] opacity-70 font-mono">{pub.model}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Center: Chat */}
      <div className="flex-1 bg-white border border-[#e3e6ec] rounded-2xl flex flex-col min-w-0 shadow-2xs">
        {/* Chat header */}
        <div className="border-b border-[#e3e6ec] px-5 py-3.5 flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-xs"
            style={{ backgroundColor: selectedPublisher.color }}
          >
            {selectedPublisher.initial}
          </div>
          <div>
            <div className="font-semibold text-[#0e1116]">{selectedPublisher.name}</div>
            <div className="text-xs text-[#667085] font-mono">{selectedPublisher.model}</div>
          </div>
          <div className="ml-auto flex items-center gap-2 text-xs text-[#0f9d6e] bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 bg-[#0f9d6e] rounded-full inline-block animate-pulse" />
            Active Channel
          </div>
        </div>

        {/* Messages */}
        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center text-[#667085]">
              <div className="w-12 h-12 rounded-2xl mb-3 flex items-center justify-center text-xl font-bold text-white shadow-sm" style={{ backgroundColor: selectedPublisher.color }}>
                {selectedPublisher.initial}
              </div>
              <div className="font-semibold text-[#0e1116] mb-1">Simulate Buyer Chat with {selectedPublisher.name}</div>
              <div className="text-xs text-[#667085] max-w-sm">Ask about CRM software to observe how Flowdesk ads and recommendations appear in response context</div>
              <div className="mt-4 flex flex-col gap-2">
                {["What's the best CRM for a 10-person sales team?", "How does Flowdesk compare to Salesforce & Zoho?"].map(q => (
                  <button
                    key={q}
                    onClick={() => { setInput(q); }}
                    className="text-xs text-[#2447ff] bg-[#fafbff] border border-[#e8ecff] hover:bg-[#e8ecff] px-3.5 py-2 rounded-xl transition-colors font-medium text-left"
                  >
                    💬 "{q}"
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => {
            const isUser = msg.role === 'user';
            const aiIdx = messages.slice(0, i + 1).filter(m => m.role === 'assistant').length - 1;
            return (
              <div key={i}>
                <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-0.5" style={{ backgroundColor: selectedPublisher.color }}>
                      {selectedPublisher.initial}
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      isUser
                        ? 'bg-[#0e1116] text-white rounded-br-xs shadow-xs'
                        : 'bg-[#f3f4f7] text-[#0e1116] rounded-bl-xs border border-[#e3e6ec]/60'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
                {!isUser && aiIdx >= 0 && (
                  <div className="ml-9 mt-1">
                    <InsightBar msgIndex={aiIdx} publisher={selectedPublisher.id} />
                  </div>
                )}
              </div>
            );
          })}
          {loading && (
            <div className="flex justify-start">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0" style={{ backgroundColor: selectedPublisher.color }}>
                {selectedPublisher.initial}
              </div>
              <div className="bg-[#f3f4f7] px-4 py-2.5 rounded-2xl rounded-bl-xs flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#667085] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-[#667085] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-[#667085] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-[#e3e6ec] p-4 bg-[#fafafa]">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={`Ask ${selectedPublisher.name} about CRM tools or recommendations...`}
              className="flex-1 bg-white border border-[#e3e6ec] rounded-xl px-4 py-2.5 text-sm text-[#0e1116] placeholder-[#667085] focus:outline-none focus:border-[#2447ff] focus:ring-1 focus:ring-[#2447ff] shadow-2xs"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="bg-[#2447ff] text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Right: Insight Engine */}
      <div className="w-[320px] flex-shrink-0 bg-white border border-[#e3e6ec] rounded-2xl flex flex-col shadow-2xs">
        {/* Header */}
        <div className="border-b border-[#e3e6ec] px-4 py-3.5">
          <div className="flex items-center gap-2 mb-0.5">
            <Sparkles size={16} className="text-[#2447ff]" />
            <span className="font-semibold text-[#0e1116] text-sm">Ad Insight Engine</span>
            <span className="ml-auto text-[10px] bg-[#e8ecff] text-[#2447ff] px-2 py-0.5 rounded-full font-semibold">🔮 AI</span>
          </div>
          <p className="text-xs text-[#667085]">Strategic optimization for Flowdesk campaigns</p>
        </div>

        {/* Publisher selector */}
        <div className="px-4 py-3 border-b border-[#e3e6ec] bg-[#fafafa]">
          <div className="text-xs text-[#667085] mb-2 font-medium">Focus publisher:</div>
          <div className="flex flex-wrap gap-1.5">
            {['all', 'claude', 'chatgpt', 'gemini', 'perplexity'].map((p) => (
              <button
                key={p}
                onClick={() => setInsightPublisher(p)}
                className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors capitalize font-medium ${
                  insightPublisher === p
                    ? 'border-[#2447ff] bg-[#e8ecff] text-[#2447ff]'
                    : 'border-[#e3e6ec] bg-white text-[#667085] hover:border-[#2447ff] hover:text-[#2447ff]'
                }`}
              >
                {p === 'all' ? 'All Publishers' : p}
              </button>
            ))}
          </div>
        </div>

        {/* Suggested prompts */}
        {insightMessages.length === 0 && (
          <div className="px-4 py-3 border-b border-[#e3e6ec]">
            <div className="text-xs font-semibold text-[#667085] mb-2 uppercase tracking-wider">Suggested actions</div>
            <div className="space-y-1.5">
              {insightSuggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => handleInsightSend(s)}
                  className="w-full text-left text-xs text-[#2447ff] border border-[#e8ecff] bg-[#fafbff] px-3 py-2 rounded-xl hover:bg-[#e8ecff] transition-colors font-medium leading-relaxed"
                >
                  ⚡ {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Insight messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {insightMessages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[92%] px-3 py-2.5 rounded-xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#0e1116] text-white rounded-br-xs'
                    : 'bg-[#f3f4f7] text-[#0e1116] rounded-bl-xs border border-[#e3e6ec]/70'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          ))}
          {insightLoading && (
            <div className="flex justify-start">
              <div className="bg-[#f3f4f7] px-3 py-2 rounded-xl flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-[#667085] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-[#667085] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-[#667085] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
        </div>

        {/* Insight input */}
        <div className="border-t border-[#e3e6ec] p-3 bg-[#fafafa]">
          <div className="flex gap-2">
            <input
              type="text"
              value={insightInput}
              onChange={(e) => setInsightInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleInsightSend()}
              placeholder="Ask how to improve rank/bids..."
              className="flex-1 bg-white border border-[#e3e6ec] rounded-xl px-3 py-2 text-xs text-[#0e1116] placeholder-[#667085] focus:outline-none focus:border-[#2447ff]"
            />
            <button
              onClick={() => handleInsightSend()}
              disabled={!insightInput.trim() || insightLoading}
              className="bg-[#2447ff] text-white px-3 py-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-2xs"
            >
              <Send size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
