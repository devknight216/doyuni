import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Doyuni — Startup idea log',
  description: 'A running, public log of startup ideas explored, analyzed, and tracked over time before any of them becomes a company.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
