import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Boxes,
  BrainCircuit,
  Gauge,
  GitBranch,
  RefreshCcw,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const heroStats = [
  { label: "Cross-system updates", value: "<1 min" },
  { label: "Job success rate", value: "90% -> 100%" },
  { label: "Bundle throughput", value: "200+ bundles under 1 min" },
  { label: "User base", value: "300+ admins / 600+ vendors" },
];

const contextFacts = [
  { label: "Company / Client", value: "Anand PAG for a Fortune 500 B2B services client" },
  { label: "Role", value: "Builder-style PM across workflow logic, integrations, QA, and launch readiness" },
  { label: "Product", value: "Cloud vendor-operations platform replacing fragmented legacy workflows" },
  { label: "Primary goal", value: "Make service-order execution, documentation, and sync logic reliable at scale" },
];

const problemPoints = [
  "Service-order execution was fragmented across the vendor portal, integrations, and document services.",
  "Operations teams were losing time to unclear statuses, delayed syncs, and exception-heavy coordination.",
  "Document classification and PDF bundling were high-risk backend workflows, but they directly affected invoicing readiness.",
  "The product needed to support scale without creating more manual follow-up for admins or vendors.",
];

const proofSignals = [
  "Owned workflow logic, exceptions, triggers, and status transitions across multiple systems.",
  "Translated edge cases and expected behavior into engineer-ready product direction through POCs, MVP flows, and prototypes.",
  "Used AI builder tools and reusable team skills to reduce repetitive product and delivery work.",
];

const ownershipAreas: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "POC, MVP, and workflow concepts",
    body: "Built product flows, prototypes, and UX concepts in Cursor and other AI builder tooling to turn journeys, edge cases, and expected behavior into something engineering could act on quickly.",
    icon: Workflow,
  },
  {
    title: "Workflow logic across systems",
    body: "Defined service-order statuses, user actions, triggers, sync rules, and exception paths across the vendor portal, integrations, and document services.",
    icon: GitBranch,
  },
  {
    title: "Async document services",
    body: "Drove requirements, validation, and release coordination for document classification and PDF bundling so the backend pipeline became operationally reliable.",
    icon: Boxes,
  },
  {
    title: "AI-first PM leverage",
    body: "Created reusable team skills and AI agents for requirement breakdown, test-case structuring, shared context, documentation, code-review prep, and frontend review workflows.",
    icon: BrainCircuit,
  },
];

const moduleHighlights = [
  {
    title: "Workflow and status engine",
    detail: "The product only worked if every team understood what state an order was in, who owned the next step, and when sync or exception logic should fire.",
  },
  {
    title: "Async document pipeline",
    detail: "Classification and bundling had to be reliable enough for high-volume vendor orders because failures here slowed invoice readiness and created manual follow-up.",
  },
];

const measuredResults = [
  "Cross-system updates reached under 1 minute.",
  "Job success improved from 90% to 100%.",
  "200+ bundles processed in under 1 minute.",
  "System supported 1000+ monthly vendor orders.",
];

const builderSignals = [
  "Builder PM ownership means I did not stop at requirements. I used prototypes, edge-case mapping, and engineer-facing flow logic to move ambiguous work into buildable product direction.",
  "AI leverage was operational, not cosmetic. I created reusable skills and agents that made requirement shaping, review prep, and test-structure work faster for the team.",
  "The strongest PM contribution here was making a multi-system workflow understandable enough to ship with confidence.",
];

const learnings = [
  "In workflow products, the status model is often the product because it shapes ownership, trust, and operational clarity.",
  "Prototype speed matters in enterprise environments because it closes interpretation gaps much faster than long requirement documents.",
  "Reliability work deserves product attention when backend failure modes directly shape user confidence and billing readiness.",
];

const visualAssets = [
  {
    title: "Workflow overview",
    src: "/anand-workflow-system-map.png",
    alt: "High-level workflow and system map for an anonymized field service vendor portal.",
    caption:
      "A high-level view of how internal ops, external vendors, the portal, and connected services fit together.",
  },
  {
    title: "Async document pipeline",
    src: "/anand-async-document-pipeline.png",
    alt: "Asynchronous document-processing pipeline for anonymized vendor evidence review and classification.",
    caption:
      "The backend reliability work mattered because document processing directly affected review speed and invoice readiness.",
  },
];

const jumpLinks = [
  { id: "context", label: "Context" },
  { id: "scope", label: "Scope" },
  { id: "system", label: "System" },
  { id: "results", label: "Results" },
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
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5637]">{eyebrow}</p>
      <h2 className="font-editorial text-[clamp(2rem,3vw,3.1rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#201712]">
        {title}
      </h2>
      <p className="text-base leading-7 !text-[#4f3523]">{description}</p>
    </div>
  );
}

export default function AnandPagCaseStudy() {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BackgroundComponents
      variant={isClayNotionMode ? "clay-notion-paper" : "concentric-squares"}
      className="min-h-screen bg-background"
      contentClassName="relative"
    >
      <div
        className={cn(
          "px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8",
          "[&_a]:text-[#201712]",
          "[&_button]:text-[#201712]",
          "[&_h1]:text-[#201712]",
          "[&_h2]:text-[#201712]",
          "[&_h3]:text-[#201712]",
          "[&_li]:!text-[#4f3523]",
          "[&_svg]:text-[#8f5a2d]",
        )}
      >
        <section className="mx-auto max-w-7xl border-b border-border/65 pb-10 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.76fr)] lg:items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#6d4a2c]">
                <Link href="/work">
                  <span className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-[#201712]">
                    <ArrowLeft className="h-4 w-4" />
                    Back to work
                  </span>
                </Link>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Anand PAG / Fortune 500 B2B services client</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5637]">
                  Case Study
                </p>
                <h1 className="font-editorial text-[clamp(2.5rem,4.2vw,4.45rem)] font-medium leading-[0.92] tracking-[-0.065em] text-[#201712]">
                  Rebuilding vendor operations for faster, more reliable service-order execution.
                </h1>
                <p className="max-w-3xl text-lg leading-8 !text-[#4f3523]">
                  I led product delivery and implementation planning for a cloud vendor-operations
                  platform that replaced fragmented legacy workflows. My work focused on workflow logic,
                  integrations, async document services, and launch readiness across internal ops teams
                  and external vendors.
                </p>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dccfc2] bg-[#fff9f2] px-4 py-2 text-sm font-medium text-[#6d4a2c] shadow-[0_12px_28px_-24px_rgba(81,57,24,0.18)]">
                  <Gauge className="h-4 w-4 text-[#8f5a2d]" />
                  <span>Client: Fortune 500 B2B services client</span>
                </div>
              </div>

              <div className="rounded-[1.9rem] border border-[#d7cabd] bg-[#fff9f2] px-5 py-5 shadow-[0_18px_44px_-38px_rgba(81,57,24,0.14)] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">
                  TL;DR
                </p>
                <p className="mt-3 text-base leading-7 !text-[#4f3523]">
                  The platform served 300+ admins and 600+ vendors, pushed cross-system updates under
                  one minute, improved async job success from 90% to 100%, and processed 200+ bundles
                  under one minute. I worked like a builder PM: prototypes, workflow logic, engineer-ready
                  specs, and release coordination.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {jumpLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="rounded-full border border-border/70 bg-background/82 px-4 py-2 text-sm font-semibold text-[#201712] transition-colors duration-200 hover:border-[#8f5a2d] hover:text-[#6f4a2a]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-[2rem] border border-[#d2c4b6] bg-[#fff9f2] px-5 py-5 shadow-[0_20px_52px_-42px_rgba(81,57,24,0.16)] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">
                  Confidentiality note
                </p>
                <p className="mt-3 text-sm leading-6 !text-[#4f3523]">
                  The client is intentionally anonymized. The visuals below are reconstructed system
                  diagrams that explain workflow logic and backend coordination without exposing
                  proprietary product UI.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-border/70 bg-background/82 px-4 py-4 shadow-[0_18px_40px_-34px_rgba(81,57,24,0.12)]"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#7a5637]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#201712]">{stat.value}</p>
                  </div>
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
                title="This was not a simple ops dashboard. It was a multi-system workflow product with real downstream business risk."
                description="The platform had to coordinate service orders, vendor actions, document processing, and sync behavior across multiple systems. When the workflow broke down, invoice readiness and operational speed suffered."
              />
            </div>

            <div className="rounded-[2rem] border border-[#d5c7ba] bg-[#fff9f2] px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">Problem</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 !text-[#4f3523] sm:text-base">
                {problemPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a5637]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d5c7ba] bg-white px-5 py-5 shadow-[0_18px_44px_-40px_rgba(81,57,24,0.12)] sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">What this proves</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 !text-[#4f3523] sm:text-base">
                {proofSignals.map((signal) => (
                  <li key={signal} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a5637]" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#d5c7ba] bg-white px-5 py-5 shadow-[0_18px_44px_-40px_rgba(81,57,24,0.12)] sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">Snapshot</p>
              <div className="mt-4 space-y-3">
                {contextFacts.map((fact) => (
                  <div key={fact.label} className="rounded-[1.2rem] border border-[#e2d8ce] bg-[#fffdf9] px-4 py-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#7a5637]">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 !text-[#4f3523]">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="scope" className="space-y-6">
            <SectionIntro
              eyebrow="What I Owned"
              title="The value was in turning ambiguity into buildable product direction."
              description="My role sat between systems thinking and delivery execution: define the logic, model the edge cases, make backend work legible, and keep the release path grounded."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {ownershipAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-[#d5c7ba] bg-white px-5 py-5 shadow-[0_18px_44px_-40px_rgba(81,57,24,0.12)] sm:px-6"
                  >
                    <div className="inline-flex rounded-full bg-[#f4dfcf] p-3 text-[#8f5a2d]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[1.38rem] font-semibold tracking-[-0.04em] text-[#201712]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 !text-[#4f3523] sm:text-base">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="system" className="space-y-6">
            <SectionIntro
              eyebrow="System Complexity"
              title="Two areas carried most of the product risk."
              description="This is where the product-management work mattered most: state logic and async backend reliability."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {moduleHighlights.map((module) => (
                <div
                  key={module.title}
                  className="rounded-[2rem] border border-[#d5c7ba] bg-[#fff9f2] px-5 py-5 sm:px-6"
                >
                  <h3 className="text-[1.55rem] font-semibold tracking-[-0.04em] text-[#201712]">
                    {module.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 !text-[#4f3523] sm:text-base">{module.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="System Visuals"
              title="These diagrams explain the product faster than extra paragraphs."
              description="Because I am not showing product screenshots, I used anonymized workflow visuals to make the workflow, system behavior, and document pipeline easier to understand."
            />

            <div className="rounded-[2.1rem] border border-[#d5c7ba] bg-white px-5 py-5 shadow-[0_18px_44px_-40px_rgba(81,57,24,0.12)] sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">
                {visualAssets[0].title}
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-6 !text-[#4f3523] sm:text-base">
                {visualAssets[0].caption}
              </p>
              <img
                src={visualAssets[0].src}
                alt={visualAssets[0].alt}
                className="mt-5 h-auto w-full rounded-[1.5rem] border border-[#e5d8cb] bg-[#fffdf9]"
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {visualAssets.slice(1).map((asset) => (
                <div
                  key={asset.title}
                  className="rounded-[2.1rem] border border-[#d5c7ba] bg-white px-5 py-5 shadow-[0_18px_44px_-40px_rgba(81,57,24,0.12)] sm:px-6"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">
                    {asset.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 !text-[#4f3523] sm:text-base">{asset.caption}</p>
                  <img
                    src={asset.src}
                    alt={asset.alt}
                    className="mt-5 h-auto w-full rounded-[1.5rem] border border-[#e5d8cb] bg-[#fffdf9]"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="Builder PM Signal"
              title="I used prototypes and AI workflows to accelerate the team, not to decorate the process."
              description="This is the part that matters most in the case study: how I work when the product is complex and the team needs clarity fast."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {builderSignals.map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-[#d5c7ba] bg-white px-5 py-5 shadow-[0_18px_44px_-40px_rgba(81,57,24,0.12)] sm:px-6"
                >
                  <div className="inline-flex rounded-full bg-[#f4dfcf] p-3 text-[#8f5a2d]">
                    <Bot className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm leading-6 !text-[#4f3523] sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="results" className="space-y-6">
            <SectionIntro
              eyebrow="Results"
              title="The platform got faster, more stable, and more operationally usable."
              description="For this case study, the most important proof points are system reliability, update speed, and throughput."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {measuredResults.map((result) => (
                <div
                  key={result}
                  className="rounded-[1.7rem] border border-[#d5c7ba] bg-white px-5 py-5 shadow-[0_18px_44px_-40px_rgba(81,57,24,0.12)] sm:px-6"
                >
                  <div className="mb-3 inline-flex rounded-full bg-[#f4dfcf] p-2 text-[#8f5a2d]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 !text-[#4f3523] sm:text-base">{result}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2.2rem] border border-[#d5c7ba] bg-white px-5 py-6 shadow-[0_18px_44px_-40px_rgba(81,57,24,0.12)] sm:px-6 lg:px-7">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <RefreshCcw className="h-5 w-5 text-[#a36b37]" />
                  <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-[#201712]">What I learned</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 !text-[#4f3523] sm:text-base">
                  {learnings.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7a5637]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5637]">
                  Closing Takeaway
                </p>
                <h2 className="font-editorial text-[clamp(1.9rem,3vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#201712]">
                  This was builder-style PM work: systems logic, backend reliability, product clarity, and delivery discipline all at once.
                </h2>
                <p className="text-base leading-7 !text-[#4f3523]">
                  This page works because it proves capability through workflow logic, reliability, and
                  system clarity. Screenshots are optional when the real strength of the work is how the
                  product behaves across systems.
                </p>
              </div>
            </div>
          </section>
          <section className="mt-2 flex flex-wrap gap-3 border-t border-border/60 pt-6">
              <Link href="/work">
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#eadbcf] px-6 py-3.5 text-sm font-semibold text-[#201712] shadow-[0_16px_36px_-26px_rgba(81,57,24,0.28)] transition-transform duration-200 hover:-translate-y-0.5">
                  Back to work archive
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/82 px-6 py-3.5 text-sm font-semibold text-[#201712] transition-colors duration-200 hover:border-[#8f5a2d] hover:text-[#6f4a2a]"
              >
                  View resume
                  <ArrowUpRight className="h-4 w-4" />
                </a>
          </section>
        </div>
      </div>
    </BackgroundComponents>
  );
}
