'use client';

import { useState } from 'react';
import { Save, Check, Sliders, DollarSign, Zap } from 'lucide-react';

const publishers = [
  { id: 'claude', name: 'Claude', org: 'Anthropic', model: 'Opus 5.5', cpm: '$4.20', color: '#d97706', enabled: true },
  { id: 'chatgpt', name: 'ChatGPT', org: 'OpenAI', model: 'GPT-5.5', cpm: '$3.80', color: '#16a34a', enabled: true },
  { id: 'gemini', name: 'Gemini', org: 'Google', model: 'Gemini 3', cpm: '$3.50', color: '#2563eb', enabled: true },
  { id: 'perplexity', name: 'Perplexity', org: 'Perplexity AI', model: 'Sonar', cpm: '$5.10', color: '#0d9488', enabled: true },
  { id: 'metaai', name: 'Meta AI', org: 'Meta', model: 'Llama 4', cpm: '$2.90', color: '#3b82f6', enabled: false },
  { id: 'grok', name: 'Grok', org: 'xAI', model: 'Grok 4', cpm: '$3.20', color: '#111827', enabled: false },
  { id: 'copilot', name: 'Microsoft Copilot', org: 'Microsoft', model: 'Copilot', cpm: '$2.60', color: '#0078d4', enabled: true },
  { id: 'mistral', name: 'Mistral Le Chat', org: 'Mistral AI', model: 'Mistral', cpm: '$2.10', color: '#ea580c', enabled: false },
];

const initialBudgets = [
  { model: 'Claude', campaign: 'CRM for Small Teams', daily: 280, total: 8400, spent: 5200, targetCpa: 32 },
  { model: 'ChatGPT', campaign: 'Enterprise CRM Migration', daily: 350, total: 10500, spent: 9800, targetCpa: 36 },
  { model: 'Perplexity', campaign: 'CRM for Small Teams', daily: 160, total: 4800, spent: 3100, targetCpa: 28 },
  { model: 'Gemini', campaign: 'Competitor Conquest (Zoho/Salesforce)', daily: 220, total: 6600, spent: 5100, targetCpa: 38 },
  { model: 'Microsoft Copilot', campaign: 'B2B Sales Acceleration', daily: 140, total: 4200, spent: 2300, targetCpa: 34 },
];

export default function ControlsPage() {
  const [pubToggles, setPubToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(publishers.map(p => [p.id, p.enabled]))
  );
  const [budgets, setBudgets] = useState(initialBudgets);
  const [biddingStrategy, setBiddingStrategy] = useState<'efficient' | 'balanced' | 'aggressive'>('balanced');
  const [maxCpaCap, setMaxCpaCap] = useState(45);
  const [minRoasThreshold, setMinRoasThreshold] = useState(3.5);
  const [saved, setSaved] = useState(false);

  const totalDaily = budgets.reduce((acc, r) => acc + (pubToggles[r.model.toLowerCase().replace(/[^a-z]/g, '')] !== false ? r.daily : 0), 0);
  const totalSpend = budgets.reduce((acc, r) => acc + r.spent, 0);
  const totalBudget = budgets.reduce((acc, r) => acc + r.total, 0);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const toggleAll = (enable: boolean) => {
    const updated: Record<string, boolean> = {};
    publishers.forEach(p => { updated[p.id] = enable; });
    setPubToggles(updated);
  };

  return (
    <div className="max-w-[1200px] mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
            Controls & Data
          </h1>
          <p className="text-sm text-[#667085] mt-0.5">
            Select target AI models, configure campaign ad spend allocations, and manage performance bidding limits
          </p>
        </div>
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 bg-[#2447ff] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm self-start sm:self-auto"
        >
          {saved ? <Check size={16} /> : <Save size={16} />}
          {saved ? 'Changes Saved!' : 'Save All Changes'}
        </button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-[#e3e6ec] rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#e8ecff] flex items-center justify-center text-[#2447ff]">
            <DollarSign size={20} />
          </div>
          <div>
            <div className="text-xs text-[#667085]">Active Daily Budget Run-rate</div>
            <div className="text-xl font-bold text-[#0e1116]">${totalDaily.toLocaleString()}/day</div>
          </div>
        </div>

        <div className="bg-white border border-[#e3e6ec] rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[#0f9d6e]">
            <Zap size={20} />
          </div>
          <div>
            <div className="text-xs text-[#667085]">Active Publisher Models</div>
            <div className="text-xl font-bold text-[#0e1116]">
              {Object.values(pubToggles).filter(Boolean).length} of {publishers.length} Active
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#e3e6ec] rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
            <Sliders size={20} />
          </div>
          <div>
            <div className="text-xs text-[#667085]">Total Campaign Budget Pacing</div>
            <div className="text-xl font-bold text-[#0e1116]">
              ${totalSpend.toLocaleString()} / ${totalBudget.toLocaleString()} ({Math.round((totalSpend / totalBudget) * 100)}%)
            </div>
          </div>
        </div>
      </div>

      {/* 1. Model Selection */}
      <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 pb-4 border-b border-[#e3e6ec]">
          <div>
            <h2 className="text-lg font-semibold text-[#0e1116]">1. AI Model Selection</h2>
            <p className="text-xs text-[#667085] mt-0.5">
              Choose which AI publisher models receive Flowdesk ad placements and context matching
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleAll(true)}
              className="text-xs text-[#2447ff] hover:bg-[#e8ecff] px-2.5 py-1 rounded-lg font-medium transition-colors"
            >
              Enable All
            </button>
            <span className="text-[#e3e6ec]">|</span>
            <button
              onClick={() => toggleAll(false)}
              className="text-xs text-[#667085] hover:bg-[#f3f4f7] px-2.5 py-1 rounded-lg font-medium transition-colors"
            >
              Disable All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {publishers.map((pub) => {
            const isEnabled = pubToggles[pub.id] ?? false;
            return (
              <div
                key={pub.id}
                onClick={() => setPubToggles(prev => ({ ...prev, [pub.id]: !prev[pub.id] }))}
                className={`border rounded-2xl p-4 cursor-pointer transition-all select-none ${
                  isEnabled
                    ? 'border-[#2447ff] bg-gradient-to-b from-[#f8faff] to-white shadow-sm'
                    : 'border-[#e3e6ec] bg-[#fafafa] opacity-65 hover:opacity-90'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-sm"
                    style={{ backgroundColor: pub.color }}
                  >
                    {pub.name[0]}
                  </div>
                  <div
                    className={`w-11 h-6 rounded-full relative transition-colors ${
                      isEnabled ? 'bg-[#2447ff]' : 'bg-[#e3e6ec]'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-md transition-all ${
                        isEnabled ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </div>
                </div>

                <div className="font-semibold text-[#0e1116] text-base">{pub.name}</div>
                <div className="text-xs text-[#667085]">{pub.org}</div>
                <div className="text-xs font-mono text-[#667085] mt-1">{pub.model}</div>

                <div className="mt-4 pt-3 border-t border-[#e3e6ec]/70 flex items-center justify-between text-xs">
                  <span className="text-[#667085]">Est. CPM:</span>
                  <span className="font-semibold text-[#2447ff]">{pub.cpm}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Budget Allocation by Model & Campaign */}
      <div className="bg-white border border-[#e3e6ec] rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-[#e3e6ec] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-[#0e1116]">2. Spend & Budget Allocation by Model</h2>
            <p className="text-xs text-[#667085] mt-0.5">
              Edit daily budget caps, total allocations, and target CPA limits across campaigns and models
            </p>
          </div>
          <div className="text-xs font-medium text-[#667085] bg-[#f3f4f7] px-3 py-1.5 rounded-lg border border-[#e3e6ec]">
            Directly edits ad server pacing
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e3e6ec] bg-[#fafafa]">
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-[#667085] uppercase tracking-wider">AI Model</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-[#667085] uppercase tracking-wider">Active Campaign</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-[#667085] uppercase tracking-wider">Daily Budget</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-[#667085] uppercase tracking-wider">Total Budget</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold text-[#667085] uppercase tracking-wider">Target CPA</th>
                <th className="px-5 py-3.5 text-right text-xs font-semibold text-[#667085] uppercase tracking-wider">Spent</th>
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-[#667085] uppercase tracking-wider">Budget Pacing</th>
              </tr>
            </thead>
            <tbody>
              {budgets.map((row, i) => {
                const pacing = Math.round((row.spent / row.total) * 100);
                return (
                  <tr key={i} className="border-b border-[#e3e6ec] hover:bg-[#fafbff] transition-colors last:border-0">
                    <td className="px-6 py-4 font-semibold text-[#0e1116] whitespace-nowrap">
                      {row.model}
                    </td>
                    <td className="px-5 py-4 text-[#667085] whitespace-nowrap">
                      {row.campaign}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#667085] font-medium">$</span>
                        <input
                          type="number"
                          value={row.daily}
                          onChange={e => setBudgets(prev => prev.map((r, j) => j === i ? { ...r, daily: Math.max(0, Number(e.target.value)) } : r))}
                          className="w-24 border border-[#e3e6ec] rounded-lg px-2.5 py-1.5 text-sm font-medium text-[#0e1116] bg-white focus:outline-none focus:border-[#2447ff] focus:ring-1 focus:ring-[#2447ff]"
                        />
                        <span className="text-xs text-[#667085]">/day</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#667085] font-medium">$</span>
                        <input
                          type="number"
                          value={row.total}
                          onChange={e => setBudgets(prev => prev.map((r, j) => j === i ? { ...r, total: Math.max(0, Number(e.target.value)) } : r))}
                          className="w-28 border border-[#e3e6ec] rounded-lg px-2.5 py-1.5 text-sm font-medium text-[#0e1116] bg-white focus:outline-none focus:border-[#2447ff] focus:ring-1 focus:ring-[#2447ff]"
                        />
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#667085] font-medium">$</span>
                        <input
                          type="number"
                          value={row.targetCpa}
                          onChange={e => setBudgets(prev => prev.map((r, j) => j === i ? { ...r, targetCpa: Math.max(0, Number(e.target.value)) } : r))}
                          className="w-20 border border-[#e3e6ec] rounded-lg px-2.5 py-1.5 text-sm font-medium text-[#0e1116] bg-white focus:outline-none focus:border-[#2447ff] focus:ring-1 focus:ring-[#2447ff]"
                        />
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right font-medium text-[#0e1116] whitespace-nowrap">
                      ${row.spent.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2.5 min-w-[140px]">
                        <div className="flex-1 bg-[#f3f4f7] rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              pacing > 90 ? 'bg-[#e5484d]' : pacing > 75 ? 'bg-[#c77700]' : 'bg-[#2447ff]'
                            }`}
                            style={{ width: `${Math.min(pacing, 100)}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-[#0e1116] w-9 text-right">{pacing}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Performance Thresholds & Auto-Optimization */}
      <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6">
        <div className="mb-5 pb-4 border-b border-[#e3e6ec]">
          <h2 className="text-lg font-semibold text-[#0e1116]">3. Performance & Bidding Guardrails</h2>
          <p className="text-xs text-[#667085] mt-0.5">
            Automated budget protections and bid multipliers to guard campaign ROI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#e3e6ec] rounded-xl p-4">
            <div className="text-sm font-semibold text-[#0e1116] mb-1">Bidding Strategy</div>
            <p className="text-xs text-[#667085] mb-3">Determines how aggressively bids scale on high-intent buyer prompts</p>
            <div className="flex gap-2">
              {(['efficient', 'balanced', 'aggressive'] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => setBiddingStrategy(mode)}
                  className={`flex-1 text-xs py-2 px-1 rounded-lg capitalize font-medium border transition-colors ${
                    biddingStrategy === mode
                      ? 'border-[#2447ff] bg-[#e8ecff] text-[#2447ff]'
                      : 'border-[#e3e6ec] text-[#667085] hover:border-[#2447ff]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="border border-[#e3e6ec] rounded-xl p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-[#0e1116]">Max Target CPA Cap</span>
              <span className="text-sm font-bold text-[#2447ff]">${maxCpaCap}</span>
            </div>
            <p className="text-xs text-[#667085] mb-3">Auto-throttle models when 7-day CPA exceeds threshold</p>
            <input
              type="range"
              min="20"
              max="80"
              value={maxCpaCap}
              onChange={e => setMaxCpaCap(Number(e.target.value))}
              className="w-full accent-[#2447ff]"
            />
            <div className="flex justify-between text-[11px] text-[#667085] mt-1">
              <span>$20 (Strict)</span>
              <span>$80 (Growth)</span>
            </div>
          </div>

          <div className="border border-[#e3e6ec] rounded-xl p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-[#0e1116]">Minimum ROAS Floor</span>
              <span className="text-sm font-bold text-[#0f9d6e]">{minRoasThreshold.toFixed(1)}×</span>
            </div>
            <p className="text-xs text-[#667085] mb-3">Require models to maintain minimum return on ad spend</p>
            <input
              type="range"
              min="2.0"
              max="6.0"
              step="0.1"
              value={minRoasThreshold}
              onChange={e => setMinRoasThreshold(Number(e.target.value))}
              className="w-full accent-[#0f9d6e]"
            />
            <div className="flex justify-between text-[11px] text-[#667085] mt-1">
              <span>2.0×</span>
              <span>6.0× (High return)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
