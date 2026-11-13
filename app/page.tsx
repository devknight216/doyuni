import Link from 'next/link';
import { ideas, type IdeaStatus } from '../data/ideas';
import { ArrowLink, Eyebrow, PageFrame, SectionKicker, StatusBadge, container, label } from '../components/site-shell';

const statusOrder: IdeaStatus[] = ['exploring', 'validated', 'parked', 'dropped'];

const stackSlots = [
  { rotate: -7, top: 0, left: 10, z: 3 },
  { rotate: 5, top: 58, left: 168, z: 2 },
  { rotate: -3, top: 168, left: 48, z: 1 },
];

const method = [
  { number: '01', title: 'Spot something', text: 'A pattern, a complaint, a gap — usually noticed mid-conversation, not gone looking for.' },
  { number: '02', title: 'Pressure-test it with AI', text: 'Work it through in a Claude or ChatGPT chat: the problem, who actually has it, who else is already solving it.' },
  { number: '03', title: 'Write down what holds up', text: 'If the analysis survives, it gets logged here — with the reasoning, not just the pitch.' },
  { number: '04', title: 'Let status drift honestly', text: 'Exploring, parked, dropped, or — rarely — validated enough to act on. No pressure to finish any of them.' },
];

export default function Home() {
  const counts = statusOrder.map((status) => ({
    status,
    count: ideas.filter((idea) => idea.status === status).length,
  }));
  const recent = [...ideas].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const stackIdeas = recent.slice(0, 3);
  const totalCount = ideas.length;

  return (
    <PageFrame>
      <section className="flex items-center min-h-[86vh] max-tablet:block max-tablet:min-h-0 max-tablet:pt-[90px] max-tablet:pb-[70px]">
        <div className={`${container} grid grid-cols-[1.15fr_.85fr] items-center gap-[60px] max-tablet:grid-cols-1 max-tablet:gap-[70px]`}>
          <div>
            <Eyebrow>Doyuni / private idea log</Eyebrow>
            <h1 className="m-0 text-ink font-medium tracking-[-0.1em] leading-[0.91] max-w-[640px] text-[clamp(3.4rem,7vw,6.4rem)] max-tablet:text-[clamp(3.1rem,13vw,5rem)]">
              Ideas, written down<br /><em className="text-blue not-italic">before they become a company.</em>
            </h1>
            <p className="max-w-[500px] mt-[28px] text-muted text-lg leading-[1.6]">
              A notebook for startup ideas worked through with AI — the problem, the market, the risks, the open questions. Most get parked or dropped. The point is to think clearly before deciding what, if anything, is worth building two or three years from now.
            </p>
            <div className="flex items-center gap-[36px] mt-[36px] flex-wrap">
              <ArrowLink href="/ideas/" tone="blue">Browse all ideas</ArrowLink>
              <span className={`text-faint ${label}`}>{totalCount} logged so far</span>
            </div>
          </div>

          <div className="relative h-[330px] max-tablet:hidden" aria-hidden="true">
            {stackSlots.map((slot, index) => {
              const idea = stackIdeas[index];
              return (
                <div
                  key={index}
                  className={`absolute w-[230px] p-[20px] border bg-paper shadow-[6px_6px_0_var(--color-line)] ${idea ? 'border-line' : 'border-dashed border-line/70 bg-transparent'}`}
                  style={{ top: slot.top, left: slot.left, transform: `rotate(${slot.rotate}deg)`, zIndex: slot.z }}
                >
                  {idea ? (
                    <>
                      <StatusBadge status={idea.status} />
                      <p className="mt-[38px] mb-0 text-[16px] leading-[1.25] tracking-[-0.03em] font-semibold text-ink">{idea.title}</p>
                      <span className={`block mt-[14px] text-faint ${label}`}>{idea.date}</span>
                    </>
                  ) : (
                    <p className={`mt-[38px] mb-0 text-faint ${label}`}>+ next idea</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${container} pt-[120px] pb-[100px] max-tablet:pt-[80px] max-tablet:pb-[80px]`}>
        <SectionKicker><span>01</span><span>Status, right now</span></SectionKicker>
        <div className="grid grid-cols-4 gap-0 mt-[30px] border-t border-b border-line max-tablet:grid-cols-2">
          {counts.map(({ status, count }, index) => (
            <div key={status} className="relative py-[26px] px-5 border-r border-line last:border-r-0 max-tablet:[&:nth-child(2n)]:border-r-0 max-tablet:[&:nth-child(-n+2)]:border-b max-tablet:[&:nth-child(-n+2)]:border-line">
              <span className="block mb-3"><StatusBadge status={status} /></span>
              <span className="block text-[clamp(2.4rem,4vw,3.4rem)] font-medium tracking-[-0.06em] leading-none">{count}</span>
              {index < counts.length - 1 && (
                <span className="hidden tablet:flex absolute top-1/2 right-[-11px] -translate-y-1/2 text-faint text-lg" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {recent.length > 0 && (
        <section className={`${container} pb-[140px] max-tablet:pb-[95px]`}>
          <SectionKicker><span>02</span><span>Most recent</span><Link href="/ideas/" className="hover:text-blue">See all <span aria-hidden="true">↗</span></Link></SectionKicker>
          <div className="grid grid-cols-3 gap-0 mt-[30px] border-t border-b border-line max-tablet:grid-cols-1">
            {recent.map((idea) => (
              <Link href={`/ideas/${idea.slug}/`} key={idea.slug} className="flex flex-col justify-between min-h-[280px] p-[25px] border-r border-line transition-[background,transform] duration-[250ms] hover:bg-blue-soft hover:-translate-y-[5px] motion-reduce:transition-none last:border-r-0 max-tablet:border-r-0 max-tablet:border-b">
                <StatusBadge status={idea.status} />
                <div className="mt-[45px]">
                  <h3 className="mb-[10px] text-[23px] leading-[1.1] tracking-[-0.05em] font-semibold">{idea.title}</h3>
                  <p className="m-0 text-muted text-sm leading-[1.5]">{idea.pitch}</p>
                </div>
                <span className={`block mt-[22px] text-faint ${label}`}>{idea.date}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="bg-ink text-white">
        <div className={`${container} py-[110px] max-tablet:py-[80px]`}>
          <SectionKicker><span className="text-mint">03</span><span className="text-[#edf1f7]">How an idea gets here</span></SectionKicker>
          <div className="grid grid-cols-4 gap-[30px] mt-[46px] max-tablet:grid-cols-1 max-tablet:gap-[34px]">
            {method.map((step) => (
              <div key={step.number}>
                <span className={`text-coral ${label}`}>{step.number}</span>
                <h3 className="mt-[18px] mb-[12px] text-[22px] leading-[1.1] tracking-[-0.04em] font-semibold">{step.title}</h3>
                <p className="m-0 text-[#b9c4d5] text-sm leading-[1.6]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
