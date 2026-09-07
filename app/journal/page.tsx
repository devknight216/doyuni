import { Eyebrow, PageFrame } from '../../components/site-shell';

const entries = [
  {
    id: 'starting-point',
    type: 'Day one',
    read: '02 min',
    date: 'September 7, 2026',
    title: 'Today is the starting point of my long journey.',
    body: [
      "I don't have a finished company yet — no product, no team, no funding round to announce. What I have is an aim and an ambition, and I've decided that's enough to begin.",
      "My aim is simple to say and hard to do: pay close attention to what's changing in the world, build things that are genuinely useful, and let evidence — not hype — decide what deserves to grow.",
      "My ambition is larger: to build something, someday, with the reach and impact of the companies I admire most. Not because I need to say that out loud, but because it's the honest size of what I'm working toward.",
      "I don't know yet what Doyuni will become — a product, a service, a piece of technology that doesn't have a name yet. What I know is that every long journey starts with a single, unremarkable day. This is mine.",
    ],
  },
];

export default function JournalPage() {
  return (
    <PageFrame>
      <section className="page-hero section-pad compact-hero journal-hero">
        <Eyebrow>Notes from the journey</Eyebrow>
        <h1>The first entry<br /><em>in a long story.</em></h1>
        <p className="hero-intro">A public notebook for the questions, decisions, and working theories that shape Doyuni over time. It starts here, with one entry.</p>
      </section>
      <section className="section-pad journal-list-section">
        <div className="section-kicker"><span>01</span><span>Working notes</span><span className="kicker-note">Updated as ideas mature</span></div>
        <div className="journal-entries">
          {entries.map((entry) => (
            <article className="journal-entry featured-entry" id={entry.id} key={entry.id}>
              <div className="entry-meta"><span>{entry.type}</span><span>{entry.read}</span></div>
              <div className="entry-main">
                <h2>{entry.title}</h2>
                {entry.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
              <time>{entry.date}</time>
            </article>
          ))}
        </div>
      </section>
      <section className="subscribe-band section-pad"><div><Eyebrow>Keep the signal close</Eyebrow><h2>Occasional notes.<br /><em>No performance.</em></h2></div><a className="button button-primary" href="mailto:muse@doyuni.com?subject=Follow%20Doyuni%20notes">Ask to follow <span aria-hidden="true">↗</span></a></section>
    </PageFrame>
  );
}
