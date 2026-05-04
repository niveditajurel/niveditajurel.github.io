export interface ProjectMetrics {
  users?: string;
  growth?: string;
  timeline?: string;
  impact?: string;
}

export interface ProjectTheme {
  surface: string;
  imageSurface: string;
  badge: string;
  accent: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  eyebrow: string;
  period: string;
  teaser: string;
  recruiterSignal: string;
  ctaLabel: string;
  imageMode?: "contain" | "cover" | "none";
  theme: ProjectTheme;
  metrics?: ProjectMetrics;
  challenge?: string;
  solution?: string;
  process?: string[];
  results?: string[];
  role?: string;
  href?: string;
}

export const projects: ProjectData[] = [
  {
    id: "anand-pag",
    title: "Anand PAG / Cintas FNA",
    subtitle: "Integration-heavy cloud workflow platform for vendor operations",
    description:
      "Led product delivery for a cloud workflow platform that replaced a legacy vendor-operations system and digitized service-order execution across internal teams and external vendors.",
    image: "",
    tags: ["Enterprise", "Workflow Platform", "Operations", "Product Delivery"],
    eyebrow: "Enterprise workflow platform",
    period: "2025",
    teaser:
      "Led delivery for a technically complex workflow platform that replaced a legacy operations system and created near real-time coordination, stronger document readiness, and more reliable high-volume processing.",
    recruiterSignal:
      "Strong signal for builder-style PM ownership in integration-heavy enterprise systems where workflow clarity, reliability, and launch readiness matter.",
    ctaLabel: "Open case study",
    imageMode: "none",
    theme: {
      surface: "from-[#f4eee1] via-[#fbf8f1] to-[#efe6d8]",
      imageSurface: "bg-[#f6efe4]",
      badge: "bg-[#fff8ee]/80",
      accent: "bg-[#d8c0a0]",
    },
    metrics: {
      users: "200+ internal users + 500 vendors",
      growth: "<5 min cross-system sync",
      timeline: ">200 orders bundled in 2-4 min",
      impact: "95% -> 100% job success",
    },
    challenge:
      "Legacy tooling and spreadsheet-heavy workarounds created fragmented execution, slow coordination, inconsistent documentation, and poor visibility into vendor progress, which delayed invoice readiness and increased rework.",
    solution:
      "Delivered a secure cloud workflow platform with explicit workflow states, asynchronous background processing, structured evidence classification, and tighter UAT readiness so internal teams and vendors could operate with clearer ownership and faster recovery paths.",
    process: [
      "Built rapid workflow prototypes in Visily directly after discovery sessions",
      "Created a lightweight coded prototype in Cursor to accelerate alignment",
      "Defined explicit state transitions, acceptance criteria, and defect severity rules",
      "Led QA, UAT walkthroughs, and launch-readiness gating with ClickUp and Cloud ALM",
    ],
    results: [
      "Cross-system sync delivered in under 5 minutes",
      "Background job success improved from 95% to 100%",
      "High-volume bundling supported 200+ service orders in 2-4 minutes",
      "Positioned the workflow for a targeted 30% reduction in invoice delays",
    ],
    role:
      "Product Manager with strong technical fluency, leading product delivery across workflow logic, integrations, QA/UAT readiness, and operational launch quality.",
    href: "/projects/anand-pag",
  },
  {
    id: "nomad-ai",
    title: "Nomad AI",
    subtitle: "AI-powered SMB Valuation & Exit-Planning Platform",
    description:
      "Consultant Product Manager for an AI valuation platform, shaping pricing, analytics, and MVP decisions for a founder-led launch.",
    image: "/nomad-ai-t-w.jpeg",
    tags: ["AI", "FinTech", "SaaS", "Product Management"],
    eyebrow: "AI fintech",
    period: "May 2024 - Jul 2024",
    teaser:
      "Built the pricing strategy, analytics foundation, and go-to-market structure for an AI-native valuation product entering a high-stakes, trust-sensitive market.",
    recruiterSignal:
      "A good read on commercial product judgment: balancing user trust, monetization, analytics, and launch sequencing with a lean team.",
    ctaLabel: "Open case study",
    imageMode: "contain",
    theme: {
      surface: "from-[#e5ecf8] via-[#f1f6fc] to-[#fbfdff]",
      imageSurface: "bg-[#101721]",
      badge: "bg-white/78",
      accent: "bg-[#9fb9e1]",
    },
    metrics: {
      users: "608 users",
      growth: "+865% growth",
      timeline: "4-month sprint",
      impact: "+42% conversion lift projected",
    },
    challenge:
      "Baby-boomer owners plan to exit roughly $10T worth of small businesses, but affordable digital valuation tools are scarce. Nomad AI set out to make exit planning more accessible with a RAG-powered valuation product.",
    solution:
      "Defined pricing, analytics, and MVP structure for launch. Built the measurement framework, evaluated monetization options, and supported ETL automation for more reliable valuation workflows.",
    process: [
      "Interviewed 8 business-broker and advisor personas",
      "Benchmarked 6 competitors on pricing, packaging, and product positioning",
      "Authored a pricing PRD with 4 monetization models",
      "Built an ROI model with a 13:1 benefit-to-cost ratio",
      "Defined AARRR, Lean Analytics, and OMTM success metrics",
      "Integrated Mage AI to automate ETL from accounting systems",
      "Created a Jira roadmap and mapped 2-week sprint priorities",
      "Produced wireframes and ran feedback reviews with the team",
    ],
    results: [
      "608 users and +865% user growth in 4 months",
      "+42% projected free-to-paid conversion lift",
      "+28% projected MRR uplift from pricing strategy changes",
      "MVP launched with pricing and analytics experiments in motion",
    ],
    role:
      "Consultant Product Manager working with a 4-person founder and engineering team across pricing, analytics, and launch strategy.",
    href: "/projects/nomad-ai",
  },
  {
    id: "skingenius",
    title: "Skingenius",
    subtitle: "AI-Powered Personalized Skincare Platform",
    description:
      "Product management work on an AI-driven skincare experience focused on onboarding clarity, recommendation quality, and stronger first-session engagement.",
    image: "/teasers/skingenius.jpg",
    tags: ["AI", "E-commerce", "Personalization", "Product Management"],
    eyebrow: "AI consumer product",
    period: "Aug 2024 - Dec 2024",
    teaser:
      "Refined onboarding and recommendation flows so a beauty-tech product felt easier to trust, easier to finish, and more useful from the very first session.",
    recruiterSignal:
      "Shows B2C product instincts: making personalization feel clear, reducing drop-off in onboarding, and translating AI value into user-facing UX wins.",
    ctaLabel: "Open case study",
    imageMode: "cover",
    theme: {
      surface: "from-[#f7ddd2] via-[#fbefea] to-[#fff8f4]",
      imageSurface: "bg-[#f4d1c4]",
      badge: "bg-white/72",
      accent: "bg-[#d98c73]",
    },
    metrics: {
      users: "+30% engagement",
      growth: "+25% quiz completion",
      timeline: "Aug-Dec 2024",
      impact: "33% faster release cycles",
    },
    challenge:
      "Users struggled to find the right skincare products and routines because onboarding felt heavy, recommendations felt generic, and there was too much uncertainty in the first-run experience.",
    solution:
      "Improved onboarding structure, sharpened the recommendation experience, and ran the product with clearer agile delivery so the team could iterate faster around user trust and activation.",
    process: [
      "Reviewed the onboarding and quiz journey to identify drop-off points",
      "Refined AI-driven suggestion logic and recommendation framing",
      "Created and managed agile roadmaps in Jira for faster iteration",
      "Worked across UX, product, and delivery to improve release rhythm",
      "Tracked engagement and completion signals to guide follow-up decisions",
    ],
    results: [
      "Boosted engagement by 30%",
      "Increased quiz completion by 25%",
      "Improved release efficiency by 33%",
      "Strengthened the retention story through clearer first-session value",
    ],
    role:
      "Product Manager leading a cross-functional team across AI recommendations, onboarding, and delivery planning.",
    href: "/projects/skingenius",
  },
];
