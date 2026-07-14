import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  BrainCircuit,
  DatabaseZap,
  Gauge,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";
import { siteConfig } from "@/data/site";

const heroMetrics = [
  { label: "Later user base", value: "608", note: "Post-launch context by Nov 2024" },
  { label: "Later growth", value: "+865%", note: "63 to 608 after the launch phase" },
  { label: "Projected conversion lift", value: "+42%", note: "From pricing and packaging work" },
  { label: "Projected MRR uplift", value: "+28%", note: "From monetization model changes" },
];

const snapshotFacts = [
  { label: "Role", value: "Consultant Product Manager" },
  { label: "Team", value: "Founder-led team of 4 across product and engineering" },
  { label: "Product", value: "AI-powered SMB valuation and exit-planning platform" },
  { label: "Scope", value: "Pricing, analytics, ETL reliability, and MVP launch structure" },
];

const marketReality = [
  "Small-business owners needed faster, more affordable valuations than broker-led processes could typically provide.",
  "Trust mattered as much as speed because valuation is a high-stakes, financial decision surface.",
  "The product had to prove credibility before monetization could work.",
];

const problemPoints = [
  "Manual broker reports were expensive and slow for owners who wanted an early valuation signal.",
  "The product needed a monetization model that felt credible enough for a trust-sensitive category.",
  "Launch decisions had to balance user confidence, pricing clarity, and the analytics needed to learn quickly.",
];

const ownershipAreas: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "Pricing and packaging",
    body: "Authored a pricing PRD spanning four monetization models and mapped which offers best matched early user trust and willingness to pay.",
    icon: BadgeDollarSign,
  },
  {
    title: "Research and positioning",
    body: "Interviewed eight broker and advisor personas, benchmarked six competitors, and translated those findings into a tighter product and GTM story.",
    icon: Search,
  },
  {
    title: "Analytics and ETL foundation",
    body: "Defined AARRR, Lean Analytics, and OMTM metrics, then supported Mage AI-based ETL automation to strengthen the reliability of valuation inputs.",
    icon: DatabaseZap,
  },
  {
    title: "Launch sequencing",
    body: "Created a Jira roadmap and clarified sprint priorities so the team could sequence pricing, analytics, and MVP delivery with less noise.",
    icon: Layers3,
  },
];

const judgmentCalls = [
  {
    title: "Trust before monetization depth",
    body: "The product could not rely on pricing cleverness alone. The first job was to make the valuation experience feel legible and credible enough that users would engage seriously.",
  },
  {
    title: "Measure before you scale",
    body: "I treated analytics as core product infrastructure, not a reporting layer. Without funnels and leading indicators, the team would not know whether pricing, onboarding, or trust was the blocker.",
  },
  {
    title: "Keep projections separate from proof",
    body: "I explicitly separated projected commercial upside from validated usage signals so the story stayed honest about what was measured during my window and what was modeled for later phases.",
  },
];

const builderMoves: Array<{
  title: string;
  detail: string;
  icon: LucideIcon;
}> = [
  {
    title: "ROI and pricing model",
    detail: "Built an ROI model that helped compare monetization approaches and gave the team a more defensible basis for pricing conversations.",
    icon: Gauge,
  },
  {
    title: "ETL support for accounting data",
    detail: "Integrated Mage AI workflows to automate accounting-data ingestion from systems like Xero and QuickBooks, improving the operational path into valuation logic.",
    icon: BrainCircuit,
  },
];

const measuredResults = [
  "The platform later reached 608 users and roughly +865% growth from its earlier baseline; I treat that as post-launch context rather than a direct project-window metric.",
  "The pricing and analytics foundation was in place before launch, giving the team a clearer way to evaluate conversion and monetization experiments.",
  "Roadmap restructuring supported faster iteration and a cleaner launch path for the MVP.",
];

const projectedResults = [
  "+42% projected free-to-paid conversion lift from pricing strategy changes.",
  "+28% projected MRR uplift from revised packaging and monetization structure.",
  "13:1 modeled benefit-to-cost ratio in the ROI analysis.",
];

const learnings = [
  "In financial products, trust-building work and monetization work are inseparable.",
  "Pricing is a product decision, not only a finance decision, because it shapes perceived credibility and user commitment.",
  "For founder-led teams, the most valuable PM contribution is often sharper sequencing, clearer tradeoffs, and a cleaner measurement model.",
];

const nextSteps = [
  "Validate which valuation output and explanation layers actually increase trust before asking for payment.",
  "Tune pricing and packaging with observed conversion behavior instead of relying only on modeled elasticity.",
  "Expand the analytics model to track confidence signals, not just acquisition and conversion.",
];

const jumpLinks = [
  { id: "context", label: "Context" },
  { id: "scope", label: "Scope" },
  { id: "judgment", label: "Judgment" },
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
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5877a7]">{eyebrow}</p>
      <h2 className="font-editorial text-[clamp(2rem,3vw,3.05rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#151c27]">
        {title}
      </h2>
      <p className="text-base leading-7 text-[#445066]">{description}</p>
    </div>
  );
}

function FactTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-[#cfdae8] bg-white/78 px-4 py-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#5877a7]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[#273246]">{value}</p>
    </div>
  );
}

function StatTile({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-[1.45rem] border border-[#ccd8e8] bg-[#f6f9fe] px-4 py-4">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#5877a7]">{label}</p>
      <p className="mt-2 text-[1.35rem] font-semibold tracking-[-0.03em] text-[#151c27]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[#516179]">{note}</p>
    </div>
  );
}

export default function NomadAiCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BackgroundComponents variant="concentric-squares" className="min-h-screen bg-background" contentClassName="relative">
      <div className="case-study-page case-study-nomad px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8">
        <section className="mx-auto max-w-7xl border-b border-border/65 pb-10 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#5877a7]">
                <Link href="/work">
                  <span className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-[#151c27]">
                    <ArrowLeft className="h-4 w-4" />
                    Back to work
                  </span>
                </Link>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Nomad AI</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5877a7]">
                  AI fintech case study
                </p>
                <h1 className="font-editorial text-[clamp(3rem,5vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.07em] text-[#151c27]">
                  Pricing and launch strategy for an AI valuation product in a trust-sensitive market.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[#445066]">
                  I worked as a consultant product manager on a founder-led SMB valuation platform,
                  shaping pricing, analytics, and MVP decisions so the product could earn trust before
                  it tried to scale monetization.
                </p>
              </div>

              <div className="rounded-[1.9rem] border border-[#d1dced] bg-[#f8fbff] px-5 py-5 shadow-[0_18px_44px_-38px_rgba(41,62,98,0.14)] sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#5877a7]">
                  TL;DR
                </p>
                <p className="mt-3 text-base leading-7 text-[#445066]">
                  My scope was not the later user growth alone. I owned the product foundation around
                  pricing, analytics, ETL reliability, and launch sequencing so the team had a more
                  credible way to test monetization and learn from real usage.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {jumpLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="rounded-full border border-border/70 bg-background/82 px-4 py-2 text-sm font-semibold text-[#151c27] transition-colors duration-200 hover:border-[#5877a7] hover:text-[#38527a]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-[#c7d3e4] bg-[#111827] shadow-[0_24px_70px_-42px_rgba(20,29,43,0.45)]">
                <img
                  src="/nomad-ai-dashboard.png"
                  alt="Nomad AI dashboard showing valuation analytics, company financials, and transaction monitoring."
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {snapshotFacts.map((fact) => (
                  <FactTile key={fact.label} label={fact.label} value={fact.value} />
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroMetrics.map((metric) => (
                  <StatTile key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
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
                title="This product sat at the intersection of speed, trust, and founder-stage commercialization."
                description="Nomad AI set out to make small-business valuation and exit planning more accessible. The challenge was not only to produce a faster output. It was to create a product that users could trust enough to take seriously in a financial decision context."
              />
            </div>

            <div className="rounded-[2rem] border border-[#d3dceb] bg-white/78 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#5877a7]">
                Why the market was hard
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#445066] sm:text-base">
                {marketReality.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5877a7]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d3dceb] bg-white/78 px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#5877a7]">
                Product problem
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#445066] sm:text-base">
                {problemPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5877a7]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#cbd7e8] bg-[#eef4fc] px-5 py-5 sm:px-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#5877a7]">
                Recruiter signal
              </p>
              <p className="mt-4 text-base leading-7 text-[#243247]">
                This case study shows commercial product judgment: how to structure pricing, analytics,
                and launch sequencing when the product category is trust-sensitive and the team is lean.
              </p>
            </div>
          </section>

          <section id="scope" className="space-y-6">
            <SectionIntro
              eyebrow="What I Owned"
              title="I focused on the product decisions that made the launch testable and commercially coherent."
              description="My contribution was not one feature. It was the operating frame for how the team would learn: who to price for, what to measure, how to sequence the MVP, and how to make valuation data flow more reliably."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {ownershipAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-[#d4ddeb] bg-white/80 px-5 py-5 shadow-[0_18px_50px_-40px_rgba(41,62,98,0.16)] sm:px-6"
                  >
                    <div className="inline-flex rounded-full bg-[#eaf0fb] p-3 text-[#5877a7]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#151c27]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#445066] sm:text-base">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-6">
            <SectionIntro
              eyebrow="Builder Moves"
              title="I treated the commercial model and data reliability as product work."
              description="That meant contributing to the economic framing of the product, while also tightening the instrumentation and data flows that the valuation experience depended on."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {builderMoves.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-[#d4ddeb] bg-white/80 px-5 py-5 shadow-[0_18px_50px_-40px_rgba(41,62,98,0.16)] sm:px-6"
                  >
                    <div className="inline-flex rounded-full bg-[#eef4fc] p-3 text-[#5877a7]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#151c27]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#445066] sm:text-base">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="judgment" className="space-y-6">
            <SectionIntro
              eyebrow="PM Judgment"
              title="The important decisions were about credibility, not just speed."
              description="The product had to avoid looking like a shortcut pretending to be a financial tool. That shaped how I approached pricing, measurement, and the difference between projected upside and validated signals."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {judgmentCalls.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#d4ddeb] bg-[#f9fbff] px-5 py-5 sm:px-6"
                >
                  <h3 className="text-[1.32rem] font-semibold tracking-[-0.04em] text-[#151c27]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#445066] sm:text-base">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="results" className="space-y-6">
            <SectionIntro
              eyebrow="Results"
              title="The strongest outcome was a clearer launch and learning system."
              description="I separate what was measured from what was projected. That keeps the case study honest and makes the PM contribution easier to evaluate."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-[#d4ddeb] bg-white/82 px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <Users2 className="h-5 w-5 text-[#5877a7]" />
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#151c27]">Measured and observed</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#445066] sm:text-base">
                  {measuredResults.map((result) => (
                    <li key={result} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5877a7]" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#cad7e8] bg-[#eef4fc] px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <TrendingSignal />
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#151c27]">Projected commercial impact</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#445066] sm:text-base">
                  {projectedResults.map((result) => (
                    <li key={result} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5877a7]" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-[#cad7e8] bg-[#f8fbff] px-5 py-5 text-sm leading-7 text-[#445066] sm:px-6 sm:text-base">
              <span className="font-semibold text-[#151c27]">Important note:</span> the later 608-user
              growth happened after my consulting window. I include it as context for the product’s
              subsequent trajectory, while the pricing, analytics, and launch-structure work described
              here reflects my direct scope.
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d4ddeb] bg-white/82 px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#5877a7]" />
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-[#151c27]">What I learned</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#445066] sm:text-base">
                {learnings.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5877a7]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#d4ddeb] bg-white/82 px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#5877a7]" />
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-[#151c27]">What I would do next</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#445066] sm:text-base">
                {nextSteps.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5877a7]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-[2.2rem] border border-[#d0d9e7] bg-white/82 px-5 py-6 sm:px-6 lg:px-7">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5877a7]">
                  Closing Takeaway
                </p>
                <h2 className="font-editorial text-[clamp(1.9rem,3vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#151c27]">
                  The work was not only about making valuation faster. It was about making the product credible enough to earn the next step.
                </h2>
              </div>

              <p className="text-base leading-7 text-[#445066]">
                This case study shows how I think in ambiguous early-stage environments: sharpen the
                business model, make the product measurable, and separate optimistic projections from
                what the team has actually validated.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-[#d7e0ec] pt-6">
              <Link href="/work">
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#dce8f7] px-6 py-3.5 text-sm font-semibold text-[#151c27] shadow-[0_16px_36px_-26px_rgba(41,62,98,0.26)] transition-transform duration-200 hover:-translate-y-0.5">
                  Back to work archive
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cad6e7] bg-white/82 px-6 py-3.5 text-sm font-semibold text-[#151c27] transition-colors duration-200 hover:border-[#5877a7] hover:text-[#38527a]"
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

function TrendingSignal() {
  return <BarChart3 className="h-5 w-5 text-[#5877a7]" />;
}
