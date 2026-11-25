'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import PublicNavbar from '@/components/layout/PublicNavbar';
import PublicFooter from '@/components/layout/PublicFooter';

const PUBLIC_PATHS = ['/', '/advertisers', '/ai-platforms', '/docs', '/login'];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';

  const isPublic = PUBLIC_PATHS.some((p) =>
    p === '/' ? pathname === '/' : pathname === p || pathname.startsWith(`${p}/`)
  );

  if (isPublic) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f8f9fc] text-[#0e1116]">
        <PublicNavbar />
        <main className="flex-1">{children}</main>
        <PublicFooter />
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
