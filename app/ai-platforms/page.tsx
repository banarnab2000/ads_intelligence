'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Cpu,
  Zap,
  ShieldCheck,
  Layers,
  DollarSign,
  Code2,
} from 'lucide-react';
import ScrollReveal from '@/components/home/ScrollReveal';
import HowItWorksStepper from '@/components/home/HowItWorksStepper';
import ComparisonCard from '@/components/home/ComparisonCard';

const platformCapabilities = [
  {
    icon: Zap,
    title: 'Zero-Latency Parallel Serving',
    desc: 'Request ads concurrently with your LLM stream in under 45ms so token generation is never delayed.',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-400/30',
  },
  {
    icon: Layers,
    title: 'Native Conversational UI',
    desc: 'Drop-in @octalume/react components for inline_response, below_response, and search_result placements.',
    accent: 'text-blue-400',
    iconBg: 'bg-blue-500/15 border-blue-400/30',
  },
  {
    icon: DollarSign,
    title: 'High-Yield Inference Offset',
    desc: 'Monetize commercial user intent with premium B2B and SaaS CPM/CPA payouts that offset GPU costs.',
    accent: 'text-amber-400',
    iconBg: 'bg-amber-500/15 border-amber-400/30',
  },
  {
    icon: ShieldCheck,
    title: 'GDPR & GPC Privacy Built-In',
    desc: 'Respects user consent signals automatically, defaulting to zero-identifier contextual ads when opted out.',
    accent: 'text-violet-400',
    iconBg: 'bg-violet-500/15 border-violet-400/30',
  },
];

export default function AiPlatformsPage() {
  return (
    <div className="pb-20 bg-[#f8f9fc]">
      {/* Dark Atmospheric Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#06181a] to-[#030712] text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(52,211,153,0.16) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-emerald-600/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-700/40 px-3.5 py-1.5 rounded-full mb-6">
              <Cpu size={13} />
              OctaLume for AI Platforms &amp; Publishers
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]"
              style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
            >
              Monetize every AI conversation{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                without slowing your model
              </span>
            </h1>
            <p className="text-base sm:text-lg text-emerald-100/80 mt-5 leading-relaxed max-w-2xl">
              Turn free-tier chat, AI search, and agent workflows into a sustainable revenue engine.
              OctaLume serves relevant, clearly labeled native suggestions in parallel with your
              LLM — preserving objective answers and user trust.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <Link
                href="/docs?section=publishers"
                className="inline-flex items-center gap-2 bg-[#0f9d6e] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-950/50"
              >
                <Code2 size={15} />
                Read Publisher Docs
              </Link>
              <Link
                href="/#live-demo"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
              >
                Try Live Publisher Chat
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Glassmorphic Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {platformCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-2xl p-5 hover:border-emerald-400/40 hover:bg-white/[0.06] transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${cap.iconBg} ${cap.accent}`}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1.5">{cap.title}</h3>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive 3-Step Flow for AI Platforms */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-16 pb-10">
        <ScrollReveal>
          <HowItWorksStepper initialMode="publishers" lockedMode="publishers" />
        </ScrollReveal>
      </section>

      {/* Comparison Card for AI Platforms */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10">
        <ScrollReveal delay={80}>
          <ComparisonCard initialView="platform" lockedView="platform" />
        </ScrollReveal>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-8">
        <ScrollReveal delay={100}>
          <div className="rounded-3xl bg-gradient-to-r from-[#030712] via-[#0a192f] to-[#062118] border border-white/10 text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div>
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
              >
                Integrate @octalume/sdk in 5 minutes
              </h2>
              <p className="text-sm text-gray-300 mt-1.5 max-w-xl">
                Explore TypeScript, React, Python, and REST API guides in our Publisher
                Documentation.
              </p>
            </div>
            <Link
              href="/docs?section=publishers"
              className="inline-flex items-center gap-2 bg-[#0f9d6e] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-emerald-600 transition-colors flex-shrink-0"
            >
              Open Publisher Docs
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
