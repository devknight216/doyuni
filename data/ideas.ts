export type IdeaStatus = 'exploring' | 'validated' | 'parked' | 'dropped';

export type IdeaSection = {
  heading: string;
  body: string[];
};

export type Idea = {
  slug: string;
  title: string;
  pitch: string;
  status: IdeaStatus;
  tags: string[];
  date: string;
  summary: string;
  sections: IdeaSection[];
};

export const statusLabel: Record<IdeaStatus, string> = {
  exploring: 'Exploring',
  validated: 'Validated',
  parked: 'Parked',
  dropped: 'Dropped',
};

// Add a new idea by copying this object and pasting it into the array below.
// `sections` is open-ended — add, remove, or rename headings to match whatever
// an AI chat actually dug into for that idea (market size, competition, risks,
// business model, why now, next steps, etc.).
export const ideas: Idea[] = [
  {
    slug: 'example-idea',
    title: 'Example idea — replace me',
    pitch: 'One sentence describing what it is and who it is for.',
    status: 'exploring',
    tags: ['example'],
    date: '2026-11-13',
    summary:
      'A short paragraph (2-4 sentences) giving the gist of the idea for the list view, before anyone clicks in to read the full analysis.',
    sections: [
      {
        heading: 'Problem',
        body: ['What pain this addresses, and for whom.'],
      },
      {
        heading: 'Market',
        body: ['Rough size, growth, who else is already in it.'],
      },
      {
        heading: 'Why now',
        body: ['What changed recently that makes this timely.'],
      },
      {
        heading: 'Open questions',
        body: ['What still needs to be validated before this moves to "Validated".'],
      },
    ],
  },
];
