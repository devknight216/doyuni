import { Eyebrow, PageFrame, SectionKicker, button, buttonPrimary, container } from '../../components/site-shell';

const entries = [
  {
    id: 'starting-point',
    type: 'Day one',
    read: '02 min',
    date: 'September 7, 2026',
    title: 'Today is the starting point of our long journey.',
    body: [
      "We don't have a finished company yet — no product, no team, no funding round to announce. What we have is an aim and an ambition, and we've decided that's enough to begin.",
      "Our aim is simple to say and hard to do: pay close attention to what's changing in the world, build things that are genuinely useful, and let evidence — not hype — decide what deserves to grow.",
      "Our ambition is larger: to build something, someday, with the reach and impact of the companies we admire most. Not because we need to say that out loud, but because it's the honest size of what we're working toward.",
      "We don't know yet what Doyuni will become — a product, a service, a piece of technology that doesn't have a name yet. What we know is that every long journey starts with a single, unremarkable day. This is ours.",
    ],
  },
];

export default function NotesPage() {
  return (
    <PageFrame>
      <section className={`${container} pt-[120px] pb-[135px] min-h-[570px] max-tablet:pt-[90px] max-tablet:pb-[95px] max-tablet:min-h-0`}>
        <Eyebrow>Notes from the journey</Eyebrow>
        <h1 className="m-0 text-ink font-medium tracking-[-0.1em] leading-[0.91] max-w-[840px] text-[clamp(4rem,10vw,9rem)] max-tablet:text-[clamp(3.8rem,17vw,7rem)]">
          The first entry<br /><em className="text-blue not-italic">in a much longer story.</em>
        </h1>
        <p className="max-w-[570px] ml-[32%] mt-[34px] text-muted text-lg leading-[1.6] max-tablet:ml-0">A public notebook for the questions, decisions, and working theories that shape Doyuni over time. It starts here, with one entry.</p>
      </section>

      <section className={`${container} pb-[140px] max-tablet:pt-[90px] max-tablet:pb-[95px]`}>
        <SectionKicker><span>01</span><span>Working notes</span><span>Updated as ideas mature</span></SectionKicker>
        <div className="mt-[35px]">
          {entries.map((entry) => (
            <article className="grid grid-cols-[.6fr_1.6fr_.35fr] items-start gap-[30px] py-[31px] border-b border-line first:border-t max-tablet:grid-cols-1 max-tablet:gap-[14px]" id={entry.id} key={entry.id}>
              <div className="text-muted">
                <span className="block mb-[6px]">{entry.type}</span>
                <span className="block mb-[6px]">{entry.read}</span>
              </div>
              <div>
                <h2 className="m-0 mb-4 text-[clamp(1.8rem,3.3vw,3.5rem)] leading-none tracking-[-0.07em] font-medium text-blue">{entry.title}</h2>
                {entry.body.map((paragraph, index) => (
                  <p key={index} className={`max-w-[600px] text-muted ${index === 0 ? 'm-0' : 'mt-[14px]'}`}>{paragraph}</p>
                ))}
              </div>
              <time className="justify-self-end max-tablet:justify-self-start text-faint font-mono text-[11px]">{entry.date}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blue-soft border-t border-line">
        <div className={`${container} flex items-end justify-between gap-[30px] pt-[90px] pb-[110px] max-tablet:items-start max-tablet:flex-col max-tablet:pt-[75px] max-tablet:pb-[80px]`}>
          <div>
            <Eyebrow>Keep the signal close</Eyebrow>
            <h2 className="m-0 text-[clamp(3.5rem,7vw,6.8rem)] leading-[0.93] tracking-[-0.095em] font-medium">Occasional notes.<br /><em className="text-blue not-italic">No performance.</em></h2>
          </div>
          <a className={`${button} ${buttonPrimary}`} href="mailto:muse@doyuni.com?subject=Follow%20Doyuni%20notes">Ask to follow <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </PageFrame>
  );
}
