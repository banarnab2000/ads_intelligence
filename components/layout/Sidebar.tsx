'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Eye,
  Code2,
  Settings2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Overview', href: '/', icon: LayoutDashboard },
  { label: 'Publisher Chat', href: '/chat', icon: MessageSquare },
  { label: 'Publishers', href: '/publishers', icon: BarChart3 },
  { label: 'AI Visibility', href: '/visibility', icon: Eye },
  { label: 'API Docs', href: '/api-docs', icon: Code2 },
  { label: 'Controls & Data', href: '/controls', icon: Settings2 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] flex-shrink-0 bg-white border-r border-[#e3e6ec] flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-3 border-b border-[#e3e6ec]">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="octaGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2447ff" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <polygon
            points="11,2 21,2 30,11 30,21 21,30 11,30 2,21 2,11"
            fill="url(#octaGrad)"
          />
          <text x="16" y="21" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">O</text>
        </svg>
        <div>
          <div className="font-bold text-[#0e1116] text-base leading-tight" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>OctaLume</div>
          <div className="text-[10px] text-[#667085]">Ad Intelligence</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-[#e8ecff] text-[#2447ff]'
                  : 'text-[#667085] hover:bg-[#f3f4f7] hover:text-[#0e1116]'
              )}
            >
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* User area */}
      <div className="px-4 py-4 border-t border-[#e3e6ec]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#2447ff] flex items-center justify-center text-white text-xs font-bold">F</div>
          <div>
            <div className="text-sm font-medium text-[#0e1116]">Flowdesk</div>
            <div className="text-xs text-[#667085]">Demo Account</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
