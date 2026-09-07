import Link from 'next/link';

const navItems = [
  { href: '/about/', label: 'The vision' },
  { href: '/work/', label: 'Roadmap' },
  { href: '/journal/', label: 'Notes' },
];

export function Logo() {
  return (
    <svg className="brand-symbol" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="105 27" />
      <circle cx="49.5" cy="17.5" r="6" fill="currentColor" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Doyuni home"><Logo /><span>Doyuni</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <Link className="nav-cta" href="/contact/">Connect <span aria-hidden="true">↗</span></Link>
      </nav>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><span /><span /></summary>
        <div className="mobile-nav-panel">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link className="nav-cta" href="/contact/">Connect <span aria-hidden="true">↗</span></Link>
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top"><Link className="brand" href="/" aria-label="Doyuni home"><Logo /><span>Doyuni</span></Link><p>A vision in progress.</p></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Doyuni</span><div className="footer-links"><a href="mailto:muse@doyuni.com">muse@doyuni.com</a><Link href="/contact/">Connect</Link></div></div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <><SiteHeader /><main>{children}</main><SiteFooter /></>; }
export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span className="eyebrow-dot" />{children}</p>; }
export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <Link className="arrow-link" href={href}>{children}<span aria-hidden="true">↗</span></Link>; }
