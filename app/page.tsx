'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  TrendingUp,
  Layers,
  Cpu,
  Target,
  DollarSign,
  CheckCircle2,
  Sparkles,
  Code2,
} from 'lucide-react';
import PublisherChatWidget from '@/components/chat/PublisherChatWidget';

const advertiserSteps = [
  {
    step: '01',
    title: 'Set Intent & Bids',
    desc: 'Define target buyer prompts, CPM/CPA bids, and monthly spend guardrails across AI platforms.',
  },
  {
    step: '02',
    title: 'Real-Time Semantic Match',
    desc: 'OctaLume matches your product contextually inside active AI chats without disrupting the LLM response.',
  },
  {
    step: '03',
    title: 'Verified Pixel & CAPI ROAS',
    desc: 'Track deterministic clicks and AI-assisted conversions via first-party Pixel and server-side CAPI.',
  },
];

const publisherSteps = [
  {
    step: '01',
    title: 'Parallel SDK Integration',
    desc: 'Call @octalume/sdk or REST API in parallel with LLM inference — zero added latency to token streaming.',
  },
  {
    step: '02',
    title: 'Native Conversational UI',
    desc: 'Render clean inline or below-response sponsored cards with automatic viewport impression tracking.',
  },
  {
    step: '03',
    title: 'Monetize Every Session',
    desc: 'Earn high-yield revenue from high-intent commercial queries to offset GPU and inference costs.',
  },
];

const metrics = [
  { label: 'Ad Serving Latency (p95)', value: '< 45ms' },
  { label: 'Connected AI Publishers', value: '8+ Networks' },
  { label: 'Avg. Advertiser ROAS', value: '4.6×' },
  { label: 'Privacy & Consent', value: 'GDPR / GPC' },
];

export default function HomePage() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#e3e6ec] bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#2447ff14_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2447ff] bg-[#e8ecff] border border-[#2447ff]/20 px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles size={13} />
              The AI-Native Advertising &amp; Monetization Network
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0e1116] tracking-tight leading-[1.1]"
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

            <div className="flex flex-wrap items-center justify-center gap-3.5 mt-9">
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

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-2xl p-4 text-center"
              >
                <div
                  className="text-2xl font-bold text-[#0e1116]"
                  style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
                >
                  {m.value}
                </div>
                <div className="text-xs text-[#667085] mt-1 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Sided Flow: Advertisers & AI Platforms */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-[#2447ff] uppercase tracking-wider mb-2">
            Two-Sided Marketplace Flow
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0e1116] tracking-tight"
            style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
          >
            Built for both Advertisers and AI Platforms
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3">
            Whether you are a brand capturing buyer intent or an AI app monetizing inference,
            OctaLume connects both sides in milliseconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Advertisers Flow Card */}
          <div className="bg-white border border-[#e3e6ec] rounded-3xl p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#2447ff] bg-[#e8ecff] px-3 py-1 rounded-full">
                  <Target size={13} />
                  For Advertisers &amp; Brands
                </span>
                <span className="text-xs font-medium text-[#667085]">CPM / CPA Billing</span>
              </div>
              <h3
                className="text-2xl font-bold text-[#0e1116] mb-2"
                style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
              >
                Win high-intent AI recommendations
              </h3>
              <p className="text-sm text-[#667085] mb-7">
                Appear right when buyers ask AI assistants to compare tools, evaluate pricing, or
                recommend software.
              </p>

              <div className="space-y-4">
                {advertiserSteps.map((s) => (
                  <div
                    key={s.step}
                    className="flex gap-4 p-4 rounded-2xl bg-[#f8f9fc] border border-[#e3e6ec]/80"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#2447ff] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0e1116]">{s.title}</div>
                      <div className="text-xs text-[#667085] mt-1 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#e3e6ec] flex items-center justify-between">
              <Link
                href="/advertisers"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2447ff] hover:underline"
              >
                Explore Advertiser Capabilities
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/docs?section=advertisers"
                className="text-xs font-medium text-[#667085] hover:text-[#0e1116]"
              >
                Advertiser Docs →
              </Link>
            </div>
          </div>

          {/* AI Platforms (Publishers) Flow Card */}
          <div className="bg-white border border-[#e3e6ec] rounded-3xl p-7 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#0f9d6e] bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                  <Cpu size={13} />
                  For AI Platforms &amp; Publishers
                </span>
                <span className="text-xs font-medium text-[#667085]">Parallel Ad Serving</span>
              </div>
              <h3
                className="text-2xl font-bold text-[#0e1116] mb-2"
                style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
              >
                Monetize chats without slowing LLMs
              </h3>
              <p className="text-sm text-[#667085] mb-7">
                Run OctaLume alongside your model inference to serve relevant, user-friendly
                sponsored cards with full privacy controls.
              </p>

              <div className="space-y-4">
                {publisherSteps.map((s) => (
                  <div
                    key={s.step}
                    className="flex gap-4 p-4 rounded-2xl bg-[#f8f9fc] border border-[#e3e6ec]/80"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#0f9d6e] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0e1116]">{s.title}</div>
                      <div className="text-xs text-[#667085] mt-1 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#e3e6ec] flex items-center justify-between">
              <Link
                href="/docs?section=publishers"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f9d6e] hover:underline"
              >
                Read Publisher Integration Docs
                <ArrowRight size={14} />
              </Link>
              <span className="text-xs font-mono text-[#667085]">@octalume/sdk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interactive Publisher Chatbot Section */}
      <section id="live-demo" className="max-w-[1280px] mx-auto px-6 pb-20">
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
      </section>

      {/* Architecture & Trust Strip */}
      <section className="max-w-[1280px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6">
            <ShieldCheck size={22} className="text-[#2447ff] mb-3" />
            <h4 className="font-semibold text-[#0e1116] mb-1">Privacy-First Contextual</h4>
            <p className="text-xs text-[#667085] leading-relaxed">
              Full GDPR, CCPA, and Global Privacy Control support. Defaults to zero-identifier
              contextual matching when consent is absent.
            </p>
          </div>
          <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6">
            <Layers size={22} className="text-[#0f9d6e] mb-3" />
            <h4 className="font-semibold text-[#0e1116] mb-1">Objective LLM Integrity</h4>
            <p className="text-xs text-[#667085] leading-relaxed">
              Sponsored placements are clearly labeled and served independently of the model&apos;s
              core reasoning, preserving user trust.
            </p>
          </div>
          <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6">
            <TrendingUp size={22} className="text-[#7c3aed] mb-3" />
            <h4 className="font-semibold text-[#0e1116] mb-1">Full-Funnel Attribution</h4>
            <p className="text-xs text-[#667085] leading-relaxed">
              Measure direct clicks and AI-assisted conversions with the OctaLume Pixel
              (<code className="text-[#2447ff]">oct-pix.js</code>) and server-side CAPI.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1280px] mx-auto px-6">
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
      </section>
    </div>
  );
}
