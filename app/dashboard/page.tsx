import Link from 'next/link';
import { TrendingUp, TrendingDown, ArrowRight, DollarSign, Target, Award, Users, BarChart2 } from 'lucide-react';
import { kpiStats } from '@/lib/data';

function DeltaBadge({ delta, positive }: { delta: string; positive: boolean }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${positive ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
      {positive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
      {delta}
    </span>
  );
}

const publisherAttribution = [
  { pub: 'Claude', deterministic: 410, assisted: 60, total: 470, share: 31, revenue: '$61.9k', roas: '5.2×', color: '#d97706' },
  { pub: 'ChatGPT', deterministic: 372, assisted: 88, total: 460, share: 29, revenue: '$63.0k', roas: '4.7×', color: '#16a34a' },
  { pub: 'Perplexity', deterministic: 190, assisted: 40, total: 230, share: 15, revenue: '$31.9k', roas: '4.2×', color: '#0d9488' },
  { pub: 'Gemini', deterministic: 131, assisted: 52, total: 183, share: 13, revenue: '$22.3k', roas: '3.6×', color: '#2563eb' },
  { pub: 'Microsoft Copilot', deterministic: 90, assisted: 71, total: 161, share: 12, revenue: '$18.9k', roas: '3.1×', color: '#0078d4' },
];

export default function OverviewPage() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-12">
      {/* Greeting Hero */}
      <div className="rounded-2xl border border-[#e3e6ec] bg-gradient-to-r from-[#e8ecff] via-white to-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2447ff] bg-white border border-[#e3e6ec] px-3 py-1 rounded-full mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#2447ff]"></span>
            Active Campaign Intelligence
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0e1116] tracking-tight" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
            Good afternoon, Flowdesk 👋
          </h1>
          <p className="text-sm text-[#667085] mt-1">
            Real-time cross-publisher performance, conversion attribution, and competitive AI share of voice
          </p>
        </div>
        <Link
          href="/campaigns"
          className="inline-flex items-center gap-2 bg-[#2447ff] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm self-start sm:self-auto"
        >
          View Campaigns
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* KPI Performance Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-semibold text-[#667085] uppercase tracking-wider">
            Executive Performance Summary
          </h2>
          <span className="text-xs text-[#667085]">
            Last 30 Days · Verified Events
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3">
          {kpiStats.map((stat) => (
            <div key={stat.label} className="bg-white border border-[#e3e6ec] rounded-2xl p-4 col-span-2 sm:col-span-1 lg:col-span-1 shadow-sm hover:border-[#2447ff]/40 transition-colors">
              <div className="text-xs text-[#667085] mb-1 font-medium">{stat.label}</div>
              <div className="text-xl font-bold text-[#0e1116] mb-1.5" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                {stat.value}
              </div>
              <DeltaBadge delta={stat.delta} positive={stat.positive} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Analytics Layout: Attribution + Funnel + Run-Rate Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Unified Attribution Table (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#e3e6ec] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-[#0e1116] text-lg">Publisher Attribution Breakdown</h2>
              <span className="text-xs font-medium text-[#0f9d6e] bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full">
                Deterministic + AI-Assisted
              </span>
            </div>
            <p className="text-xs text-[#667085] mb-5">
              Conversions attributed across direct clicks and AI conversational recommendations
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e3e6ec] bg-[#fafafa]">
                    <th className="text-left px-3 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Publisher</th>
                    <th className="text-right px-3 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Direct Clicks</th>
                    <th className="text-right px-3 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">AI Assisted</th>
                    <th className="text-right px-3 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Total Conv.</th>
                    <th className="text-right px-3 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Revenue</th>
                    <th className="text-right px-3 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {publisherAttribution.map((row) => (
                    <tr key={row.pub} className="border-b border-[#e3e6ec] hover:bg-[#fafbff] transition-colors last:border-0">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: row.color }}>
                            {row.pub[0]}
                          </div>
                          <span className="font-semibold text-[#0e1116]">{row.pub}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right font-medium text-[#0e1116]">{row.deterministic}</td>
                      <td className="py-3 px-3 text-right text-[#667085]">+{row.assisted}</td>
                      <td className="py-3 px-3 text-right font-bold text-[#2447ff]">{row.total}</td>
                      <td className="py-3 px-3 text-right font-semibold text-[#0e1116]">{row.revenue}</td>
                      <td className="py-3 px-3 text-right">
                        <span className="font-semibold text-[#0f9d6e]">{row.roas}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Conversion Share Bar */}
          <div className="mt-6 pt-5 border-t border-[#e3e6ec]">
            <div className="flex items-center justify-between text-xs text-[#667085] mb-2 font-medium">
              <span>Conversion Share Distribution</span>
              <span>100% Attributed Volume</span>
            </div>
            <div className="h-3 w-full rounded-full bg-[#f3f4f7] flex overflow-hidden">
              {publisherAttribution.map((p) => (
                <div
                  key={p.pub}
                  style={{ width: `${p.share}%`, backgroundColor: p.color }}
                  title={`${p.pub}: ${p.share}%`}
                  className="h-full hover:opacity-90 transition-opacity"
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#667085]">
              {publisherAttribution.map((p) => (
                <div key={p.pub} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }}></span>
                  <span className="font-medium text-[#0e1116]">{p.pub}</span>
                  <span>({p.share}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conversion Funnel + Insights (5 cols) */}
        <div className="lg:col-span-5 space-y-6">

          {/* Conversion Funnel */}
          <div className="bg-white border border-[#e3e6ec] rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-[#0e1116] text-base">Conversion Funnel</h2>
              <span className="text-xs text-[#667085]">CRM Match: 87%</span>
            </div>
            <p className="text-xs text-[#667085] mb-5">
              End-to-end journey from prompt impressions to qualified customer pipeline
            </p>

            <div className="space-y-4">
              {[
                { label: 'Prompt Impressions', value: '3,100,000', drop: '100%', pct: 100, barColor: 'bg-[#2447ff]' },
                { label: 'Sponsored Clicks', value: '82,400', drop: '2.66% CTR', pct: 68, barColor: 'bg-[#4f6bff]' },
                { label: 'Landing Page Visits', value: '61,200', drop: '74.3% visit rate', pct: 50, barColor: 'bg-[#7d93ff]' },
                { label: 'Attributed Conversions', value: '3,910', drop: '6.39% CVR', pct: 32, barColor: 'bg-[#0f9d6e]' },
                { label: 'Qualified Sales Leads', value: '1,284', drop: '32.8% qualification', pct: 18, barColor: 'bg-[#0b8058]' },
              ].map((f) => (
                <div key={f.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#0e1116]">{f.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#667085] text-[11px]">{f.drop}</span>
                      <span className="font-bold text-[#0e1116]">{f.value}</span>
                    </div>
                  </div>
                  <div className="w-full bg-[#f3f4f7] rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${f.barColor}`}
                      style={{ width: `${f.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Efficiency Summary Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-[#e3e6ec] rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-[#2447ff] mb-2">
                <Target size={16} />
                <span className="text-xs font-semibold uppercase">Lead Quality</span>
              </div>
              <div className="text-2xl font-bold text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                32.8%
              </div>
              <p className="text-xs text-[#667085] mt-1">
                Leads progressing to CRM qualified stage
              </p>
            </div>

            <div className="bg-white border border-[#e3e6ec] rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-[#0f9d6e] mb-2">
                <DollarSign size={16} />
                <span className="text-xs font-semibold uppercase">Revenue ROAS</span>
              </div>
              <div className="text-2xl font-bold text-[#0f9d6e]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                4.1×
              </div>
              <p className="text-xs text-[#667085] mt-1">
                $198k return on $48.2k total network spend
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
