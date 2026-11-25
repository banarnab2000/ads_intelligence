import Link from 'next/link';

export default function PublicFooter() {
  return (
    <footer className="border-t border-[#e3e6ec] bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="octaFootGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2447ff" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <polygon
              points="11,2 21,2 30,11 30,21 21,30 11,30 2,21 2,11"
              fill="url(#octaFootGrad)"
            />
            <text x="16" y="21" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              O
            </text>
          </svg>
          <div>
            <div className="font-bold text-sm text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
              OctaLume
            </div>
            <div className="text-xs text-[#667085]">
              AI-Native Advertising &amp; Monetization Network
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#667085]">
          <Link href="/" className="hover:text-[#0e1116] transition-colors">Home</Link>
          <Link href="/advertisers" className="hover:text-[#0e1116] transition-colors">Advertisers</Link>
          <Link href="/ai-platforms" className="hover:text-[#0e1116] transition-colors">AI Platforms</Link>
          <Link href="/docs" className="hover:text-[#0e1116] transition-colors">Publisher Docs</Link>
          <Link href="/docs?section=advertisers" className="hover:text-[#0e1116] transition-colors">Advertiser Docs</Link>
          <Link href="/login" className="text-[#2447ff] hover:underline">Sign In</Link>
        </div>

        <div className="text-xs text-[#667085]">
          © {new Date().getFullYear()} OctaLume Inc.
        </div>
      </div>
    </footer>
  );
}
