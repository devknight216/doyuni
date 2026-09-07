import Link from 'next/link';
import { VisionField } from '../components/vision-field';
import { ArrowLink, Eyebrow, PageFrame, SectionKicker, button, buttonPrimary, container, label } from '../components/site-shell';

const roadmap = [
  { number: '01', title: 'Explore possibilities', text: 'Look closely at the changes in technology, products, culture, and the world around us — wherever the next opportunity turns out to be.' },
  { number: '02', title: 'Test what matters', text: 'Turn curiosity into prototypes, experiments, and evidence. Learn quickly before building too much.' },
  { number: '03', title: 'Build what works', text: 'Implement focused products or services that are useful, understandable, and strong enough to grow.' },
  { number: '04', title: 'Improve the world', text: 'Make progress compound by using what we build to expand opportunity, creativity, and human capability.' },
];

const fields = ['Artificial intelligence', 'Products', 'Services', 'Commerce', 'Finance', 'Whatever comes next'];

const roadmapCard = 'min-h-[330px] max-tablet:min-h-[270px] pt-[23px] px-6 pb-[26px] border-r border-line bg-transparent transition-[background,transform] duration-[250ms] hover:bg-white hover:-translate-y-[5px] motion-reduce:transition-none last:border-r-0 max-tablet:[&:nth-child(2)]:border-r-0 max-tablet:[&:nth-child(-n+2)]:border-b max-tablet:[&:nth-child(-n+2)]:border-line';

export default function Home() {
  return (
    <PageFrame>
      <section className="flex h-[88vh] min-h-[640px] max-tablet:block max-tablet:h-auto max-tablet:min-h-0 max-tablet:pt-[90px] max-tablet:pb-[80px]">
        <div className="flex-none w-[calc(var(--edge)+600px)] flex flex-col justify-center pt-10 pr-10 pb-10 pl-[var(--edge)] max-tablet:w-auto max-tablet:px-5 max-tablet:py-0">
          <Eyebrow>Doyuni / a vision in progress</Eyebrow>
          <h1 className="m-0 text-ink font-medium tracking-[-0.1em] leading-[0.91] max-w-[840px] text-[clamp(4rem,9.2vw,8.7rem)] max-tablet:text-[clamp(3.8rem,17vw,7rem)]">
            A place to<br /><em className="text-blue not-italic">explore the future.</em>
          </h1>
          <p className="max-w-[510px] mt-[34px] text-muted text-lg leading-[1.6]">Doyuni is our long-term vision for a company that starts with curiosity — not tied to one industry — and aims, over time, to build whatever matters at global scale: products, services, or ideas not yet invented.</p>
          <div className="flex items-center gap-[25px] mt-[38px]">
            <Link className={`${button} ${buttonPrimary}`} href="#roadmap">Follow the path <span aria-hidden="true">↓</span></Link>
            <Link className="inline-flex items-center gap-[13px] text-muted font-mono text-xs uppercase tracking-[0.04em] transition-colors duration-200 hover:text-blue" href="/about/">Why Doyuni? <span aria-hidden="true" className="text-blue text-lg leading-none">↗</span></Link>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden bg-[radial-gradient(60%_60%_at_58%_50%,#eef3ff,transparent_72%)] max-tablet:min-h-[385px] max-tablet:mt-[68px]" aria-label="A globe of the world with glowing arcs representing ideas spreading between places" role="img">
          <VisionField />
        </div>
      </section>

      <section className={`${container} pt-[125px] pb-[145px] max-tablet:pt-[90px] max-tablet:pb-[95px]`}>
        <SectionKicker><span>01</span><span>The long view</span></SectionKicker>
        <div className="grid grid-cols-[1.15fr_.85fr] gap-[11%] pt-[52px] max-tablet:grid-cols-1 max-tablet:gap-[38px] max-tablet:pt-[38px]">
          <h2 className="m-0 max-w-[650px] text-[clamp(2.6rem,5vw,5rem)] font-medium tracking-[-0.08em] leading-[0.99] max-tablet:text-[2.7rem]">
            Today, it is a point of view.<br /><em className="text-blue not-italic">Tomorrow, it can become a force.</em>
          </h2>
          <p className="max-w-[490px] m-0 text-muted text-[19px] leading-[1.55]">Doyuni does not need to pretend it is already a large company. It is the beginning of an ambition: to understand important shifts, create across many fields, and eventually build something — a product, a service, a technology not yet named — with the reach to change how people live, work, and imagine.</p>
        </div>
      </section>

      <section className={`${container} pb-[145px] max-tablet:pt-[90px] max-tablet:pb-[95px]`} id="roadmap">
        <SectionKicker><span>02</span><span>The Doyuni roadmap</span><span>A direction, not a deadline</span></SectionKicker>
        <div className="grid grid-cols-4 gap-0 mt-[38px] border-t border-b border-line max-tablet:grid-cols-2">
          {roadmap.map((step) => (
            <article className={roadmapCard} key={step.number}>
              <span className={`text-coral ${label}`}>{step.number}</span>
              <h3 className="max-w-[220px] mt-[91px] mb-[15px] text-[25px] leading-[1.06] tracking-[-0.06em] font-semibold max-tablet:mt-[58px] max-tablet:text-[22px]">{step.title}</h3>
              <p className="m-0 text-muted text-sm leading-[1.55]">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className={`${container} grid grid-cols-2 items-center gap-[11%] min-h-[430px] max-tablet:grid-cols-1 max-tablet:gap-[38px] max-tablet:min-h-0 max-tablet:pt-[80px] max-tablet:pb-[80px]`}>
          <div>
            <Eyebrow tone="light">Curiosity is the material</Eyebrow>
            <h2 className="m-0 text-[clamp(3.7rem,7vw,7rem)] leading-[0.92] font-medium tracking-[-0.1em]">Many fields.<br /><em className="text-mint not-italic">One direction.</em></h2>
          </div>
          <div className="grid grid-cols-2 border-t border-white/20 max-tablet:mt-[10px]">
            {fields.map((field, index) => (
              <span key={field} className="flex items-center gap-[15px] py-4 text-[#edf1f7] border-b border-white/20 [&:nth-child(odd)]:mr-[22px] max-tablet:[&:nth-child(odd)]:mr-0">
                <b className={`text-coral font-normal ${label}`}>0{index + 1}</b>{field}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${container} pt-[140px] pb-[145px] max-tablet:pt-[90px] max-tablet:pb-[95px]`}>
        <SectionKicker><span>03</span><span>The ambition</span></SectionKicker>
        <div className="grid grid-cols-2 gap-[11%] pt-[52px] max-tablet:grid-cols-1 max-tablet:gap-[38px] max-tablet:pt-[38px]">
          <h2 className="m-0 max-w-[650px] text-[clamp(2.6rem,5vw,5rem)] font-medium tracking-[-0.08em] leading-[0.99] max-tablet:text-[2.7rem]">Build with the curiosity of a lab and the ambition of a global giant.</h2>
          <div>
            <p className="max-w-[520px] mb-[30px] text-ink text-[21px] leading-[1.48] tracking-[-0.03em] max-tablet:text-[19px]">Companies like Apple, Meta, and Microsoft show what can happen when a bold vision compounds for decades—regardless of whether it started in software, hardware, or something else entirely. Doyuni aims for that level of scale and importance, while remaining open to the industries, products, and ideas that the future will reveal.</p>
            <ArrowLink href="/roadmap/" tone="blue">See the roadmap</ArrowLink>
          </div>
        </div>
      </section>

      <section className={`${container} pb-[145px] max-tablet:pt-[90px] max-tablet:pb-[95px]`}>
        <SectionKicker><span>04</span><span>Notes from the journey</span><Link href="/notes/" className="hover:text-blue">Read the notes <span aria-hidden="true">↗</span></Link></SectionKicker>
        <div className="grid grid-cols-1 mt-[38px] border-t border-b border-line">
          <Link href="/notes/#starting-point" className="flex flex-col justify-between bg-blue-soft min-h-[330px] max-tablet:min-h-[250px] p-[25px] max-w-[640px]">
            <span className={`text-muted ${label}`}>Day one</span>
            <h3 className="max-w-[370px] mt-auto mb-4 text-[27px] leading-[1.07] tracking-[-0.06em] font-semibold">Today is the starting point of our long journey.</h3>
            <span className={`text-faint ${label}`}>Our aim, our ambition — read the first entry ↗</span>
          </Link>
        </div>
      </section>

      <section className={`${container} pt-[140px] pb-[150px]`}>
        <Eyebrow>Have an idea worth exploring?</Eyebrow>
        <h2 className="m-0 text-[clamp(3.7rem,7vw,7rem)] leading-[0.92] font-medium tracking-[-0.1em]">Let&apos;s think<br /><em className="text-blue not-italic">beyond today.</em></h2>
        <ArrowLink href="/contact/" tone="blue" className="mt-[38px]">Start a conversation</ArrowLink>
      </section>
    </PageFrame>
  );
}
