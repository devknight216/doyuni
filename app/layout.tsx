import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Doyuni — A vision in progress',
  description: 'Doyuni is a long-term vision for exploring what comes next and building whatever matters—products, services, or technology not yet invented.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
