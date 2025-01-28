'use client';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <main className={`w-full max-w-none ${inter.className}`}>{children}</main>;
}
