import { ArrowLink, Eyebrow, PageFrame, SectionKicker, container } from '../../components/site-shell';

const stages = [
  { number: '01', stage: 'The first movement', title: 'Explore possibilities', description: 'Read widely across AI, products, commerce, finance, culture, and any field where a new opportunity might open a door—technology is one material among many.', tags: ['Research', 'Signals', 'Ideas'], accent: 'blue' },
  { number: '02', stage: 'The proof point', title: 'Test what matters', description: 'Make small prototypes and experiments. Replace assumptions with contact, feedback, and a clearer view of what people actually need.', tags: ['Prototype', 'Learn', 'Iterate'], accent: 'violet' },
  { number: '03', stage: 'The product chapter', title: 'Build what works', description: 'Turn the strongest ideas into reliable products—beautiful enough to invite people in and useful enough to earn their trust.', tags: ['Implement', 'Product', 'Systems'], accent: 'lime' },
  { number: '04', stage: 'The reason to grow', title: 'Improve the world', description: 'Use scale responsibly. Make knowledge, creativity, opportunity, and better tools available to more people.', tags: ['Impact', 'Access', 'Future'], accent: 'coral' },
];

const accentColor: Record<string, string> = { blue: 'text-blue', violet: 'text-[#7754df]', lime: 'text-[#668800]', coral: 'text-coral' };

export default function RoadmapPage() {
  return (
    <PageFrame>
      <section className={`${container} pt-[120px] pb-[135px] min-h-[570px] max-tablet:pt-[90px] max-tablet:pb-[95px] max-tablet:min-h-0`}>
        <Eyebrow>Roadmap / long horizon</Eyebrow>
        <h1 className="m-0 text-ink font-medium tracking-[-0.1em] leading-[0.91] max-w-[840px] text-[clamp(4rem,10vw,9rem)] max-tablet:text-[clamp(3.8rem,17vw,7rem)]">
          From a question<br /><em className="text-blue not-italic">to a world of work.</em>
        </h1>
        <p className="max-w-[570px] ml-[32%] mt-[34px] text-muted text-lg leading-[1.6] max-tablet:ml-0">This is not a fixed business plan. It is a sequence for turning imagination into evidence, evidence into products, and products into lasting impact.</p>
      </section>

      <section className={`${container} pb-[140px] max-tablet:pt-[90px] max-tablet:pb-[95px]`}>
        <SectionKicker><span>01</span><span>The four movements</span><span>A direction, not a deadline</span></SectionKicker>
        <div className="mt-9">
          {stages.map((item) => (
            <article className="pt-6 px-0 pb-[31px] border-b border-line" key={item.number}>
              <div className="flex justify-between text-muted"><span className="text-blue">{item.number}</span><span>{item.stage}</span></div>
              <div className="flex justify-between items-end gap-[30px] pt-[54px] px-0 pb-6 max-tablet:pt-[38px]">
                <div>
                  <h2 className={`m-0 mb-3 text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.08em] font-medium ${accentColor[item.accent]}`}>{item.title}</h2>
                  <p className="max-w-[510px] m-0 text-muted text-lg max-tablet:text-base">{item.description}</p>
                </div>
                <span className="text-coral text-[45px] max-tablet:text-[30px]" aria-hidden="true">↗</span>
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {item.tags.map((tag) => <span key={tag} className="px-[9px] py-[5px] text-muted border border-line rounded-full font-mono text-[10px] uppercase">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blue-soft border-t border-b border-line">
        <div className={`${container} pt-[70px] pb-[140px] max-tablet:pt-[90px] max-tablet:pb-[95px]`}>
          <SectionKicker><span>02</span><span>What the process should feel like</span></SectionKicker>
          <div className="grid grid-cols-3 gap-[28px] pt-[55px] max-tablet:grid-cols-1 max-tablet:gap-[40px] max-tablet:pt-[38px]">
            <div className="border-t border-[#bdc9de] pt-[18px]">
              <span className="text-coral font-mono text-xs">01</span>
              <h3 className="mt-[57px] mb-3 text-[22px] tracking-[-0.04em] max-tablet:mt-[28px]">Open-minded</h3>
              <p className="max-w-[310px] m-0 text-muted">Look beyond the obvious industry. The best opportunity may be hiding between categories.</p>
            </div>
            <div className="border-t border-[#bdc9de] pt-[18px]">
              <span className="text-coral font-mono text-xs">02</span>
              <h3 className="mt-[57px] mb-3 text-[22px] tracking-[-0.04em] max-tablet:mt-[28px]">Hands-on</h3>
              <p className="max-w-[310px] m-0 text-muted">Build enough to learn. A working experiment can answer what a long discussion cannot.</p>
            </div>
            <div className="border-t border-[#bdc9de] pt-[18px]">
              <span className="text-coral font-mono text-xs">03</span>
              <h3 className="mt-[57px] mb-3 text-[22px] tracking-[-0.04em] max-tablet:mt-[28px]">Long-term</h3>
              <p className="max-w-[310px] m-0 text-muted">Allow good ideas time to compound. The final shape may be larger than the first experiment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${container} pt-[140px] pb-[150px]`}>
        <Eyebrow>There is always another question</Eyebrow>
        <h2 className="m-0 text-[clamp(3.7rem,7vw,7rem)] leading-[0.92] font-medium tracking-[-0.1em]">Keep looking<br /><em className="text-blue not-italic">forward.</em></h2>
        <ArrowLink href="/notes/" tone="blue" className="mt-[38px]">Read the notes</ArrowLink>
      </section>
    </PageFrame>
  );
}
