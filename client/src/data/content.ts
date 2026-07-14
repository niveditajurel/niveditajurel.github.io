export interface ContentItem {
  id: string;
  title: string;
  format: string;
  description: string;
  href?: string;
  platformLinks?: {
    label: string;
    href: string;
  }[];
  featuredPieces?: {
    platform: string;
    title: string;
    href: string;
  }[];
}

export const contentItems: ContentItem[] = [
  {
    id: "instagram-notes",
    title: "Instagram Notes",
    format: "Short-form content",
    description:
      "Visual reflections on product thinking, ambiguity, workflows, and building with AI.",
    href: "https://www.instagram.com/niv_yaps/",
  },
  {
    id: "linkedin-writing",
    title: "LinkedIn Writing",
    format: "Professional essays",
    description:
      "Longer-form posts on PM career moves, product judgment, and what it takes to move work forward in uncertain spaces.",
    href: "https://www.linkedin.com/in/nivedita-niv/",
  },
  {
    id: "writing-archive",
    title: "Writing Archive",
    format: "Blog + notes",
    description:
      "Longer-form writing across Medium and Substack, including product breakdowns, startup notes, and newer essays collected on Substack.",
    platformLinks: [
      {
        label: "Medium",
        href: "https://medium.com/@nivedita9826",
      },
      {
        label: "Substack",
        href: "https://nivedita9826.substack.com/",
      },
    ],
    featuredPieces: [
      {
        platform: "Substack",
        title: "Every company needs a brain",
        href: "https://open.substack.com/pub/nivedita9826/p/every-company-needs-a-brain?r=1r314t&utm_campaign=post&utm_medium=web",
      },
      {
        platform: "Substack",
        title: "Are we just patterns learning patterns?",
        href: "https://open.substack.com/pub/nivedita9826/p/are-we-just-patterns-learning-patterns?r=1r314t&utm_campaign=post&utm_medium=web",
      },
    ],
  },
];
