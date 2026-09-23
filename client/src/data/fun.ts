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
    href: "https://www.instagram.com/niv.in.tech/",
    imageSrc: "/instagram-cover-7.png",
    imageAlt: "Instagram reel cover about keeping up with AI, tech, and product as a product builder.",
  },
  {
    id: "instagram-learning-coordination",
    source: "Instagram",
    title: "Learning ≠ coordination",
    description:
      "A short take on why learning a tool and coordinating work are different skills.",
    href: "https://www.instagram.com/niv.in.tech/",
    imageSrc: "/video-learning-coordination-cover.png",
    imageAlt: "Nivedita outdoors in a reel titled Learning is not Coordination.",
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
    href: "https://substack.com/@nivdebugs",
  },
  {
    id: "instagram-graph-engineering",
    source: "Instagram",
    title: "Graph engineering, beyond the buzzword",
    description:
      "A visual note on graph engineering and what sits beneath the buzzword.",
    href: "https://www.instagram.com/niv.in.tech/",
    imageSrc: "/video-graph-engineering-cover.png",
    imageAlt: "Nivedita in a reel titled Graph Engineering: Not Another Twitter Buzzword.",
  },
  {
    id: "instagram-ai-physics",
    source: "Instagram",
    title: "AI that understands physics",
    description:
      "A short video exploring what it means for AI to reason about the physical world.",
    href: "https://www.instagram.com/niv.in.tech/",
    imageSrc: "/video-ai-physics-cover.png",
    imageAlt: "Nivedita in a reel titled AI that understands Physics.",
  },
];
