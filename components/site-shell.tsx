import Link from 'next/link';
import type { IdeaStatus } from '../data/ideas';
import { statusLabel } from '../data/ideas';

export const container = 'mx-auto w-[min(var(--max),calc(100%-64px))] max-tablet:w-[min(var(--max),calc(100%-40px))]';
export const label = 'font-mono uppercase tracking-[0.06em] text-[11px]';
export const button = 'inline-flex items-center gap-[17px] px-[18px] py-[14px] border border-transparent font-mono text-xs uppercase tracking-[0.04em]';
export const buttonPrimary = 'text-white bg-blue shadow-[5px_5px_0_var(--color-coral)] hover:bg-[#1745dc]';

const brand = 'inline-flex items-center gap-[11px] text-ink text-lg font-extrabold tracking-[-0.05em] font-sans normal-case';
const navLink = 'transition-colors duration-200 hover:text-blue';

const navItems = [{ href: '/ideas/', label: 'Ideas' }];

const statusDot: Record<IdeaStatus, string> = {
  exploring: 'bg-yellow',
  validated: 'bg-mint',
  parked: 'bg-line',
  dropped: 'bg-coral',
};

const statusText: Record<IdeaStatus, string> = {
  exploring: 'text-ink',
  validated: 'text-ink',
  parked: 'text-muted',
  dropped: 'text-muted',
};

export function Logo() {
  return (
    <svg className="w-[26px] h-[26px] text-ink" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 9c-10.2 0-18.5 8.3-18.5 18.5 0 6.8 3.6 11.9 8 15.3v8.2h21v-8.2c4.4-3.4 8-8.5 8-15.3C50.5 17.3 42.2 9 32 9z" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="26.5" y1="56" x2="37.5" y2="56" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className={`relative z-10 ${container} h-[94px] flex items-center justify-between`}>
      <Link className={brand} href="/" aria-label="Doyuni home"><Logo /><span>Doyuni</span></Link>
      <nav className="flex items-center gap-[34px] text-muted font-mono text-xs" aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} className={navLink}>{item.label}</Link>)}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={`${container} pt-8 px-0 pb-[28px] border-t border-line text-muted font-mono text-[11px] uppercase tracking-[0.05em]`}>
      <div className="flex items-center justify-between gap-5 pb-[72px] max-tablet:pb-[55px] max-tablet:items-start max-tablet:flex-col">
        <Link className={brand} href="/" aria-label="Doyuni home"><Logo /><span>Doyuni</span></Link>
        <p className="m-0">A running log of startup ideas.</p>
      </div>
      <div className="flex items-center justify-between gap-5 max-tablet:items-start max-tablet:flex-col">
        <span>© {new Date().getFullYear()} Doyuni</span>
        <a href="mailto:muse@doyuni.com" className="text-ink hover:text-blue transition-colors duration-200">muse@doyuni.com</a>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <><SiteHeader /><main>{children}</main><SiteFooter /></>; }

export function Eyebrow({ children, tone = 'muted' }: { children: React.ReactNode; tone?: 'muted' | 'light' }) {
  const color = tone === 'light' ? 'text-[#b9c4d5]' : 'text-muted';
  return (
    <p className={`flex items-center gap-[9px] mb-[27px] ${color} ${label}`}>
      <span className="w-[7px] h-[7px] bg-coral rounded-full" />{children}
    </p>
  );
}

export function ArrowLink({ href, children, tone = 'muted', className = '' }: { href: string; children: React.ReactNode; tone?: 'muted' | 'blue'; className?: string }) {
  const color = tone === 'blue' ? 'text-blue' : 'text-muted';
  return (
    <Link className={`inline-flex items-center gap-[13px] font-mono text-xs uppercase tracking-[0.04em] transition-colors duration-200 hover:text-blue ${color} ${className}`} href={href}>
      {children}<span aria-hidden="true" className="text-blue text-lg leading-none">↗</span>
    </Link>
  );
}

export function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className={`grid grid-cols-[40px_1fr_auto] gap-[10px] text-muted border-t border-line pt-4 ${label} [&>span:first-child]:text-blue`}>
      {children}
    </div>
  );
}

export function StatusBadge({ status }: { status: IdeaStatus }) {
  return (
    <span className={`inline-flex items-center gap-[8px] ${label} ${statusText[status]}`}>
      <span className={`w-[7px] h-[7px] rounded-full ${statusDot[status]}`} />{statusLabel[status]}
    </span>
  );
}
