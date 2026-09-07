import Link from 'next/link';
import { VisionField } from '../components/vision-field';
import { ArrowLink, Eyebrow, PageFrame } from '../components/site-shell';

const roadmap = [
  { number: '01', title: 'Explore possibilities', text: 'Look closely at the changes in technology, products, culture, and the world around us — wherever the next opportunity turns out to be.' },
  { number: '02', title: 'Test what matters', text: 'Turn curiosity into prototypes, experiments, and evidence. Learn quickly before building too much.' },
  { number: '03', title: 'Build what works', text: 'Implement focused products or services that are useful, understandable, and strong enough to grow.' },
  { number: '04', title: 'Improve the world', text: 'Make progress compound by using what we build to expand opportunity, creativity, and human capability.' },
];

const fields = ['Artificial intelligence', 'Products', 'Services', 'Commerce', 'Finance', 'Whatever comes next'];

export default function Home() {
  return (
    <PageFrame>
      <section className="hero section-pad">
        <div className="hero-copy">
          <Eyebrow>Doyuni / a vision in progress</Eyebrow>
          <h1>A place to<br /><em>explore the future.</em></h1>
          <p className="hero-intro">Doyuni is a personal long-term vision for a company that starts with curiosity — not tied to one industry — and aims, over time, to build whatever matters at global scale: products, services, or ideas not yet invented.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#roadmap">Follow the path <span aria-hidden="true">↓</span></Link>
            <Link className="text-link" href="/about/">Why Doyuni? <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="A lightweight 3D field representing the Doyuni vision" role="img">
          <VisionField />
          <div className="visual-note visual-note-top">VISION / 001</div>
          <div className="visual-note visual-note-bottom">ideas → experiments → impact</div>
          <div className="visual-crosshair" aria-hidden="true" />
        </div>
      </section>

      <section className="statement-section section-pad">
        <div className="statement-label"><span>01</span><span>The long view</span></div>
        <div className="statement-grid">
          <h2>Today, it is a point of view.<br /><em>Tomorrow, it can become a force.</em></h2>
          <p>Doyuni does not need to pretend it is already a large company. It is the beginning of an ambition: to understand important shifts, create across many fields, and eventually build something — a product, a service, a technology not yet named — with the reach to change how people live, work, and imagine.</p>
        </div>
      </section>

      <section className="roadmap-section section-pad" id="roadmap">
        <div className="section-kicker"><span>02</span><span>The Doyuni roadmap</span><span className="kicker-note">A direction, not a deadline</span></div>
        <div className="roadmap-grid">
          {roadmap.map((step) => (
            <article className="roadmap-card" key={step.number}>
              <span className="roadmap-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fields-band">
        <div className="section-pad fields-inner">
          <div><Eyebrow>Curiosity is the material</Eyebrow><h2>Many fields.<br /><em>One direction.</em></h2></div>
          <div className="field-list">{fields.map((field, index) => <span key={field}><b>0{index + 1}</b>{field}</span>)}</div>
        </div>
      </section>

      <section className="ambition-section section-pad">
        <div className="section-kicker"><span>03</span><span>The ambition</span></div>
        <div className="ambition-grid">
          <h2>Build with the curiosity of a lab and the ambition of a global giant.</h2>
          <div>
            <p className="large-copy">Companies like Apple, Meta, and Microsoft show what can happen when a bold vision compounds for decades—regardless of whether it started in software, hardware, or something else entirely. Doyuni aims for that level of scale and importance, while remaining open to the industries, products, and ideas that the future will reveal.</p>
            <ArrowLink href="/work/">See the roadmap</ArrowLink>
          </div>
        </div>
      </section>

      <section className="journal-preview section-pad">
        <div className="section-kicker"><span>04</span><span>Notes from the journey</span><Link href="/journal/">Read the journal <span aria-hidden="true">↗</span></Link></div>
        <div className="journal-grid journal-grid-single">
          <Link href="/journal/#starting-point" className="journal-feature"><span className="journal-tag">Day one</span><h3>Today is the starting point of my long journey.</h3><span className="journal-date">My aim, my ambition — read the first entry ↗</span></Link>
        </div>
      </section>

      <section className="contact-band section-pad"><Eyebrow>Have an idea worth exploring?</Eyebrow><h2>Let&apos;s think<br /><em>beyond today.</em></h2><ArrowLink href="/contact/">Start a conversation</ArrowLink></section>
    </PageFrame>
  );
}
