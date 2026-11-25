'use client';

import { useState, useEffect } from 'react';
import { Check, Sparkles, Cpu, Target, Calendar } from 'lucide-react';

type Mode = 'advertisers' | 'publishers';

const advertiserSteps = [
  {
    num: 1,
    title: 'Create.',
    subtitle: 'Define buyer intent, not brittle keywords.',
    bullets: [
      'Target real-time commercial prompts across 8+ AI platforms',
      'Set CPM or CPA bids with automated spend guardrails',
      'Preview native sponsored cards before going live',
    ],
  },
  {
    num: 2,
    title: 'Launch.',
    subtitle: 'Appear inside AI answers in <45ms.',
    bullets: [
      'Smart contextual matching without disrupting LLM flow',
      'Clearly labeled Sponsored cards that earn user trust',
      'Instant pacing across Claude, ChatGPT, Perplexity & Gemini',
    ],
  },
  {
    num: 3,
    title: 'Track.',
    subtitle: 'Measure what actually matters.',
    bullets: [
      'Install our pixel (oct-pix.js), CAPI, and enhanced events',
      'Works with Stripe, Shopify, HubSpot + 30 more',
      'Real-time deterministic & AI-assisted conversion tracking',
    ],
  },
];

const publisherSteps = [
  {
    num: 1,
    title: 'Integrate.',
    subtitle: 'Zero added latency to LLM streaming.',
    bullets: [
      'Call @octalume/sdk in parallel with your model inference',
      'Supports Node.js, React, Python, and REST HTTP API',
      'Built-in GDPR, CCPA & GPC consent compliance',
    ],
  },
  {
    num: 2,
    title: 'Render.',
    subtitle: 'Native UI that respects your users.',
    bullets: [
      'Flexible inline_response, below_response & search placements',
      'Automatic IntersectionObserver viewport impression tracking',
      'Objective model answers stay 100% independent',
    ],
  },
  {
    num: 3,
    title: 'Monetize.',
    subtitle: 'Turn every AI session into revenue.',
    bullets: [
      'High-yield CPM & CPA payouts from top B2B & SaaS brands',
      'Offset GPU and token inference costs automatically',
      'Real-time RPM, fill-rate & payout analytics',
    ],
  },
];

const eventRows = [
  { event: 'page_view', source: 'Pixel', total: '23,415,870' },
  { event: 'click', source: 'Pixel', total: '6,182,045' },
  { event: 'demo_booked', source: 'Pixel', total: '142,856' },
  { event: 'purchase', source: 'Pixel + API', total: '51,203' },
  { event: 'sign_up', source: 'Pixel + API', total: '38,471' },
];

export default function HowItWorksStepper() {
  const [mode, setMode] = useState<Mode>('advertisers');
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  const steps = mode === 'advertisers' ? advertiserSteps : publisherSteps;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3800);
    return () => clearInterval(timer);
  }, [paused, mode]);

  const handleModeChange = (m: Mode) => {
    setMode(m);
    setActiveStep(0);
  };

  return (
    <div
      className="bg-white/95 border border-[#e3e6ec] rounded-3xl p-6 sm:p-10 shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Top Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider mb-1.5">
            How it works
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0e1116] tracking-tight"
            style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
          >
            In 3 steps
          </h2>
        </div>

        <div className="inline-flex p-1 bg-[#f3f4f7] border border-[#e3e6ec] rounded-2xl self-start">
          <button
            onClick={() => handleModeChange('advertisers')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              mode === 'advertisers'
                ? 'bg-white text-[#2447ff] shadow-xs'
                : 'text-[#667085] hover:text-[#0e1116]'
            }`}
          >
            <Target size={14} />
            For Advertisers
          </button>
          <button
            onClick={() => handleModeChange('publishers')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              mode === 'publishers'
                ? 'bg-white text-[#0f9d6e] shadow-xs'
                : 'text-[#667085] hover:text-[#0e1116]'
            }`}
          >
            <Cpu size={14} />
            For AI Platforms
          </button>
        </div>
      </div>

      {/* 2-Column Stepper + Animated Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Vertical Stepper */}
        <div className="lg:col-span-5 relative pl-2">
          {/* Vertical connecting line */}
          <div className="absolute left-[19px] top-4 bottom-8 w-0.5 bg-[#e3e6ec]" />

          <div className="space-y-6 relative">
            {steps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.title}
                  onClick={() => setActiveStep(idx)}
                  className="w-full text-left flex items-start gap-4 group focus:outline-none"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300 z-10 ${
                      isActive
                        ? 'bg-[#0e1116] text-white scale-110 shadow-sm'
                        : 'bg-white border border-[#e3e6ec] text-[#667085] group-hover:border-[#0e1116]'
                    }`}
                  >
                    {s.num}
                  </div>
                  <div className="pt-0.5">
                    <div
                      className={`text-xl font-bold transition-colors ${
                        isActive ? 'text-[#0e1116]' : 'text-[#667085]/70 group-hover:text-[#0e1116]'
                      }`}
                      style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
                    >
                      <span className={isActive ? 'underline decoration-2 underline-offset-4' : ''}>
                        {s.title}
                      </span>{' '}
                      {isActive && (
                        <span className="font-normal text-[#667085] text-lg">{s.subtitle}</span>
                      )}
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="space-y-1.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-[#667085]">
                            <Check size={13} className="text-[#0f9d6e] mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Animated Preview Card */}
        <div className="lg:col-span-7">
          <div className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-2xl p-5 sm:p-6 shadow-inner min-h-[340px] flex flex-col justify-between transition-all duration-500">
            {/* ADVERTISER PREVIEWS */}
            {mode === 'advertisers' && activeStep === 0 && (
              <div className="bg-white border border-[#e3e6ec] rounded-xl p-5 shadow-2xs space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#0e1116]">Smart Intent Targeting</span>
                  <span className="text-[11px] font-semibold bg-[#e8ecff] text-[#2447ff] px-2.5 py-0.5 rounded-full">
                    Step 1 · Create
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec] space-y-2">
                  <div className="text-[11px] font-semibold text-[#667085] uppercase">Target Buyer Prompt Cluster</div>
                  <div className="text-xs font-medium text-[#0e1116]">
                    &ldquo;Best CRM for a 20-person B2B sales team with automated follow-ups&rdquo;
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl border border-[#e3e6ec]">
                    <div className="text-[11px] text-[#667085]">Bid Model</div>
                    <div className="text-sm font-bold text-[#0e1116] mt-0.5">CPA ($34)</div>
                  </div>
                  <div className="p-3 rounded-xl border border-[#e3e6ec]">
                    <div className="text-[11px] text-[#667085]">Networks</div>
                    <div className="text-sm font-bold text-[#2447ff] mt-0.5">8 AI Apps</div>
                  </div>
                  <div className="p-3 rounded-xl border border-[#e3e6ec]">
                    <div className="text-[11px] text-[#667085]">Match Score</div>
                    <div className="text-sm font-bold text-[#0f9d6e] mt-0.5">96%</div>
                  </div>
                </div>
              </div>
            )}

            {mode === 'advertisers' && activeStep === 1 && (
              <div className="bg-white border border-[#e3e6ec] rounded-xl p-5 shadow-2xs space-y-3.5 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#667085]">Live AI Conversation · 38ms match</span>
                  <span className="text-[11px] font-semibold bg-green-50 text-[#0f9d6e] border border-green-200 px-2.5 py-0.5 rounded-full">
                    Step 2 · Launch
                  </span>
                </div>
                <div className="bg-[#f3f4f7] rounded-xl p-3 text-xs text-[#0e1116]">
                  <strong>User:</strong> What CRM should we adopt for fast outbound follow-ups?
                </div>
                <div className="text-xs text-[#667085] leading-relaxed">
                  <strong>AI Assistant:</strong> Look for lightweight pipeline automation, native
                  WhatsApp/email sequences, and flat workspace pricing...
                </div>
                <div className="border border-[#2447ff]/30 bg-gradient-to-r from-[#fafbff] to-[#e8ecff]/50 rounded-xl p-3.5 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2447ff]">
                      Sponsored · Flowdesk CRM
                    </span>
                    <div className="text-xs font-bold text-[#0e1116] mt-0.5">
                      Deploy automated AI follow-ups in under 24 hours
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold bg-[#2447ff] text-white px-3 py-1.5 rounded-lg flex-shrink-0">
                    Try Free →
                  </span>
                </div>
              </div>
            )}

            {mode === 'advertisers' && activeStep === 2 && (
              <div className="bg-white border border-[#e3e6ec] rounded-xl p-5 shadow-2xs animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-base font-bold text-[#0e1116]">Event Activity</div>
                    <div className="text-[11px] text-[#667085]">Events received from your website</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] border border-[#e3e6ec] rounded-lg px-2.5 py-1 text-[#667085]">
                      <Calendar size={11} />
                      Last 30 Days
                    </span>
                    <div className="text-[10px] text-[#667085] mt-0.5">Example data</div>
                  </div>
                </div>

                {/* Green SVG Trend Line (like Image 2) */}
                <div className="h-24 w-full mb-3 relative">
                  <svg viewBox="0 0 400 80" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="eventGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0f9d6e" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#0f9d6e" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,70 L30,72 L60,60 L90,65 L120,42 L150,48 L180,55 L210,36 L240,44 L270,28 L300,34 L330,18 L360,24 L395,8 L395,80 L0,80 Z"
                      fill="url(#eventGrad)"
                    />
                    <path
                      d="M0,70 L30,72 L60,60 L90,65 L120,42 L150,48 L180,55 L210,36 L240,44 L270,28 L300,34 L330,18 L360,24 L395,8"
                      fill="none"
                      stroke="#0f9d6e"
                      strokeWidth="2.2"
                    />
                    <circle cx="395" cy="8" r="4" fill="#0f9d6e" />
                  </svg>
                </div>

                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[#e3e6ec] text-[#667085]">
                      <th className="text-left py-1.5 font-medium">Event</th>
                      <th className="text-left py-1.5 font-medium">Source</th>
                      <th className="text-right py-1.5 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventRows.map((r) => (
                      <tr key={r.event} className="border-b border-[#f3f4f7] last:border-0">
                        <td className="py-1.5 font-mono text-[#0e1116]">{r.event}</td>
                        <td className="py-1.5 text-[#667085]">{r.source}</td>
                        <td className="py-1.5 text-right font-semibold text-[#0e1116]">{r.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* PUBLISHER PREVIEWS */}
            {mode === 'publishers' && activeStep === 0 && (
              <div className="bg-[#0e1116] text-white rounded-xl p-5 font-mono text-xs space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between text-gray-400 border-b border-white/10 pb-2">
                  <span>parallel-inference.ts</span>
                  <span className="text-[#0f9d6e]">0ms LLM delay</span>
                </div>
                <pre className="overflow-x-auto leading-relaxed text-[11px] sm:text-xs text-gray-200">{`const [llmStream, ad] = await Promise.all([
  model.generateStream(userPrompt),
  octalume.ads.place({
    context: userPrompt,
    publisherId: "my-ai-assistant",
    placement: "inline_response"
  })
]);`}</pre>
              </div>
            )}

            {mode === 'publishers' && activeStep === 1 && (
              <div className="bg-white border border-[#e3e6ec] rounded-xl p-5 shadow-2xs space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0e1116]">&lt;SponsoredCard /&gt;</span>
                  <span className="text-[11px] font-semibold bg-green-50 text-[#0f9d6e] px-2.5 py-0.5 rounded-full">
                    Auto Impression Tracking
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec] space-y-2.5">
                  <div className="text-xs text-[#667085]">
                    ...your LLM response streams cleanly here with zero alteration to model objectivity.
                  </div>
                  <div className="bg-white border border-[#e3e6ec] rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-semibold text-[#0f9d6e] uppercase">Sponsored Suggestion</div>
                      <div className="text-xs font-bold text-[#0e1116]">Flowdesk CRM — 14-Day Free Trial</div>
                    </div>
                    <Sparkles size={14} className="text-[#2447ff]" />
                  </div>
                </div>
              </div>
            )}

            {mode === 'publishers' && activeStep === 2 && (
              <div className="bg-white border border-[#e3e6ec] rounded-xl p-5 shadow-2xs space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-bold text-[#0e1116]">Publisher Earnings</div>
                    <div className="text-[11px] text-[#667085]">Inference cost offset via OctaLume</div>
                  </div>
                  <span className="text-xs font-semibold bg-green-50 text-[#0f9d6e] border border-green-200 px-2.5 py-1 rounded-full">
                    +$42.01 / 1k queries
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                    <div className="text-[11px] text-[#667085]">Fill Rate</div>
                    <div className="text-base font-bold text-[#0e1116]">84.2%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                    <div className="text-[11px] text-[#667085]">Avg. eCPM</div>
                    <div className="text-base font-bold text-[#0f9d6e]">$42.01</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                    <div className="text-[11px] text-[#667085]">GPU Offset</div>
                    <div className="text-base font-bold text-[#2447ff]">118%</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
