import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { experiments } from "@/data/experiments";
import {
  EditorialThumbnailLink,
  ThumbnailPreviewMedia,
} from "@/components/ui/editorial-thumbnail-link";
import {
  AnimatedProjectThumbnail,
  type AnimatedThumbnailVariant,
} from "@/components/ui/AnimatedProjectThumbnail";

export const BuildExperimentsPreview = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section
      id="case-studies-builds"
      className={cn(
        "bg-white/48 px-4 py-12 sm:px-6 lg:px-8 lg:py-14",
        isClayNotionMode && "bg-[#fff8ef]/58",
      )}
    >
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-6 lg:pt-7">
        <div className="mb-6 space-y-3">
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
                experiments I use to test workflows, portfolio builds, and AI-assisted directions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
          {experiments.map((experiment, index) => {
            const isDarkThumbnail =
              experiment.thumbnail?.panelClassName?.includes("#120f0d") ??
              experiment.id === "uber-case-study";

            const card = (
              <motion.article
                key={experiment.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-border/60 bg-background/90 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_26px_56px_-40px_rgba(15,23,42,0.24)]",
                  isClayNotionMode && "bg-[#fffdf8]/88 shadow-[0_20px_50px_-38px_rgba(81,57,24,0.14)]",
                )}
              >
                <EditorialThumbnailLink
                  href={experiment.href}
                  ctaLabel={experiment.id === "uber-case-study" ? "View case study" : "View build"}
                  tone={isDarkThumbnail ? "dark" : "light"}
                  disableAmbientFloat={Boolean(experiment.thumbnail?.videoSrc) || experiment.id === "learning-council" || experiment.id === "finwise" || experiment.id === "uber-case-study"}
                  panelClassName={cn(
                    "relative min-h-[22rem] border-b border-[#d8c7b7]/72",
                    experiment.thumbnail?.panelClassName ?? "bg-[#f2ebe2]",
                  )}
                >
                  {(experiment.id === "learning-council" || experiment.id === "finwise" || experiment.id === "uber-case-study") ? (
                    <AnimatedProjectThumbnail
                      variant={experiment.id === "uber-case-study" ? "uber-driver-navigation" : experiment.id as AnimatedThumbnailVariant}
                      motion="hover"
                    />
                  ) : experiment.thumbnail ? (
                    <ThumbnailPreviewMedia
                      imageSrc={experiment.thumbnail.src}
                      videoSrc={experiment.thumbnail.videoSrc}
                      alt={experiment.thumbnail.alt}
                      imageClassName={cn(
                        "ease-snappy transition-transform duration-700 group-hover/thumbnail:scale-[1.04]",
                        experiment.thumbnail.imageClassName ?? "object-cover object-center",
                      )}
                      videoClassName={cn(
                        "ease-snappy transition-transform duration-700 group-hover/thumbnail:scale-[1.04]",
                        experiment.thumbnail.imageClassName ?? "object-cover object-center",
                      )}
                    />
                  ) : experiment.backgroundWordmark ? (
                    <div className="relative h-full overflow-hidden bg-[#0d0d0d] px-6 pb-4 pt-5 text-white">
                      <div className="absolute inset-0 opacity-[0.16]">
                        <div className="absolute inset-x-0 top-0 h-px bg-white/35" />
                        <div className="absolute left-[18%] top-0 h-full w-px bg-white/12" />
                        <div className="absolute right-[20%] top-0 h-full w-px bg-white/10" />
                        <div className="absolute bottom-10 left-0 h-px w-full bg-white/10" />
                      </div>
                      <div className="absolute -left-10 top-10 h-36 w-36 rounded-full border border-white/10" />
                      <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-white/10" />
                      <div className="relative flex h-full min-h-[17rem] items-end">
                        <span className="font-sans text-[6.4rem] font-semibold tracking-[-0.09em] text-white/92 sm:text-[7.2rem]">
                          {experiment.backgroundWordmark}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="inline-flex rounded-full bg-primary/10 p-4 text-primary">
                        <BriefcaseBusiness className="h-6 w-6" />
                      </div>
                    </div>
                  )}
                </EditorialThumbnailLink>

                <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                  {/* Eyebrow + category tag */}
                  <div className="flex items-center gap-2">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {experiment.eyebrow}
                    </p>
                    {experiment.tools?.[0] ? (
                      <>
                        <span className="text-[#c4b3a0]">·</span>
                        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#9a7a62]">
                          {experiment.tools[0]}
                        </span>
                      </>
                    ) : null}
                  </div>

                  {/* Title + description */}
                  <h3
                    className={cn(
                      "mt-2.5 text-balance text-[1.32rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground",
                      isClayNotionMode && "font-editorial text-[1.5rem]",
                    )}
                  >
                    {experiment.caseStudyTitle ?? experiment.title}
                  </h3>
                  {experiment.description ? (
                    <p className="mt-2 line-clamp-2 text-[0.82rem] leading-[1.55] text-muted-foreground">
                      {experiment.description}
                    </p>
                  ) : null}

                  {/* CTAs */}
                  {experiment.href ? (
                    <div className="mt-auto flex items-center gap-2 border-t border-[#ede0d0]/70 pt-4">
                      <Link href={experiment.href}>
                        <span className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-[#1f1a14] px-3 py-1.5 text-[0.72rem] font-semibold text-[#fff8ef] transition-transform hover:-translate-y-0.5">
                          Case Study
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    </div>
                  ) : null}
                </div>
              </motion.article>
            );

            return card;
          })}
        </div>
      </div>
    </section>
  );
};
