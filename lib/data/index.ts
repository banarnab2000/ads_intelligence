export const publishers = [
  { id: 'claude', name: 'Claude', model: 'Opus 5.5', color: '#d97706', spend: 12400, ctr: 3.2, cvr: 4.1, cpa: 32, roas: 4.8, qlr: 2.9, quality: 94, confidence: 'High' },
  { id: 'chatgpt', name: 'ChatGPT', model: 'GPT-5.5', color: '#16a34a', spend: 10800, ctr: 2.9, cvr: 3.7, cpa: 36, roas: 4.3, qlr: 2.6, quality: 88, confidence: 'High' },
  { id: 'gemini', name: 'Gemini', model: 'Gemini 3', color: '#2563eb', spend: 9200, ctr: 2.6, cvr: 3.3, cpa: 39, roas: 3.9, qlr: 2.3, quality: 82, confidence: 'Medium' },
  { id: 'perplexity', name: 'Perplexity', model: 'Sonar', color: '#0d9488', spend: 6100, ctr: 3.8, cvr: 5.2, cpa: 28, roas: 5.4, qlr: 3.4, quality: 91, confidence: 'High' },
  { id: 'metaai', name: 'Meta AI', model: 'Llama 4', color: '#3b82f6', spend: 4800, ctr: 2.1, cvr: 2.8, cpa: 48, roas: 3.1, qlr: 1.9, quality: 71, confidence: 'Medium' },
  { id: 'grok', name: 'Grok', model: 'Grok 4', color: '#111827', spend: 3200, ctr: 2.4, cvr: 3.1, cpa: 42, roas: 3.5, qlr: 2.1, quality: 76, confidence: 'Low' },
  { id: 'copilot', name: 'Microsoft Copilot', model: 'Copilot', color: '#0078d4', spend: 2900, ctr: 2.0, cvr: 2.6, cpa: 51, roas: 2.9, qlr: 1.7, quality: 68, confidence: 'Low' },
  { id: 'mistral', name: 'Mistral Le Chat', model: 'Mistral', color: '#ea580c', spend: 1800, ctr: 1.8, cvr: 2.3, cpa: 55, roas: 2.6, qlr: 1.5, quality: 64, confidence: 'Low' },
];

export const campaigns = [
  { id: 1, name: 'CRM for Small Teams', status: 'Active', budget: 8000, spent: 5200, pacing: 65, bid: 2.40, geo: 'US, CA, UK' },
  { id: 2, name: 'Enterprise CRM', status: 'Active', budget: 12000, spent: 9800, pacing: 82, bid: 4.10, geo: 'US, UK, AU' },
  { id: 3, name: 'Flowdesk Brand', status: 'Paused', budget: 5000, spent: 1200, pacing: 24, bid: 1.80, geo: 'US' },
  { id: 4, name: 'Competitor Conquest', status: 'Active', budget: 6500, spent: 5100, pacing: 78, bid: 3.20, geo: 'US, CA' },
];

export const alerts = [
  { id: 1, type: 'warn', title: 'Claude CTR dropped 0.4pts', desc: 'Avg CTR on Claude fell from 3.6% to 3.2% over last 48h. Review ad copy.', time: '2h ago' },
  { id: 2, type: 'good', title: 'Perplexity ROAS hit 5.4×', desc: 'Your Sonar placement is performing above target. Consider increasing budget.', time: '4h ago' },
  { id: 3, type: 'bad', title: 'Meta AI Quality Score low', desc: 'Meta AI quality score fell to 71. Ad relevance may be declining.', time: '6h ago' },
  { id: 4, type: 'good', title: 'New qualified lead from Gemini', desc: 'Enterprise lead captured via Gemini inline placement. CPA: $31.', time: '8h ago' },
  { id: 5, type: 'warn', title: 'Budget pacing alert: Enterprise CRM', desc: 'Enterprise CRM campaign is 82% through budget with 7 days remaining.', time: '10h ago' },
  { id: 6, type: 'bad', title: 'Grok confidence score low', desc: 'Grok publisher confidence is Low. Data collection may be insufficient.', time: '12h ago' },
];

export const opportunities = [
  { id: 1, title: 'Increase Perplexity Budget', desc: 'Perplexity is your top performer at 5.4× ROAS. Increasing budget by $2k could yield 40+ more conversions.', impact: 'High', effort: 'Low', badge: 'Budget' },
  { id: 2, title: 'Revise Claude Ad Copy', desc: 'CTR dropped 0.4pts on Claude. Refreshing your headline to include "teams" may recover performance.', impact: 'Medium', effort: 'Low', badge: 'Creative' },
  { id: 3, title: 'Test Gemini Long-form', desc: 'Gemini 3 supports longer contextual placements. Try a 150-word CRM explainer ad.', impact: 'Medium', effort: 'Medium', badge: 'Format' },
  { id: 4, title: 'Pause Copilot Temporarily', desc: 'Microsoft Copilot CPA is $51 — 36% above target. Reallocate to Claude or Perplexity.', impact: 'Medium', effort: 'Low', badge: 'Efficiency' },
  { id: 5, title: 'Add Grok to Brand Campaign', desc: 'Grok 4 has untapped inventory for brand terms. Test with $500 budget for 2 weeks.', impact: 'Low', effort: 'Low', badge: 'Expansion' },
  { id: 6, title: 'Enable Frequency Cap on Meta AI', desc: 'Users seeing your Meta AI ad 5+ times are converting at 0.3% vs 2.8% avg. Cap at 3/day.', impact: 'Medium', effort: 'Low', badge: 'Targeting' },
];

export const kpiStats = [
  { label: 'Spend', value: '$48.2k', delta: '+6%', positive: true },
  { label: 'Impressions', value: '3.1M', delta: '+9%', positive: true },
  { label: 'Clicks', value: '82.4k', delta: '+7%', positive: true },
  { label: 'CTR', value: '2.7%', delta: '−0.1', positive: false },
  { label: 'Conversions', value: '3,910', delta: '+14%', positive: true },
  { label: 'Qualified Leads', value: '1,284', delta: '+18%', positive: true },
  { label: 'Revenue', value: '$198k', delta: '+11%', positive: true },
  { label: 'CPA', value: '$37.5', delta: '−9%', positive: true },
  { label: 'ROAS', value: '4.1×', delta: '−3%', positive: false },
];

export const attributionData = [
  { model: 'First Touch', claude: 320, chatgpt: 280, gemini: 210, perplexity: 190, meta: 95 },
  { model: 'Last Touch', claude: 410, chatgpt: 350, gemini: 190, perplexity: 220, meta: 80 },
  { model: 'Multi-touch', claude: 370, chatgpt: 310, gemini: 200, perplexity: 205, meta: 88 },
  { model: 'Publisher-assisted', claude: 390, chatgpt: 290, gemini: 215, perplexity: 215, meta: 92 },
];

export const competitors = [
  { id: 1, name: 'Vertex CRM', rank: 1, sov: '34%', mentions: '28%', sentiment: 0.71, citations: 42 },
  { id: 2, name: 'Flowdesk', rank: 2, sov: '22%', mentions: '19%', sentiment: 0.68, citations: 31 },
  { id: 3, name: 'Salesloop', rank: 3, sov: '18%', mentions: '15%', sentiment: 0.61, citations: 24 },
  { id: 4, name: 'PipelineHQ', rank: 4, sov: '12%', mentions: '11%', sentiment: 0.55, citations: 18 },
];

export const visibilityMatrix = [
  { prompt: 'Best CRM for small teams', claude: true, chatgpt: true, gemini: true, perplexity: true, metaai: false, grok: false, copilot: true, mistral: false },
  { prompt: 'CRM with email automation', claude: true, chatgpt: true, gemini: false, perplexity: true, metaai: false, grok: false, copilot: false, mistral: false },
  { prompt: 'Affordable sales CRM', claude: false, chatgpt: true, gemini: true, perplexity: false, metaai: true, grok: false, copilot: false, mistral: false },
  { prompt: 'CRM for SaaS startups', claude: true, chatgpt: false, gemini: false, perplexity: true, metaai: false, grok: true, copilot: false, mistral: false },
  { prompt: 'CRM alternatives to Salesforce', claude: true, chatgpt: true, gemini: true, perplexity: true, metaai: false, grok: false, copilot: true, mistral: true },
  { prompt: 'Best CRM with pipeline view', claude: false, chatgpt: true, gemini: false, perplexity: false, metaai: false, grok: false, copilot: false, mistral: false },
];
