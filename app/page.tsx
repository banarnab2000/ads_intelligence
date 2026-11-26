'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  TrendingUp,
  Layers,
  Sparkles,
  Code2,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import PublisherChatWidget from '@/components/chat/PublisherChatWidget';
import ScrollReveal from '@/components/home/ScrollReveal';
import ProductVideoDemo from '@/components/home/ProductVideoDemo';

const advertiserHighlights = [
  'Target real-time commercial prompts across 8+ AI platforms',
  'Smart contextual matching without disrupting LLM responses',
  'Track deterministic & AI-assisted ROAS with oct-pix.js & CAPI',
];

const publisherHighlights = [
  'Call @octalume/sdk in parallel with zero added LLM latency',
  'Render native SponsoredCard UI inline or below responses',
  'Offset GPU inference costs with high-yield CPM/CPA payouts',
];

// Animated counter hook
function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCounter({ value, label, prefix = '', suffix = '' }: { value: number; label: string; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCounter(value, 1500, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-blue-200 max-w-[200px] mx-auto">{label}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes packetMove {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes nodePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(96, 165, 250, 0); }
          50% { box-shadow: 0 0 0 8px rgba(96, 165, 250, 0.2); }
        }
        .gradient-text-animated {
          background: linear-gradient(270deg, #60a5fa, #a78bfa, #34d399, #60a5fa);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease infinite;
        }
        .dot-grid {
          background-image: radial-gradient(circle, rgba(96,165,250,0.15) 1px, transparent 1px);
          background-size: 32px 32px;
          animation: dotPulse 4s ease-in-out infinite;
        }
        .packet {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          animation: packetMove 3s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(96,165,250,0.6);
        }
        .packet-2 { animation-delay: 1s; }
        .packet-3 { animation-delay: 2s; }
        .flow-node {
          animation: nodePulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="pb-20 bg-[#f8f9fc]">
        {/* ───────────────────────────────────────────
            SECTION 1: HERO
        ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gradient-to-b from-[#030712] via-[#0a0f2e] to-[#030712]">
          {/* Animated dot grid background */}
          <div className="absolute inset-0 dot-grid" />
          {/* Ambient radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[380px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
          {/* Gradient overlay glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-[#030712]/40 pointer-events-none" />

          <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-300 bg-blue-900/40 border border-blue-700/40 px-4 py-1.5 rounded-full mb-6">
              <Sparkles size={13} />
              AI-Native Advertising Infrastructure
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-5" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
              <span className="text-white">The right brand. The right intent.</span>
              <br />
              <span className="gradient-text-animated">The right audience. The right conversion.</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-200/85 mt-4 leading-relaxed max-w-2xl mx-auto">
              Connecting AI conversations with meaningful brand discovery, contextual advertising, and measurable growth.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
              <Link
                href="/advertisers"
                className="inline-flex items-center gap-2 bg-[#2447ff] text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/50 text-sm"
              >
                For Advertisers
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/ai-platforms"
                className="inline-flex items-center gap-2 bg-[#0f9d6e] text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/50 text-sm"
              >
                For AI Platforms
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors text-sm"
              >
                <Code2 size={15} className="text-blue-300" />
                Explore Docs
              </Link>
            </div>

            {/* Scroll indicator */}
            <a
              href="#live-demo"
              className="mt-10 inline-flex flex-col items-center gap-1.5 text-blue-300/70 hover:text-blue-200 text-xs transition-colors"
              style={{ animation: 'float 2s ease-in-out infinite' }}
            >
              <span>Try the Interactive Sandbox</span>
              <ChevronDown size={18} />
            </a>
          </div>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 2: INTERACTIVE SANDBOX (first content after hero)
        ─────────────────────────────────────────── */}
        <section id="live-demo" className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-16 pb-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2447ff] bg-[#e8ecff] px-3 py-1 rounded-full mb-2.5">
                  <Zap size={12} />
                  Interactive Sandbox
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#0e1116]"
                  style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
                >
                  Experience the Publisher Ad Flow Live
                </h2>
                <p className="text-sm text-[#667085] mt-1 max-w-2xl">
                  Select any AI publisher, ask a buyer question, and see OctaLume&apos;s real-time Ad Insight Engine alongside native publisher responses.
                </p>
              </div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-[#0e1116] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#2447ff] transition-colors self-start md:self-auto flex-shrink-0"
              >
                Open Full Console
                <ArrowRight size={14} />
              </Link>
            </div>

            <PublisherChatWidget heightClass="h-[560px]" />
          </ScrollReveal>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 3: "THE SHIFT" – Animated stats
        ─────────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-[#030712] via-[#0a0f2e] to-[#030712] py-20 px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-[1000px] mx-auto text-center mb-12">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">The Shift</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                AI is eating traditional search.
              </h2>
              <p className="text-blue-200/70 mt-3 text-sm">The numbers don&apos;t lie — the ad landscape is transforming in real time.</p>
            </div>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
              <StatCounter value={847} label="Global ad spend shifting to AI channels by 2027 (billions)" prefix="$" suffix="B" />
              <StatCounter value={73} label="of Gen Z starts product research on AI, not Google" suffix="%" />
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                  &lt;45ms
                </div>
                <div className="text-sm text-blue-200 max-w-[200px] mx-auto">OctaLume ad serving latency</div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 4: TWO-SIDED MARKETPLACE CARDS
        ─────────────────────────────────────────── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-20 pb-12">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-semibold text-[#2447ff] uppercase tracking-wider mb-2">
                Two-Sided AI Ad Network
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0e1116] tracking-tight"
                style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
              >
                Built for both Advertisers and AI Platforms
              </h2>
              <p className="text-sm sm:text-base text-[#667085] mt-3">
                Explore the dedicated workflows, live impact comparisons, and integration tools for your side of the network.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Advertisers Card */}
              <div className="bg-white border border-[#e3e6ec] rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-[#2447ff]/40 transition-colors">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2447ff] bg-[#e8ecff] px-3 py-1 rounded-full mb-4">
                    <Sparkles size={12} />
                    For Advertisers
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0e1116] mb-3" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                    Reach buyers inside AI answers
                  </h3>
                  <p className="text-sm text-[#667085] mb-6 leading-relaxed">
                    Put Flowdesk CRM in front of commercial intent prompts across ChatGPT, Claude, Gemini, and 5+ more AI publishers — without disrupting the conversation.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {advertiserHighlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[#0e1116]">
                        <CheckCircle2 size={16} className="text-[#2447ff] mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/advertisers"
                  className="inline-flex items-center gap-2 bg-[#2447ff] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors self-start"
                >
                  Advertiser Suite
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* AI Platforms Card */}
              <div className="bg-white border border-[#e3e6ec] rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-[#0f9d6e]/40 transition-colors">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f9d6e] bg-green-50 px-3 py-1 rounded-full mb-4">
                    <Layers size={12} />
                    For AI Platforms
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0e1116] mb-3" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                    Monetize without compromising integrity
                  </h3>
                  <p className="text-sm text-[#667085] mb-6 leading-relaxed">
                    Integrate OctaLume in a single async SDK call. Serve native sponsored cards. Offset GPU inference costs with transparent, high-yield CPM/CPA payouts.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {publisherHighlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[#0e1116]">
                        <CheckCircle2 size={16} className="text-[#0f9d6e] mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/ai-platforms"
                  className="inline-flex items-center gap-2 bg-[#0f9d6e] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-emerald-700 transition-colors self-start"
                >
                  Publisher Suite
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 5: "HOW THE FUTURE WORKS" – CSS Animation Flow
        ─────────────────────────────────────────── */}
        <section className="bg-[#0e1116] py-20 px-4 sm:px-6 overflow-hidden">
          <ScrollReveal>
            <div className="max-w-[1000px] mx-auto">
              <div className="text-center mb-12">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">How the future works</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                  From advertiser to answer in &lt;45ms
                </h2>
              </div>

              {/* Animated Product Video Simulation */}
              <ProductVideoDemo />

              {/* Architecture trust strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#2447ff]/40 transition-colors">
                  <ShieldCheck size={22} className="text-[#2447ff] mb-3" />
                  <h4 className="font-semibold text-white mb-1">Privacy-First Contextual</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Full GDPR, CCPA, and Global Privacy Control support. Zero-identifier contextual matching when consent is absent.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#0f9d6e]/40 transition-colors">
                  <Layers size={22} className="text-[#0f9d6e] mb-3" />
                  <h4 className="font-semibold text-white mb-1">Objective LLM Integrity</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Sponsored placements are clearly labeled and served independently of the model&apos;s core reasoning.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#7c3aed]/40 transition-colors">
                  <TrendingUp size={22} className="text-[#7c3aed] mb-3" />
                  <h4 className="font-semibold text-white mb-1">Full-Funnel Attribution</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Measure direct clicks and AI-assisted conversions with the OctaLume Pixel (<code className="text-blue-300">oct-pix.js</code>) and server-side CAPI.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 6: WITHOUT / WITH OCTALUME COMPARISON
        ─────────────────────────────────────────── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-20 pb-12">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider mb-2">The Difference</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                Your brand. Inside the AI answer.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Without OctaLume */}
              <div className="bg-[#f3f4f7] border border-[#e3e6ec] rounded-3xl p-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#667085] bg-[#e3e6ec] px-3 py-1 rounded-full mb-5">
                  ✕ Without OctaLume
                </div>
                <h3 className="text-xl font-bold text-[#667085] mb-4" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                  Invisible in AI answers
                </h3>
                <ul className="space-y-3">
                  {[
                    'Zero sponsored mentions in AI responses',
                    'Zero attribution from AI channels',
                    'Competitor recommendations shown to users',
                    'No visibility into AI prompt share',
                    'Missing the fastest-growing ad channel',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#667085]">
                      <span className="mt-0.5 text-red-400 font-bold flex-shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* With OctaLume */}
              <div className="bg-gradient-to-br from-[#0a1628] to-[#0f2d1a] border border-[#0f9d6e]/30 rounded-3xl p-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0f9d6e] bg-[#0f9d6e]/20 px-3 py-1 rounded-full mb-5">
                  ✓ With OctaLume
                </div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                  Top-2 AI recommendations
                </h3>
                <ul className="space-y-3">
                  {[
                    'Brand appears in top 2 AI recommendations',
                    '$42 CPM · 4.6× ROAS proven',
                    'Full attribution chain tracked',
                    'Real-time competitor intelligence',
                    'Zero disruption to AI user experience',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#c8f7e4]">
                      <span className="mt-0.5 text-[#0f9d6e] font-bold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ───────────────────────────────────────────
            SECTION 7: BOTTOM CTA
        ─────────────────────────────────────────── */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-4">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-r from-[#0e1116] to-[#1e293b] text-white p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
                >
                  Ready to launch on OctaLume?
                </h2>
                <p className="text-sm text-gray-300 mt-2 max-w-xl">
                  Sign in with our demo workspace to explore live campaign analytics, publisher rankings, and AI visibility intelligence.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 bg-[#2447ff] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Sign In to Demo Console
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <CheckCircle2 size={15} />
                  View Docs
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
