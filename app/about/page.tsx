import { ArrowLink, Eyebrow, PageFrame, SectionKicker, container } from '../../components/site-shell';

const largeCopy = 'max-w-[520px] mb-[30px] text-ink text-[21px] leading-[1.48] tracking-[-0.03em] max-tablet:text-[19px]';

export default function AboutPage() {
  return (
    <PageFrame>
      <section className={`${container} pt-[120px] pb-[135px] min-h-[570px] max-tablet:pt-[90px] max-tablet:pb-[95px] max-tablet:min-h-0`}>
        <Eyebrow>About / the vision</Eyebrow>
        <h1 className="m-0 text-ink font-medium tracking-[-0.1em] leading-[0.91] max-w-[840px] text-[clamp(4rem,10vw,9rem)] max-tablet:text-[clamp(3.8rem,17vw,7rem)]">
          Not a company yet.<br /><em className="text-blue not-italic">A direction already.</em>
        </h1>
        <p className="max-w-[570px] ml-[32%] mt-[34px] text-muted text-lg leading-[1.6] max-tablet:ml-0">Doyuni is the beginning of our vision, not tied to one industry: a place to study the future, test ideas, and gradually discover what deserves to become real — whether that turns out to be a product, a service, or a technology not yet invented.</p>
      </section>

      <section className={`${container} pb-[140px] max-tablet:pt-[90px] max-tablet:pb-[95px]`}>
        <SectionKicker><span>01</span><span>Why Doyuni exists</span></SectionKicker>
        <div className="grid grid-cols-2 gap-[11%] pt-[52px] max-tablet:grid-cols-1 max-tablet:gap-[38px] max-tablet:pt-[38px]">
          <h2 className="m-0 max-w-[550px] text-[clamp(2.5rem,4.5vw,4.5rem)] leading-none tracking-[-0.08em] font-medium">Big ambitions are allowed to begin quietly.</h2>
          <div>
            <p className={largeCopy}>There is no established company behind this site yet. That is intentional. Doyuni is a place for thinking before scaling—a clear record of the questions, experiments, and principles that may shape a future company.</p>
            <p className="max-w-[510px] m-0 text-muted">The long-term aim is serious: to build something with global reach across more than one industry—a product, a service, a piece of technology, whatever the future calls for. The near-term responsibility is simpler: stay curious, make useful things, and earn the right to grow.</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-soft border-t border-b border-line">
        <div className={`${container} pt-[70px] pb-[140px] max-tablet:pt-[90px] max-tablet:pb-[95px]`}>
          <SectionKicker><span>02</span><span>What guides the vision</span></SectionKicker>
          <div className="grid grid-cols-3 gap-[28px] pt-[55px] max-tablet:grid-cols-1 max-tablet:gap-[40px] max-tablet:pt-[38px]">
            <div className="border-t border-[#bdc9de] pt-[18px]">
              <span className="text-coral font-mono text-xs">A</span>
              <h3 className="mt-[57px] mb-3 text-[22px] tracking-[-0.04em] max-tablet:mt-[28px]">Curiosity before certainty</h3>
              <p className="max-w-[310px] m-0 text-muted">Follow meaningful changes in technology, culture, and society before deciding exactly what they should become.</p>
            </div>
            <div className="border-t border-[#bdc9de] pt-[18px]">
              <span className="text-coral font-mono text-xs">B</span>
              <h3 className="mt-[57px] mb-3 text-[22px] tracking-[-0.04em] max-tablet:mt-[28px]">Evidence before scale</h3>
              <p className="max-w-[310px] m-0 text-muted">Test ideas with small working experiments. Let usefulness—not hype—decide what deserves more effort.</p>
            </div>
            <div className="border-t border-[#bdc9de] pt-[18px]">
              <span className="text-coral font-mono text-xs">C</span>
              <h3 className="mt-[57px] mb-3 text-[22px] tracking-[-0.04em] max-tablet:mt-[28px]">Ambition with responsibility</h3>
              <p className="max-w-[310px] m-0 text-muted">Reach for global impact while remembering that whatever we build should leave more people capable, not fewer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${container} pt-[140px] pb-[142px]`}>
        <p className="max-w-[900px] m-0 text-[clamp(2.3rem,5vw,5.3rem)] leading-[1.04] tracking-[-0.08em]">&ldquo;A future company can start as one person refusing to stop thinking about a better possibility.&rdquo;</p>
        <span className="block mt-[37px] text-muted font-mono text-[11px] uppercase">— Doyuni / founding thought</span>
      </section>

      <section className={`${container} pt-[140px] pb-[150px]`}>
        <Eyebrow>Keep exploring</Eyebrow>
        <h2 className="m-0 text-[clamp(3.7rem,7vw,7rem)] leading-[0.92] font-medium tracking-[-0.1em]">Follow the<br /><em className="text-blue not-italic">roadmap.</em></h2>
        <ArrowLink href="/roadmap/" tone="blue" className="mt-[38px]">See the roadmap</ArrowLink>
      </section>
    </PageFrame>
  );
}
