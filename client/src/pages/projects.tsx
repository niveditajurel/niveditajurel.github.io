import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";
import { cn } from "@/lib/utils";
import { projects, type ProjectMetrics } from "@/data/projects";
import { siteConfig } from "@/data/site";

const metricMeta: Array<{ key: keyof ProjectMetrics; label: string }> = [
  { key: "users", label: "Scope" },
  { key: "growth", label: "Growth" },
  { key: "timeline", label: "Timeline" },
  { key: "impact", label: "Impact" },
];

const scanSignals = [
  "Translate ambiguity into structured decisions",
  "Work across AI products, enterprise systems, and activation-heavy user flows",
  "Move from research and framing into execution and iteration",
];

export default function Projects() {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;
  const publicCaseStudies = projects.filter((project) => project.href?.startsWith("/projects/"));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const scrollToProject = (id: string) => {
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(23rem,0.75fr)] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="space-y-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Work
              </p>
              <h1
                className={cn(
                  "max-w-[13ch] text-[clamp(2.8rem,4.7vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-foreground",
                  isClayNotionMode && "font-editorial font-medium tracking-[-0.065em]",
                )}
              >
                Product work shaped by clarity, systems thinking, and follow-through.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                This page is designed for a fast scan. Each project shows the context, the product move,
                and the signal it gives about how I work with founders, teams, and ambiguous problem spaces.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => scrollToProject(project.id)}
                    className="rounded-full border border-border/70 bg-background/84 px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary/35 hover:text-primary"
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              className={cn(
                "rounded-[2rem] border border-border/70 bg-background/80 p-6 shadow-[0_24px_70px_-56px_rgba(15,23,42,0.22)] backdrop-blur-sm",
                isClayNotionMode && "paper-panel bg-[#fffdf7]/88 shadow-[0_24px_60px_-42px_rgba(81,57,24,0.16)]",
              )}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                What To Look For
              </p>
              <div className="mt-4 space-y-3">
                {scanSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-[1.2rem] border border-border/55 bg-background/70 px-4 py-3 text-sm leading-6 text-foreground/78"
                  >
                    {signal}
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-border/60 pt-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  The full archive is here, and {publicCaseStudies.length} projects currently have public
                  case-study pages with deeper delivery detail.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {publicCaseStudies.map((project) => (
                    <Link key={project.id} href={project.href!}>
                      <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                        {project.title}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                  <a
                    href={siteConfig.links.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    Resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-7xl space-y-6 lg:mt-10 lg:space-y-8">
          {projects.map((project, index) => {
            const projectMetrics = metricMeta.reduce<Array<{ label: string; value: string }>>((acc, item) => {
              const value = project.metrics?.[item.key];

              if (value) {
                acc.push({ label: item.label, value });
              }

              return acc;
            }, []);

            return (
              <motion.article
                id={project.id}
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.62, delay: index * 0.06, ease: "easeOut" }}
                className={cn(
                  `overflow-hidden rounded-[2.3rem] border border-border/70 bg-gradient-to-br ${project.theme.surface} p-5 shadow-[0_22px_70px_-56px_rgba(15,23,42,0.24)] sm:p-6 lg:p-7`,
                  isClayNotionMode && "shadow-[0_28px_70px_-50px_rgba(81,57,24,0.16)]",
                )}
              >
                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-8">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground/58">
                          {project.eyebrow}
                        </p>
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-white/55 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/72">
                          {project.period}
                        </span>
                      </div>
                      <span className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-foreground/50">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h2
                        className={cn(
                          "text-[2rem] font-semibold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-[2.3rem]",
                          isClayNotionMode && "font-editorial font-medium tracking-[-0.055em] sm:text-[2.8rem]",
                        )}
                      >
                        {project.title}
                      </h2>
                      <p className="max-w-xl text-base font-medium leading-7 text-foreground/78">
                        {project.subtitle}
                      </p>
                      <p className="max-w-xl text-sm leading-6 text-foreground/72 sm:text-base">
                        {project.teaser}
                      </p>
                    </div>

                    <div className="rounded-[1.4rem] border border-black/10 bg-white/52 p-4 backdrop-blur-sm">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/54">
                        Recruiter Signal
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground/78">{project.recruiterSignal}</p>
                    </div>

                    <div className="rounded-[1.4rem] border border-black/10 bg-white/45 p-4">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/54">
                        Role
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground/78">{project.role}</p>
                    </div>

                    {project.href ? (
                      <div className="pt-1">
                        <Link href={project.href}>
                          <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                            {project.ctaLabel}
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </Link>
                      </div>
                    ) : null}
                  </div>

                  <div className="space-y-4">
                    <div
                      className={cn(
                        "relative overflow-hidden rounded-[1.9rem] border border-black/8 p-4 sm:p-5",
                        project.theme.imageSurface,
                      )}
                    >
                      <div className={cn("absolute right-4 top-4 h-20 w-20 rounded-full opacity-60 blur-2xl", project.theme.accent)} />
                      {project.image && project.imageMode !== "none" ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className={cn(
                            "relative z-10 w-full rounded-[1.35rem] border border-white/40 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]",
                            project.imageMode === "cover"
                              ? "h-[17rem] object-cover sm:h-[20rem]"
                              : "h-[15rem] object-contain sm:h-[18rem]",
                          )}
                        />
                      ) : (
                        <div className="relative z-10 flex min-h-[15rem] flex-col justify-between rounded-[1.45rem] border border-black/10 bg-white/68 p-5 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.18)] sm:min-h-[18rem]">
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground/52">
                            Live operational work
                          </p>
                          <div>
                            <h3 className="text-[1.8rem] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground">
                              Systems before screens.
                            </h3>
                            <p className="mt-3 max-w-md text-sm leading-6 text-foreground/72">
                              Enterprise product work sometimes starts with process maps, handoffs,
                              and decision pathways rather than polished UI. That is the point here.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.35rem] border border-black/10 bg-white/52 p-4">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/54">
                          Challenge
                        </p>
                        <p className="mt-2 text-sm leading-6 text-foreground/78">{project.challenge}</p>
                      </div>
                      <div className="rounded-[1.35rem] border border-black/10 bg-white/52 p-4">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/54">
                          Response
                        </p>
                        <p className="mt-2 text-sm leading-6 text-foreground/78">{project.solution}</p>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {projectMetrics.map((metric) => (
                        <div
                          key={`${project.id}-${metric.label}`}
                          className="rounded-[1.2rem] border border-black/10 bg-white/55 px-4 py-3"
                        >
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-foreground/52">
                            {metric.label}
                          </p>
                          <p className="mt-1 text-sm font-semibold leading-6 text-foreground/84">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.35rem] border border-black/10 bg-white/52 p-4">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/54">
                          Key Moves
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/78">
                          {project.process?.slice(0, 4).map((step) => (
                            <li key={step} className="flex gap-2">
                              <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[1.35rem] border border-black/10 bg-white/52 p-4">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/54">
                          Outcomes
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/78">
                          {project.results?.slice(0, 4).map((result) => (
                            <li key={result} className="flex gap-2">
                              <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>

        <section className="mx-auto mt-10 max-w-7xl border-t border-border/65 pt-8 lg:mt-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Next Step
              </p>
              <h2
                className={cn(
                  "text-3xl font-semibold tracking-[-0.045em] text-foreground md:text-4xl",
                  isClayNotionMode && "font-editorial font-medium tracking-[-0.05em] md:text-[3rem]",
                )}
              >
                If one of these projects feels close to the kind of team or problem you&apos;re hiring for, let&apos;s talk.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                I&apos;m especially energized by roles where structure, product judgment, and calm execution
                matter more than noise.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#1f1a14] px-6 py-3.5 text-sm font-semibold text-[#fff8ef] shadow-[0_16px_36px_-26px_rgba(31,26,20,0.42)] transition-transform duration-200 hover:-translate-y-0.5">
                  Start a conversation
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
          </div>
        </section>
      </div>
    </BackgroundComponents>
  );
}
