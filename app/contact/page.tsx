import { ArrowLink, Eyebrow, PageFrame } from '../../components/site-shell';

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="page-hero section-pad compact-hero contact-hero">
        <Eyebrow>Connect with the vision</Eyebrow>
        <h1>Good questions<br /><em>are welcome.</em></h1>
        <p className="hero-intro">Doyuni is early by design. If you are thinking about the future of technology, building something unusual, or simply have a strong question, send it through.</p>
      </section>
      <section className="section-pad contact-content">
        <div className="section-kicker"><span>01</span><span>Start a conversation</span></div>
        <div className="contact-grid">
          <div><h2>Think with me about what could exist.</h2><p className="large-copy">The best first message does not need a polished pitch. Share the shift you are noticing, the problem you cannot stop thinking about, or the technology you want to understand.</p></div>
          <div className="contact-details">
            <a className="contact-email" href="mailto:muse@doyuni.com">muse@doyuni.com <span aria-hidden="true">↗</span></a>
            <div className="contact-detail-row"><span>For</span><span>Ideas · experiments · collaboration</span></div>
            <div className="contact-detail-row"><span>Status</span><span>Personal project, long-term vision</span></div>
            <ArrowLink href="mailto:muse@doyuni.com">Write an email</ArrowLink>
          </div>
        </div>
      </section>
      <section className="contact-note section-pad"><span className="note-mark">DY</span><p>This is the beginning, not the finished company. The ambition is high; the next step can still be small.</p></section>
    </PageFrame>
  );
}
