export interface ToolkitGroup {
  id: string;
  stage: string;
  title: string;
  description: string;
  items: string[];
  accent: string;
}

export const toolkitGroups: ToolkitGroup[] = [
  {
    id: "think",
    stage: "Think",
    title: "Thinking + Product Strategy",
    description:
      "I break ambiguous product problems into user needs, workflows, edge cases, and measurable outcomes.",
    items: ["ChatGPT", "Claude", "Perplexity", "Notion", "Workflow maps"],
    accent: "rgba(198, 145, 78, 0.18)",
  },
  {
    id: "prototype",
    stage: "Prototype",
    title: "Prototyping + Design",
    description:
      "I move from idea to clickable or coded prototype quickly so stakeholders can react to something real.",
    items: ["Figma", "v0", "Lovable", "Replit", "Cursor"],
    accent: "rgba(138, 170, 245, 0.16)",
  },
  {
    id: "automate",
    stage: "Automate",
    title: "Agentic Building + Automation",
    description:
      "I create reusable agent workflows to automate synthesis, documentation, test cases, and iteration loops.",
    items: ["Codex", "Claude Code", "MCPs", "Subagents", "n8n"],
    accent: "rgba(126, 194, 148, 0.16)",
  },
  {
    id: "ship",
    stage: "Ship",
    title: "Product Delivery + Execution",
    description:
      "I turn product ideas into user stories, specs, acceptance criteria, UAT plans, and launch-ready workflows.",
    items: ["Jira", "User stories", "Acceptance criteria", "UAT", "Release readiness"],
    accent: "rgba(225, 165, 113, 0.16)",
  },
  {
    id: "learn",
    stage: "Learn",
    title: "Data + Feedback + Iteration",
    description:
      "I use product data, user feedback, and operational signals to decide what is working and what to improve next.",
    items: ["Mixpanel", "GA4", "SQL", "Hotjar", "User feedback"],
    accent: "rgba(151, 163, 185, 0.16)",
  },
];
