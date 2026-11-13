import Link from 'next/link';
import { ideas, type IdeaStatus } from '../data/ideas';
import { ArrowLink, Eyebrow, PageFrame, SectionKicker, StatusBadge, container, label } from '../components/site-shell';

const statusOrder: IdeaStatus[] = ['exploring', 'validated', 'parked', 'dropped'];

export default function Home() {
  const counts = statusOrder.map((status) => ({
    status,
    count: ideas.filter((idea) => idea.status === status).length,
  }));
  const recent = [...ideas].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <PageFrame>
      <section className={`${container} pt-[120px] pb-[90px] max-tablet:pt-[90px] max-tablet:pb-[70px]`}>
        <Eyebrow>Doyuni / idea log</Eyebrow>
        <h1 className="m-0 text-ink font-medium tracking-[-0.1em] leading-[0.91] max-w-[840px] text-[clamp(3.6rem,8vw,7.2rem)] max-tablet:text-[clamp(3.2rem,14vw,5.5rem)]">
          Ideas, written down<br /><em className="text-blue not-italic">before they become a company.</em>
        </h1>
        <p className="max-w-[560px] mt-[30px] text-muted text-lg leading-[1.6]">
          A public notebook for startup ideas explored with AI — the problem, the market, the risks, the open questions. Most will get parked or dropped. The point is to think clearly before deciding what, if anything, is worth building two or three years from now.
        </p>
        <ArrowLink href="/ideas/" tone="blue" className="mt-[34px]">Browse all ideas</ArrowLink>
      </section>

      <section className={`${container} pb-[100px] max-tablet:pb-[80px]`}>
        <SectionKicker><span>01</span><span>Status, right now</span></SectionKicker>
        <div className="grid grid-cols-4 gap-0 mt-[30px] border-t border-b border-line max-tablet:grid-cols-2">
          {counts.map(({ status, count }) => (
            <div key={status} className="py-[26px] px-5 border-r border-line last:border-r-0 max-tablet:[&:nth-child(2n)]:border-r-0 max-tablet:[&:nth-child(-n+2)]:border-b max-tablet:[&:nth-child(-n+2)]:border-line">
              <span className="block mb-3"><StatusBadge status={status} /></span>
              <span className="block text-[clamp(2.4rem,4vw,3.4rem)] font-medium tracking-[-0.06em] leading-none">{count}</span>
            </div>
          ))}
        </div>
      </section>

      {recent.length > 0 && (
        <section className={`${container} pb-[140px] max-tablet:pb-[95px]`}>
          <SectionKicker><span>02</span><span>Most recent</span><Link href="/ideas/" className="hover:text-blue">See all <span aria-hidden="true">↗</span></Link></SectionKicker>
          <div className="grid grid-cols-3 gap-0 mt-[30px] border-t border-b border-line max-tablet:grid-cols-1">
            {recent.map((idea) => (
              <Link href={`/ideas/${idea.slug}/`} key={idea.slug} className="flex flex-col justify-between min-h-[260px] p-[25px] border-r border-line transition-[background,transform] duration-[250ms] hover:bg-blue-soft hover:-translate-y-[5px] motion-reduce:transition-none last:border-r-0 max-tablet:border-r-0 max-tablet:border-b">
                <StatusBadge status={idea.status} />
                <h3 className="mt-[55px] mb-3 text-[23px] leading-[1.1] tracking-[-0.05em] font-semibold">{idea.title}</h3>
                <span className={`text-faint ${label}`}>{idea.date}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageFrame>
  );
}
