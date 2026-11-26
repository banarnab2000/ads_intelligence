'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Eye,
  Settings2,
  LogOut,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Publisher Chat', href: '/chat', icon: MessageSquare },
  { label: 'Publishers', href: '/publishers', icon: BarChart3 },
  { label: 'AI Visibility', href: '/visibility', icon: Eye },
  { label: 'Controls & Data', href: '/controls', icon: Settings2 },
];

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] flex-shrink-0 bg-white border-r border-[#e3e6ec] flex flex-col h-full">
      {/* Logo */}
      <Link href="/dashboard" onClick={onClose} className="px-5 py-5 flex items-center gap-3 border-b border-[#e3e6ec]">
        <Image src="/logo.png" alt="OctaLume" width={40} height={24} className="object-contain" />
        <div>
          <div className="font-bold text-[#0e1116] text-base leading-tight" style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}>OctaLume</div>
          <div className="text-[10px] text-[#667085]">Ad Intelligence</div>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
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

        <div className="pt-4 mt-4 border-t border-[#e3e6ec]/80 space-y-0.5">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#667085] hover:bg-[#f3f4f7] hover:text-[#0e1116] transition-colors"
          >
            <span>Public Website</span>
            <ExternalLink size={13} />
          </Link>
          <Link
            href="/docs"
            onClick={onClose}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#667085] hover:bg-[#f3f4f7] hover:text-[#0e1116] transition-colors"
          >
            <span>Developer Docs</span>
            <ExternalLink size={13} />
          </Link>
        </div>
      </nav>

      {/* User area */}
      <div className="px-4 py-4 border-t border-[#e3e6ec] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#2447ff] flex items-center justify-center text-white text-xs font-bold">F</div>
          <div>
            <div className="text-sm font-medium text-[#0e1116]">Flowdesk</div>
            <div className="text-xs text-[#667085]">Demo Account</div>
          </div>
        </div>
        <Link
          href="/login"
          title="Sign Out"
          className="p-1.5 text-[#667085] hover:text-[#0e1116] hover:bg-[#f3f4f7] rounded-lg transition-colors"
        >
          <LogOut size={15} />
        </Link>
      </div>
    </aside>
  );
}
