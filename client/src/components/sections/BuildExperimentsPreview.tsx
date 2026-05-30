import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { experiments } from "@/data/experiments";

export const BuildExperimentsPreview = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section id="case-studies-builds" className={cn("bg-white/48 px-4 py-16 sm:px-6 lg:px-8 lg:py-20", isClayNotionMode && "bg-[#fff8ef]/58")}>
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-8">
        <div className="mb-8 space-y-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Product Case Studies
            </p>
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <h2
                className={cn(
                  "clay-section-heading max-w-[18ch] text-foreground md:text-[2.45rem]",
                  isClayNotionMode && "font-editorial",
                )}
              >
                Product case studies + self-initiated builds.
              </h2>
              <p className="max-w-[40rem] text-base leading-7 text-muted-foreground xl:text-right">
                Some come from formal company work. Others are personal products and active
                experiments I use to test workflows, product bets, and AI-assisted directions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {experiments.map((experiment, index) => {
            const card = (
              <motion.article
                key={experiment.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                className={cn(
                  "relative overflow-hidden rounded-[1.8rem] border border-border/60 bg-background/90 p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.18)] backdrop-blur-sm",
                  isClayNotionMode && "bg-[#fffdf8]/88 shadow-[0_20px_50px_-38px_rgba(81,57,24,0.14)]",
                  experiment.cardTone === "uber" &&
                    "bg-[linear-gradient(180deg,rgba(14,14,14,0.03),rgba(14,14,14,0.06))] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_26px_56px_-40px_rgba(15,23,42,0.28)]",
                )}
              >
              {experiment.backgroundWordmark ? (
                <>
                  <div
                    className="relative -mx-6 -mt-6 mb-5 overflow-hidden border-b border-black/18 bg-[#0d0d0d] px-6 pb-4 pt-5"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 opacity-[0.16]">
                      <div className="absolute inset-x-0 top-0 h-px bg-white/35" />
                      <div className="absolute left-[18%] top-0 h-full w-px bg-white/12" />
                      <div className="absolute right-[20%] top-0 h-full w-px bg-white/10" />
                      <div className="absolute bottom-10 left-0 h-px w-full bg-white/10" />
                    </div>
                    <div className="absolute -left-10 top-10 h-36 w-36 rounded-full border border-white/10" />
                    <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-white/10" />
                    <div className="relative flex min-h-[11.5rem] items-end">
                      <span className="font-sans text-[6.4rem] font-semibold tracking-[-0.09em] text-white/92 sm:text-[7.2rem]">
                        {experiment.backgroundWordmark}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 flex min-h-[6rem] flex-col">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {experiment.eyebrow}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      {experiment.company ? (
                        <p className="text-sm font-medium uppercase tracking-[0.16em] text-foreground/62">
                          {experiment.company}
                        </p>
                      ) : (
                        <span />
                      )}
                      {experiment.tools?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {experiment.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-border/50 bg-background/58 px-3 py-1 text-xs text-muted-foreground"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <h3
                      className={cn(
                        "mt-3 text-balance text-[1.32rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground lg:whitespace-nowrap",
                        isClayNotionMode && "font-editorial text-[1.48rem]",
                      )}
                    >
                      {experiment.caseStudyTitle ?? experiment.title}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-5 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {experiment.eyebrow}
                    </p>
                    <h3
                      className={cn(
                        "clay-card-title text-foreground",
                        isClayNotionMode && "font-editorial text-[1.55rem]",
                      )}
                    >
                      {experiment.title}
                    </h3>
                    {experiment.description ? (
                      <p className="text-sm leading-6 text-muted-foreground">{experiment.description}</p>
                    ) : null}
                  </div>

                  {(experiment.status || experiment.tools?.length) && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {experiment.status ? (
                        <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/72">
                          {experiment.status}
                        </span>
                      ) : null}
                      {experiment.tools?.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-border/50 bg-background/55 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
              </motion.article>
            );

            if (experiment.href) {
              return (
                <Link key={experiment.id} href={experiment.href}>
                  <div className="block cursor-pointer">{card}</div>
                </Link>
              );
            }

            return card;
          })}
        </div>
      </div>
    </section>
  );
};
