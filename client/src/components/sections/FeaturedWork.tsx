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
        "group relative flex h-full min-h-[33.5rem] flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-[#fffdf8]/90 shadow-[0_20px_60px_-44px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_28px_70px_-42px_rgba(63,42,20,0.26)]",
        isClayNotionMode &&
          "shadow-[0_22px_56px_-40px_rgba(81,57,24,0.15)] hover:shadow-[0_30px_72px_-44px_rgba(81,57,24,0.22)]",
      )}
    >
      <EditorialThumbnailLink
        href={project.href}
        externalHref={project.externalHref}
        ctaLabel={ctaLabel}
        tone={mediaTone ?? "light"}
        disableAmbientFloat={Boolean(mediaVideoSrc)}
        panelClassName={cn(
          "relative min-h-[18.5rem] border-b border-border/55",
          mediaPanelClassName ?? "bg-[#f7efe4]",
        )}
      >
        {mediaKind === "wordmark" ? (
          <div className="relative flex h-full flex-col justify-between px-5 py-5 text-[#fff8ef] sm:px-6 sm:py-6">
            {wordmarkEyebrow ? (
              <span className="inline-flex w-fit rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/78">
                {wordmarkEyebrow}
              </span>
            ) : (
              <span />
            )}
            <div className="space-y-3">
              {wordmarkNote ? (
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/54">
                  {wordmarkNote}
                </p>
              ) : null}
              <div className="max-w-[10ch] text-[3.2rem] font-semibold leading-[0.88] tracking-[-0.09em] text-white/94 sm:text-[3.8rem]">
                {wordmark}
              </div>
            </div>
            <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute bottom-4 right-6 h-px w-24 bg-white/18" />
          </div>
        ) : resolvedMediaSrc ? (
          <ThumbnailPreviewMedia
            imageSrc={resolvedMediaSrc}
            videoSrc={mediaVideoSrc}
            alt={mediaAlt ?? project.title}
            imageClassName={cn(
              imageClassName,
              "ease-snappy transition-transform duration-700 group-hover/thumbnail:scale-[1.04]",
            )}
            videoClassName={cn(
              imageClassName,
              "ease-snappy transition-transform duration-700 group-hover/thumbnail:scale-[1.04]",
            )}
          />
        ) : (
          <div className={cn("absolute inset-0 bg-gradient-to-br", project.theme.surface)}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.3),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(255,255,255,0.2),transparent_22%)]" />
          </div>
        )}
      </EditorialThumbnailLink>

      <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border/65 bg-white/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6b5645]">
              {displayPeriod ?? project.period}
            </span>
            <span className="rounded-full border border-border/60 bg-[#fff6ea] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#9a623c]">
              {roleLabel}
            </span>
          </div>
          <h3
            className={cn(
              "max-w-[14ch] text-balance text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[1.78rem]",
              isClayNotionMode && "font-editorial text-[1.82rem]",
            )}
          >
            {displayTitle ?? project.title}
          </h3>
          <p className="max-w-[28ch] text-[0.94rem] leading-6 text-[#6d5b4c]">
            {visualNote}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {project.externalHref ? (
            <a
              href={project.externalHref}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-border/65 bg-[#fffaf2]/82 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/35 hover:bg-[#fff4e2] hover:text-primary"
            >
              View product page
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}

          {project.href ? (
            <Link href={project.href}>
              <span
                onClick={(event) => event.stopPropagation()}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#1f1a14] px-4 py-2.5 text-sm font-semibold text-[#fff8ef] transition-transform hover:-translate-y-0.5"
              >
                View case study
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
