'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, PlusCircle, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { campaigns as initialCampaigns } from '@/lib/data';

const publisherChoices = ['Claude', 'ChatGPT', 'Perplexity', 'Gemini', 'Copilot', 'Grok'];

const statusColors: Record<string, string> = {
  Active: 'bg-green-50 text-green-700',
  Paused: 'bg-yellow-50 text-yellow-700',
};

export default function CampaignsPage() {
  const [campaignList, setCampaignList] = useState(initialCampaigns);
  const [name, setName] = useState('Flowdesk Q2 — AI Buyer Intent');
  const [objective, setObjective] = useState<'CPM' | 'CPA'>('CPM');
  const [selectedPubs, setSelectedPubs] = useState<string[]>(['Claude', 'ChatGPT', 'Perplexity']);
  const [intentKeywords, setIntentKeywords] = useState(
    'best CRM for small teams, Zoho CRM alternative, automated WhatsApp lead follow-up'
  );
  const [headline, setHeadline] = useState('Flowdesk CRM — Built for Fast-Moving Sales Teams');
  const [bodyCopy, setBodyCopy] = useState(
    'Launch automated multi-channel lead follow-ups in under 24 hours with transparent flat pricing.'
  );
  const [ctaText, setCtaText] = useState('Start Free Trial');
  const [ctaUrl, setCtaUrl] = useState('https://flowdesk.io/ai-crm');
  const [budget, setBudget] = useState('10000');
  const [bid, setBid] = useState('34');
  const [geo, setGeo] = useState('US, UK, CA');
  const [launchedToast, setLaunchedToast] = useState(false);

  const togglePub = (pub: string) => {
    setSelectedPubs((prev) =>
      prev.includes(pub) ? (prev.length > 1 ? prev.filter((p) => p !== pub) : prev) : [...prev, pub]
    );
  };

  const handleLaunchAd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newCampaign = {
      id: Date.now(),
      name: name.trim(),
      status: 'Active',
      budget: Number(budget) || 5000,
      spent: 0,
      pacing: 0,
      bid: Number(bid) || 28,
      geo: geo.trim() || 'US, Global',
    };
    setCampaignList((prev) => [newCampaign, ...prev]);
    setLaunchedToast(true);
    setTimeout(() => setLaunchedToast(false), 4000);
  };

  return (
    <div className="max-w-[1200px] mx-auto space-y-6 pb-12">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 text-sm text-[#667085] hover:text-[#0e1116] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Overview
        </Link>
      </div>

      <div>
        <h1
          className="text-2xl font-bold text-[#0e1116] mb-1"
          style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
        >
          Campaigns
        </h1>
        <p className="text-sm text-[#667085]">
          Monitor active AI publisher campaigns and launch new contextual native ads
        </p>
      </div>

      {/* Campaign Table */}
      <div className="bg-white border border-[#e3e6ec] rounded-2xl overflow-hidden shadow-2xs">
        <div className="px-5 py-4 border-b border-[#e3e6ec] flex items-center justify-between">
          <h2 className="font-semibold text-[#0e1116]">Active Campaigns</h2>
          <span className="text-xs font-medium text-[#2447ff] bg-[#e8ecff] px-2.5 py-1 rounded-full">
            {campaignList.length} Campaigns
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e3e6ec] bg-[#fafafa]">
                {['Campaign', 'Status', 'Budget', 'Spent', 'Pacing', 'Bid (CPM)', 'Geography'].map(
                  (h) => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-[#667085]">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {campaignList.map((c) => (
                <tr key={c.id} className="border-b border-[#e3e6ec] hover:bg-[#fafafa] last:border-0">
                  <td className="px-5 py-3.5 font-medium text-[#0e1116]">{c.name}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        statusColors[c.status] || 'bg-green-50 text-green-700'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-[#0e1116]">${c.budget.toLocaleString()}</td>
                  <td className="px-5 py-3.5 text-[#0e1116]">${c.spent.toLocaleString()}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-[#f3f4f7] rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${
                            c.pacing > 80 ? 'bg-[#c77700]' : 'bg-[#2447ff]'
                          }`}
                          style={{ width: `${c.pacing}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#667085]">{c.pacing}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-[#0e1116]">${c.bid}</td>
                  <td className="px-5 py-3.5 text-[#667085]">{c.geo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Run a New Ad Section (TryGravity-style Campaign & Native Ad Launcher) */}
      <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#e3e6ec]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2447ff] bg-[#e8ecff] px-2.5 py-0.5 rounded-full mb-2">
              <PlusCircle size={12} />
              New Campaign Builder
            </div>
            <h2
              className="text-lg font-bold text-[#0e1116]"
              style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
            >
              Run a New Ad
            </h2>
            <p className="text-xs text-[#667085] mt-0.5">
              Configure contextual intent matching, select AI publishers, and preview your native
              sponsored placement before launching.
            </p>
          </div>
          {launchedToast && (
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0f9d6e] bg-green-50 border border-green-200 px-3.5 py-2 rounded-xl">
              <CheckCircle2 size={14} />
              Campaign launched &amp; added to Active Campaigns!
            </div>
          )}
        </div>

        <form onSubmit={handleLaunchAd} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Form Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">
                  Campaign Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl focus:outline-none focus:border-[#2447ff] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">
                  Pricing Objective
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['CPM', 'CPA'] as const).map((obj) => (
                    <button
                      type="button"
                      key={obj}
                      onClick={() => setObjective(obj)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-colors ${
                        objective === obj
                          ? 'bg-[#e8ecff] border-[#2447ff] text-[#2447ff]'
                          : 'bg-[#f8f9fc] border-[#e3e6ec] text-[#667085] hover:text-[#0e1116]'
                      }`}
                    >
                      {obj === 'CPM' ? 'CPM (Impressions)' : 'CPA (Conversions)'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Target AI Publishers */}
            <div>
              <label className="block text-xs font-semibold text-[#0e1116] mb-2">
                Target AI Publishers
              </label>
              <div className="flex flex-wrap gap-2">
                {publisherChoices.map((pub) => {
                  const active = selectedPubs.includes(pub);
                  return (
                    <button
                      type="button"
                      key={pub}
                      onClick={() => togglePub(pub)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                        active
                          ? 'bg-[#2447ff] border-[#2447ff] text-white'
                          : 'bg-white border-[#e3e6ec] text-[#667085] hover:border-[#2447ff]'
                      }`}
                    >
                      {pub}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contextual Intent */}
            <div>
              <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">
                Contextual Intent Prompts &amp; Keywords
              </label>
              <input
                type="text"
                value={intentKeywords}
                onChange={(e) => setIntentKeywords(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl focus:outline-none focus:border-[#2447ff] focus:bg-white"
              />
            </div>

            {/* Creative Headline & Copy */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">
                  Sponsored Ad Headline
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl focus:outline-none focus:border-[#2447ff] focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">
                  Native Ad Description
                </label>
                <textarea
                  rows={2}
                  value={bodyCopy}
                  onChange={(e) => setBodyCopy(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl focus:outline-none focus:border-[#2447ff] focus:bg-white"
                />
              </div>
            </div>

            {/* Budget, Bid, Geo, CTA */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">
                  Budget ($)
                </label>
                <input
                  type="number"
                  min={100}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl focus:outline-none focus:border-[#2447ff]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">
                  Max Bid ($)
                </label>
                <input
                  type="number"
                  min={1}
                  value={bid}
                  onChange={(e) => setBid(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl focus:outline-none focus:border-[#2447ff]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">
                  CTA Button
                </label>
                <input
                  type="text"
                  value={ctaText}
                  onChange={(e) => setCtaText(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl focus:outline-none focus:border-[#2447ff]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">
                  Geography
                </label>
                <input
                  type="text"
                  value={geo}
                  onChange={(e) => setGeo(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl focus:outline-none focus:border-[#2447ff]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#2447ff] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Sparkles size={15} />
              Launch Ad Campaign
            </button>
          </div>

          {/* Right Live Native Ad Preview (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#f8f9fc] border border-[#e3e6ec] rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#667085] uppercase tracking-wider">
                  Live AI Placement Preview
                </span>
                <span className="text-[11px] font-medium text-[#2447ff] bg-[#e8ecff] px-2 py-0.5 rounded-full">
                  {selectedPubs[0] || 'Claude'} · inline_response
                </span>
              </div>

              {/* Simulated AI Chat Bubble */}
              <div className="bg-white border border-[#e3e6ec] rounded-2xl p-4 space-y-3 shadow-2xs">
                <div className="text-xs text-[#667085] leading-relaxed">
                  For a growing sales team looking to automate outreach and pipeline tracking,
                  modern lightweight CRMs offer faster onboarding than legacy suites...
                </div>

                {/* Native Sponsored Card */}
                <div className="border border-[#2447ff]/30 bg-gradient-to-br from-[#fafbff] to-[#e8ecff]/40 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2447ff] bg-[#e8ecff] px-2 py-0.5 rounded-full">
                      Sponsored · Flowdesk
                    </span>
                    <span className="text-[10px] text-[#667085]">{objective} Bid: ${bid}</span>
                  </div>
                  <div className="text-sm font-bold text-[#0e1116]">{headline}</div>
                  <p className="text-xs text-[#667085] mt-1 leading-relaxed">{bodyCopy}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-[#667085] truncate max-w-[180px]">
                      {ctaUrl}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold bg-[#2447ff] text-white px-3 py-1.5 rounded-lg">
                      {ctaText}
                      <ExternalLink size={11} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#667085] leading-relaxed">
                Targeting <strong>{selectedPubs.join(', ')}</strong> in <strong>{geo}</strong> with
                a <strong>${Number(budget || 0).toLocaleString()}</strong> budget.
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
