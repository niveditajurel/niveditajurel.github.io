import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, FlaskConical } from "lucide-react";
import { BackgroundComponents } from "@/components/ui/background-components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { experiments } from "@/data/experiments";
import { siteConfig } from "@/data/site";

const scanSignals = [
  "Case studies show shipped PM work across startups, enterprise systems, and AI-native products.",
  "Build experiments show how I test ideas, prototype workflows, and keep builder instincts active.",
  "The goal here is fast evaluation: context, role, signal, and where to go deeper next.",
];

export default function Projects() {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;
  const publicCaseStudies = projects.filter((project) => project.href?.startsWith("/projects/"));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <BackgroundComponents
      variant={isClayNotionMode ? "clay-notion-paper" : "concentric-squares"}
      className="min-h-screen bg-background"
      contentClassName="relative"
    >
      <div className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8">
        <section className="mx-auto max-w-7xl border-b border-border/65 pb-10 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(23rem,0.75fr)] lg:items-end">
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
                  "max-w-[13ch] text-balance text-[clamp(2.8rem,4.7vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground",
                  isClayNotionMode && "font-editorial tracking-[-0.045em]",
                )}
              >
                Product work, experiments, and proof of how I operate.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                This page is the main proof surface. Case studies show shipped product work. Build
                experiments show how I test ideas, prototype, and stay close to the tools.
              </p>
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
                How To Read This
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
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                View resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.aside>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-7xl lg:mt-10">
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList
              className={cn(
                "h-auto rounded-full border border-border/60 bg-background/85 p-1",
                isClayNotionMode && "bg-[#fffdf7]/90",
              )}
            >
              <TabsTrigger value="all" className="rounded-full px-5 py-2.5 text-sm font-semibold">
                All
              </TabsTrigger>
              <TabsTrigger value="case-studies" className="rounded-full px-5 py-2.5 text-sm font-semibold">
                Case Studies
              </TabsTrigger>
              <TabsTrigger value="build-experiments" className="rounded-full px-5 py-2.5 text-sm font-semibold">
                Build Experiments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-10">
              <SectionIntro
                eyebrow="Case Studies"
                title="Shipped product work"
                description="The strongest professional proof first: enterprise systems, AI-native product work, and customer-facing PM execution."
                isClayNotionMode={isClayNotionMode}
              />
              <CaseStudyGrid caseStudies={publicCaseStudies} isClayNotionMode={isClayNotionMode} />

              <SectionIntro
                eyebrow="Build Experiments"
                title="Smaller builds in motion"
                description="Experiments that show how I prototype workflows, test AI-assisted ideas, and keep builder instincts active."
                isClayNotionMode={isClayNotionMode}
              />
              <ExperimentGrid isClayNotionMode={isClayNotionMode} />
            </TabsContent>

            <TabsContent value="case-studies" className="space-y-6">
              <SectionIntro
                eyebrow="Case Studies"
                title="Shipped product work"
                description="Projects with enough depth to show context, decisions, and product judgment more clearly."
                isClayNotionMode={isClayNotionMode}
              />
              <CaseStudyGrid caseStudies={publicCaseStudies} isClayNotionMode={isClayNotionMode} />
            </TabsContent>

            <TabsContent value="build-experiments" className="space-y-6">
              <SectionIntro
                eyebrow="Build Experiments"
                title="Prototypes, tools, and AI-assisted product tests"
                description="This is where I pressure-test ideas quickly before they become formal case studies or larger product bets."
                isClayNotionMode={isClayNotionMode}
              />
              <ExperimentGrid isClayNotionMode={isClayNotionMode} />
            </TabsContent>
          </Tabs>
        </section>

        <section className="mx-auto mt-10 max-w-7xl border-t border-border/65 pt-8 lg:mt-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Next Step
              </p>
              <h2
                className={cn(
                  "clay-section-heading max-w-[13ch] text-foreground",
                  isClayNotionMode && "font-editorial md:text-[2.85rem]",
                )}
              >
                If one of these contexts feels close to the kind of problem your team is hiring for, let&apos;s talk.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                I&apos;m strongest where product judgment, systems thinking, and execution matter more than noise.
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

function SectionIntro({
  eyebrow,
  title,
  description,
  isClayNotionMode,
}: {
  eyebrow: string;
  title: string;
  description: string;
  isClayNotionMode: boolean;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
      <h2
        className={cn(
          "clay-section-heading max-w-[12ch] text-foreground",
          isClayNotionMode && "font-editorial md:text-[2.7rem]",
        )}
      >
        {title}
      </h2>
      <p className="max-w-3xl text-base leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}

function CaseStudyGrid({
  caseStudies,
  isClayNotionMode,
}: {
  caseStudies: typeof projects;
  isClayNotionMode: boolean;
}) {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {caseStudies.map((project, index) => {
        const metrics = [project.metrics?.impact, project.metrics?.growth].filter(Boolean) as string[];

        return (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
            className={cn(
              `flex min-h-[31rem] flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br ${project.theme.surface} p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.22)]`,
              isClayNotionMode && "shadow-[0_20px_50px_-38px_rgba(81,57,24,0.16)]",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/74">
                {project.eyebrow}
              </span>
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-foreground/52">
                0{index + 1}
              </span>
            </div>

            <p className="mt-5 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-foreground/62">
              {project.period}
            </p>

            <h3
              className={cn(
                "mt-4 text-balance text-[2rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground",
                isClayNotionMode && "font-editorial md:text-[2.45rem]",
              )}
            >
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-foreground/78">{project.subtitle}</p>
            <p className="mt-4 text-sm leading-7 text-foreground/72">{project.teaser}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/10 bg-white/58 px-3 py-1 text-xs font-semibold text-foreground/72">
                {project.role}
              </span>
              {metrics.map((metric) => (
                <span
                  key={`${project.id}-${metric}`}
                  className="rounded-full border border-black/10 bg-white/58 px-3 py-1 text-xs font-semibold text-foreground/72"
                >
                  {metric}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <Link href={project.href!}>
                <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                  {project.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

function ExperimentGrid({ isClayNotionMode }: { isClayNotionMode: boolean }) {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {experiments.map((experiment, index) => (
        <motion.article
          key={experiment.id}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
          className={cn(
            "flex min-h-[24rem] flex-col rounded-[2rem] border border-border/70 bg-background/90 p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.18)] backdrop-blur-sm",
            isClayNotionMode && "bg-[#fffdf8]/88 shadow-[0_20px_50px_-38px_rgba(81,57,24,0.14)]",
          )}
        >
          <div className="inline-flex w-fit rounded-full bg-primary/10 p-3 text-primary">
            <FlaskConical className="h-5 w-5" />
          </div>

          <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {experiment.eyebrow}
          </p>
          <h3
            className={cn(
              "mt-3 text-balance text-[2rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground",
              isClayNotionMode && "font-editorial",
            )}
          >
            {experiment.title}
          </h3>
          {experiment.description ? (
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{experiment.description}</p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {experiment.status ? (
              <span className="rounded-full border border-border/60 bg-background/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/72">
                {experiment.status}
              </span>
            ) : null}
            {(experiment.tools ?? []).map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border/50 bg-background/55 px-3 py-1 text-xs text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <Link href="/content">
              <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                See related thinking
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
