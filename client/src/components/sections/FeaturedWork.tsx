import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import {
  EditorialThumbnailLink,
  ThumbnailPreviewMedia,
} from "@/components/ui/editorial-thumbnail-link";
import { AnimatedProjectThumbnail, type AnimatedThumbnailVariant } from "@/components/ui/AnimatedProjectThumbnail";

const featuredProjectMeta: Record<
  string,
  {
    roleLabel: string;
    visualNote: string;
    displayTitle?: string;
    displayPeriod?: string;
    mediaKind?: "image" | "wordmark";
    mediaSrc?: string;
    mediaVideoSrc?: string;
    mediaAlt?: string;
    mediaPanelClassName?: string;
    mediaClassName?: string;
    mediaTone?: "light" | "dark";
    wordmark?: string;
    wordmarkEyebrow?: string;
    wordmarkNote?: string;
  }
> = {
  "anand-pag": {
    roleLabel: "Builder PM",
    visualNote: "Enterprise operations product for workflow clarity, vendor coordination, and internal process visibility.",
    displayTitle: "Anand PAG",
    displayPeriod: "2025 - Present",
    mediaKind: "image",
    mediaSrc: "/anand-workflow-system-map.png",
    mediaVideoSrc: "/thumbnail-previews/anand-workflow-system-map-preview.mp4",
    mediaAlt: "Anand PAG workflow and system map preview",
    mediaPanelClassName: "bg-white",
    mediaClassName: "h-full w-full object-contain p-4 sm:p-5",
    mediaTone: "light",
  },
  "nomad-ai": {
    roleLabel: "Product Manager",
    visualNote: "Wealth OS for SMBs, built around valuation workflows, financial clarity, and AI-assisted decision support.",
    mediaKind: "image",
    mediaSrc: "/nomad-ai-dashboard.png",
    mediaVideoSrc: "/thumbnail-previews/nomad-ai-dashboard-preview.mp4",
    mediaAlt: "Nomad AI dashboard preview",
    mediaPanelClassName: "bg-[#050709]",
    mediaClassName: "h-full w-full object-contain p-4 sm:p-5",
    mediaTone: "dark",
  },
  skingenius: {
    roleLabel: "Product Manager",
    visualNote: "AI-led skincare ecommerce marketplace focused on discovery, trust, and recommendation-led shopping.",
    mediaKind: "image",
    mediaSrc: "/teasers/skingenius1.jpg",
    mediaVideoSrc: "/thumbnail-previews/skingenius-preview.mp4",
    mediaAlt: "Skingenius website preview",
    mediaPanelClassName: "bg-[#edd5c6]",
    mediaClassName: "h-full w-full object-contain p-4 sm:p-5",
    mediaTone: "light",
  },
};

const featuredProjects = projects.flatMap((project) => {
  const meta = featuredProjectMeta[project.id];
  return meta ? [{ project, meta }] : [];
});

export const FeaturedWork = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section id="featured-work" className="bg-transparent px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-6 lg:pt-7">
        <div className="mb-6 space-y-3 lg:mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Featured Work
          </p>
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <h2
              className={cn(
                "clay-section-heading max-w-[13ch] text-foreground md:text-[2.7rem]",
                isClayNotionMode && "font-editorial",
              )}
            >
              Product work to open first.
            </h2>
            <p className="max-w-[38rem] text-base leading-7 text-muted-foreground xl:text-right">
              Start with the product itself, then open the case study for the product decisions,
              execution details, and role context behind it.
            </p>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {featuredProjects.map(({ project, meta }, index) => (
            <FeaturedWorkTile
              key={project.id}
              project={project}
              roleLabel={meta.roleLabel}
              visualNote={meta.visualNote}
              displayTitle={meta.displayTitle}
              displayPeriod={meta.displayPeriod}
              mediaKind={meta.mediaKind}
              mediaSrc={meta.mediaSrc}
              mediaVideoSrc={meta.mediaVideoSrc}
              mediaAlt={meta.mediaAlt}
              mediaPanelClassName={meta.mediaPanelClassName}
              mediaClassName={meta.mediaClassName}
              mediaTone={meta.mediaTone}
              wordmark={meta.wordmark}
              wordmarkNote={meta.wordmarkNote}
              index={index}
              isClayNotionMode={isClayNotionMode}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Link href="/projects">
            <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/65 bg-[#fffaf2]/78 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/35 hover:bg-[#fff6e9] hover:text-primary">
              View more case studies
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

function FeaturedWorkTile({
  project,
  roleLabel,
  visualNote,
  displayTitle,
  displayPeriod,
  mediaKind,
  mediaSrc,
  mediaVideoSrc,
  mediaAlt,
  mediaPanelClassName,
  mediaClassName,
  mediaTone,
  wordmark,
  wordmarkEyebrow,
  wordmarkNote,
  index,
  isClayNotionMode,
}: {
  project: (typeof featuredProjects)[number]["project"];
  roleLabel: string;
  visualNote: string;
  displayTitle?: string;
  displayPeriod?: string;
  mediaKind?: "image" | "wordmark";
  mediaSrc?: string;
  mediaVideoSrc?: string;
  mediaAlt?: string;
  mediaPanelClassName?: string;
  mediaClassName?: string;
  mediaTone?: "light" | "dark";
  wordmark?: string;
  wordmarkEyebrow?: string;
  wordmarkNote?: string;
  index: number;
  isClayNotionMode: boolean;
}) {
  const resolvedMediaSrc = mediaSrc ?? (project.imageMode !== "none" ? project.image : undefined);
  const imageClassName =
    mediaClassName ??
    (project.imageMode === "contain"
      ? "h-full w-full object-contain p-6"
      : "h-full w-full object-cover object-center");

  const ctaLabel = project.externalHref ? "View product page" : "View case study";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-[#fffdf8]/90 shadow-[0_20px_60px_-44px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_28px_70px_-42px_rgba(63,42,20,0.26)]",
        isClayNotionMode &&
          "shadow-[0_22px_56px_-40px_rgba(81,57,24,0.15)] hover:shadow-[0_30px_72px_-44px_rgba(81,57,24,0.22)]",
      )}
    >
      {/* Thumbnail */}
      <EditorialThumbnailLink
        href={project.href}
        externalHref={project.externalHref}
        ctaLabel={ctaLabel}
        tone={mediaTone ?? "light"}
        disableAmbientFloat
        panelClassName={cn(
          "relative min-h-[22rem] sm:min-h-[24rem]",
          mediaPanelClassName ?? "bg-[#f7efe4]",
        )}
      >
        <AnimatedProjectThumbnail variant={project.id as AnimatedThumbnailVariant} motion="hover" />
      </EditorialThumbnailLink>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">

        {/* Top row — role chip + period */}
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#f3e8dd] px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#9a623c]">
            {roleLabel}
          </span>
          <span className="text-[0.68rem] text-[#b0998a]">{displayPeriod ?? project.period}</span>
        </div>

        {/* Title + description */}
        <div className="flex-1 space-y-1.5">
          <h3
            className={cn(
              "text-[1.55rem] font-semibold leading-[1.06] tracking-[-0.04em] text-[#1a1310]",
              isClayNotionMode && "font-editorial",
            )}
          >
            {displayTitle ?? project.title}
          </h3>
          {visualNote ? (
            <p className="line-clamp-2 text-[0.84rem] leading-[1.55] text-[#7a6450]">
              {visualNote}
            </p>
          ) : null}
        </div>

        {/* Bottom row — impact metric + CTAs */}
        <div className="flex items-center justify-end gap-3 border-t border-[#ede0d0]/70 pt-4">
          <div className="flex items-center gap-2">
            {project.externalHref ? (
              <a
                href={project.externalHref}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-1 rounded-full border border-[#ddd0c0] bg-white/80 px-3 py-1.5 text-[0.72rem] font-semibold text-[#4a3728] transition-colors hover:border-[#c9a882] hover:text-[#7a4f2a]"
              >
                Product
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ) : null}
            {project.href ? (
              <Link href={project.href}>
                <span
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-[#1f1a14] px-3 py-1.5 text-[0.72rem] font-semibold text-[#fff8ef] transition-transform hover:-translate-y-0.5"
                >
                  Case Study
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
