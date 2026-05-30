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
}

export const experiments: ExperimentItem[] = [
  {
    id: "uber-case-study",
    title: "Uber",
    company: "Uber",
    caseStudyTitle: "Dispatch without blocking navigation",
    href: "/projects/uber-driver-navigation",
    eyebrow: "Product case study",
    tools: ["Marketplace", "Operations"],
    backgroundWordmark: "Uber",
    cardTone: "uber",
  },
  {
    id: "ai-product-direction",
    title: "AI-native Product Bets",
    eyebrow: "Startup + consulting work",
    description:
      "Problems around MVP framing, trust, pricing, onboarding, analytics, and turning unclear AI product ideas into something teams could ship.",
    status: "Product case studies",
    tools: ["MVP framing", "Onboarding", "Pricing", "Analytics"],
  },
  {
    id: "personal-builds",
    title: "Personal Products + Experiments",
    eyebrow: "Self-initiated builds",
    description:
      "Products and AI-assisted tools I build to test workflows, support product decisions, and explore new interaction patterns on my own.",
    status: "Active builds",
    tools: ["Agents", "Prototypes", "Tooling", "Recommendations"],
  },
];
