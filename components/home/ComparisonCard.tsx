'use client';

import { useState } from 'react';

export default function ComparisonCard() {
  const [view, setView] = useState<'platform' | 'advertiser'>('platform');

  return (
    <div className="bg-white border border-[#e3e6ec] rounded-3xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
        <div>
          <h3
            className="text-xl sm:text-2xl font-bold text-[#0e1116]"
            style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
          >
            The OctaLume Impact
          </h3>
          <p className="text-xs sm:text-sm text-[#667085]">
            See the difference before and after integrating OctaLume
          </p>
        </div>
        <div className="inline-flex p-1 bg-[#f3f4f7] border border-[#e3e6ec] rounded-xl self-start">
          <button
            onClick={() => setView('platform')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              view === 'platform' ? 'bg-white text-[#0e1116] shadow-2xs' : 'text-[#667085]'
            }`}
          >
            AI Platforms
          </button>
          <button
            onClick={() => setView('advertiser')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              view === 'advertiser' ? 'bg-white text-[#0e1116] shadow-2xs' : 'text-[#667085]'
            }`}
          >
            Advertisers
          </button>
        </div>
      </div>

      {/* Split Comparison Box (Modeled after Image 3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative">
        {/* Divider on desktop */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-[#e3e6ec]" />

        {/* Left: Without OctaLume */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-sm font-medium text-[#667085] mb-3">
            <span>Without</span>
            <span className="font-bold text-[#98a2b3]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
              OctaLume
            </span>
          </div>
          <div className="w-full rounded-2xl bg-[#f8f9fa] border border-[#e3e6ec]/70 py-10 px-6 text-center">
            <div className="text-xs font-medium text-[#667085] mb-2">
              {view === 'platform' ? 'Revenue' : 'AI Share of Voice'}
            </div>
            <div
              className="text-4xl sm:text-5xl font-bold text-[#98a2b3] tracking-tight"
              style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
            >
              {view === 'platform' ? '$0.00' : '0%'}
            </div>
            <div className="mt-3 inline-block text-[11px] font-medium text-[#98a2b3]">
              {view === 'platform' ? 'Unmonetized inference' : 'Invisible in buyer prompts'}
            </div>
          </div>
        </div>

        {/* Right: With OctaLume */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-sm font-medium text-[#667085] mb-3">
            <span>With</span>
            <span className="font-bold text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
              OctaLume
            </span>
          </div>
          <div className="w-full rounded-2xl bg-[#ecfdf5]/80 border border-[#0f9d6e]/25 py-10 px-6 text-center transition-all">
            <div className="text-xs font-medium text-[#667085] mb-2">
              {view === 'platform' ? 'Revenue' : 'Blended ROAS'}
            </div>
            <div
              className="text-4xl sm:text-5xl font-bold text-[#0f9d6e] tracking-tight"
              style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
            >
              {view === 'platform' ? '$42.01' : '4.6×'}
            </div>
            <div className="mt-3">
              <span className="inline-block text-[11px] font-semibold text-[#0f9d6e] bg-[#d1fae5] px-3 py-0.5 rounded-full">
                {view === 'platform' ? 'CPM' : 'CPA + CPM'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right text-[11px] text-[#667085] mt-3">Example data</div>
    </div>
  );
}
