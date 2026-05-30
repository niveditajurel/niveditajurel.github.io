export interface ContentItem {
  id: string;
  title: string;
  format: string;
  description: string;
  href?: string;
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
      "A place for essays and older writing on systems, user needs, product clarity, and experiment-driven building.",
  },
];
