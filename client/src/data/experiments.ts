export interface ExperimentItem {
  id: string;
  title: string;
  company?: string;
  caseStudyTitle?: string;
  href?: string;
  eyebrow: string;
  description?: string;
  status?: string;
  tools?: string[];
  backgroundWordmark?: string;
  cardTone?: "default" | "uber";
  thumbnail?: {
    src: string;
    alt: string;
    videoSrc?: string;
    panelClassName?: string;
    imageClassName?: string;
  };
}

export const experiments: ExperimentItem[] = [
  {
    id: "uber-case-study",
    title: "Uber",
    company: "Uber",
    caseStudyTitle: "Dispatch without blocking navigation",
    href: "/projects/uber-driver-navigation",
    eyebrow: "Product case study",
    description:
      "Driver-side case study on making ride-request timing safer without hurting dispatch flow.",
    tools: ["Marketplace", "Operations"],
    backgroundWordmark: "Uber",
    cardTone: "uber",
    thumbnail: {
      src: "/case-study-thumbnails/uber-dispatch-hero.png",
      alt: "Uber dispatch case study hero showing a driver navigation screen competing with an incoming request overlay.",
      videoSrc: "/thumbnail-previews/uber-dispatch-preview.mp4",
      panelClassName: "bg-[#120f0d]",
      imageClassName: "object-cover object-[58%_38%] scale-[1.02]",
    },
  },
  {
    id: "learning-council",
    title: "Learning Council",
    company: "Self-initiated",
    caseStudyTitle: "Persistent multi-agent workspace",
    href: "/projects/learning-council",
    eyebrow: "Self-initiated build",
    description:
      "Persistent multi-agent workspace built around visible critique, reusable memory, and smarter follow-on output.",
    tools: ["Agents", "Memory"],
    backgroundWordmark: "COUNCIL",
    thumbnail: {
      src: "/case-study-thumbnails/learning-council-panel.png",
      alt: "Learning Council hero showing a multi-agent product loop from task intake to memory extraction.",
      videoSrc: "/thumbnail-previews/learning-council-preview.mp4",
      panelClassName: "bg-[#e8eee6]",
      imageClassName: "object-cover object-center",
    },
  },
  {
    id: "finwise",
    title: "Finwise",
    company: "Self-initiated",
    caseStudyTitle: "AI wealth-management associate",
    href: "/projects/finwise",
    eyebrow: "Self-initiated build",
    description:
      "AI wealth associate concept focused on trust, next-step planning, and explainable financial guidance.",
    tools: ["Wealth", "Planning"],
    backgroundWordmark: "FINWISE",
    thumbnail: {
      src: "/case-study-thumbnails/finwise-panel.png",
      alt: "Finwise hero showing an AI wealth associate concept with planning logic, goals, and action planning.",
      videoSrc: "/thumbnail-previews/finwise-preview.mp4",
      panelClassName: "bg-[#eef3e8]",
      imageClassName: "object-cover object-center",
    },
  },
];
