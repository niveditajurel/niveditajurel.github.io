export const SITE_URL = "https://niveditajurel.github.io";
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/og-cover-pixel-portrait.png`;

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  canonicalPath?: string;
  includeInSitemap?: boolean;
};

export const seoRoutes: SeoRoute[] = [
  {
    path: "/",
    title: "Nivedita — Product Manager + Builder",
    description:
      "Former software engineer turned product manager building AI-native workflows, product systems, and shipped experiences.",
  },
  {
    path: "/projects",
    title: "Product Work and Case Studies — Nivedita",
    description:
      "Selected product management case studies spanning enterprise operations, AI products, research, experimentation, and hands-on builds.",
  },
  {
    path: "/work",
    title: "Product Work and Case Studies — Nivedita",
    description:
      "Selected product management case studies spanning enterprise operations, AI products, research, experimentation, and hands-on builds.",
    canonicalPath: "/projects",
    includeInSitemap: false,
  },
  {
    path: "/journey",
    title: "Product Journey and Experience — Nivedita",
    description:
      "Nivedita's path from software engineering and startup communities to product management, AI products, and enterprise systems.",
  },
  {
    path: "/experience",
    title: "Product Journey and Experience — Nivedita",
    description:
      "Nivedita's path from software engineering and startup communities to product management, AI products, and enterprise systems.",
    canonicalPath: "/journey",
    includeInSitemap: false,
  },
  {
    path: "/fun",
    title: "Experiments, Writing, and Side Quests — Nivedita",
    description:
      "A playful collection of experiments, public writing, visual notes, and smaller builds by product manager and builder Nivedita.",
  },
  {
    path: "/content",
    title: "Product Writing and Notes — Nivedita",
    description:
      "Essays, product observations, frameworks, and public notes that show how Nivedita reasons about products and AI systems.",
  },
  {
    path: "/about",
    title: "About Nivedita — Product Manager + Builder",
    description:
      "Learn about Nivedita's product approach, engineering background, builder mindset, and interest in thoughtful systems.",
  },
  {
    path: "/contact",
    title: "Contact Nivedita — Product Manager + Builder",
    description:
      "Contact Nivedita about product management, AI product work, strategy, prototyping, and collaboration opportunities.",
  },
  {
    path: "/projects/anand-pag",
    title: "Enterprise Vendor Operations Case Study — Nivedita",
    description:
      "A product case study on turning complex vendor, service-order, document, and system-integration workflows into a scalable operations platform.",
  },
  {
    path: "/projects/nomad-ai",
    title: "Nomad AI Product Case Study — Nivedita",
    description:
      "An AI-powered valuation and business-sale product case study covering discovery, RAG architecture, monetization, and launch strategy.",
  },
  {
    path: "/projects/skingenius",
    title: "Skingenius AI Personalization Case Study — Nivedita",
    description:
      "A consumer AI product case study on adaptive skincare discovery, recommendation-led shopping, experimentation, and mobile expansion.",
  },
  {
    path: "/projects/uber-driver-navigation",
    title: "Uber Driver Navigation Product Case Study — Nivedita",
    description:
      "A product case study exploring safer driver navigation through field observations, interaction tradeoffs, an MVP, and an experiment plan.",
  },
  {
    path: "/projects/finwise",
    title: "AI Wealth Management Product Case Study — Nivedita",
    description:
      "A product case study for an AI wealth-management associate designed around research workflows, explainability, and advisor trust.",
  },
  {
    path: "/projects/learning-council",
    title: "Persistent Multi-Agent Workspace Case Study — Nivedita",
    description:
      "A product case study for a persistent multi-agent workspace that helps teams preserve context, coordinate work, and learn over time.",
  },
  {
    path: "/projects/shabhash",
    title: "Shabhash Recognition Product Case Study — Nivedita",
    description:
      "A product case study focused on making recognition more timely, meaningful, and useful within team workflows.",
  },
  {
    path: "/research/aisli",
    title: "AISLI Research Paper — Nivedita",
    description:
      "Research on an AI-supported learning interface, including the problem framing, study approach, findings, and published paper.",
  },
];

export function normalizeSeoPath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function getSeoRoute(pathname: string) {
  const normalizedPath = normalizeSeoPath(pathname);
  return seoRoutes.find((route) => route.path === normalizedPath) ?? seoRoutes[0];
}

export function getCanonicalUrl(route: SeoRoute) {
  const canonicalPath = route.canonicalPath ?? route.path;
  return canonicalPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${canonicalPath}/`;
}
