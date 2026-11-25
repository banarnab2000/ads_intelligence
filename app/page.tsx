'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  TrendingUp,
  Layers,
  Sparkles,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import PublisherChatWidget from '@/components/chat/PublisherChatWidget';
import ScrollReveal from '@/components/home/ScrollReveal';
import HowItWorksStepper from '@/components/home/HowItWorksStepper';
import ComparisonCard from '@/components/home/ComparisonCard';

export default function HomePage() {
  return (
    <div className="pb-20 bg-[#f8f9fc] bg-[linear-gradient(to_right,#e3e6ec40_1px,transparent_1px),linear-gradient(to_bottom,#e3e6ec40_1px,transparent_1px)] [background-size:44px_44px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#e3e6ec] bg-white/90 backdrop-blur-xs">
        <div className="max-w-[1280px] mx-auto px-6 py-24 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2447ff] bg-[#e8ecff] border border-[#2447ff]/20 px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles size={13} />
              The AI-Native Advertising &amp; Monetization Network
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0e1116] tracking-tight leading-[1.08]"
              style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
            >
              Monetize AI conversations.{' '}
              <span className="bg-gradient-to-r from-[#2447ff] to-[#7c3aed] bg-clip-text text-transparent">
                Reach high-intent buyers.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#667085] mt-6 leading-relaxed max-w-2xl mx-auto">
              OctaLume bridges brands and AI platforms — delivering contextual, native sponsored
              suggestions inside LLM chats, search engines, and autonomous agents with zero
              disruption to the user experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-10">
              <Link
                href="/advertisers"
                className="inline-flex items-center gap-2 bg-[#2447ff] text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm text-sm"
              >
                For Advertisers
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 bg-white text-[#0e1116] border border-[#e3e6ec] font-semibold px-6 py-3 rounded-xl hover:bg-[#f3f4f7] transition-colors text-sm"
              >
                <Code2 size={15} className="text-[#2447ff]" />
                Publisher &amp; Advertiser Docs
              </Link>
              <a
                href="#live-demo"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2447ff] hover:underline px-4 py-3"
              >
                Try Live Publisher Chat ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animated 3-Step Flow (How it works — In 3 steps) */}
      <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16">
        <ScrollReveal>
          <HowItWorksStepper />
        </ScrollReveal>
      </section>

      {/* Catchy Comparison Card (Without OctaLume vs With OctaLume) */}
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <ScrollReveal delay={80}>
          <ComparisonCard />
        </ScrollReveal>
      </section>

      {/* Live Interactive Publisher Chatbot Section */}
      <section id="live-demo" className="max-w-[1280px] mx-auto px-6 py-16">
        <ScrollReveal delay={100}>
          <div className="bg-white border border-[#e3e6ec] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
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
                  Select any AI publisher on the left, ask a buyer question (e.g. &ldquo;What&apos;s
                  the best CRM for a 10-person sales team?&rdquo;), and see both the native
                  publisher response and OctaLume&apos;s real-time Ad Insight Engine on the right.
                </p>
              </div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-[#0e1116] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#2447ff] transition-colors self-start md:self-auto"
              >
                Open Full Console
                <ArrowRight size={14} />
              </Link>
            </div>

            <PublisherChatWidget heightClass="h-[600px]" />
          </div>
        </ScrollReveal>
      </section>

      {/* Architecture & Trust Strip */}
      <section className="max-w-[1280px] mx-auto px-6 pb-16">
        <ScrollReveal delay={120}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6 shadow-2xs hover:border-[#2447ff]/40 transition-colors">
              <ShieldCheck size={22} className="text-[#2447ff] mb-3" />
              <h4 className="font-semibold text-[#0e1116] mb-1">Privacy-First Contextual</h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                Full GDPR, CCPA, and Global Privacy Control support. Defaults to zero-identifier
                contextual matching when consent is absent.
              </p>
            </div>
            <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6 shadow-2xs hover:border-[#0f9d6e]/40 transition-colors">
              <Layers size={22} className="text-[#0f9d6e] mb-3" />
              <h4 className="font-semibold text-[#0e1116] mb-1">Objective LLM Integrity</h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                Sponsored placements are clearly labeled and served independently of the model&apos;s
                core reasoning, preserving user trust.
              </p>
            </div>
            <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6 shadow-2xs hover:border-[#7c3aed]/40 transition-colors">
              <TrendingUp size={22} className="text-[#7c3aed] mb-3" />
              <h4 className="font-semibold text-[#0e1116] mb-1">Full-Funnel Attribution</h4>
              <p className="text-xs text-[#667085] leading-relaxed">
                Measure direct clicks and AI-assisted conversions with the OctaLume Pixel
                (<code className="text-[#2447ff]">oct-pix.js</code>) and server-side CAPI.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1280px] mx-auto px-6">
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
                Sign in with our demo workspace to explore live campaign analytics, publisher
                rankings, and AI visibility intelligence.
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
  );
}
