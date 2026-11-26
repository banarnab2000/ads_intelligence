import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata: Metadata = {
  title: "OctaLume — AI Advertising Intelligence",
  description: "AI-native advertising network and publisher intelligence platform",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f3f4f7] text-[#0e1116] antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
