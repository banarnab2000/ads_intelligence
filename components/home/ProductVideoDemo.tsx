'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Sparkles, Zap, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PublisherLogo } from '@/components/chat/PublisherLogos';

const scenes = [
  {
    id: 0,
    tag: '01 · Buyer Intent',
    title: 'User asks an AI assistant',
    duration: 3600,
  },
  {
    id: 1,
    tag: '02 · <45ms Auction',
    title: 'OctaLume matches context in parallel',
    duration: 3600,
  },
  {
    id: 2,
    tag: '03 · Native Delivery',
    title: 'Sponsored card + full attribution',
    duration: 4200,
  },
];

export default function ProductVideoDemo() {
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const duration = scenes[scene].duration;
    const interval = 50;
    let elapsed = 0;

    setProgress(0);
    const timer = setInterval(() => {
      elapsed += interval;
      setProgress(Math.min((elapsed / duration) * 100, 100));
      if (elapsed >= duration) {
        setScene((prev) => (prev + 1) % scenes.length);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [scene, playing]);

  return (
    <div className="rounded-3xl border border-white/15 bg-[#070b1a] shadow-2xl overflow-hidden">
      {/* Player Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-white/10 bg-white/[0.03]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-xs font-mono text-blue-200/70 ml-2 hidden sm:inline">
            octalume-engine-live-flow.mp4
          </span>
        </div>

        {/* Scene pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {scenes.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setScene(s.id);
                setProgress(0);
              }}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all whitespace-nowrap ${
                scene === s.id
                  ? 'bg-[#2447ff] text-white shadow-sm shadow-blue-600/40'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {s.tag}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPlaying((p) => !p)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
          aria-label={playing ? 'Pause animation' : 'Play animation'}
        >
          {playing ? <Pause size={12} /> : <Play size={12} />}
          <span className="hidden sm:inline">{playing ? 'Pause' : 'Play'}</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-0.5 w-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#34d399] transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Animated Stage */}
      <div className="relative p-5 sm:p-8 md:p-10 min-h-[340px] flex flex-col justify-center bg-[radial-gradient(ellipse_at_top,rgba(36,71,255,0.16),transparent_65%)]">
        {/* Scene 0: User Prompt */}
        {scene === 0 && (
          <div className="max-w-2xl mx-auto w-full space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between text-xs text-blue-300/80">
              <span className="inline-flex items-center gap-2 font-semibold">
                <PublisherLogo id="claude" size={20} />
                AI Publisher Session · Commercial Intent Detected
              </span>
              <span className="font-mono text-emerald-400">intent_score: 0.94</span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">User Prompt</div>
              <div className="text-lg sm:text-xl font-medium text-white flex items-center gap-1">
                <span>&ldquo;What&apos;s the best CRM for a 12-person B2B sales team?&rdquo;</span>
                <span className="inline-block w-0.5 h-5 bg-blue-400 animate-pulse" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['category: B2B_SaaS', 'segment: SMB_Sales', 'buying_stage: evaluation'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-blue-500/15 border border-blue-400/30 text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scene 1: <45ms OctaLume Engine */}
        {scene === 1 && (
          <div className="max-w-3xl mx-auto w-full space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <div className="text-xs text-gray-400 mb-1">Parallel SDK Call</div>
                <div className="font-mono text-xs text-blue-300">octalume.match(ctx)</div>
                <div className="mt-2 inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <ShieldCheck size={11} /> Zero PII Sent
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500/40 bg-gradient-to-b from-blue-600/20 to-purple-600/20 p-5 text-center shadow-lg shadow-blue-900/30">
                <div className="flex justify-center mb-2">
                  <Image src="/logo.png" alt="OctaLume" width={48} height={28} className="object-contain animate-pulse" />
                </div>
                <div className="text-sm font-bold text-white">OctaLume Engine</div>
                <div className="text-xs text-blue-200 mt-1 font-mono">Auction settled in 38ms</div>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                <div className="text-xs text-emerald-200 mb-1">Winning Bid</div>
                <div className="text-base font-bold text-white">Flowdesk CRM</div>
                <div className="mt-1 text-xs font-mono text-emerald-300">Rank #1 · $4.20 Bid</div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-400">
              Runs asynchronously alongside LLM token generation — <span className="text-white font-semibold">0ms added user wait time</span>.
            </div>
          </div>
        )}

        {/* Scene 2: Native Delivery & Attribution */}
        {scene === 2 && (
          <div className="max-w-2xl mx-auto w-full space-y-4 animate-fadeIn">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <PublisherLogo id="claude" size={18} />
                <span className="font-semibold text-white">AI Response</span>
                <span className="text-gray-500">·</span>
                <span className="text-emerald-400 font-mono text-[11px]">SponsoredCard rendered</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                For a 12-person B2B team, look for automated follow-ups, flat workspace pricing, and fast CRM onboarding...
              </p>

              {/* Native Sponsored Card */}
              <div className="rounded-xl border border-blue-500/40 bg-gradient-to-r from-blue-950/80 to-indigo-950/70 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      Sponsored
                    </span>
                    <span className="text-sm font-bold text-white">Flowdesk CRM</span>
                  </div>
                  <p className="text-xs text-blue-100/80">
                    Built for 5–25 rep teams. Automated WhatsApp &amp; email follow-ups in 24h.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold bg-[#2447ff] text-white px-3.5 py-2 rounded-lg self-start sm:self-center flex-shrink-0">
                  Start Free Trial <ArrowUpRight size={13} />
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 px-1">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 size={14} /> Publisher earned $42.01 CPM
              </span>
              <span className="inline-flex items-center gap-1.5 text-blue-300">
                <Zap size={14} /> Advertiser tracked 4.6× ROAS via oct-pix.js
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
