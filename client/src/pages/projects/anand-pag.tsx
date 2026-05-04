import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  ClipboardCheck,
  Clock3,
  Gauge,
  Layers3,
  RefreshCcw,
  ShieldCheck,
  Users2,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const heroStats = [
  { label: "Cross-system sync", value: "<5 min" },
  { label: "Job success rate", value: "95% -> 100%" },
  { label: "Document bundling", value: "200+ orders in 2-4 min" },
  { label: "Primary user base", value: "200+ admins + 500 vendors" },
];

const contextFacts = [
  { label: "Company / Client", value: "Anand PAG embedded with Cintas Fire National Accounts" },
  { label: "Role", value: "Product Manager with strong technical fluency across workflow and integration issues" },
  { label: "Product", value: "Cloud workflow platform replacing a legacy vendor-operations system" },
  { label: "Core business goal", value: "Reduce cycle time and target a 30% reduction in invoice delays" },
];

const problemPoints = [
  "Fragmented execution across systems and teams",
  "Slow back-and-forth coordination that often took 3-5 days",
  "Inconsistent documentation submission and tracking",
  "Missing or misclassified evidence delaying invoice readiness",
  "Limited real-time visibility into vendor progress and order status",
];

const outcomeMetrics = [
  "Cut internal coordination from 3-5 days to near real-time visibility and actionability",
  "Target a 30% reduction in invoice delays",
  "Increase self-serve workflow completion and reduce spreadsheet or email workarounds",
];

const platformHealth = [
  "Cross-system sync latency under 5 minutes",
  "Background job success improved from 95% to 100%",
  "High-volume bundling supported 200+ service orders in 2-4 minutes",
  "Launch readiness gates: UAT >95%, defect leakage <5%, P0 <24h, P1 <48h",
];

const internalUsers = [
  {
    persona: "Operations Coordinator",
    job: "Dispatch orders, track progress, resolve scheduling issues, and manage exceptions.",
  },
  {
    persona: "AR / Billing",
    job: "Ensure documentation completeness for invoice readiness and track delays or missing items.",
  },
  {
    persona: "FNA Administrator",
    job: "Manage vendor eligibility, access governance, contacts, SLAs, and audit-ready history.",
  },
  {
    persona: "Document Reviewer",
    job: "Validate and label evidence, then trigger classification workflow.",
  },
];

const externalUsers = [
  {
    persona: "Vendor Dispatcher",
    job: "Accept or reject work, schedule service, and coordinate technicians.",
  },
  {
    persona: "Vendor Technician",
    job: "Execute work, upload evidence, and provide completion notes.",
  },
  {
    persona: "Vendor Billing",
    job: "Verify documentation requirements before invoicing.",
  },
  {
    persona: "Vendor Admin",
    job: "Manage team access and workflow visibility.",
  },
];

const solutionPoints = [
  "Service order dispatch and acknowledgement",
  "Scheduling and status governance",
  "Evidence upload with a structured classification lifecycle",
  "High-volume document generation and exports",
  "Monitoring and operational readiness for go-live",
];

const solutionPrinciples = [
  "Operational governance via explicit workflow statuses and clear ownership",
  "Reliability at scale via asynchronous processing for long-running operations",
];

const builderApproach: Array<{
  title: string;
  detail: string;
  impact: string;
  icon: LucideIcon;
}> = [
  {
    title: "Rapid clarity through prototypes",
    detail:
      "Built workflow prototypes in Visily immediately after discovery sessions, then created a lightweight coded prototype in Cursor to reduce interpretation gaps and expose edge cases early.",
    impact: "Faster stakeholder buy-in, clearer scope boundaries, and fewer late surprises.",
    icon: Workflow,
  },
  {
    title: "AI-first PM leverage",
    detail:
      "Used AI-assisted workflows for story drafts, acceptance criteria, test scenarios, and documentation structure, then standardized QA and UAT artifacts through ClickUp automations.",
    impact: "More time spent on product decisions, risk management, and usability instead of admin overhead.",
    icon: Bot,
  },
];

const evidenceLifecycle = [
  "Vendor uploads document -> NEW",
  "Submission job -> SUBMITTED",
  "Preparation job (split / convert) -> UNCLASSIFIED",
  "Reviewer labels pages -> LABELED",
  "Consolidation job -> CLASSIFIED + ARCHIVED",
  "Send-to-core-system job syncs evidence metadata and artifacts",
  "Service order transitions to Document Review for SLA tracking",
];

const failureModes = [
  "Integration failures modeled as recoverable retry states",
  "Incomplete labeling blocked before consolidation",
  "Non-PDF conversion and missing reference handling",
  "Job delays and partial failures surfaced with explicit statuses",
];

const pmDecisions = [
  {
    title: "Workflow status model redesign",
    reason:
      "Statuses were the backbone of coordination, ownership, SLAs, and next-step clarity. I aligned stakeholders on definitions, simplified the UX, and shipped critical logic changes within one week.",
  },
  {
    title: "Async over synchronous processing",
    reason:
      "High-volume operations and multi-step document workflows were too failure-prone under synchronous execution, so I pushed for background jobs with explicit states, retries, and visible recovery paths.",
  },
  {
    title: "Release sequencing and scope control",
    reason:
      "Multiple stakeholders, parallel engineering streams, and go-live pressure required impact-versus-risk prioritization and documented tradeoffs to prevent scope churn.",
  },
];

const deliveryFramework: Array<{
  title: string;
  detail: string;
  icon: LucideIcon;
}> = [
  {
    title: "Discovery and definition",
    detail:
      "Stakeholder workshops, workflow mapping, JTBD framing by persona, prototype-driven validation, and KPI definition tied to cycle time and invoice readiness.",
    icon: Building2,
  },
  {
    title: "Prioritization",
    detail:
      "Impact versus effort, plus operational risk and launch readiness. Defects were triaged by severity tied to workflow breakers and data integrity.",
    icon: Layers3,
  },
  {
    title: "Execution",
    detail:
      "Weekly sprint cycles, explicit acceptance criteria, state-transition definitions, and a tight QA loop with fast iteration.",
    icon: Wrench,
  },
  {
    title: "Validation and launch readiness",
    detail:
      "Authored regression suites and UAT scripts, led walkthroughs and defect triage, and partnered with Cloud ALM plus ClickUp to enforce launch quality gates.",
    icon: ClipboardCheck,
  },
];

const measuredResults = [
  "Cross-system sync latency under 5 minutes",
  "Background job success improved from 95% to 100%",
  "High-volume bundling supported 200+ service orders in 2-4 minutes",
];

const targetedResults = [
  "3-5 days of back-and-forth reduced to near real-time actionability",
  "Targeted 30% reduction in invoice delays through stronger evidence readiness",
  "Higher self-serve completion with fewer manual workarounds",
];

const learnings = [
  "In workflow products, the status model is the product because it drives ownership, trust, and operational clarity.",
  "Prototypes remove ambiguity faster than long requirements decks in enterprise environments.",
  "Reliability is a product feature when async processing, retries, and explicit job states are designed into the workflow.",
  "AI-first PM workflows create leverage when they absorb repetitive overhead and leave judgment for tradeoffs and edge cases.",
];

const nextSteps = [
  "Build an operational KPI dashboard for time-in-status, rework loops, invoice readiness time, and job failure rates.",
  "Add friction analytics for drop-offs, incomplete labeling frequency, and retry hotspots.",
  "Expand self-serve and exception tooling with clearer recovery paths, stronger error messaging, and admin intervention tools.",
  "Harden monitoring and alerting around stuck states and failure spikes.",
];

const tooling = [
  "Visily for workflow prototypes",
  "Cursor for a lightweight coded prototype",
  "ClickUp for workflow automation, QA artifacts, and defect tracking",
  "Regression suites, UAT scripts, and walkthrough facilitation for readiness",
  "Cloud ALM for client-side operational monitoring",
];

const jumpLinks = [
  { id: "context", label: "Context" },
  { id: "solution", label: "Solution" },
  { id: "modules", label: "Modules" },
  { id: "delivery", label: "Delivery" },
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
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
      <h2 className="font-editorial text-[clamp(2rem,3vw,3.1rem)] font-medium leading-[0.95] tracking-[-0.05em] text-foreground">
        {title}
      </h2>
      <p className="text-base leading-7 text-muted-foreground">{description}</p>
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
      <div className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8">
        <section className="mx-auto max-w-7xl border-b border-border/65 pb-10 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.76fr)] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
                <Link href="/work">
                  <span className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-foreground">
                    <ArrowLeft className="h-4 w-4" />
                    Back to work
                  </span>
                </Link>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Anand PAG / Cintas Fire National Accounts</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Case Study
                </p>
                <h1 className="font-editorial text-[clamp(3rem,5vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.07em] text-foreground">
                  Rebuilding service-order execution for Cintas Fire National Accounts.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-foreground/80">
                  I led product delivery for a technically complex, integration-heavy cloud workflow
                  platform that replaced a legacy vendor-operations system. The platform digitized
                  service-order execution across internal operations teams and external vendors,
                  improving coordination speed, reliability, and launch readiness.
                </p>
              </div>

              <div className="paper-panel rounded-[1.9rem] px-5 py-5 sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  TL;DR
                </p>
                <p className="mt-3 text-base leading-7 text-foreground/82">
                  This platform created near real-time coordination under five minutes across systems,
                  improved background-job reliability from 95% to 100%, and made high-volume document
                  bundling stable enough to process 200+ service-order bundles in 2-4 minutes. I worked
                  as a builder PM: rapid prototypes in Visily, a lightweight coded prototype in Cursor,
                  tight iteration loops, and structured UAT readiness.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {jumpLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="rounded-full border border-border/70 bg-background/82 px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary/35 hover:text-primary"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="paper-panel rounded-[2rem] px-5 py-5 sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Snapshot
                </p>
                <div className="mt-4 space-y-3">
                  {contextFacts.map((fact) => (
                    <div key={fact.label} className="rounded-[1.2rem] border border-border/60 bg-background/72 px-4 py-3">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                        {fact.label}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-foreground/78">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-border/70 bg-background/82 px-4 py-4 shadow-[0_18px_40px_-34px_rgba(81,57,24,0.12)]"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <div className="mx-auto mt-10 max-w-7xl space-y-12 lg:space-y-16">
          <section id="context" className="grid gap-6 lg:grid-cols-2">
            <div className="paper-panel rounded-[2rem] px-5 py-5 sm:px-6">
              <SectionIntro
                eyebrow="Context"
                title="Enterprise operations were moving through too many handoffs and too little shared visibility."
                description="The legacy tool and its workarounds created real operational drag. Internal teams and vendors were coordinating across fragmented systems, and documentation quality directly affected invoice readiness."
              />
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-[#fffdf8]/80 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Problem
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/78 sm:text-base">
                {problemPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Outcomes
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/78 sm:text-base">
                {outcomeMetrics.map((metric) => (
                  <li key={metric} className="flex gap-3">
                    <Gauge className="mt-1 h-4 w-4 shrink-0 text-[#a36b37]" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Platform Health
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/78 sm:text-base">
                {platformHealth.map((metric) => (
                  <li key={metric} className="flex gap-3">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#6c7a50]" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="Users and JTBD"
              title="The workflow had to serve both internal operations teams and external vendors without losing traceability."
              description="The product was not for one user type. It had to coordinate different incentives, responsibilities, and failure modes across the people doing the work and the people preparing it for invoicing."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <Users2 className="h-5 w-5 text-[#a36b37]" />
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">Internal users</h3>
                </div>
                <div className="mt-4 space-y-4">
                  {internalUsers.map((user) => (
                    <div key={user.persona} className="rounded-[1.25rem] border border-border/60 bg-background/70 px-4 py-4">
                      <p className="text-sm font-semibold text-foreground">{user.persona}</p>
                      <p className="mt-1.5 text-sm leading-6 text-foreground/76">{user.job}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#6c7a50]" />
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">External vendors</h3>
                </div>
                <div className="mt-4 space-y-4">
                  {externalUsers.map((user) => (
                    <div key={user.persona} className="rounded-[1.25rem] border border-border/60 bg-background/70 px-4 py-4">
                      <p className="text-sm font-semibold text-foreground">{user.persona}</p>
                      <p className="mt-1.5 text-sm leading-6 text-foreground/76">{user.job}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="solution" className="space-y-6">
            <SectionIntro
              eyebrow="Solution Overview"
              title="A secure workflow platform built around explicit ownership and reliable background processing."
              description="The product centralized service-order execution and evidence handling for internal and external users, while making long-running operations trustworthy enough for enterprise use."
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)]">
              <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  What the platform covered
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/78 sm:text-base">
                  {solutionPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-border/70 bg-[#fffdf8]/82 px-5 py-5 sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Design principles
                </p>
                <div className="mt-4 space-y-4">
                  {solutionPrinciples.map((principle) => (
                    <div key={principle} className="rounded-[1.25rem] border border-border/60 bg-background/70 px-4 py-4 text-sm leading-6 text-foreground/78">
                      {principle}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="Builder PM Approach"
              title="I worked like a builder, not a handoff PM."
              description="This was the only practical way to reduce ambiguity in an integration-heavy workflow product with multiple stakeholders and go-live pressure."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {builderApproach.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 shadow-[0_18px_50px_-40px_rgba(81,57,24,0.12)] sm:px-6"
                  >
                    <div className="inline-flex rounded-full bg-[#f4dfcf] p-3 text-[#8f5a2d]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.04em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/78 sm:text-base">{item.detail}</p>
                    <div className="mt-4 rounded-[1.2rem] border border-border/60 bg-background/70 px-4 py-3 text-sm font-medium leading-6 text-foreground/78">
                      {item.impact}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="modules" className="space-y-6">
            <SectionIntro
              eyebrow="Key Modules"
              title="The core product work was about making complex operations legible, recoverable, and scalable."
              description="Two modules carried most of the product and technical risk: the evidence-classification lifecycle and high-volume document operations."
            />

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Module A
                    </p>
                    <h3 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.045em] text-foreground">
                      {"Evidence Upload -> Classification -> System Sync"}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/78 sm:text-base">
                      The goal was to reduce missing documentation, improve invoice readiness, and create
                      traceability across a multi-step evidence workflow.
                    </p>
                  </div>
                  <div className="rounded-full border border-border/60 bg-[#eef3e2] px-4 py-2 text-sm font-semibold text-[#51643e]">
                    {"Reliability impact: 95% -> 100% job success"}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                      Lifecycle
                    </p>
                    <div className="mt-4 space-y-3">
                      {evidenceLifecycle.map((step, index) => (
                        <div
                          key={step}
                          className="flex gap-4 rounded-[1.25rem] border border-border/60 bg-background/70 px-4 py-4"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4dfcf] text-sm font-semibold text-[#8f5a2d]">
                            {index + 1}
                          </div>
                          <p className="text-sm leading-6 text-foreground/78">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                      Failure modes handled
                    </p>
                    <div className="mt-4 space-y-3">
                      {failureModes.map((mode) => (
                        <div
                          key={mode}
                          className="rounded-[1.25rem] border border-border/60 bg-background/70 px-4 py-4 text-sm leading-6 text-foreground/78"
                        >
                          {mode}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Module B
                    </p>
                    <h3 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.045em] text-foreground">
                      High-volume document bundling at operational scale
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/78 sm:text-base">
                      Heavy document operations were routed to asynchronous processing so users could
                      track progress instead of waiting through unstable synchronous jobs.
                    </p>
                  </div>
                  <div className="rounded-full border border-border/60 bg-[#e7edf8] px-4 py-2 text-sm font-semibold text-[#4e6288]">
                    Performance impact: 200+ orders in 2-4 min
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    "User selects a high-volume set of 200+ service orders",
                    "System creates a background job and trackable queue entry",
                    "Status-driven visibility shows Processing -> Completed -> Failed / Retry",
                    "User downloads only when the bundle is ready",
                  ].map((step) => (
                    <div
                      key={step}
                      className="rounded-[1.25rem] border border-border/60 bg-background/70 px-4 py-4 text-sm leading-6 text-foreground/78"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="PM Decisions and Tradeoffs"
              title="The hardest product decisions were about state design, system trust, and release pressure."
              description="These choices were not cosmetic. They shaped whether the product could coordinate real operational work without creating more failure paths."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {pmDecisions.map((decision) => (
                <div
                  key={decision.title}
                  className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6"
                >
                  <h3 className="text-[1.35rem] font-semibold tracking-[-0.04em] text-foreground">
                    {decision.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/78 sm:text-base">{decision.reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="delivery" className="space-y-6">
            <SectionIntro
              eyebrow="Delivery Process"
              title="Delivery discipline mattered as much as product thinking."
              description="This program needed fast definition loops, pragmatic prioritization, and launch gates strong enough to keep defects from rolling into production workflow."
            />

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {deliveryFramework.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6"
                  >
                    <div className="inline-flex rounded-full bg-[#eef3e2] p-3 text-[#51643e]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[1.2rem] font-semibold tracking-[-0.03em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-foreground/78">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="results" className="space-y-6">
            <SectionIntro
              eyebrow="Results"
              title="The platform proved out on reliability and performance before business outcomes fully matured."
              description="The strongest validated signals came from testing, iteration, and launch-readiness work. Business outcomes were framed as targeted impact tied to the new workflow foundation."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <Gauge className="h-5 w-5 text-[#a36b37]" />
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">Measured and validated</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/78 sm:text-base">
                  {measuredResults.map((result) => (
                    <li key={result} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-[#6c7a50]" />
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">Targeted business outcomes</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/78 sm:text-base">
                  {targetedResults.map((result) => (
                    <li key={result} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <RefreshCcw className="h-5 w-5 text-[#a36b37]" />
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-foreground">What I learned</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/78 sm:text-base">
                {learnings.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-background/82 px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <ArrowRight className="h-5 w-5 text-[#6c7a50]" />
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-foreground">What I would do next</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/78 sm:text-base">
                {nextSteps.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/45" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-[2.2rem] border border-border/70 bg-background/82 px-5 py-6 sm:px-6 lg:px-7">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Tooling Summary
                </p>
                <h2 className="font-editorial text-[clamp(1.9rem,3vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.05em] text-foreground">
                  The tool choices were practical: reduce ambiguity, speed delivery, and keep launch quality high.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {tooling.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.3rem] border border-border/60 bg-background/72 px-4 py-4 text-sm leading-6 text-foreground/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-border/60 pt-6">
              <Link href="/work">
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#1f1a14] px-6 py-3.5 text-sm font-semibold text-[#fff8ef] shadow-[0_16px_36px_-26px_rgba(31,26,20,0.42)] transition-transform duration-200 hover:-translate-y-0.5">
                  Back to work archive
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/82 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary/35 hover:text-primary"
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
