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
    color: '#2447ff',
    bg: '#e8ecff',
  },
  {
    icon: Eye,
    title: 'Cross-Publisher Share of Voice',
    desc: 'Monitor how often your product is recommended #1 vs competitors like Zoho, Salesforce, or Vertex CRM across 8 AI networks.',
    color: '#7c3aed',
    bg: '#f3e8ff',
  },
  {
    icon: BarChart3,
    title: 'Pixel & CAPI Attribution',
    desc: 'Connect oct-pix.js and server-side Conversions API to measure both deterministic clicks and AI-assisted conversions.',
    color: '#0f9d6e',
    bg: '#dcfce7',
  },
  {
    icon: Sliders,
    title: 'Model-Level Budget Control',
    desc: 'Allocate spend across Claude, ChatGPT, Perplexity, and Gemini with CPA caps, ROAS floors, and real-time pacing.',
    color: '#d97706',
    bg: '#fef3c7',
  },
];

export default function AdvertisersPage() {
  return (
    <div className="pb-20 bg-[#f8f9fc] bg-[linear-gradient(to_right,#e3e6ec40_1px,transparent_1px),linear-gradient(to_bottom,#e3e6ec40_1px,transparent_1px)] [background-size:44px_44px]">
      {/* Hero */}
      <section className="bg-white/95 border-b border-[#e3e6ec]">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2447ff] bg-[#e8ecff] px-3.5 py-1.5 rounded-full mb-5">
              <TrendingUp size={13} />
              OctaLume for Advertisers
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#0e1116] tracking-tight leading-[1.12]"
              style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
            >
              Turn AI recommendations into your highest-ROAS acquisition channel
            </h1>
            <p className="text-base sm:text-lg text-[#667085] mt-5 leading-relaxed">
              Buyers are shifting from traditional search engines to conversational AI. OctaLume
              gives growth teams full visibility into prompt demand, competitor positioning, and
              native ad placements across every major LLM platform.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-[#2447ff] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
              >
                Launch a Campaign
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/docs?section=advertisers"
                className="inline-flex items-center gap-2 bg-white text-[#0e1116] border border-[#e3e6ec] text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#f3f4f7] transition-colors"
              >
                Read Advertiser Docs
              </Link>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-2xl p-5 hover:border-[#2447ff]/40 transition-colors"
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

      {/* Interactive 3-Step Flow for Advertisers */}
      <section className="max-w-[1280px] mx-auto px-6 pt-16 pb-10">
        <ScrollReveal>
          <HowItWorksStepper initialMode="advertisers" lockedMode="advertisers" />
        </ScrollReveal>
      </section>

      {/* Comparison Card for Advertisers */}
      <section className="max-w-[1280px] mx-auto px-6 py-10">
        <ScrollReveal delay={80}>
          <ComparisonCard initialView="advertiser" lockedView="advertiser" />
        </ScrollReveal>
      </section>

      {/* AI Visibility Intelligence Copilot Section */}
      <section className="max-w-[1280px] mx-auto px-6 pt-10">
        <ScrollReveal delay={100}>
          <div className="bg-white border border-[#e3e6ec] rounded-3xl p-6 sm:p-8 shadow-sm">
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
              <div className="flex items-center gap-2 text-xs text-[#0f9d6e] bg-green-50 border border-green-200 px-3 py-1.5 rounded-full font-medium self-start md:self-auto">
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
