'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Target,
  Eye,
  BarChart3,
  Sliders,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import VisibilityChatWidget from '@/components/chat/VisibilityChatWidget';
import ScrollReveal from '@/components/home/ScrollReveal';
import HowItWorksStepper from '@/components/home/HowItWorksStepper';
import ComparisonCard from '@/components/home/ComparisonCard';

const capabilities = [
  {
    icon: Target,
    title: 'Contextual Intent Matching',
    desc: 'Instead of brittle keywords or third-party cookies, OctaLume matches your brand to live buyer intent inside AI conversations.',
    accent: 'text-blue-400',
    iconBg: 'bg-blue-500/15 border-blue-400/30',
  },
  {
    icon: Eye,
    title: 'Cross-Publisher Share of Voice',
    desc: 'Monitor how often your product is recommended #1 vs competitors like Zoho, Salesforce, or Vertex CRM across 8 AI networks.',
    accent: 'text-violet-400',
    iconBg: 'bg-violet-500/15 border-violet-400/30',
  },
  {
    icon: BarChart3,
    title: 'Pixel & CAPI Attribution',
    desc: 'Connect oct-pix.js and server-side Conversions API to measure both deterministic clicks and AI-assisted conversions.',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-400/30',
  },
  {
    icon: Sliders,
    title: 'Model-Level Budget Control',
    desc: 'Allocate spend across Claude, ChatGPT, Perplexity, and Gemini with CPA caps, ROAS floors, and real-time pacing.',
    accent: 'text-amber-400',
    iconBg: 'bg-amber-500/15 border-amber-400/30',
  },
];

export default function AdvertisersPage() {
  return (
    <div className="pb-20 bg-[#f8f9fc]">
      {/* Dark Atmospheric Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#0a0f2e] to-[#030712] text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.18) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 bg-blue-900/40 border border-blue-700/40 px-3.5 py-1.5 rounded-full mb-6">
              <TrendingUp size={13} />
              OctaLume for Advertisers
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]"
              style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
            >
              Turn AI recommendations into your{' '}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                highest-ROAS channel
              </span>
            </h1>
            <p className="text-base sm:text-lg text-blue-100/80 mt-5 leading-relaxed max-w-2xl">
              Buyers are shifting from traditional search engines to conversational AI. OctaLume
              gives growth teams full visibility into prompt demand, competitor positioning, and
              native ad placements across every major LLM platform.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-[#2447ff] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/50"
              >
                Launch a Campaign
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/docs?section=advertisers"
                className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
              >
                Read Advertiser Docs
              </Link>
            </div>
          </div>

          {/* Glassmorphic Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-white/[0.04] border border-white/10 backdrop-blur-sm rounded-2xl p-5 hover:border-blue-400/40 hover:bg-white/[0.06] transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${cap.iconBg} ${cap.accent}`}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1.5">{cap.title}</h3>
                  <p className="text-xs text-blue-100/70 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive 3-Step Flow for Advertisers */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-16 pb-10">
        <ScrollReveal>
          <HowItWorksStepper initialMode="advertisers" lockedMode="advertisers" />
        </ScrollReveal>
      </section>

      {/* Comparison Card for Advertisers */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10">
        <ScrollReveal delay={80}>
          <ComparisonCard initialView="advertiser" lockedView="advertiser" />
        </ScrollReveal>
      </section>

      {/* AI Visibility Intelligence Copilot Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10">
        <ScrollReveal delay={100}>
          <div className="bg-white border border-[#e3e6ec] rounded-3xl p-5 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] bg-[#f3e8ff] px-3 py-1 rounded-full mb-2.5">
                  <Sparkles size={12} />
                  Live Advertiser Intelligence
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#0e1116]"
                  style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
                >
                  AI Visibility Intelligence Copilot
                </h2>
                <p className="text-sm text-[#667085] mt-1.5 max-w-2xl">
                  Before you spend a dollar, query our visibility engine to inspect how often buyer
                  keywords like &ldquo;CRM&rdquo; appear across AI publishers, benchmark competitor
                  share of voice, and get tactical recommendations to outrank rival brands.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#0f9d6e] bg-green-50 border border-green-200 px-3 py-1.5 rounded-full font-medium self-start md:self-auto flex-shrink-0">
                <ShieldCheck size={14} />
                8 AI Publishers Monitored
              </div>
            </div>

            <VisibilityChatWidget heightClass="h-[660px]" showTitle={false} />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
