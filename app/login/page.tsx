'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Lock, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('demo@flowdesk.io');
  const [password, setPassword] = useState('octalume2026');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('octalume_demo_auth', 'true');
    }
    setTimeout(() => {
      router.push('/dashboard');
    }, 350);
  };

  return (
    <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white border border-[#e3e6ec] rounded-3xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="OctaLume" width={40} height={24} className="object-contain" />
          <div>
            <h1
              className="text-xl font-bold text-[#0e1116]"
              style={{ fontFamily: 'var(--font-bricolage, sans-serif)' }}
            >
              Sign in to OctaLume
            </h1>
            <p className="text-xs text-[#667085]">Access your AI Advertising Intelligence Console</p>
          </div>
        </div>

        {/* Dummy Creds Banner */}
        <div className="mb-6 p-3.5 rounded-2xl bg-[#e8ecff]/70 border border-[#2447ff]/20 text-xs text-[#0e1116]">
          <div className="flex items-center gap-1.5 font-semibold text-[#2447ff] mb-1">
            <Sparkles size={13} />
            Demo Workspace Credentials Pre-Filled
          </div>
          <div className="text-[#667085]">
            Workspace: <strong className="text-[#0e1116]">Flowdesk CRM</strong> · Click Sign In below
            to enter the dashboard.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">Work Email</label>
            <div className="relative">
              <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#667085]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl text-[#0e1116] focus:outline-none focus:border-[#2447ff] focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0e1116] mb-1.5">Password</label>
            <div className="relative">
              <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#667085]" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#f8f9fc] border border-[#e3e6ec] rounded-xl text-[#0e1116] focus:outline-none focus:border-[#2447ff] focus:bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#2447ff] text-white font-semibold text-sm py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-70"
          >
            {loading ? 'Signing in...' : 'Sign In to Dashboard'}
            <ArrowRight size={15} />
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#e3e6ec] text-center text-xs text-[#667085]">
          Looking for integration guides?{' '}
          <Link href="/docs" className="text-[#2447ff] font-semibold hover:underline">
            Read Publisher &amp; Advertiser Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
