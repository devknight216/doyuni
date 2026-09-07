import { ArrowLink, Eyebrow, PageFrame } from '../../components/site-shell';

const stages = [
  { number: '01', stage: 'The first movement', title: 'Explore possibilities', description: 'Read widely across AI, products, commerce, finance, culture, and any field where a new opportunity might open a door—technology is one material among many.', tags: ['Research', 'Signals', 'Ideas'], accent: 'blue' },
  { number: '02', stage: 'The proof point', title: 'Test what matters', description: 'Make small prototypes and experiments. Replace assumptions with contact, feedback, and a clearer view of what people actually need.', tags: ['Prototype', 'Learn', 'Iterate'], accent: 'violet' },
  { number: '03', stage: 'The product chapter', title: 'Build what works', description: 'Turn the strongest ideas into reliable products—beautiful enough to invite people in and useful enough to earn their trust.', tags: ['Implement', 'Product', 'Systems'], accent: 'lime' },
  { number: '04', stage: 'The reason to grow', title: 'Improve the world', description: 'Use scale responsibly. Make knowledge, creativity, opportunity, and better tools available to more people.', tags: ['Impact', 'Access', 'Future'], accent: 'coral' },
];

export default function WorkPage() {
  return (
    <PageFrame>
      <section className="page-hero section-pad compact-hero work-hero">
        <Eyebrow>Roadmap / long horizon</Eyebrow>
        <h1>From a question<br /><em>to a world of work.</em></h1>
        <p className="hero-intro">This is not a fixed business plan. It is a sequence for turning imagination into evidence, evidence into products, and products into lasting impact.</p>
      </section>
      <section className="section-pad work-list-section">
        <div className="section-kicker"><span>01</span><span>The four movements</span><span className="kicker-note">A direction, not a deadline</span></div>
        <div className="work-list">
          {stages.map((item) => (
            <article className={`work-item ${item.accent}`} key={item.number}>
              <div className="work-item-top"><span>{item.number}</span><span>{item.stage}</span></div>
              <div className="work-item-body"><div><h2>{item.title}</h2><p>{item.description}</p></div><span className="work-symbol" aria-hidden="true">↗</span></div>
              <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="process-section section-pad">
        <div className="section-kicker"><span>02</span><span>What the process should feel like</span></div>
        <div className="process-grid">
          <div><span>01</span><h3>Open-minded</h3><p>Look beyond the obvious industry. The best opportunity may be hiding between categories.</p></div>
          <div><span>02</span><h3>Hands-on</h3><p>Build enough to learn. A working experiment can answer what a long discussion cannot.</p></div>
          <div><span>03</span><h3>Long-term</h3><p>Allow good ideas time to compound. The final shape may be larger than the first experiment.</p></div>
        </div>
      </section>
      <section className="contact-band section-pad"><Eyebrow>There is always another question</Eyebrow><h2>Keep looking<br /><em>forward.</em></h2><ArrowLink href="/journal/">Read the notes</ArrowLink></section>
    </PageFrame>
  );
}
