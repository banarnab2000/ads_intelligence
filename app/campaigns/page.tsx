'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';
import { campaigns } from '@/lib/data';

const automationToggles = [
  { label: 'Auto-pause underperforming publishers (CPA > $60)', enabled: true },
  { label: 'Auto-increase budget for ROAS > 5×', enabled: true },
  { label: 'Auto-refresh ad copy monthly', enabled: false },
  { label: 'Auto-generate bid adjustments', enabled: false },
  { label: 'Send weekly performance digest email', enabled: true },
];

const budgetSuggestions = [
  { action: 'Increase Perplexity budget', from: '$6.1k', to: '$9k', reason: 'ROAS 5.4× — above target', impact: '+40 conversions', type: 'increase' },
  { action: 'Pause Microsoft Copilot', from: '$2.9k', to: '$0', reason: 'CPA $51 — 36% over target', impact: 'Save $2.9k/mo', type: 'pause' },
  { action: 'Boost Claude budget', from: '$12.4k', to: '$15k', reason: 'High quality score (94)', impact: '+21 conversions', type: 'increase' },
  { action: 'Reduce Mistral Le Chat', from: '$1.8k', to: '$0.5k', reason: 'Quality score 64 — low confidence', impact: 'Save $1.3k/mo', type: 'reduce' },
];

const statusColors: Record<string, string> = {
  Active: 'bg-green-50 text-green-700',
  Paused: 'bg-yellow-50 text-yellow-700',
};

export default function CampaignsPage() {
  const [toggles, setToggles] = useState(automationToggles.map(a => a.enabled));

  return (
    <div className="max-w-[1100px] mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-1.5 text-sm text-[#667085] hover:text-[#0e1116] transition-colors">
          <ArrowLeft size={16} />
          Back to Overview
        </Link>
      </div>

      <div>
        <h1 className="text-xl font-bold text-[#0e1116] mb-1" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>Campaigns</h1>
        <p className="text-sm text-[#667085]">Manage your AI publisher campaigns</p>
      </div>

      {/* Campaign Table */}
      <div className="bg-white border border-[#e3e6ec] rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#e3e6ec]">
          <h2 className="font-semibold text-[#0e1116]">Active Campaigns</h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e3e6ec] bg-[#fafafa]">
              {['Campaign', 'Status', 'Budget', 'Spent', 'Pacing', 'Bid (CPM)', 'Geography'].map(h => (
                <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-[#667085]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c.id} className="border-b border-[#e3e6ec] hover:bg-[#fafafa] last:border-0">
                <td className="px-5 py-3.5 font-medium text-[#0e1116]">{c.name}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[c.status]}`}>{c.status}</span>
                </td>
                <td className="px-5 py-3.5 text-[#0e1116]">${c.budget.toLocaleString()}</td>
                <td className="px-5 py-3.5 text-[#0e1116]">${c.spent.toLocaleString()}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-[#f3f4f7] rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${c.pacing > 80 ? 'bg-[#c77700]' : 'bg-[#2447ff]'}`}
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

      {/* Automation Toggles */}
      <div className="bg-white border border-[#e3e6ec] rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Zap size={18} className="text-[#2447ff]" />
          <h2 className="font-semibold text-[#0e1116]">Automation Rules</h2>
        </div>
        <div className="space-y-3">
          {automationToggles.map((item, i) => (
            <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-[#f3f4f7] last:border-0">
              <span className="text-sm text-[#0e1116]">{item.label}</span>
              <button
                onClick={() => setToggles(prev => prev.map((v, j) => j === i ? !v : v))}
                className={`w-10 h-5 rounded-full relative flex-shrink-0 transition-colors ${toggles[i] ? 'bg-[#2447ff]' : 'bg-[#e3e6ec]'}`}
              >
                <span className={`w-4 h-4 bg-white rounded-full absolute top-0.5 shadow transition-all ${toggles[i] ? 'right-0.5' : 'left-0.5'}`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Suggestions */}
      <div className="bg-white border border-[#e3e6ec] rounded-2xl p-5">
        <h2 className="font-semibold text-[#0e1116] mb-4">AI Budget Suggestions</h2>
        <div className="space-y-3">
          {budgetSuggestions.map((s) => (
            <div key={s.action} className="flex items-center gap-4 p-4 border border-[#e3e6ec] rounded-xl hover:border-[#2447ff] transition-colors">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.type === 'increase' ? 'bg-[#0f9d6e]' : s.type === 'pause' ? 'bg-[#e5484d]' : 'bg-[#c77700]'}`} />
              <div className="flex-1">
                <div className="font-medium text-sm text-[#0e1116]">{s.action}</div>
                <div className="text-xs text-[#667085]">{s.reason}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-[#0e1116]">{s.from} → {s.to}</div>
                <div className={`text-xs font-medium ${s.type === 'increase' ? 'text-[#0f9d6e]' : 'text-[#c77700]'}`}>{s.impact}</div>
              </div>
              <button className="text-xs bg-[#e8ecff] text-[#2447ff] px-3 py-1.5 rounded-lg hover:bg-[#2447ff] hover:text-white transition-colors font-medium">Apply</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
