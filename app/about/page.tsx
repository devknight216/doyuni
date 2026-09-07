import { ArrowLink, Eyebrow, PageFrame } from '../../components/site-shell';

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="page-hero section-pad compact-hero">
        <Eyebrow>The vision</Eyebrow>
        <h1>Not a company yet.<br /><em>A direction already.</em></h1>
        <p className="hero-intro">Doyuni is the beginning of a personal vision, not tied to one industry: a place to study the future, test ideas, and gradually discover what deserves to become real — whether that turns out to be a product, a service, or a technology not yet invented.</p>
      </section>
      <section className="section-pad split-section">
        <div className="section-kicker"><span>01</span><span>Why Doyuni exists</span></div>
        <div className="split-content">
          <h2>Big ambitions are allowed to begin quietly.</h2>
          <div>
            <p className="large-copy">There is no established company behind this site yet. That is intentional. Doyuni is a place for thinking before scaling—a clear record of the questions, experiments, and principles that may shape a future company.</p>
            <p>The long-term aim is serious: to build something with global reach across more than one industry—a product, a service, a piece of technology, whatever the future calls for. The near-term responsibility is simpler: stay curious, make useful things, and earn the right to grow.</p>
          </div>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="section-kicker"><span>02</span><span>What guides the vision</span></div>
        <div className="values-grid">
          <div><span className="value-index">A</span><h3>Curiosity before certainty</h3><p>Follow meaningful changes in technology, culture, and society before deciding exactly what they should become.</p></div>
          <div><span className="value-index">B</span><h3>Evidence before scale</h3><p>Test ideas with small working experiments. Let usefulness—not hype—decide what deserves more effort.</p></div>
          <div><span className="value-index">C</span><h3>Ambition with responsibility</h3><p>Reach for global impact while remembering that whatever we build should leave more people capable, not fewer.</p></div>
        </div>
      </section>
      <section className="quote-section section-pad"><p className="quote">“A future company can start as one person refusing to stop thinking about a better possibility.”</p><span className="quote-caption">— Doyuni / founding thought</span></section>
      <section className="contact-band section-pad"><Eyebrow>Keep exploring</Eyebrow><h2>Follow the<br /><em>roadmap.</em></h2><ArrowLink href="/work/">See what comes next</ArrowLink></section>
    </PageFrame>
  );
}
