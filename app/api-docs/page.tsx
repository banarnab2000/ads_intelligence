'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function CodeBlock({ code, lang = 'bash' }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative group rounded-xl overflow-hidden">
      <div className="bg-[#0e1116] text-[#f3f4f7] p-4 font-mono text-sm overflow-x-auto leading-relaxed">
        <pre>{code}</pre>
      </div>
      <button
        onClick={copy}
        className="absolute top-3 right-3 bg-[#2447ff] text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check size={12} /> : <Copy size={12} />}
      </button>
    </div>
  );
}

function TabBar({ tabs, active, onSelect }: { tabs: string[]; active: string; onSelect: (t: string) => void }) {
  return (
    <div className="flex gap-1 border-b border-[#e3e6ec] mb-5">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onSelect(t)}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
            active === t ? 'border-[#2447ff] text-[#2447ff]' : 'border-transparent text-[#667085] hover:text-[#0e1116]'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

const pythonCode = `import octalume

client = octalume.Client(api_key="oct_live_...")

# Place an ad
response = client.ads.place(
    context="User is asking about CRM software for small teams",
    publisher_id="claude-opus",
    placement="inline_response",
    max_ads=1
)

# Track a conversion
client.conversions.track(
    session_id=response.session_id,
    event="lead_captured",
    value={"email": "user@example.com"}
)

print(f"Ad placed: {response.ad.creative}")
print(f"Session: {response.session_id}")`;

const jsCode = `import { OctaLume } from '@octalume/sdk';

const client = new OctaLume({ apiKey: 'oct_live_...' });

const ad = await client.ads.place({
  context: 'User asking about CRM for small teams',
  publisherId: 'chatgpt-gpt5',
  placement: 'inline_response',
});

await client.conversions.track({
  sessionId: ad.sessionId,
  event: 'lead_captured',
});

console.log('Ad creative:', ad.creative);`;

const reactCode = `import { OctaLumeProvider, useAdPlacement } from '@octalume/react';

function App() {
  return (
    <OctaLumeProvider apiKey="oct_live_...">
      <ChatComponent />
    </OctaLumeProvider>
  );
}

function ChatComponent() {
  const { ad, isLoading } = useAdPlacement({
    context: userMessage,
    publisherId: 'gemini-3',
  });

  if (isLoading) return <Spinner />;
  if (ad) return <AdCard creative={ad.creative} />;
  return null;
}`;

const curlPlace = `curl -X POST https://api.octalume.io/v1/ads/place \\
  -H "Authorization: Bearer oct_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "context": "User is asking about CRM software for small teams",
    "publisher_id": "claude-opus",
    "placement": "inline_response",
    "max_ads": 1
  }'

# Response:
{
  "session_id": "ses_abc123",
  "ad": {
    "id": "ad_xyz789",
    "creative": "Looking for a CRM? Flowdesk helps small sales teams close 2x faster.",
    "advertiser": "Flowdesk",
    "relevancy_score": 0.84,
    "placement": "inline_response"
  }
}`;

const curlTrack = `curl -X POST https://api.octalume.io/v1/conversions/track \\
  -H "Authorization: Bearer oct_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "session_id": "ses_abc123",
    "event": "lead_captured",
    "value": {
      "email": "user@company.com",
      "plan": "pro"
    }
  }'

# Response:
{
  "tracked": true,
  "conversion_id": "cvt_def456"
}`;

const curlAnalytics = `curl https://api.octalume.io/v1/analytics/publishers \\
  -H "Authorization: Bearer oct_live_..." \\
  -G --data-urlencode "period=nov-2026"

# Response:
{
  "publishers": [
    {
      "id": "claude-opus",
      "spend": 12400,
      "impressions": 48200,
      "clicks": 1542,
      "ctr": 0.032,
      "conversions": 63,
      "cpa": 196.8,
      "roas": 4.8
    }
  ]
}`;

const mcpConfig = `{
  "mcpServers": {
    "octalume": {
      "command": "npx",
      "args": ["-y", "@octalume/mcp-server"],
      "env": {
        "OCTALUME_API_KEY": "oct_live_..."
      }
    }
  }
}`;

export default function ApiDocsPage() {
  const [mainTab, setMainTab] = useState('SDK');
  const [sdkTab, setSdkTab] = useState('Python');

  return (
    <div className="max-w-[1100px] mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#0e1116] mb-1" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>API Integration Docs</h1>
        <p className="text-sm text-[#667085]">Integrate OctaLume AI ad placements into your publisher or application</p>
      </div>

      {/* Auth notice */}
      <div className="bg-[#e8ecff] border border-[#2447ff]/20 rounded-xl p-4 text-sm">
        <div className="font-semibold text-[#2447ff] mb-1">Authentication</div>
        <div className="text-[#0e1116]">Use your API key as a Bearer token: <code className="bg-white px-1.5 py-0.5 rounded text-xs">Authorization: Bearer oct_live_...</code></div>
        <div className="text-[#667085] text-xs mt-1">Base URL: <code>https://api.octalume.io</code></div>
      </div>

      <TabBar tabs={['SDK', 'REST API', 'MCP Server']} active={mainTab} onSelect={setMainTab} />

      {mainTab === 'SDK' && (
        <div>
          <TabBar tabs={['Python', 'JavaScript', 'React']} active={sdkTab} onSelect={setSdkTab} />

          {sdkTab === 'Python' && (
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[#0e1116]">Install</h3>
                </div>
                <CodeBlock code="pip install octalume" lang="bash" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0e1116] mb-2">Usage</h3>
                <CodeBlock code={pythonCode} lang="python" />
              </div>
              <div className="bg-white border border-[#e3e6ec] rounded-xl p-4 text-sm">
                <div className="font-semibold text-[#0e1116] mb-2">SDK Reference</div>
                <div className="space-y-1 text-[#667085]">
                  <div><code className="text-[#2447ff]">client.ads.place(**kwargs)</code> → Place an ad in an AI publisher response</div>
                  <div><code className="text-[#2447ff]">client.conversions.track(**kwargs)</code> → Track a conversion event</div>
                  <div><code className="text-[#2447ff]">client.analytics.publishers(period=...)</code> → Get publisher performance analytics</div>
                  <div><code className="text-[#2447ff]">client.competitors.insights()</code> → Get competitor visibility data</div>
                </div>
              </div>
            </div>
          )}

          {sdkTab === 'JavaScript' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#0e1116] mb-2">Install</h3>
                <CodeBlock code="npm install @octalume/sdk" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0e1116] mb-2">Usage</h3>
                <CodeBlock code={jsCode} lang="javascript" />
              </div>
            </div>
          )}

          {sdkTab === 'React' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#0e1116] mb-2">Install</h3>
                <CodeBlock code="npm install @octalume/react @octalume/sdk" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0e1116] mb-2">Usage</h3>
                <CodeBlock code={reactCode} lang="jsx" />
              </div>
            </div>
          )}
        </div>
      )}

      {mainTab === 'REST API' && (
        <div className="space-y-6">
          {/* POST /v1/ads/place */}
          <div className="bg-white border border-[#e3e6ec] rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[#e3e6ec] flex items-center gap-3">
              <span className="text-xs font-bold bg-[#2447ff] text-white px-2 py-0.5 rounded">POST</span>
              <code className="text-sm font-mono text-[#0e1116]">/v1/ads/place</code>
              <span className="text-sm text-[#667085] ml-2">Place an ad in an AI publisher context</span>
            </div>
            <div className="p-5">
              <div className="mb-3 text-sm font-medium text-[#0e1116]">Request fields</div>
              <div className="space-y-1.5 mb-4 text-sm">
                {[
                  { name: 'context', type: 'string', desc: 'The user query or conversation context' },
                  { name: 'publisher_id', type: 'string', desc: 'Target publisher (e.g. claude-opus, chatgpt-gpt5)' },
                  { name: 'placement', type: 'string', desc: 'Placement type: inline_response | sidebar | citation' },
                  { name: 'max_ads', type: 'integer', desc: 'Maximum number of ads to return (default: 1)' },
                ].map((f) => (
                  <div key={f.name} className="flex gap-3 text-sm">
                    <code className="text-[#2447ff] w-28 flex-shrink-0">{f.name}</code>
                    <span className="text-[#667085] w-16 flex-shrink-0">{f.type}</span>
                    <span className="text-[#0e1116]">{f.desc}</span>
                  </div>
                ))}
              </div>
              <CodeBlock code={curlPlace} />
            </div>
          </div>

          {/* POST /v1/conversions/track */}
          <div className="bg-white border border-[#e3e6ec] rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[#e3e6ec] flex items-center gap-3">
              <span className="text-xs font-bold bg-[#2447ff] text-white px-2 py-0.5 rounded">POST</span>
              <code className="text-sm font-mono text-[#0e1116]">/v1/conversions/track</code>
              <span className="text-sm text-[#667085] ml-2">Track a conversion event from an ad session</span>
            </div>
            <div className="p-5">
              <CodeBlock code={curlTrack} />
            </div>
          </div>

          {/* GET /v1/analytics/publishers */}
          <div className="bg-white border border-[#e3e6ec] rounded-2xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[#e3e6ec] flex items-center gap-3">
              <span className="text-xs font-bold bg-green-600 text-white px-2 py-0.5 rounded">GET</span>
              <code className="text-sm font-mono text-[#0e1116]">/v1/analytics/publishers</code>
              <span className="text-sm text-[#667085] ml-2">Get publisher performance analytics</span>
            </div>
            <div className="p-5">
              <CodeBlock code={curlAnalytics} />
            </div>
          </div>
        </div>
      )}

      {mainTab === 'MCP Server' && (
        <div className="space-y-6">
          <div className="bg-white border border-[#e3e6ec] rounded-2xl p-5">
            <h2 className="font-semibold text-[#0e1116] mb-2">MCP Server Configuration</h2>
            <p className="text-sm text-[#667085] mb-4">Add OctaLume to your Claude Desktop or any MCP-compatible client.</p>
            <CodeBlock code={mcpConfig} lang="json" />
          </div>

          <div className="bg-white border border-[#e3e6ec] rounded-2xl p-5">
            <h2 className="font-semibold text-[#0e1116] mb-4">Available MCP Tools</h2>
            <div className="space-y-3">
              {[
                { name: 'place_ad', desc: 'Place a contextual ad in an AI publisher response. Args: context, publisher_id, placement.' },
                { name: 'track_conversion', desc: 'Record a conversion event tied to an ad session. Args: session_id, event, value.' },
                { name: 'get_publisher_analytics', desc: 'Retrieve publisher performance metrics for a given period. Args: period, publisher_id?' },
                { name: 'get_competitor_insights', desc: 'Get competitive visibility data, rankings, and sentiment scores. Args: period.' },
              ].map((tool) => (
                <div key={tool.name} className="border border-[#e3e6ec] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-sm font-mono font-semibold text-[#2447ff]">{tool.name}</code>
                  </div>
                  <div className="text-sm text-[#667085]">{tool.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
