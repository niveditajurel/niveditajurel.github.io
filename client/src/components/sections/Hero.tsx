import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, NotebookPen, Search } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { DoodleArrow, DoodleSpark, DoodleUnderline } from "@/components/ui/doodle-accents";

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

export const Hero = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;
  const scrollToFeaturedWork = () => {
    document.getElementById("featured-work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-transparent px-0 pb-10 pt-2 sm:pt-3 lg:min-h-[calc(100svh-4.65rem)] lg:pb-10 lg:pt-3",
        isClayNotionMode && "lg:min-h-[calc(100svh-4.65rem)]",
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
                <motion.div
                  initial={{ opacity: 0, y: 8, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: -2 }}
                  transition={{ duration: 0.58, delay: 0.18, ease: "easeOut" }}
                  className="relative hidden pl-8 pt-3 md:block"
                >
                  <p className="font-hand text-[1.45rem] leading-none text-[#b87944]">AI-first</p>
                  <DoodleArrow className="absolute -left-3 top-0 h-7 w-16 text-[#b87944]" delay={0.28} />
                </motion.div>
              ) : null}
            </div>

            <motion.div
              initial={isClayNotionMode ? { opacity: 0, y: 8 } : undefined}
              animate={isClayNotionMode ? { opacity: 1, y: 0 } : undefined}
              transition={isClayNotionMode ? { duration: 0.58, delay: 0.14, ease: "easeOut" } : undefined}
              className="ml-1 inline-flex items-center pt-1 text-[0.77rem] font-semibold uppercase tracking-[0.18em] text-[#6a5846] sm:text-[0.82rem]"
            >
              Product Builder + Manager
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
              Focused on product clarity, systems thinking, and execution
            </motion.p>

          </div>

          <div className="space-y-4">
            <motion.h1
              initial={isClayNotionMode ? { opacity: 0, y: 18 } : undefined}
              animate={isClayNotionMode ? { opacity: 1, y: 0 } : undefined}
              transition={isClayNotionMode ? { duration: 0.72, delay: 0.14, ease: "easeOut" } : undefined}
              className={cn(
                "max-w-[16ch] text-balance text-[clamp(2.55rem,3.9vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground",
                isClayNotionMode &&
                  "max-w-[16ch] font-editorial text-[clamp(2.65rem,4vw,4.35rem)] leading-[0.98] tracking-[-0.045em]",
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
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.92rem] font-medium tracking-[-0.01em] text-[#5f5143]"
            >
              {experienceSignals.map((signal, index) => (
                <div key={signal} className="inline-flex items-center gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#c98b57]" />
                  ) : null}
                  <span>{signal}</span>
                </div>
              ))}
            </motion.div>

          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={scrollToFeaturedWork}
              className="appearance-none border-0 bg-transparent p-0"
            >
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
            </button>
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
                  "inline-flex cursor-pointer items-center gap-2 px-1 py-2 text-sm font-semibold text-[#57493b] transition-colors duration-200 hover:text-[#1f1a14]",
                  isClayNotionMode && "hover:text-[#1f1a14]",
                )}
              >
                Explore Journey
                <ArrowRight className="h-4 w-4" />
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

      </div>
    </section>
  );
};
