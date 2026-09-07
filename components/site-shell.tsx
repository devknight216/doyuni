import Link from 'next/link';

export const container = 'mx-auto w-[min(var(--max),calc(100%-64px))] max-tablet:w-[min(var(--max),calc(100%-40px))]';
export const label = 'font-mono uppercase tracking-[0.06em] text-[11px]';
export const button = 'inline-flex items-center gap-[17px] px-[18px] py-[14px] border border-transparent font-mono text-xs uppercase tracking-[0.04em]';
export const buttonPrimary = 'text-white bg-blue shadow-[5px_5px_0_var(--color-coral)] hover:bg-[#1745dc]';

const brand = 'inline-flex items-center gap-[11px] text-ink text-lg font-extrabold tracking-[-0.05em] font-sans normal-case';
const navCta = 'inline-flex items-center gap-[10px] px-[15px] py-[11px] text-ink border border-ink rounded-[2px] transition-[background,color] duration-200 hover:text-white hover:bg-blue hover:border-blue';
const navLink = 'transition-colors duration-200 hover:text-blue';

const navItems = [
  { href: '/about/', label: 'About' },
  { href: '/roadmap/', label: 'Roadmap' },
  { href: '/notes/', label: 'Notes' },
];

export function Logo() {
  return (
    <svg className="w-[26px] h-[26px] text-ink" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="105 27" />
      <circle cx="49.5" cy="17.5" r="6" fill="currentColor" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className={`relative z-10 ${container} h-[94px] flex items-center justify-between`}>
      <Link className={brand} href="/" aria-label="Doyuni home"><Logo /><span>Doyuni</span></Link>
      <nav className="flex max-tablet:hidden items-center gap-[34px] text-muted font-mono text-xs" aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} className={navLink}>{item.label}</Link>)}
        <Link className={navCta} href="/contact/">Connect <span aria-hidden="true">↗</span></Link>
      </nav>
      <details className="hidden max-tablet:block max-tablet:relative">
        <summary aria-label="Open navigation" className="flex w-[42px] h-[42px] cursor-pointer items-center justify-center flex-col gap-[6px] list-none border border-line [&::-webkit-details-marker]:hidden">
          <span className="w-4 h-px bg-ink" /><span className="w-4 h-px bg-ink" />
        </summary>
        <div className="absolute top-[51px] right-0 flex min-w-[190px] p-4 flex-col gap-[18px] bg-white border border-line shadow-[8px_8px_0_var(--color-mint)] font-mono text-xs uppercase">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link className={`${navCta} justify-between`} href="/contact/">Connect <span aria-hidden="true">↗</span></Link>
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={`${container} pt-8 px-0 pb-[28px] border-t border-line text-muted font-mono text-[11px] uppercase tracking-[0.05em]`}>
      <div className="flex items-center justify-between gap-5 pb-[72px] max-tablet:pb-[55px] max-tablet:items-start max-tablet:flex-col">
        <Link className={brand} href="/" aria-label="Doyuni home"><Logo /><span>Doyuni</span></Link>
        <p className="m-0">A vision in progress.</p>
      </div>
      <div className="flex items-center justify-between gap-5 max-tablet:items-start max-tablet:flex-col">
        <span>© {new Date().getFullYear()} Doyuni</span>
        <div className="flex items-center gap-5 justify-end max-tablet:justify-start max-tablet:flex-wrap">
          <a href="mailto:muse@doyuni.com" className="text-ink hover:text-blue transition-colors duration-200">muse@doyuni.com</a>
          <Link href="/contact/" className={navLink}>Connect</Link>
        </div>
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
