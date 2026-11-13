'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ideas, statusLabel, type IdeaStatus } from '../../data/ideas';
import { Eyebrow, PageFrame, StatusBadge, container, label } from '../../components/site-shell';

const filters: Array<IdeaStatus | 'all'> = ['all', 'exploring', 'validated', 'parked', 'dropped'];

export default function IdeasPage() {
  const [filter, setFilter] = useState<IdeaStatus | 'all'>('all');

  const visible = useMemo(() => {
    const sorted = [...ideas].sort((a, b) => b.date.localeCompare(a.date));
    return filter === 'all' ? sorted : sorted.filter((idea) => idea.status === filter);
  }, [filter]);

  return (
    <PageFrame>
      <section className={`${container} pt-[120px] pb-[80px] max-tablet:pt-[90px] max-tablet:pb-[60px]`}>
        <Eyebrow>All ideas</Eyebrow>
        <h1 className="m-0 text-ink font-medium tracking-[-0.1em] leading-[0.91] max-w-[840px] text-[clamp(3rem,6.5vw,5.5rem)] max-tablet:text-[clamp(2.8rem,12vw,4.5rem)]">
          The full log.
        </h1>
      </section>

      <section className={`${container} pb-[140px] max-tablet:pb-[95px]`}>
        <div className="flex items-center gap-[22px] border-t border-b border-line py-4 mb-[30px] flex-wrap" role="group" aria-label="Filter by status">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`${label} transition-colors duration-200 ${filter === f ? 'text-blue' : 'text-muted hover:text-ink'}`}
              aria-pressed={filter === f}
            >
              {f === 'all' ? 'All' : statusLabel[f]}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-muted">No ideas with this status yet.</p>
        ) : (
          <div className="flex flex-col">
            {visible.map((idea) => (
              <Link
                href={`/ideas/${idea.slug}/`}
                key={idea.slug}
                className="grid grid-cols-[.22fr_1.4fr_.4fr] items-start gap-[30px] py-[28px] border-b border-line first:border-t transition-colors duration-200 hover:bg-blue-soft max-tablet:grid-cols-1 max-tablet:gap-[10px] max-tablet:px-3"
              >
                <StatusBadge status={idea.status} />
                <div>
                  <h2 className="m-0 mb-[8px] text-[22px] leading-[1.1] tracking-[-0.05em] font-semibold">{idea.title}</h2>
                  <p className="m-0 max-w-[600px] text-muted">{idea.pitch}</p>
                  {idea.tags.length > 0 && (
                    <div className="flex gap-[10px] mt-[10px] flex-wrap">
                      {idea.tags.map((tag) => (
                        <span key={tag} className={`${label} text-faint`}>#{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <time className="justify-self-end max-tablet:justify-self-start text-faint font-mono text-[11px]">{idea.date}</time>
              </Link>
            ))}
          </div>
        )}
      </section>
    </PageFrame>
  );
}
