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
    color: '#0f9d6e',
    bg: '#dcfce7',
  },
  {
    icon: Layers,
    title: 'Native Conversational UI',
    desc: 'Drop-in @octalume/react components for inline_response, below_response, and search_result placements.',
    color: '#2447ff',
    bg: '#e8ecff',
  },
  {
    icon: DollarSign,
    title: 'High-Yield Inference Offset',
    desc: 'Monetize commercial user intent with premium B2B and SaaS CPM/CPA payouts that offset GPU costs.',
    color: '#d97706',
    bg: '#fef3c7',
  },
  {
    icon: ShieldCheck,
    title: 'GDPR & GPC Privacy Built-In',
    desc: 'Respects user consent signals automatically, defaulting to zero-identifier contextual ads when opted out.',
    color: '#7c3aed',
    bg: '#f3e8ff',
  },
];

export default function AiPlatformsPage() {
  return (
    <div className="pb-20 bg-[#f8f9fc] bg-[linear-gradient(to_right,#e3e6ec40_1px,transparent_1px),linear-gradient(to_bottom,#e3e6ec40_1px,transparent_1px)] [background-size:44px_44px]">
      {/* Hero */}
      <section className="bg-white/95 border-b border-[#e3e6ec]">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0f9d6e] bg-green-50 border border-green-200 px-3.5 py-1.5 rounded-full mb-5">
              <Cpu size={13} />
              OctaLume for AI Platforms &amp; Publishers
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#0e1116] tracking-tight leading-[1.12]"
              style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
            >
              Monetize every AI conversation without slowing down your model
            </h1>
            <p className="text-base sm:text-lg text-[#667085] mt-5 leading-relaxed">
              Turn free-tier chat, AI search, and agent workflows into a sustainable revenue engine.
              OctaLume serves relevant, clearly labeled native suggestions in parallel with your
              LLM — preserving objective answers and user trust.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <Link
                href="/docs?section=publishers"
                className="inline-flex items-center gap-2 bg-[#0f9d6e] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <Code2 size={15} />
                Read Publisher Docs
              </Link>
              <Link
                href="/#live-demo"
                className="inline-flex items-center gap-2 bg-white text-[#0e1116] border border-[#e3e6ec] text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#f3f4f7] transition-colors"
              >
                Try Live Publisher Chat
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {platformCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-2xl p-5 hover:border-[#0f9d6e]/40 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: cap.bg, color: cap.color }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-[#0e1116] text-sm mb-1.5">{cap.title}</h3>
                  <p className="text-xs text-[#667085] leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive 3-Step Flow for AI Platforms */}
      <section className="max-w-[1280px] mx-auto px-6 pt-16 pb-10">
        <ScrollReveal>
          <HowItWorksStepper initialMode="publishers" lockedMode="publishers" />
        </ScrollReveal>
      </section>

      {/* Comparison Card for AI Platforms */}
      <section className="max-w-[1280px] mx-auto px-6 py-10">
        <ScrollReveal delay={80}>
          <ComparisonCard initialView="platform" lockedView="platform" />
        </ScrollReveal>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1280px] mx-auto px-6 pt-8">
        <ScrollReveal delay={100}>
          <div className="rounded-3xl bg-[#0e1116] text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
