export interface ToolkitGroup {
  id: string;
  stage: string;
  title: string;
  description: string;
  items: string[];
  heroItems: string[];
  accent: string;
  color: string;
}

export const toolkitGroups: ToolkitGroup[] = [
  {
    id: "think",
    stage: "01",
    title: "Think & Research",
    description: "Breaking ambiguous problems into user needs, workflows, and measurable outcomes.",
    heroItems: ["Claude", "Obsidian", "Notion"],
    items: ["ChatGPT", "Perplexity", "NotebookLM", "Miro", "Workflow maps", "FigJam"],
    accent: "rgba(198, 145, 78, 0.18)",
    color: "#c46f21",
  },
  {
    id: "prototype",
    stage: "02",
    title: "Prototype & Design",
    description: "From idea to clickable or coded prototype fast so stakeholders can react to something real.",
    heroItems: ["Figma", "v0", "Cursor"],
    items: ["Lovable", "Replit", "Framer", "shadcn/ui", "Tailwind", "Claude Code"],
    accent: "rgba(138, 170, 245, 0.16)",
    color: "#416bc5",
  },
  {
    id: "automate",
    stage: "03",
    title: "Build & Automate",
    description: "Reusable agent workflows that automate synthesis, docs, test cases, and iteration loops.",
    heroItems: ["Claude Code", "n8n", "MCPs"],
    items: ["Subagents", "Make", "Zapier", "Supabase", "Vercel", "LangChain", "OpenAI Playground"],
    accent: "rgba(126, 194, 148, 0.16)",
    color: "#4d8650",
  },
  {
    id: "data",
    stage: "04",
    title: "Data & Knowledge",
    description: "Turning product data, graph relationships, and user signals into clear next decisions.",
    heroItems: ["Neo4j", "PostHog", "SQL"],
    items: ["Mixpanel", "GA4", "Amplitude", "Hotjar", "Loom", "Airtable"],
    accent: "rgba(151, 100, 200, 0.14)",
    color: "#7c4db5",
  },
  {
    id: "ship",
    stage: "05",
    title: "Ship & Deliver",
    description: "Turning product ideas into stories, specs, UAT plans, and launch-ready workflows.",
    heroItems: ["Linear", "Jira", "GitHub"],
    items: ["Confluence", "User stories", "Acceptance criteria", "UAT", "Release readiness", "Retros"],
    accent: "rgba(225, 165, 113, 0.16)",
    color: "#c46836",
  },
];
