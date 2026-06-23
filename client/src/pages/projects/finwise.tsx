import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Landmark,
  ListChecks,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Waypoints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";
import { siteConfig } from "@/data/site";

const snapshotFacts = [
  { label: "Type", value: "Self-initiated product build" },
  { label: "Product", value: "AI-assisted wealth-management associate" },
  { label: "Stage", value: "Concept + MVP framing" },
  { label: "Focus", value: "Trust, decision clarity, and explainable next actions" },
];

const premisePoints = [
  "Many people can see their money, but they still do not know what to do next.",
  "Traditional wealth guidance is often too high-touch, too expensive, or too delayed for everyday decisions.",
  "Most finance tools optimize dashboards and tracking, not confidence, tradeoffs, or follow-through.",
];

const problemPoints = [
  "Financial decisions are fragmented across savings, investing, debt, retirement, and short-term tradeoffs.",
  "Users get generic advice, but not enough context on why a recommendation fits their situation.",
  "Trust breaks quickly when a product sounds authoritative without showing reasoning or guardrails.",
  "Even motivated users struggle to convert goals into a clear action plan they can actually maintain.",
];

const productPillars: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "Financial snapshot",
    body: "Bring goals, balances, obligations, and recurring commitments into one place so the product starts from real context instead of generic assumptions.",
    icon: Landmark,
  },
  {
    title: "Associate-style guidance",
    body: "Position the product like a wealth-management associate that explains options, surfaces tradeoffs, and recommends the next best move in plain language.",
    icon: Bot,
  },
  {
    title: "Scenario planning",
    body: "Let users compare choices such as saving faster, paying debt, or adjusting contributions before acting, rather than forcing one fixed recommendation.",
    icon: Scale,
  },
  {
    title: "Action queue",
    body: "Translate strategy into follow-through with a concrete list of next steps, reminders, and check-ins so the product helps users act, not only observe.",
    icon: ListChecks,
  },
];

const systemLayers = [
  {
    title: "User context layer",
    detail: "Profile, financial goals, current balances, obligations, and planning priorities.",
  },
  {
    title: "Planning logic layer",
    detail: "Rules and recommendation logic that turn raw context into ranked financial actions and tradeoffs.",
  },
  {
    title: "Trust and explanation layer",
    detail: "Reasoning, assumptions, guardrails, and confidence language so the product never feels like a black box.",
  },
  {
    title: "Follow-through layer",
    detail: "Action plans, reminders, plan updates, and progress review so guidance does not end at the recommendation.",
  },
];

const judgmentCalls = [
  {
    title: "Clarity before automation",
    body: "The first version should make decisions easier to understand before it tries to become fully autonomous or deeply personalized.",
  },
  {
    title: "Explainability is core UX",
    body: "A financial product should not only say what to do. It should show why that suggestion is being made, what assumptions it depends on, and what tradeoff it creates.",
  },
  {
    title: "Trust beats feature count",
    body: "I would rather ship a narrower product that gives legible recommendations than a broader platform that tries to do everything and feels hard to trust.",
  },
];

const whatImTesting = [
  "Whether users respond better to an associate framing than to a generic financial dashboard.",
  "Which recommendation outputs feel most useful: action list, scenario comparison, or plan summary.",
  "How much automation users want before they prefer a human review or confirmation step.",
  "What kinds of disclosures and explanation patterns make the product feel credible without becoming overwhelming.",
];

const builderSignals = [
  "This is the kind of build I use to pressure-test product judgment: what is the user decision problem, what is the trust risk, and what is the smallest version worth building first?",
  "It also reflects how I think as a builder: product direction, interaction model, system logic, and MVP scope should all get shaped together.",
];

const conceptFlow = [
  "Bring account context, goals, debt, and recurring commitments into one planning surface.",
  "Rank the next best move based on tradeoffs, not generic personal-finance advice.",
  "Explain the recommendation clearly enough that the user knows why it fits.",
  "Turn the plan into a short action queue the user can actually follow through on.",
];

const jumpLinks = [
  { id: "context", label: "Context" },
  { id: "pillars", label: "Pillars" },
  { id: "system", label: "System" },
  { id: "judgment", label: "Judgment" },
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
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#58704d]">{eyebrow}</p>
      <h2 className="font-editorial text-[clamp(2rem,3vw,3.05rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#1d241b]">
        {title}
      </h2>
      <p className="text-base leading-7 text-[#4c5a4a]">{description}</p>
    </div>
  );
}

function FactTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-[#d6ddd0] bg-white/82 px-4 py-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#58704d]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[#2b3228]">{value}</p>
    </div>
  );
}

export default function FinwiseCaseStudy() {
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
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#58704d]">
                <Link href="/work">
                  <span className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-[#1d241b]">
                    <ArrowLeft className="h-4 w-4" />
                    Back to work
                  </span>
                </Link>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Finwise</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#58704d]">
                  Self-initiated build
                </p>
                <h1 className="font-editorial text-[clamp(2.9rem,4.7vw,5rem)] font-medium leading-[0.9] tracking-[-0.07em] text-[#1d241b]">
                  Finwise: an AI wealth-management associate for clearer financial decisions.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[#4c5a4a]">
                  Finwise is a future financial product I am shaping as a self-initiated build. The
                  idea is to help people move from scattered money information to clear next actions,
                  with a product that feels more like a thoughtful associate than a generic dashboard.
                </p>
              </div>

              <div className="rounded-[1.9rem] border border-[#d8dfd2] bg-[#f7fbf3] px-5 py-5 shadow-[0_18px_44px_-38px_rgba(61,84,54,0.12)] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#58704d]">
                  Why this page exists
                </p>
                <p className="mt-3 text-base leading-7 text-[#4c5a4a]">
                  This is not a launched case study with outcome metrics yet. It is a product-builder
                  page: the problem framing, the trust model, the MVP scope, and the system thinking I
                  would use to turn the idea into a real product.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {jumpLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="rounded-full border border-border/70 bg-background/82 px-4 py-2 text-sm font-semibold text-[#1d241b] transition-colors duration-200 hover:border-[#58704d] hover:text-[#3c4d35]"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="https://github.com/niveditajurel/future-financial-path"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d6ddd0] bg-white/86 px-4 py-2 text-sm font-semibold text-[#1d241b] transition-colors duration-200 hover:border-[#58704d] hover:text-[#3c4d35]"
                >
                  Open GitHub repo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-[#d6ddd0] bg-[#223027] shadow-[0_24px_70px_-42px_rgba(29,36,27,0.42)]">
                <div className="relative px-5 pb-5 pt-5 sm:px-6">
                  <div className="rounded-[1.55rem] border border-white/12 bg-[#f7fbf3] p-4 shadow-[0_16px_36px_-28px_rgba(0,0,0,0.35)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#58704d]">
                          Finwise associate
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[#1d241b]">
                          Your next best money move, with reasoning.
                        </h3>
                      </div>
                      <div className="rounded-full bg-[#e1ebd8] p-3 text-[#58704d]">
                        <Bot className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.2rem] border border-[#d9e1d3] bg-white px-4 py-3">
                        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#58704d]">
                          Goal
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#2b3228]">
                          Build a stable plan across savings, debt, retirement, and near-term tradeoffs.
                        </p>
                      </div>
                      <div className="rounded-[1.2rem] border border-[#d9e1d3] bg-white px-4 py-3">
                        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#58704d]">
                          Output
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#2b3228]">
                          Action queue, scenario comparison, and explanation of why each recommendation fits.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1.2rem] border border-[#d9e1d3] bg-white px-4 py-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#58704d]">
                          Product frame
                        </p>
                        <p className="text-xs font-medium text-[#6d7b68]">Conceptual MVP</p>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        <FlowChip icon={Target} label="Goals" />
                        <FlowChip icon={BrainCircuit} label="Planning logic" />
                        <FlowChip icon={ListChecks} label="Action plan" />
                      </div>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <FlowChip icon={Scale} label="Tradeoff view" />
                        <FlowChip icon={ShieldCheck} label="Trust + guardrails" />
                      </div>
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
                title="The product idea starts with a decision problem, not a dashboard problem."
                description="Finwise is based on a simple belief: people do not just need financial visibility. They need help turning context into an understandable next step."
              />
            </div>

            <div className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#58704d]">
                Why this idea is interesting
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4c5a4a] sm:text-base">
                {premisePoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58704d]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#58704d]">
                Product problem
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4c5a4a] sm:text-base">
                {problemPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58704d]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#d6ddd0] bg-[#f7fbf3] px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#58704d]">
                Builder signal
              </p>
              <div className="mt-4 space-y-4">
                {builderSignals.map((item) => (
                  <p key={item} className="text-base leading-7 text-[#4c5a4a]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="Concept visual"
              title="A quick visual read of what Finwise would actually help a user do."
              description="Instead of a generic finance dashboard, the product should help a user understand their position, compare choices, and leave with one clear next move."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
              <div className="rounded-[2rem] border border-[#d6ddd0] bg-[#223027] px-5 py-5 text-white shadow-[0_24px_60px_-40px_rgba(29,36,27,0.42)] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#dbe7d8]">
                  Low-fi product wireframe
                </p>
                <div className="mt-5 mx-auto max-w-[22rem] rounded-[2.1rem] border border-white/12 bg-[#101712] p-3">
                  <div className="rounded-[1.7rem] border border-white/12 bg-[#f7fbf3] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#58704d]">
                          Finwise associate
                        </p>
                        <h3 className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[#1d241b]">
                          You can invest more, but pay debt first this month.
                        </h3>
                      </div>
                      <div className="rounded-full bg-[#e5eedc] p-3 text-[#58704d]">
                        <Bot className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1.1rem] border border-[#d9e1d3] bg-white px-4 py-3">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#58704d]">
                        Why this is first
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#2b3228]">
                        Interest drag is higher than the gain from increasing investment contributions right now.
                      </p>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1rem] border border-[#d9e1d3] bg-white px-4 py-3">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#58704d]">
                          Option A
                        </p>
                        <p className="mt-2 text-sm font-medium text-[#1d241b]">Pay debt faster</p>
                        <p className="mt-1 text-sm text-[#4c5a4a]">Short-term priority</p>
                      </div>
                      <div className="rounded-[1rem] border border-[#d9e1d3] bg-[#f1f6eb] px-4 py-3">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#58704d]">
                          Option B
                        </p>
                        <p className="mt-2 text-sm font-medium text-[#1d241b]">Increase investment</p>
                        <p className="mt-1 text-sm text-[#4c5a4a]">Lower near-term impact</p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-[1.1rem] border border-[#d9e1d3] bg-white px-4 py-3">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#58704d]">
                        Next actions
                      </p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-[#2b3228]">
                          <span className="h-2 w-2 rounded-full bg-[#58704d]" />
                          Shift $250 toward debt repayment
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#2b3228]">
                          <span className="h-2 w-2 rounded-full bg-[#58704d]" />
                          Recheck contribution mix next month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 sm:px-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#58704d]">
                    Product flow
                  </p>
                  <div className="mt-4 grid gap-3">
                    {conceptFlow.map((step, index) => (
                      <div
                        key={step}
                        className="flex gap-4 rounded-[1.2rem] border border-[#d9e1d3] bg-[#fbfdf8] px-4 py-4"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7efdf] text-sm font-semibold text-[#58704d]">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-6 text-[#4c5a4a] sm:text-base">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#d6ddd0] bg-[#f7fbf3] px-5 py-5 sm:px-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#58704d]">
                    What makes it different
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#4c5a4a]">
                    The visual center of gravity is the decision and the explanation, not charts for their own sake.
                    That is the key difference between a planning associate and a passive dashboard.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="pillars" className="space-y-6">
            <SectionIntro
              eyebrow="Product Pillars"
              title="The MVP should feel like guided decision support, not just financial reporting."
              description="If I built the first usable version, these are the pillars I would prioritize before layering in broader personalization or automation."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {productPillars.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 shadow-[0_18px_50px_-40px_rgba(61,84,54,0.14)] sm:px-6"
                  >
                    <div className="inline-flex rounded-full bg-[#e7efdf] p-3 text-[#58704d]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#1d241b]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#4c5a4a] sm:text-base">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="system" className="space-y-6">
            <SectionIntro
              eyebrow="How It Is Built"
              title="The interesting part is how advice, logic, and trust fit together."
              description="For a product like this, the build is not only interface design. It is the system that connects user context, planning logic, explainability, and follow-through."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {systemLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="rounded-[2rem] border border-[#d6ddd0] bg-[#f7fbf3] px-5 py-5 sm:px-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-white p-2 text-[#58704d]">
                      <Waypoints className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-[1.3rem] font-semibold tracking-[-0.04em] text-[#1d241b]">
                        {layer.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#4c5a4a] sm:text-base">{layer.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="judgment" className="space-y-6">
            <SectionIntro
              eyebrow="PM Judgment"
              title="The critical choices are about trust, scope, and what not to automate too early."
              description="A finance product can feel helpful very quickly or untrustworthy very quickly. The product judgment here is mostly about that line."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {judgmentCalls.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 sm:px-6"
                >
                  <h3 className="text-[1.3rem] font-semibold tracking-[-0.04em] text-[#1d241b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4c5a4a] sm:text-base">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d6ddd0] bg-white/82 px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#58704d]" />
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-[#1d241b]">
                  What I would test first
                </h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4c5a4a] sm:text-base">
                {whatImTesting.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58704d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#d6ddd0] bg-[#f7fbf3] px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#58704d]" />
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-[#1d241b]">
                  Why it belongs in the portfolio
                </h3>
              </div>
              <p className="mt-4 text-base leading-7 text-[#4c5a4a]">
                This page shows how I think when there is no company brief to inherit. I still start
                with the user problem, the trust challenge, the smallest meaningful MVP, and the system
                needed to make the product behave coherently.
              </p>
              <p className="mt-4 text-base leading-7 text-[#4c5a4a]">
                That is useful signal for recruiters and product leaders because it shows product
                judgment before there is a big team, a polished interface, or post-launch data.
              </p>
            </div>
          </section>

          <section className="rounded-[2.2rem] border border-[#d6ddd0] bg-white/82 px-5 py-6 sm:px-6 lg:px-7">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#58704d]">
                  Closing Takeaway
                </p>
                <h2 className="font-editorial text-[clamp(1.9rem,3vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#1d241b]">
                  Finwise is less about building another finance dashboard and more about building a product people can trust to think with.
                </h2>
              </div>

              <p className="text-base leading-7 text-[#4c5a4a]">
                This is the kind of self-initiated build I want in the portfolio because it shows
                product-builder thinking clearly: identify the decision friction, make the guidance
                legible, and design the system so the product earns confidence before it asks for deeper
                user reliance.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-[#dde4d8] pt-6">
              <Link href="/work">
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#e5eedc] px-6 py-3.5 text-sm font-semibold text-[#1d241b] shadow-[0_16px_36px_-26px_rgba(61,84,54,0.22)] transition-transform duration-200 hover:-translate-y-0.5">
                  Back to work archive
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d6ddd0] bg-white/82 px-6 py-3.5 text-sm font-semibold text-[#1d241b] transition-colors duration-200 hover:border-[#58704d] hover:text-[#3c4d35]"
              >
                View resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </BackgroundComponents>
  );
}

function FlowChip({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#d9e1d3] bg-[#fbfdf8] px-3 py-2 text-sm font-medium text-[#2b3228]">
      <Icon className="h-4 w-4 text-[#58704d]" />
      <span>{label}</span>
    </div>
  );
}
