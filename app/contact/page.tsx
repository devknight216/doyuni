import { ArrowLink, Eyebrow, PageFrame, SectionKicker, container } from '../../components/site-shell';

export default function ContactPage() {
  return (
    <PageFrame>
      <section className={`${container} pt-[120px] pb-[135px] min-h-[570px] max-tablet:pt-[90px] max-tablet:pb-[95px] max-tablet:min-h-0`}>
        <Eyebrow>Connect with the vision</Eyebrow>
        <h1 className="m-0 text-ink font-medium tracking-[-0.1em] leading-[0.91] max-w-[840px] text-[clamp(4rem,10vw,9rem)] max-tablet:text-[clamp(3.8rem,17vw,7rem)]">
          Good questions<br /><em className="text-blue not-italic">are welcome.</em>
        </h1>
        <p className="max-w-[570px] ml-[32%] mt-[34px] text-muted text-lg leading-[1.6] max-tablet:ml-0">Doyuni is early by design. If you are thinking about the future of technology, building something unusual, or simply have a strong question, send it through.</p>
      </section>

      <section className={`${container} pb-[140px]`}>
        <SectionKicker><span>01</span><span>Start a conversation</span></SectionKicker>
        <div className="grid grid-cols-2 gap-[11%] pt-[52px] max-tablet:grid-cols-1 max-tablet:gap-[38px] max-tablet:pt-[38px]">
          <div>
            <h2 className="m-0 max-w-[550px] text-[clamp(2.5rem,4.5vw,4.5rem)] leading-none tracking-[-0.08em] font-medium">Think with us about what could exist.</h2>
            <p className="max-w-[520px] mb-[30px] text-ink text-[21px] leading-[1.48] tracking-[-0.03em] max-tablet:text-[19px]">The best first message does not need a polished pitch. Share the shift you are noticing, the problem you cannot stop thinking about, or the technology you want to understand.</p>
          </div>
          <div className="pt-[5px]">
            <a className="inline-flex items-center gap-[15px] pb-[14px] border-b border-ink text-blue text-[clamp(1.2rem,2vw,1.7rem)] tracking-[-0.04em]" href="mailto:muse@doyuni.com">muse@doyuni.com <span aria-hidden="true">↗</span></a>
            <div className="flex justify-between gap-5 py-[17px] border-b border-line text-muted font-mono text-[11px] uppercase tracking-[0.06em] max-tablet:flex-col max-tablet:gap-[5px]">
              <span>For</span><span className="text-ink font-sans text-sm tracking-normal normal-case">Ideas · experiments · collaboration</span>
            </div>
            <div className="flex justify-between gap-5 py-[17px] border-b border-line text-muted font-mono text-[11px] uppercase tracking-[0.06em] max-tablet:flex-col max-tablet:gap-[5px]">
              <span>Status</span><span className="text-ink font-sans text-sm tracking-normal normal-case">Independent project, long-term vision</span>
            </div>
            <ArrowLink href="mailto:muse@doyuni.com" tone="blue" className="mt-[42px]">Write an email</ArrowLink>
          </div>
        </div>
      </section>

      <section className={`${container} flex items-center gap-[30px] pt-[50px] pb-[100px] border-t border-line max-tablet:items-start`}>
        <span className="grid flex-none w-[58px] h-[58px] place-items-center text-white bg-blue rounded-full font-mono text-[11px]">DY</span>
        <p className="m-0 text-muted">This is the beginning, not the finished company. The ambition is high; the next step can still be small.</p>
      </section>
    </PageFrame>
  );
}
