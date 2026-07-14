export interface FunMediaItem {
  id: string;
  source: "Instagram" | "LinkedIn" | "Medium" | "Substack";
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const funMediaItems: FunMediaItem[] = [
  {
    id: "instagram-ai-learning-stack",
    source: "Instagram",
    title: "How I keep up with AI, tech, and product",
    description:
      "A reel on the tools, notes, and learning stack I keep returning to as a product builder.",
    href: "https://www.instagram.com/niv_yaps/",
    imageSrc: "/instagram-cover-7.png",
    imageAlt: "Instagram reel cover about keeping up with AI, tech, and product as a product builder.",
  },
  {
    id: "linkedin-public-trail",
    source: "LinkedIn",
    title: "Career moves, startup stories, and public proof",
    description:
      "LinkedIn is where the more explicit PM career narrative, startup reflections, and public milestones live.",
    href: "https://www.linkedin.com/in/nivedita-niv/",
  },
  {
    id: "substack-home",
    source: "Substack",
    title: "Nivedita's Substack",
    description:
      "A newer home for longer notes, recurring ideas, and the threads that are still evolving.",
    href: "https://nivedita9826.substack.com/",
  },
  {
    id: "instagram-software-fundamentals",
    source: "Instagram",
    title: "Software fundamentals matter more with AI",
    description:
      "A reel on why clearer thinking and stronger fundamentals become more important, not less, in AI-heavy product work.",
    href: "https://www.instagram.com/niv_yaps/",
    imageSrc: "/instagram-cover-8.png",
    imageAlt: "Instagram reel cover about software fundamentals mattering more with AI.",
  },
  {
    id: "instagram-weak-prompt",
    source: "Instagram",
    title: "Why 'make this look better' is a weak AI prompt",
    description:
      "A short take on prompt quality, design critique, and how vague requests produce weak outcomes.",
    href: "https://www.instagram.com/niv_yaps/",
    imageSrc: "/instagram-cover-2.png",
    imageAlt: "Instagram reel cover about the prompt make this look better being a weak AI prompt.",
  },
  {
    id: "instagram-builder-notes",
    source: "Instagram",
    title: "Builder notes from Tony Fadell",
    description:
      "A visual note on taste, product judgment, and why you cannot outsource the hard part of building.",
    href: "https://www.instagram.com/niv_yaps/",
    imageSrc: "/instagram-cover-3.png",
    imageAlt: "Instagram reel cover about builder notes from Tony Fadell.",
  },
];
