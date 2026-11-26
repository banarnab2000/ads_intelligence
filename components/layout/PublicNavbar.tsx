'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const publicLinks = [
  { label: 'Home', href: '/' },
  { label: 'Advertisers', href: '/advertisers' },
  { label: 'AI Platforms', href: '/ai-platforms' },
  { label: 'Docs', href: '/docs' },
];

export default function PublicNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e3e6ec]">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="OctaLume" width={36} height={22} className="object-contain" />
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

        {/* Nav Links - desktop */}
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

        {/* Auth CTAs - desktop */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Hamburger - mobile */}
        <button
          className="md:hidden p-2 rounded-lg text-[#667085] hover:bg-[#f3f4f7] transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#e3e6ec] px-4 py-4 space-y-1 shadow-lg">
          {publicLinks.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  active
                    ? 'text-[#2447ff] bg-[#e8ecff]/70'
                    : 'text-[#667085] hover:text-[#0e1116] hover:bg-[#f3f4f7]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#e3e6ec] flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-center text-sm font-medium text-[#0e1116] hover:text-[#2447ff] px-3 py-2.5 rounded-lg hover:bg-[#f3f4f7] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 bg-[#2447ff] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              Launch Console
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
