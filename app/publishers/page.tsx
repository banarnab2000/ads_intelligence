import { publishers } from '@/lib/data';

function QualityBar({ score }: { score: number }) {
  const color = score >= 90 ? '#0f9d6e' : score >= 75 ? '#c77700' : '#e5484d';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-[#f3f4f7] rounded-full h-1.5">
        <div className="h-1.5 rounded-full" style={{ width: `${score}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs font-semibold w-7 text-right">{score}</span>
    </div>
  );
}

function ConfidenceBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    High: 'bg-green-50 text-green-700 border border-green-200',
    Medium: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
    Low: 'bg-red-50 text-red-600 border border-red-200',
  };
  return (
    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${styles[level]}`}>{level}</span>
  );
}

export default function PublishersPage() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
          Publishers
        </h1>
        <p className="text-sm text-[#667085] mt-0.5">
          Cross-network AI publisher performance, conversion efficiency, and lead quality analytics for Flowdesk CRM
        </p>
      </div>

      {/* Publisher Performance Table */}
      <div className="bg-white border border-[#e3e6ec] rounded-2xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-[#e3e6ec] flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-[#0e1116] text-base">Publisher Performance Ranking</h2>
            <p className="text-xs text-[#667085] mt-0.5">Normalized reporting across direct SDKs and AI network partners</p>
          </div>
          <span className="text-xs font-medium text-[#2447ff] bg-[#e8ecff] px-3 py-1 rounded-full">
            8 AI Publishers Monitored
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#e3e6ec] bg-[#fafafa]">
                <th className="text-left px-6 py-3.5 text-xs font-semibold text-[#667085] uppercase tracking-wider">Publisher</th>
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#667085] uppercase tracking-wider">Source</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#667085] uppercase tracking-wider">Spend</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#667085] uppercase tracking-wider">CTR</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#667085] uppercase tracking-wider">CVR</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#667085] uppercase tracking-wider">CPA</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#667085] uppercase tracking-wider">ROAS</th>
                <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#667085] uppercase tracking-wider">QL Rate</th>
                <th className="px-6 py-3.5 text-left text-xs font-semibold text-[#667085] uppercase tracking-wider min-w-[160px]">Quality Score</th>
                <th className="text-right px-6 py-3.5 text-xs font-semibold text-[#667085] uppercase tracking-wider">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {publishers.map((pub) => (
                <tr key={pub.id} className="border-b border-[#e3e6ec] hover:bg-[#fafbff] transition-colors last:border-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm" style={{ backgroundColor: pub.color }}>
                        {pub.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-[#0e1116]">{pub.name}</div>
                        <div className="text-xs text-[#667085]">{pub.model}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs font-medium text-[#667085] whitespace-nowrap">
                    {pub.id === 'claude' || pub.id === 'perplexity' || pub.id === 'grok' || pub.id === 'mistral' ? 'Direct SDK' : 'Network Partner'}
                  </td>
                  <td className="px-5 py-4 text-right font-semibold text-[#0e1116] whitespace-nowrap">
                    ${(pub.spend / 1000).toFixed(1)}k
                  </td>
                  <td className="px-5 py-4 text-right text-[#0e1116]">{pub.ctr}%</td>
                  <td className="px-5 py-4 text-right text-[#0e1116]">{pub.cvr}%</td>
                  <td className="px-5 py-4 text-right font-medium text-[#0e1116]">${pub.cpa}</td>
                  <td className="px-5 py-4 text-right font-semibold text-[#0f9d6e]">{pub.roas}×</td>
                  <td className="px-5 py-4 text-right text-[#0e1116]">{pub.qlr}%</td>
                  <td className="px-6 py-4">
                    <QualityBar score={pub.quality} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <ConfidenceBadge level={pub.confidence} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
