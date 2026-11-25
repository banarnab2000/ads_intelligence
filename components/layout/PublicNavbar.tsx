'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const publicLinks = [
  { label: 'Home', href: '/' },
  { label: 'Advertisers', href: '/advertisers' },
  { label: 'Docs', href: '/docs' },
];

export default function PublicNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e3e6ec]">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="octaPubGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2447ff" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <polygon
              points="11,2 21,2 30,11 30,21 21,30 11,30 2,21 2,11"
              fill="url(#octaPubGrad)"
            />
            <text x="16" y="21" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
              O
            </text>
          </svg>
          <span
            className="font-bold text-lg text-[#0e1116] tracking-tight"
            style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
          >
            OctaLume
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-[#2447ff] bg-[#e8ecff] px-2 py-0.5 rounded-full">
            AI Ad Network
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {publicLinks.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  active
                    ? 'text-[#2447ff] bg-[#e8ecff]/70'
                    : 'text-[#667085] hover:text-[#0e1116] hover:bg-[#f3f4f7]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Auth CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-[#0e1116] hover:text-[#2447ff] px-3 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 bg-[#2447ff] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
          >
            Launch Console
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}
