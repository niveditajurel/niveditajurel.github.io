import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  FileText,
  Mic,
  Workflow,
} from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";
import { aisliResearch } from "@/data/research";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const paperFacts = [
  { label: "Format", value: aisliResearch.format },
  { label: "Published", value: aisliResearch.year },
  { label: "Publisher", value: aisliResearch.publisher },
  { label: "Pages", value: aisliResearch.pages },
];

const paperAngles = [
  {
    title: "Problem space",
    detail: aisliResearch.context,
    icon: FileText,
  },
  {
    title: "Technical approach",
    detail: aisliResearch.approach,
    icon: Workflow,
  },
  {
    title: "Output model",
    detail: aisliResearch.output,
    icon: Mic,
  },
];

export default function AisliResearchPage() {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.8fr)] lg:items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[#6d4a2c]">
                <Link href="/work">
                  <span className="inline-flex cursor-pointer items-center gap-2 transition-colors hover:text-[#201712]">
                    <ArrowLeft className="h-4 w-4" />
                    Back to work
                  </span>
                </Link>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span>Research / Accessibility</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a5637]">
                  Published research
                </p>
                <h1 className="max-w-5xl text-balance font-editorial text-[clamp(2.4rem,4.8vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.06em] text-[#201712]">
                  {aisliResearch.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 !text-[#4f3523]">
                  {aisliResearch.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {aisliResearch.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="clay-notion-tag border-black/8 bg-white/76 text-[#5d4a3a] shadow-none"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={aisliResearch.publisherUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c26a41] px-5 py-3 text-sm font-semibold text-[#fff8ef] shadow-[0_16px_32px_-24px_rgba(194,106,65,0.85)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Open publisher page
                  <ArrowUpRight className="h-4 w-4 text-[#fff8ef]" />
                </a>
                <a
                  href={aisliResearch.doiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d8c8b7] bg-[rgba(255,250,244,0.92)] px-5 py-3 text-sm font-semibold text-[#201712] transition-colors duration-200 hover:border-[#c98a65] hover:text-[#6f4a2a]"
                >
                  View DOI
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="paper-panel rounded-[2rem] px-5 py-5 sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">
                  At a glance
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {paperFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[1.4rem] border border-[#dccbbb]/70 bg-[rgba(255,252,247,0.72)] px-4 py-4"
                    >
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#a17e67]">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#221913]">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="paper-panel overflow-hidden rounded-[2rem] px-5 py-5 sm:px-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">
                  Research signal
                </p>
                <p className="mt-3 text-sm leading-6 !text-[#4f3523]">
                  This work sits at the intersection of accessibility, speech interfaces,
                  and language translation. It is a stronger proof point than a placeholder
                  citation because the page now links directly to the published source.
                </p>
                <div className="mt-5 rounded-[1.7rem] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.88),rgba(255,255,255,0.1)_65%,transparent_82%)] px-2 py-3">
                  <ResearchSignalSketch />
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-3">
            {paperAngles.map(({ title, detail, icon: Icon }) => (
              <article key={title} className="paper-panel rounded-[1.8rem] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e6d7] text-[#b9653d]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-editorial text-[2rem] font-medium leading-[0.95] tracking-[-0.04em] text-[#201712]">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-7 !text-[#4f3523]">{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.82fr)]">
            <article className="paper-panel rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e6d7] text-[#b9653d]">
                  <Workflow className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">
                    System flow
                  </p>
                  <h2 className="mt-2 font-editorial text-[2.2rem] font-medium leading-[0.95] tracking-[-0.05em] text-[#201712]">
                    How AISLI is described.
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {aisliResearch.flow.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[1.55rem] border border-[#dccbbb]/72 bg-[rgba(255,252,247,0.72)] px-5 py-5"
                  >
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#a17e67]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-[1.35rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#221913]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 !text-[#4f3523]">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <div className="space-y-4">
              <article className="paper-panel rounded-[1.9rem] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3e6d7] text-[#b9653d]">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">
                      Publication
                    </p>
                    <h2 className="mt-2 font-editorial text-[2rem] font-medium leading-[0.95] tracking-[-0.04em] text-[#201712]">
                      Citation details
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 !text-[#4f3523]">
                  {aisliResearch.citation}
                </p>
              </article>

              <article className="paper-panel rounded-[1.9rem] p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7a5637]">
                  Authors
                </p>
                <p className="mt-3 text-base font-semibold !text-[#221913]">
                  {aisliResearch.authors.join(" and ")}
                </p>
                <p className="mt-4 text-sm leading-6 !text-[#4f3523]">
                  Published in {aisliResearch.containerTitle}: {aisliResearch.containerSubtitle}.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </BackgroundComponents>
  );
}

function ResearchSignalSketch() {
  return (
    <div className="relative h-[13rem]">
      <div className="absolute left-[8%] top-[18%] flex h-16 w-16 items-center justify-center rounded-full bg-[#f6e2d4] text-[#b9653d] shadow-[0_14px_28px_-24px_rgba(81,57,24,0.32)]">
        <Mic className="h-7 w-7" />
      </div>

      <div className="absolute right-[7%] top-[26%] rounded-[1.4rem] border border-[#dbc9b8]/80 bg-[rgba(255,252,247,0.84)] px-4 py-3 shadow-[0_20px_42px_-36px_rgba(81,57,24,0.28)]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#a17e67]">
          ISL output
        </p>
        <div className="mt-2 flex gap-2">
          <span className="rounded-md bg-[#f4e7da] px-2 py-1 text-sm font-semibold text-[#7a5637]">
            GIF
          </span>
          <span className="rounded-md bg-[#f4e7da] px-2 py-1 text-sm font-semibold text-[#7a5637]">
            Text
          </span>
        </div>
      </div>

      <svg
        viewBox="0 0 420 180"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-[#baaf9f]"
      >
        <path
          d="M88 74C120 62 134 60 152 72C170 84 174 108 195 116C216 124 242 112 266 98"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M106 108C126 100 146 100 164 109C182 118 194 132 216 136C238 140 262 132 286 116"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M192 68H252"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute left-[43%] top-[25%] rounded-[1.6rem] border border-[#dbc9b8]/75 bg-[rgba(255,252,247,0.88)] px-4 py-3 shadow-[0_18px_36px_-34px_rgba(81,57,24,0.28)]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#a17e67]">
          NLP + MT
        </p>
        <p className="mt-2 text-sm font-semibold text-[#221913]">
          Translation layer
        </p>
      </div>
    </div>
  );
}
