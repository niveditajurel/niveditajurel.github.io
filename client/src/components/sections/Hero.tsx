import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, NotebookPen, Search } from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { DoodleSpark, DoodleUnderline } from "@/components/ui/doodle-accents";

const experienceSignals = [
  "Startup PM",
  "Product consultant",
  "Enterprise systems",
];

const productSignals = [
  {
    label: "Systems",
    value: "Structure messy workflows",
    icon: NotebookPen,
    tone: "bg-[#e9ead6]",
  },
  {
    label: "Execution",
    value: "Ship with constraints",
    icon: ArrowUpRight,
    tone: "bg-[#f7dfcf]",
  },
  {
    label: "Customer Lens",
    value: "Find real friction",
    icon: Search,
    tone: "bg-[#f8e8bd]",
  },
];

const featuredProjectMeta: Record<
  string,
  {
    summary: string;
    proof: string;
    roleLabel: string;
    linkLabel: string;
  }
> = {
  "anand-pag": {
    summary:
      "Replaced a legacy vendor-operations workflow with a cloud platform built for coordination, document readiness, and operational reliability.",
    proof: "<5 min sync, 100% job success",
    roleLabel: "Builder PM",
    linkLabel: "Open case study",
  },
  "nomad-ai": {
    summary:
      "Defined pricing, analytics, and MVP structure for an AI-native valuation product.",
    proof: "+865% user growth",
    roleLabel: "Consultant PM",
    linkLabel: "Open case study",
  },
  skingenius: {
    summary:
      "Refined onboarding and recommendations so the first session felt clearer and easier to trust.",
    proof: "+30% engagement",
    roleLabel: "Product manager",
    linkLabel: "Open case study",
  },
};

const featuredProjects = projects.flatMap((project) => {
  const meta = featuredProjectMeta[project.id];

  return meta ? [{ project, meta }] : [];
});

export const Hero = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-transparent px-0 pb-10 pt-6 sm:pt-8 lg:min-h-[calc(100svh-5.75rem)] lg:pb-10 lg:pt-7",
        isClayNotionMode && "lg:min-h-[calc(100svh-5.75rem)]",
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={cn(
            "absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,hsl(var(--primary)/0.055),transparent_28%),radial-gradient(circle_at_82%_12%,hsl(var(--accent)/0.045),transparent_22%),linear-gradient(to_bottom,hsl(var(--background)/0.82),hsl(var(--background)/0.26)_18rem,transparent)]",
            isClayNotionMode &&
              "bg-[radial-gradient(circle_at_14%_8%,hsl(var(--primary)/0.12),transparent_26%),radial-gradient(circle_at_84%_12%,hsl(var(--accent)/0.12),transparent_24%),linear-gradient(to_bottom,hsl(var(--background)/0.9),hsl(var(--background)/0.38)_16rem,transparent)]",
          )}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-border/60" />
      </div>

      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(29rem,0.82fr)] lg:items-center lg:px-8 xl:gap-12",
          isClayNotionMode && "lg:grid-cols-[minmax(0,0.92fr)_minmax(29rem,0.82fr)]",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative max-w-[42rem] space-y-5"
        >
          <div className="relative flex flex-col items-start gap-2.5">
            <div className="flex items-start gap-3 md:gap-4">
              <motion.div
                initial={isClayNotionMode ? { opacity: 0, y: 10 } : undefined}
                animate={isClayNotionMode ? { opacity: 1, y: 0 } : undefined}
                transition={isClayNotionMode ? { duration: 0.6, delay: 0.08, ease: "easeOut" } : undefined}
                className={cn(
                  "inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-background/88 px-3 py-2 shadow-sm backdrop-blur",
                  isClayNotionMode && "bg-[#dfe3cc]/85 px-3.5 py-2 shadow-[0_14px_32px_-24px_rgba(81,57,24,0.18)]",
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0d8] text-[1.28rem] leading-none shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]"
                >
                  👋
                </span>
                <span className="font-sans text-[1.05rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.16rem]">
                  Hi, I&apos;m Niv
                </span>
              </motion.div>

              {isClayNotionMode ? (
                <motion.p
                  initial={{ opacity: 0, y: 8, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: -2 }}
                  transition={{ duration: 0.58, delay: 0.18, ease: "easeOut" }}
                  className="hidden pt-3 font-hand text-[1.45rem] leading-none text-[#b87944] md:block"
                >
                  builder instincts
                </motion.p>
              ) : null}
            </div>

            <motion.div
              initial={isClayNotionMode ? { opacity: 0, y: 8 } : undefined}
              animate={isClayNotionMode ? { opacity: 1, y: 0 } : undefined}
              transition={isClayNotionMode ? { duration: 0.58, delay: 0.14, ease: "easeOut" } : undefined}
              className="ml-1 inline-flex items-center rounded-full border border-[#1f1a14]/20 bg-[#fffaf1]/76 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#463a2b] shadow-[0_14px_30px_-26px_rgba(31,26,20,0.24)] sm:text-[0.8rem]"
            >
              AI-first Product Manager
            </motion.div>

            <motion.p
              initial={isClayNotionMode ? { opacity: 0, y: 10 } : undefined}
              animate={isClayNotionMode ? { opacity: 1, y: 0 } : undefined}
              transition={isClayNotionMode ? { duration: 0.58, delay: 0.18, ease: "easeOut" } : undefined}
              style={{ color: "#1f1a14", WebkitTextFillColor: "#1f1a14" }}
              className={cn(
                "ml-1 max-w-[34rem] text-sm font-medium leading-6 sm:text-base",
                isClayNotionMode && "text-[1rem] font-semibold leading-7",
              )}
            >
              A generalist with engineering roots and builder instincts
            </motion.p>

          </div>

          <div className="space-y-4">
            <motion.h1
              initial={isClayNotionMode ? { opacity: 0, y: 18 } : undefined}
              animate={isClayNotionMode ? { opacity: 1, y: 0 } : undefined}
              transition={isClayNotionMode ? { duration: 0.72, delay: 0.14, ease: "easeOut" } : undefined}
              className={cn(
                "max-w-[16ch] text-balance text-[clamp(2.55rem,3.9vw,4.25rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-foreground",
                isClayNotionMode &&
                  "max-w-[16ch] font-editorial text-[clamp(2.65rem,4vw,4.35rem)] leading-[0.92] tracking-[-0.062em]",
              )}
            >
              I bring{" "}
              <span className="relative inline-block italic text-foreground">clarity</span> to messy product{" "}
              <span className="relative inline-block">
                spaces
                {isClayNotionMode ? (
                  <DoodleUnderline className="absolute -bottom-3 left-0 h-5 w-[9.5rem] text-[#d38a47]" delay={0.26} />
                ) : null}
              </span>
              .
            </motion.h1>

            <motion.p
              initial={isClayNotionMode ? { opacity: 0, y: 12 } : undefined}
              animate={isClayNotionMode ? { opacity: 1, y: 0 } : undefined}
              transition={isClayNotionMode ? { duration: 0.6, delay: 0.22, ease: "easeOut" } : undefined}
              className={cn(
                "max-w-[38rem] text-pretty text-base font-medium leading-7 text-foreground/80 sm:text-lg",
                isClayNotionMode &&
                  "max-w-[40rem] text-[1.12rem] leading-[1.7] tracking-[-0.015em] text-[hsl(var(--foreground)/0.82)]",
              )}
            >
              Former software engineer turned product manager. I&apos;ve worked with startups and
              enterprise teams, shaping unclear workflows, legacy systems, and customer needs into
              direction teams can build and ship.
            </motion.p>

            <motion.div
              initial={isClayNotionMode ? { opacity: 0, y: 10 } : undefined}
              animate={isClayNotionMode ? { opacity: 1, y: 0 } : undefined}
              transition={isClayNotionMode ? { duration: 0.58, delay: 0.28, ease: "easeOut" } : undefined}
              className="flex flex-wrap gap-2"
            >
              {experienceSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-[#1f1a14]/18 bg-[#fffaf1]/66 px-3.5 py-1.5 text-[0.78rem] font-semibold tracking-[-0.01em] text-[#463a2b]"
                >
                  {signal}
                </span>
              ))}
            </motion.div>

          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link href="/work">
              <span
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5",
                  isClayNotionMode &&
                    "bg-[#1f1a14] px-6 py-3.5 text-[#fff8ef] shadow-[0_16px_40px_-30px_rgba(31,26,20,0.5)] hover:-translate-y-1",
                )}
              >
                View Work
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-border bg-background/88 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors duration-200 hover:border-primary/40 hover:text-primary",
                isClayNotionMode && "bg-[#fffaf1]/84 px-6 py-3.5 hover:bg-[#fff5e6]",
              )}
            >
              View Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/journey">
              <span
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background/88 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors duration-200 hover:border-primary/40 hover:text-primary",
                  isClayNotionMode && "bg-[#fffaf1]/84 px-6 py-3.5 hover:bg-[#fff5e6]",
                )}
              >
                Explore Journey
              </span>
            </Link>
          </div>

          {!isClayNotionMode ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.28, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground"
            >
              <span>0 to 1 product thinking</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Research to roadmap</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Cross-functional trust</span>
            </motion.div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[38rem] pt-2 lg:mx-0 lg:justify-self-end lg:pt-6"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -right-6 top-0 hidden h-[24rem] w-[24rem] text-[#c79a67]/45 lg:block"
          >
            <defs>
              <radialGradient id="hero-ring" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="100%" stopColor="currentColor" />
              </radialGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="88"
              fill="none"
              stroke="url(#hero-ring)"
              strokeWidth="0.8"
              strokeDasharray="3 7"
              className="animate-spin-slow"
            />
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeDasharray="1.6 6"
              opacity="0.55"
              className="animate-spin-slow"
              style={{ animationDuration: "54s", animationDirection: "reverse" }}
            />
          </svg>
          <motion.div
            animate={isClayNotionMode ? { y: [0, -8, 0] } : undefined}
            transition={isClayNotionMode ? { duration: 9, repeat: Infinity, ease: "easeInOut" } : undefined}
            className="absolute -right-6 top-6 h-28 w-28 rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            animate={isClayNotionMode ? { y: [0, 10, 0] } : undefined}
            transition={isClayNotionMode ? { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.6 } : undefined}
            className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-accent/10 blur-3xl"
          />

          <motion.div
            whileHover={isClayNotionMode ? { y: -4, rotate: -0.4 } : undefined}
            transition={isClayNotionMode ? { duration: 0.28, ease: "easeOut" } : undefined}
            className={cn(
              "relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/90 p-4 shadow-[0_28px_100px_-65px_rgba(15,23,42,0.42)] backdrop-blur-md",
              isClayNotionMode && "clay-notion-surface bg-[#fffaf4]/82 shadow-[0_28px_80px_-48px_rgba(85,60,26,0.2)]",
            )}
          >
            <div className="relative z-10 grid gap-5">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                    Product Snapshot
                  </p>
                  <DoodleUnderline className="mt-1 h-3 w-16 text-[#6c7a50]" delay={0.2} />
                  <p className="mt-2 max-w-[26rem] text-lg leading-7 tracking-[-0.025em] text-foreground">
                    Technical range. Customer lens. Shipping calm.
                  </p>
                </div>
                <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#f4dfcf] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground">
                  <span className="h-2 w-2 rounded-full bg-[#b86f3b]" />
                  Open to product roles
                </span>
              </div>

              <div className="grid gap-5">
                <div className="relative flex h-[20.5rem] items-center justify-center overflow-hidden rounded-[1.45rem] border border-border/80 bg-[#f8f0e6] sm:h-[21.5rem] lg:h-[22rem]">
                  <img
                    src="/profile-product-doodles.png"
                    alt="Portrait of Nivedita"
                    className="h-full w-full object-cover object-center"
                  />
                  {isClayNotionMode ? (
                    <DoodleSpark className="absolute right-5 top-5 h-8 w-8 text-[#1f1a14]" delay={0.28} />
                  ) : null}
                </div>
              </div>

              <div className="grid gap-2.5 border-t border-dashed border-border/80 pt-3 sm:grid-cols-3">
                {productSignals.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className={cn("rounded-[1rem] border border-border/60 px-3.5 py-2.5 backdrop-blur-sm", item.tone)}
                    >
                      <div className="mb-1.5 flex items-center gap-2 text-foreground">
                        <Icon className="h-4 w-4 shrink-0" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/80">
                          {item.label}
                        </p>
                      </div>
                      <p className="mt-1.5 text-[0.8rem] leading-5 text-foreground">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.22, ease: "easeOut" }}
          className="relative lg:col-span-2"
        >
          <div
            className={cn(
              "rounded-[2.15rem] border border-border/70 bg-background/76 p-5 shadow-[0_24px_70px_-56px_rgba(15,23,42,0.24)] backdrop-blur-sm sm:p-6 lg:p-7",
              isClayNotionMode && "paper-panel bg-[#fffdf7]/84 shadow-[0_26px_60px_-44px_rgba(81,57,24,0.16)]",
            )}
          >
            <div className="flex flex-col gap-4 border-b border-border/60 pb-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[36rem] space-y-2.5">
                <h2
                  className={cn(
                    "text-[clamp(1.45rem,2vw,2rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-foreground",
                    isClayNotionMode && "font-editorial font-medium text-[clamp(1.85rem,2.4vw,2.45rem)] tracking-[-0.05em]",
                  )}
                >
                  Featured Work
                </h2>
                <p className="max-w-[34rem] text-sm leading-6 text-muted-foreground sm:text-[0.98rem]">
                  A quick look at product work across enterprise systems, AI products, and customer-facing experiences.
                </p>
              </div>

              <Link href="/work">
                <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                  Browse the full work page
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            <div className="mt-5 grid items-stretch gap-4 lg:grid-cols-3">
              {featuredProjects.map(({ project, meta }, index) => {
                return (
                  <Link key={project.id} href={project.href ?? "/work"}>
                    <span
                      className={cn(
                        `group relative block h-full min-h-[21.75rem] cursor-pointer overflow-hidden rounded-[1.8rem] border border-border/70 bg-gradient-to-br ${project.theme.surface} p-5 text-left shadow-[0_18px_50px_-42px_rgba(15,23,42,0.2)] transition-transform duration-200 hover:-translate-y-1`,
                        isClayNotionMode && "shadow-[0_22px_48px_-40px_rgba(81,57,24,0.16)]",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn("absolute -right-2 top-2 h-24 w-24 rounded-full opacity-45 blur-2xl", project.theme.accent)}
                      />

                      <span className="relative flex h-full flex-col gap-5">
                        <span className="space-y-4">
                          <span className="flex items-start justify-between gap-4">
                            <span className="flex flex-wrap gap-2">
                              <span
                                className={cn(
                                  "inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-foreground/78",
                                  project.theme.badge,
                                )}
                              >
                                {project.eyebrow}
                              </span>
                            </span>
                            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/55">
                              0{index + 1}
                            </span>
                          </span>

                          <span className="block space-y-2.5">
                            <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-foreground/56">
                              {project.period}
                            </span>
                            <span
                              className={cn(
                                "block text-[1.45rem] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground",
                                isClayNotionMode && "font-editorial font-medium text-[1.66rem] tracking-[-0.043em]",
                              )}
                            >
                              {project.title}
                            </span>
                            <span className="block max-w-[29ch] text-[0.98rem] leading-6 text-foreground/76">
                              {meta.summary}
                            </span>
                          </span>
                        </span>

                        <span className="mt-auto block space-y-3">
                          <span className="flex flex-wrap gap-2">
                            <span
                              className={cn(
                                "rounded-full border border-black/10 px-3 py-2 text-[0.78rem] font-semibold leading-5 text-foreground/76 backdrop-blur-sm",
                                project.theme.badge,
                              )}
                            >
                              {meta.roleLabel}
                            </span>
                            <span
                              className={cn(
                                "rounded-full border border-black/10 px-3 py-2 text-[0.78rem] font-semibold leading-5 text-foreground/88 backdrop-blur-sm",
                                project.theme.badge,
                              )}
                            >
                              {meta.proof}
                            </span>
                          </span>

                          <span className="flex items-center justify-end gap-2 border-t border-black/10 pt-4 text-sm font-semibold text-foreground">
                            <span className="inline-flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1">
                              {meta.linkLabel}
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
