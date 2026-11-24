'use client';

export default function Topbar() {
  return (
    <header className="h-14 border-b border-[#e3e6ec] bg-white px-6 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-[#0e1116]" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>
          AI Advertising Intelligence Platform
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-[#0f9d6e] bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0f9d6e] animate-pulse"></span>
          8 AI Networks Live
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-xs text-[#667085] bg-[#f3f4f7] border border-[#e3e6ec] rounded-full px-3 py-1 font-medium">
          Flowdesk Enterprise Workspace
        </div>
      </div>
    </header>
  );
}
