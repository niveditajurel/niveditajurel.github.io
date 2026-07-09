import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  GitBranch,
  LibraryBig,
  ListChecks,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";

const snapshotFacts = [
  { label: "Type", value: "Self-initiated product build" },
  { label: "Codebase", value: "Built in the multiagentcontext project" },
  { label: "Product", value: "Persistent multi-agent workspace" },
  { label: "Focus", value: "Memory, critique, reusable judgment, and visible orchestration" },
];

const premisePoints = [
  "Most agent systems collaborate once, produce an output, and then forget the judgment that made the work better.",
  "Users keep repeating the same guidance: use the same positioning, avoid this tone, remember the last decision, and do not make that mistake again.",
  "Learning Council explores a different model: every project becomes a learning event for the AI team.",
];

const productProblem = [
  "Run-based multi-agent systems can coordinate inside one workflow but still lose the useful learning after the run ends.",
  "Chat history alone is not enough when users want persistent taste, domain caution, project decisions, and reusable critique standards.",
  "Teams need to see where quality came from: which agents reviewed the work, what memories were retrieved, and what changed between the first and second pass.",
];

const productPillars: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "Visible council work",
    body: "The product makes the orchestration legible: task intake, selected brains, agent timeline, retrieved memories, and final output all stay visible.",
    icon: MessagesSquare,
  },
  {
    title: "Structured memory",
    body: "It preserves more than chat history. The system stores taste rules, skill rules, project decisions, domain constraints, approved patterns, and rejected patterns.",
    icon: BrainCircuit,
  },
  {
    title: "Project-specific context",
    body: "Each project can carry its own positioning, artifact history, domain rules, and next-step suggestions so the council works with context instead of generic prompts.",
    icon: GitBranch,
  },
  {
    title: "Better second output",
    body: "The real value is not the first artifact alone. It is whether the next task starts smarter because the system remembered what the user and team actually care about.",
    icon: Sparkles,
  },
];

const currentBuildSurfaces = [
  {
    title: "Landing and demo story",
    body: "A clear product narrative that shows the core wedge: agents should not start from scratch on every task.",
  },
  {
    title: "Task builder",
    body: "A prompt intake flow that selects artifact type, memories, and council configuration before the run starts.",
  },
  {
    title: "Agent run workspace",
    body: "Visible run state, retrieved memories, selected brains, logs, and a live timeline so the system does not feel like a black box.",
  },
  {
    title: "Artifact comparison",
    body: "A before-versus-after view that compares baseline output with the memory-shaped council output.",
  },
  {
    title: "Memory center",
    body: "A place to inspect, edit, scope, activate, or remove memories by type rather than hiding them behind prompts.",
  },
  {
    title: "Brain library and marketplace preview",
    body: "A model for personal brains, project brains, prebuilt brains, and external expert brains without losing the primacy of user-owned context.",
  },
];

const memoryTypes = [
  "Taste rules",
  "Skill rules",
  "Project decisions",
  "Domain constraints",
  "Approved patterns",
  "Rejected patterns",
  "Artifacts and retrospectives",
  "Collaboration history",
];

const systemLayers = [
  {
    title: "Task + director layer",
    detail: "A director analyzes the task, detects needed capabilities, and forms the right council for that run.",
  },
  {
    title: "Agent runtime + rooms",
    detail: "Agents collaborate in visible rooms and pass messages through a shared workflow rather than operating as hidden one-shot tools.",
  },
  {
    title: "Memory + knowledge layer",
    detail: "Lessons are extracted into structured memory and linked so future runs can retrieve the right judgment automatically.",
  },
  {
    title: "Artifact + review layer",
    detail: "The system compares baseline and improved output so users can see whether memory and critique actually improved the work.",
  },
];

const judgmentCalls = [
  {
    title: "Memory has to be inspectable",
    body: "If the system remembers something important, the user should be able to see it, edit it, scope it, or turn it off.",
  },
  {
    title: "Orchestration should be visible",
    body: "A multi-agent product earns trust when users can see who contributed, what was retrieved, and why the output changed.",
  },
  {
    title: "Reusable judgment beats raw activity",
    body: "The product value is not that many agents spoke. It is that the next run gets smarter in a measurable, legible way.",
  },
];

const whatNext = [
  "Prove output improvement more rigorously across repeated tasks, not only in the demo story.",
  "Tighten artifact capture from the live backend so the workspace consistently records structured output.",
  "Stress-test memory governance, privacy, and permission boundaries before expanding toward team and marketplace use cases.",
  "Learn where users want automation versus explicit review in the memory extraction and feedback loop.",
];

const councilRunFlow = [
  "User starts a task",
  "Director forms the council",
  "Agents critique and revise",
  "Memory gets extracted",
  "Next task retrieves the learning",
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6a746b]">{eyebrow}</p>
      <h2 className="font-editorial text-[clamp(2rem,3vw,3.05rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#171918]">
        {title}
      </h2>
      <p className="text-base leading-7 text-[#4f5750]">{description}</p>
    </div>
  );
}

function FactTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-[#d8ddd7] bg-white/84 px-4 py-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6a746b]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[#222723]">{value}</p>
    </div>
  );
}

function FlowChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="rounded-[1rem] border border-[#dde2dc] bg-white px-3 py-3 text-[#2b332c]">
      <div className="flex items-center gap-2 text-sm font-medium">
        <Icon className="h-4 w-4 text-[#6a746b]" />
        <span>{label}</span>
      </div>
    </div>
  );
}

export default function LearningCouncilCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BackgroundComponents
      variant="concentric-squares"
      className="min-h-screen bg-background"
      contentClassName="relative"
    >
      <div className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8">
        <section className="mx-auto max-w-7xl border-b border-border/65 pb-10 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#6a746b]">
                <Link href="/work">
                  <span className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-[#171918]">
                    <ArrowLeft className="h-4 w-4" />
                    Back to work
                  </span>
                </Link>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Learning Council</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6a746b]">
                  Self-initiated build
                </p>
                <h1 className="font-editorial text-[clamp(2.9rem,4.7vw,5rem)] font-medium leading-[0.9] tracking-[-0.07em] text-[#171918]">
                  Learning Council: a persistent multi-agent workspace that learns from every project.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[#4f5750]">
                  Built in the <span className="font-medium text-[#171918]">multiagentcontext</span>{" "}
                  codebase, Learning Council explores how an AI team can create, critique, revise,
                  and then remember what it learned so the next task starts smarter.
                </p>
              </div>

              <div className="rounded-[1.9rem] border border-[#d7ddd6] bg-[#f5f7f3] px-5 py-5 shadow-[0_18px_44px_-38px_rgba(61,84,54,0.12)] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#6a746b]">
                  Why this page exists
                </p>
                <p className="mt-3 text-base leading-7 text-[#4f5750]">
                  This is a product-builder case study for a real self-initiated project. The goal is
                  to show the product idea, the system thinking, and the current build surfaces without
                  pretending it is already a fully validated company product.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { id: "context", label: "Context" },
                  { id: "surfaces", label: "Build" },
                  { id: "system", label: "System" },
                  { id: "judgment", label: "Judgment" },
                ].map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="rounded-full border border-border/70 bg-background/82 px-4 py-2 text-sm font-semibold text-[#171918] transition-colors duration-200 hover:border-[#6a746b] hover:text-[#39413a]"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="https://github.com/utkarshtandon99/multiagentcontext"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d7ddd6] bg-white/86 px-4 py-2 text-sm font-semibold text-[#171918] transition-colors duration-200 hover:border-[#6a746b] hover:text-[#39413a]"
                >
                  Open codebase
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-[#d6ddd0] bg-[#171917] shadow-[0_24px_70px_-42px_rgba(13,14,13,0.48)]">
                <div className="relative px-5 pb-5 pt-5 sm:px-6">
                  <div className="rounded-[1.55rem] border border-white/10 bg-[#1f2420] p-4 shadow-[0_16px_36px_-28px_rgba(0,0,0,0.45)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#b8c4b7]">
                          Product loop
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                          From task to memory to better next output.
                        </h3>
                      </div>
                      <div className="rounded-full bg-[#2d352f] p-3 text-[#dbe8d9]">
                        <Bot className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-[#151815] px-4 py-4">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <FlowChip icon={Waypoints} label="Task intake" />
                        <FlowChip icon={BrainCircuit} label="Council assembly" />
                        <FlowChip icon={MessagesSquare} label="Critique + revision" />
                        <FlowChip icon={LibraryBig} label="Memory extraction" />
                      </div>
                      <div className="mt-3 rounded-[1rem] border border-[#3a453d] bg-[#262e28] px-4 py-3 text-sm leading-6 text-[#e9efe8]">
                        Session 2 should feel materially smarter because Session 1 left behind usable
                        taste, skill, and project memory.
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <MiniPanel
                        title="Creates"
                        body="Landing pages, pricing pages, PRDs, strategy work, and other artifacts."
                      />
                      <MiniPanel
                        title="Remembers"
                        body="Taste rules, domain rules, project decisions, and rejected patterns."
                      />
                      <MiniPanel
                        title="Shows"
                        body="Agent timeline, retrieved memories, comparison view, and review logic."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {snapshotFacts.map((fact) => (
                  <FactTile key={fact.label} label={fact.label} value={fact.value} />
                ))}
              </div>
            </aside>
          </div>
        </section>

        <div className="mx-auto mt-10 max-w-7xl space-y-12 lg:space-y-16">
          <section id="context" className="grid gap-6 lg:grid-cols-2">
            <div className="paper-panel rounded-[2rem] px-5 py-5 sm:px-6">
              <SectionIntro
                eyebrow="Context"
                title="The core idea is simple: most agent systems collaborate once, then forget."
                description="Learning Council started from a product question: what if an AI team could keep the useful judgment from one project and reuse it in the next one without the user repeating everything again?"
              />
            </div>

            <div className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#6a746b]">
                Why this idea is interesting
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4f5750] sm:text-base">
                {premisePoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6a746b]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#6a746b]">
                Product problem
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4f5750] sm:text-base">
                {productProblem.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6a746b]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#d6ddd0] bg-[#f5f7f3] px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#6a746b]">
                One-line product framing
              </p>
              <p className="mt-4 font-editorial text-[clamp(2rem,3vw,3rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#171918]">
                A multi-agent workspace where every project teaches the AI team how to work better with you.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="Visual model"
              title="A quick visual of the product loop and the workspace it creates."
              description="The product is easier to understand when the user can see both the council run and the persistent memory model at a glance."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
              <div className="rounded-[2rem] border border-[#d6ddd0] bg-[#171917] px-5 py-5 text-white shadow-[0_24px_60px_-40px_rgba(13,14,13,0.48)] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#b8c4b7]">
                  Council run diagram
                </p>
                <div className="mt-5 space-y-3">
                  {councilRunFlow.map((step, index) => (
                    <div key={step}>
                      <div className="flex items-center gap-4 rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2d352f] text-sm font-semibold text-[#e8efe7]">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-6 text-[#edf2ec] sm:text-base">{step}</p>
                      </div>
                      {index < councilRunFlow.length - 1 ? (
                        <div className="ml-4 h-5 w-px bg-white/12" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 shadow-[0_18px_46px_-36px_rgba(40,44,39,0.12)] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#6a746b]">
                  Low-fi workspace wireframe
                </p>
                <div className="mt-5 rounded-[1.8rem] border border-[#d9e0da] bg-[#f7f9f6] p-4">
                  <div className="grid gap-4 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                    <div className="space-y-3">
                      <div className="rounded-[1rem] border border-[#d8dfd8] bg-white px-4 py-3">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#6a746b]">
                          Prompt
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#222723]">
                          Create a pricing page using previous positioning and finance-safe tone.
                        </p>
                      </div>
                      <div className="rounded-[1rem] border border-[#d8dfd8] bg-white px-4 py-3">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#6a746b]">
                          Retrieved memories
                        </p>
                        <div className="mt-2 space-y-2 text-sm text-[#4f5750]">
                          <div>Premium, direct positioning</div>
                          <div>No guaranteed outcomes</div>
                          <div>Reuse wealth desk metaphor</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-[1rem] border border-[#d8dfd8] bg-[#1f2420] px-4 py-3 text-white">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#b8c4b7]">
                          Active council
                        </p>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          <TinyBrain label="Director" />
                          <TinyBrain label="Taste critic" />
                          <TinyBrain label="Frontend brain" />
                          <TinyBrain label="Domain risk" />
                        </div>
                      </div>

                      <div className="rounded-[1rem] border border-[#d8dfd8] bg-white px-4 py-3">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#6a746b]">
                          Output compare
                        </p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-[0.9rem] border border-[#e0e5df] bg-[#f8faf7] px-3 py-3 text-sm text-[#4f5750]">
                            Baseline output
                          </div>
                          <div className="rounded-[0.9rem] border border-[#d7ddd6] bg-[#eef3ea] px-3 py-3 text-sm font-medium text-[#222723]">
                            Learned council output
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="pillars" className="space-y-6">
            <SectionIntro
              eyebrow="Product pillars"
              title="This is not just a chatbot surface. It is a collaboration and memory system."
              description="The current product framing is strongest when it stays focused on a few visible ideas: persistent memory, visible orchestration, project-specific context, and better follow-up outputs."
            />
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {productPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-[1.7rem] border border-[#d6ddd0] bg-white/84 px-5 py-5 shadow-[0_16px_42px_-34px_rgba(40,44,39,0.12)]"
                  >
                    <div className="inline-flex rounded-full bg-[#eef2eb] p-3 text-[#596458]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#171918]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#4f5750]">{pillar.body}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="surfaces" className="space-y-6">
            <SectionIntro
              eyebrow="Current build"
              title="The current product already shows a real surface area, not only an idea."
              description="The build in multiagentcontext already demonstrates the main workflow through a landing story, a workspace, memory controls, and comparison views."
            />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {currentBuildSurfaces.map((surface) => (
                <div
                  key={surface.title}
                  className="rounded-[1.65rem] border border-[#d6ddd0] bg-white/84 px-5 py-5 shadow-[0_14px_36px_-32px_rgba(40,44,39,0.12)]"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#171918]">
                    {surface.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4f5750]">{surface.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#d6ddd0] bg-[#171917] px-5 py-6 text-white shadow-[0_26px_70px_-46px_rgba(13,14,13,0.52)] sm:px-6">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b9c4b8]">
                  Memory model
                </p>
                <h2 className="font-editorial text-[clamp(2rem,3vw,3rem)] font-medium leading-[0.95] tracking-[-0.05em] text-white">
                  The product gets more compelling when memory is treated as a first-class UX surface.
                </h2>
                <p className="text-base leading-7 text-[#d6ddd4]">
                  The difference here is not only storing context. It is making memory types, scope,
                  and reuse visible enough that users understand what the system learned and why the
                  next run changed.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {memoryTypes.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-[#edf2ec]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="system" className="space-y-6">
            <SectionIntro
              eyebrow="System thinking"
              title="The product loop ties task intake, agent collaboration, memory extraction, and future retrieval together."
              description="That loop is what makes this more than a one-off orchestration demo. The design question is how to keep every step visible and controllable without overloading the user."
            />
            <div className="grid gap-4 xl:grid-cols-4">
              {systemLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="rounded-[1.7rem] border border-[#d6ddd0] bg-white/84 px-5 py-5 shadow-[0_16px_42px_-34px_rgba(40,44,39,0.12)]"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#171918]">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4f5750]">{layer.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="judgment" className="space-y-6">
            <SectionIntro
              eyebrow="PM judgment"
              title="The strongest framing here is reusable judgment, not agent spectacle."
              description="The product gets sharper when it emphasizes visible learning, explainable improvement, and user control instead of leaning on generic multi-agent hype."
            />
            <div className="grid gap-4 lg:grid-cols-3">
              {judgmentCalls.map((call) => (
                <div
                  key={call.title}
                  className="rounded-[1.7rem] border border-[#d6ddd0] bg-white/84 px-5 py-5 shadow-[0_16px_42px_-34px_rgba(40,44,39,0.12)]"
                >
                  <div className="inline-flex rounded-full bg-[#eef2eb] p-3 text-[#596458]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#171918]">
                    {call.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4f5750]">{call.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#6a746b]">
                What I would test next
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4f5750] sm:text-base">
                {whatNext.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6a746b]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#d6ddd0] bg-[#f5f7f3] px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#6a746b]">
                Why it belongs in the portfolio
              </p>
              <p className="mt-4 text-base leading-7 text-[#4f5750]">
                This project is a strong proof surface because it shows product strategy, system
                design, AI-native workflow thinking, and a real interaction model all in one build.
                It is not just an opinion about multi-agent software. It is a product point of view
                turned into a working surface.
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#d6ddd0] bg-[#171917] px-5 py-6 text-white shadow-[0_26px_70px_-46px_rgba(13,14,13,0.52)] sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b9c4b8]">
                  Final takeaway
                </p>
                <h2 className="font-editorial text-[clamp(2.2rem,3.8vw,4.15rem)] font-medium leading-[0.92] tracking-[-0.06em] text-white">
                  The interesting question is not whether many agents can run. It is whether the system can remember enough to improve the next decision.
                </h2>
                <p className="max-w-4xl text-base leading-7 text-[#d6ddd4]">
                  Learning Council is my exploration of that question. It treats memory, critique,
                  and reusable judgment as product surfaces, not hidden implementation details.
                </p>
              </div>

              <Link href="/work">
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/12">
                  Back to work
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </BackgroundComponents>
  );
}

function MiniPanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1rem] border border-white/10 bg-[#171b18] px-4 py-3">
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#b8c4b7]">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#edf2ec]">{body}</p>
    </div>
  );
}

function TinyBrain({ label }: { label: string }) {
  return (
    <div className="rounded-[0.9rem] border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#edf2ec]">
      {label}
    </div>
  );
}
