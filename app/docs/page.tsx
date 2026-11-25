'use client';

import { useState, useEffect } from 'react';
import { Copy, Check, Cpu, Target, Terminal, ShieldCheck, Layers, Bot } from 'lucide-react';

function CodeBlock({ code, title }: { code: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-xl overflow-hidden border border-[#e3e6ec] bg-[#0e1116]">
      {title && (
        <div className="px-4 py-2 bg-[#161b24] border-b border-white/10 flex items-center justify-between text-xs text-gray-300 font-mono">
          <span>{title}</span>
          <button
            onClick={copy}
            className="inline-flex items-center gap-1 text-xs text-gray-300 hover:text-white transition-colors"
          >
            {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
      <div className="p-4 text-[#f3f4f7] font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed relative group">
        {!title && (
          <button
            onClick={copy}
            className="absolute top-3 right-3 bg-[#2447ff] text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
          </button>
        )}
        <pre>{code}</pre>
      </div>
    </div>
  );
}

const publisherSdkNode = `import { OctaLume } from '@octalume/sdk';

const client = new OctaLume({ apiKey: process.env.OCTALUME_API_KEY });

// Run in parallel with your LLM stream — zero added latency
const [llmStream, adResponse] = await Promise.all([
  openai.chat.completions.create({ model: 'gpt-5', messages, stream: true }),
  client.ads.place({
    context: messages[messages.length - 1].content,
    publisherId: 'my-ai-chat',
    placement: 'inline_response',
    maxAds: 1,
  }),
]);`;

const publisherSdkReact = `import { OctaLumeProvider, SponsoredCard } from '@octalume/react';

export function ChatMessage({ message, ad }) {
  return (
    <OctaLumeProvider apiKey={process.env.NEXT_PUBLIC_OCTALUME_KEY}>
      <div className="space-y-3">
        <p>{message.content}</p>
        {/* Automatic IntersectionObserver impression & click tracking */}
        {ad && <SponsoredCard ad={ad} placement="below_response" />}
      </div>
    </OctaLumeProvider>
  );
}`;

const publisherSdkPython = `import octalume

client = octalume.Client(api_key="oct_pub_live_...")

response = client.ads.place(
    context="User is asking about CRM software for small teams",
    publisher_id="claude-opus",
    placement="inline_response",
    max_ads=1,
)

if response.ad:
    print(response.ad.title, response.ad.cta_url)`;

const publisherRestApi = `curl -X POST https://api.octalume.io/v1/ads/place \\
  -H "Authorization: Bearer oct_pub_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "context": "Best CRM for a 15-person B2B sales team",
    "publisher_id": "perplexity-sonar",
    "placement": "inline_response",
    "consent": { "gdpr": true, "gpc": false }
  }'`;

const advertiserPixelCode = `<!-- Install OctaLume Pixel (oct-pix.js) on your landing page -->
<script
  async
  src="https://cdn.octalume.io/oct-pix.js"
  data-advertiser-id="adv_flowdesk_99"
></script>

<script>
  // Track verified conversion events
  window.octalume?.track('lead_captured', {
    plan: 'growth_crm',
    value: 149.00,
    currency: 'USD'
  });
</script>`;

const advertiserCapiCode = `// Server-Side Conversions API (CAPI)
await fetch('https://api.octalume.io/v1/gateway/events', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer oct_adv_live_...',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    session_id: 'ses_abc123',
    event: 'subscription_started',
    revenue: 149.0,
    currency: 'USD',
  }),
});`;

const advertiserMcpConfig = `{
  "mcpServers": {
    "octalume-advertiser": {
      "url": "https://platform.octalume.io/mcp",
      "headers": {
        "Authorization": "Bearer oct_adv_live_..."
      }
    }
  }
}`;

export default function DocsPage() {
  const [section, setSection] = useState<'publishers' | 'advertisers'>('publishers');
  const [sdkLang, setSdkLang] = useState<'node' | 'react' | 'python'>('node');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('section') === 'advertisers') {
        setSection('advertisers');
      }
    }
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12 pb-24">
      {/* Header */}
      <div className="border-b border-[#e3e6ec] pb-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2447ff] bg-[#e8ecff] px-3 py-1 rounded-full mb-3">
            <Terminal size={12} />
            OctaLume Developer Documentation
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#0e1116] tracking-tight"
            style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
          >
            Integration Guides &amp; API Reference
          </h1>
          <p className="text-sm sm:text-base text-[#667085] mt-2 max-w-2xl">
            Everything you need to monetize AI conversations as a Publisher or launch, track, and
            automate high-ROAS campaigns as an Advertiser.
          </p>
        </div>

        {/* 2-Section Switcher: Publishers | Advertisers */}
        <div className="inline-flex p-1 bg-white border border-[#e3e6ec] rounded-2xl shadow-2xs self-start">
          <button
            onClick={() => setSection('publishers')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              section === 'publishers'
                ? 'bg-[#0f9d6e] text-white shadow-sm'
                : 'text-[#667085] hover:text-[#0e1116]'
            }`}
          >
            <Cpu size={15} />
            Publishers
          </button>
          <button
            onClick={() => setSection('advertisers')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              section === 'advertisers'
                ? 'bg-[#2447ff] text-white shadow-sm'
                : 'text-[#667085] hover:text-[#0e1116]'
            }`}
          >
            <Target size={15} />
            Advertisers
          </button>
        </div>
      </div>

      {/* SECTION 1: PUBLISHERS */}
      {section === 'publishers' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sticky TOC */}
          <aside className="lg:col-span-3 space-y-1 text-sm">
            <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider px-3 mb-2">
              Publisher Docs
            </div>
            {[
              { href: '#pub-quickstart', label: '1. Parallel Quickstart' },
              { href: '#pub-sdks', label: '2. Official SDKs' },
              { href: '#pub-rest', label: '3. Ad Serving REST API' },
              { href: '#pub-privacy', label: '4. Placements & Privacy' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-lg text-[#667085] hover:text-[#0e1116] hover:bg-white font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-10">
            <section id="pub-quickstart" className="bg-white border border-[#e3e6ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0f9d6e] mb-2">
                <Layers size={14} />
                ZERO-LATENCY ARCHITECTURE
              </div>
              <h2 className="text-2xl font-bold text-[#0e1116] mb-3" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                AI Platform Quickstart
              </h2>
              <p className="text-sm text-[#667085] leading-relaxed mb-5">
                OctaLume is engineered to run <strong>in parallel</strong> with your LLM inference
                call. While your model streams tokens to the user, OctaLume evaluates commercial
                intent in under 45ms and returns a native sponsored card ready to render inline or
                below the response.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                  <div className="text-xs font-bold text-[#0e1116]">1. Install SDK</div>
                  <div className="text-xs text-[#667085] mt-1 font-mono">npm i @octalume/sdk</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                  <div className="text-xs font-bold text-[#0e1116]">2. Call Parallel</div>
                  <div className="text-xs text-[#667085] mt-1">Pass user prompt context alongside LLM request</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                  <div className="text-xs font-bold text-[#0e1116]">3. Render &amp; Earn</div>
                  <div className="text-xs text-[#667085] mt-1">Display SponsoredCard with auto-impression tracking</div>
                </div>
              </div>
            </section>

            <section id="pub-sdks" className="bg-white border border-[#e3e6ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <h2 className="text-xl font-bold text-[#0e1116] mb-2" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                Publisher SDKs
              </h2>
              <p className="text-sm text-[#667085] mb-5">
                Choose your server or client runtime. React components include built-in{' '}
                <code className="text-[#2447ff]">IntersectionObserver</code> viewport impression tracking.
              </p>

              <div className="flex gap-2 mb-4">
                {[
                  { id: 'node', label: 'Node.js / TS' },
                  { id: 'react', label: 'React UI' },
                  { id: 'python', label: 'Python' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSdkLang(t.id as 'node' | 'react' | 'python')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      sdkLang === t.id
                        ? 'bg-[#0e1116] text-white'
                        : 'bg-[#f3f4f7] text-[#667085] hover:text-[#0e1116]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {sdkLang === 'node' && <CodeBlock title="@octalume/sdk (TypeScript)" code={publisherSdkNode} />}
              {sdkLang === 'react' && <CodeBlock title="@octalume/react (JSX)" code={publisherSdkReact} />}
              {sdkLang === 'python' && <CodeBlock title="octalume (Python)" code={publisherSdkPython} />}
            </section>

            <section id="pub-rest" className="bg-white border border-[#e3e6ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                  Ad Serving HTTP API
                </h2>
                <span className="text-xs font-mono bg-green-50 text-[#0f9d6e] border border-green-200 px-2.5 py-1 rounded-full">
                  POST /v1/ads/place
                </span>
              </div>
              <p className="text-sm text-[#667085] mb-4">
                Direct backend-to-server endpoint for custom AI agents, search engines, or non-JS runtimes.
              </p>
              <CodeBlock title="cURL — Request Native Ad" code={publisherRestApi} />
            </section>

            <section id="pub-privacy" className="bg-white border border-[#e3e6ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0f9d6e] mb-2">
                <ShieldCheck size={14} />
                PRIVACY &amp; PLACEMENTS
              </div>
              <h2 className="text-xl font-bold text-[#0e1116] mb-3" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                Placements &amp; Consent Compliance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#667085]">
                <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                  <div className="font-semibold text-[#0e1116] mb-1">Supported Placements</div>
                  <p>
                    Use <code className="text-[#2447ff]">above_response</code>,{' '}
                    <code className="text-[#2447ff]">inline_response</code>,{' '}
                    <code className="text-[#2447ff]">below_response</code>, or{' '}
                    <code className="text-[#2447ff]">search_result</code> to match your chat UI.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                  <div className="font-semibold text-[#0e1116] mb-1">GDPR &amp; GPC Handling</div>
                  <p>
                    When user consent is omitted or GPC is enabled, OctaLume automatically serves
                    contextual-only ads with zero user identifiers stored.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* SECTION 2: ADVERTISERS */}
      {section === 'advertisers' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sticky TOC */}
          <aside className="lg:col-span-3 space-y-1 text-sm">
            <div className="text-xs font-semibold text-[#667085] uppercase tracking-wider px-3 mb-2">
              Advertiser Docs
            </div>
            {[
              { href: '#adv-quickstart', label: '1. Advertiser Quickstart' },
              { href: '#adv-pixel', label: '2. OctaLume Pixel (oct-pix.js)' },
              { href: '#adv-capi', label: '3. Conversions API (CAPI)' },
              { href: '#adv-mcp', label: '4. Dashboard MCP Server' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-lg text-[#667085] hover:text-[#0e1116] hover:bg-white font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-10">
            <section id="adv-quickstart" className="bg-white border border-[#e3e6ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2447ff] mb-2">
                <Target size={14} />
                CAMPAIGNS &amp; BIDDING
              </div>
              <h2 className="text-2xl font-bold text-[#0e1116] mb-3" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                Advertiser Quickstart
              </h2>
              <p className="text-sm text-[#667085] leading-relaxed mb-5">
                Launch campaigns targeting high-intent conversational prompts across ChatGPT,
                Claude, Gemini, Perplexity, and more. Choose between <strong>CPM</strong> (Cost Per
                Mille) for awareness or <strong>CPA</strong> (Cost Per Action) for performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                  <div className="text-xs font-bold text-[#0e1116]">1. Define Intent</div>
                  <div className="text-xs text-[#667085] mt-1">Provide product descriptions &amp; target buyer prompts</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                  <div className="text-xs font-bold text-[#0e1116]">2. Install Pixel</div>
                  <div className="text-xs text-[#667085] mt-1">Add oct-pix.js on your site for attribution</div>
                </div>
                <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[#e3e6ec]">
                  <div className="text-xs font-bold text-[#0e1116]">3. Optimize ROAS</div>
                  <div className="text-xs text-[#667085] mt-1">Shift budget toward top-converting AI publishers</div>
                </div>
              </div>
            </section>

            <section id="adv-pixel" className="bg-white border border-[#e3e6ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <h2 className="text-xl font-bold text-[#0e1116] mb-2" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                OctaLume Pixel (<code className="text-[#2447ff]">oct-pix.js</code>)
              </h2>
              <p className="text-sm text-[#667085] mb-4">
                Install our lightweight first-party script on your landing pages to measure visitor
                sessions, signups, and deterministic conversions.
              </p>
              <CodeBlock title="HTML — OctaLume Pixel" code={advertiserPixelCode} />
            </section>

            <section id="adv-capi" className="bg-white border border-[#e3e6ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                  Server-Side Conversions API (CAPI)
                </h2>
                <span className="text-xs font-mono bg-[#e8ecff] text-[#2447ff] px-2.5 py-1 rounded-full">
                  POST /v1/gateway/events
                </span>
              </div>
              <p className="text-sm text-[#667085] mb-4">
                Send verified backend events (paid subscriptions, qualified SQLs, upgrades) directly
                to OctaLume for accurate ROAS reporting.
              </p>
              <CodeBlock title="JavaScript — CAPI Event" code={advertiserCapiCode} />
            </section>

            <section id="adv-mcp" className="bg-white border border-[#e3e6ec] rounded-2xl p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#7c3aed] mb-2">
                <Bot size={14} />
                MODEL CONTEXT PROTOCOL
              </div>
              <h2 className="text-xl font-bold text-[#0e1116] mb-2" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
                Advertiser Dashboard MCP Server
              </h2>
              <p className="text-sm text-[#667085] mb-4">
                Connect Claude Desktop, Cursor, or your internal growth agents directly to your
                OctaLume campaign dashboard to audit spend, pause underperforming publishers, and
                inspect attribution.
              </p>
              <CodeBlock title="mcp.json" code={advertiserMcpConfig} />
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
