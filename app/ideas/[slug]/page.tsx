import { notFound } from 'next/navigation';
import { ideas } from '../../../data/ideas';
import { ArrowLink, Eyebrow, PageFrame, StatusBadge, container, label } from '../../../components/site-shell';

export function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

export default async function IdeaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idea = ideas.find((item) => item.slug === slug);
  if (!idea) notFound();

  return (
    <PageFrame>
      <section className={`${container} pt-[120px] pb-[70px] max-tablet:pt-[90px] max-tablet:pb-[50px]`}>
        <Eyebrow>{idea.date}</Eyebrow>
        <div className="mb-[20px]"><StatusBadge status={idea.status} /></div>
        <h1 className="m-0 text-ink font-medium tracking-[-0.1em] leading-[0.97] max-w-[840px] text-[clamp(2.8rem,6vw,5rem)] max-tablet:text-[clamp(2.6rem,10vw,3.8rem)]">
          {idea.title}
        </h1>
        <p className="max-w-[600px] mt-[22px] text-muted text-lg leading-[1.6]">{idea.pitch}</p>
        {idea.tags.length > 0 && (
          <div className="flex gap-[10px] mt-[20px] flex-wrap">
            {idea.tags.map((tag) => (
              <span key={tag} className={`${label} text-faint`}>#{tag}</span>
            ))}
          </div>
        )}
      </section>

      <section className={`${container} pb-[80px] border-t border-line pt-[40px]`}>
        <p className="max-w-[640px] text-ink text-[19px] leading-[1.6]">{idea.summary}</p>
      </section>

      <section className={`${container} pb-[140px] max-tablet:pb-[95px]`}>
        <div className="flex flex-col gap-[48px]">
          {idea.sections.map((section) => (
            <div key={section.heading} className="grid grid-cols-[.3fr_1fr] gap-[40px] border-t border-line pt-[26px] max-tablet:grid-cols-1 max-tablet:gap-[10px]">
              <h2 className={`m-0 text-blue ${label}`}>{section.heading}</h2>
              <div className="max-w-[640px]">
                {section.body.map((paragraph, index) => (
                  <p key={index} className={`text-muted leading-[1.6] ${index === 0 ? 'm-0' : 'mt-[14px]'}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[60px] border-t border-line pt-[30px]">
          <ArrowLink href="/ideas/" tone="blue">Back to all ideas</ArrowLink>
        </div>
      </section>
    </PageFrame>
  );
}
