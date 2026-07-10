import { motion } from "framer-motion";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { PixelArtTrio } from "@/components/ui/PixelArt";
import { PixelWalker } from "@/components/ui/PixelWalker";
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
import { LiveArtifactPanel } from "@/components/ui/LiveArtifactPanel";

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
    mediaSrc: "/nomad-landing.png",
    mediaVideoSrc: "/thumbnail-previews/nomad-ai-dashboard-preview.mp4",
    mediaAlt: "Nomad AI landing page preview",
    mediaPanelClassName: "bg-[#e2efdd]",
    mediaClassName: "h-full w-full object-contain p-4 sm:p-5",
    mediaTone: "light",
  },
  skingenius: {
    roleLabel: "Product Manager",
    visualNote: "AI-led skincare ecommerce marketplace focused on discovery, trust, and recommendation-led shopping.",
    mediaKind: "image",
    mediaSrc: "/teasers/skingenius1.jpg",
    mediaVideoSrc: "/thumbnail-previews/skingenius-preview.mp4",
    mediaAlt: "Skingenius website preview",
    mediaPanelClassName: "bg-[#ef9b52]",
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
      <div className="relative mx-auto max-w-7xl border-t border-[var(--bp-hairline)] pt-6 lg:pt-7">
        <PixelWalker duration={72} />
        <div className="mb-6 space-y-3 lg:mb-8">
          <PixelArtTrio names={["briefcase", "chart", "globe"]} className="mb-1" />
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--bp-ink-muted)]">
            <PixelIcon name="case" size={13} className="mr-2 inline-block align-[-2px]" />01 — Featured Work
          </p>
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <h2 className="font-statement max-w-[15ch] text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--bp-ink)] md:text-[2.7rem]">
              Product work to open first.
            </h2>
            <p className="max-w-[38rem] text-[1rem] leading-7 text-[var(--bp-ink-muted)] xl:text-right">
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
            <span className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--bp-hairline)] bg-white px-5 py-3 font-mono text-[0.8rem] font-medium text-[var(--bp-ink)] transition-colors hover:border-[var(--bp-cobalt)]/40 hover:text-[var(--bp-cobalt)]">
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
      className="group relative flex h-full flex-col"
    >
      {/* Thumbnail */}
      <EditorialThumbnailLink
        href={project.href}
        externalHref={project.externalHref}
        ctaLabel={ctaLabel}
        tone={project.id === "anand-pag" ? "dark" : mediaTone ?? "light"}
        disableAmbientFloat
        panelClassName={cn(
          "relative min-h-[22rem] overflow-hidden rounded-xl border border-[var(--bp-hairline)] sm:min-h-[24rem]",
          project.id === "anand-pag" ? "bg-[var(--bp-panel)]" : mediaPanelClassName ?? "bg-[#f7efe4]",
        )}
      >
        {project.id === "anand-pag" ? (
          <LiveArtifactPanel />
        ) : project.id === "skingenius" && mediaVideoSrc ? (
          <ThumbnailPreviewMedia
            imageSrc={resolvedMediaSrc ?? ""}
            videoSrc={mediaVideoSrc}
            alt={mediaAlt ?? project.title}
            imageClassName={imageClassName}
            videoClassName={imageClassName}
          />
        ) : project.id === "nomad-ai" && mediaSrc ? (
          <div className="absolute inset-0 flex items-center justify-end overflow-hidden pl-6">
            <img
              src={mediaSrc}
              alt={mediaAlt ?? ""}
              className="h-[82%] w-[74%] rounded-l-xl border border-black/5 object-cover object-left-top shadow-[0_22px_48px_-24px_rgba(24,44,24,0.42)] transition-transform duration-500 ease-out group-hover/thumbnail:-translate-y-1.5 group-hover/thumbnail:scale-[1.06]"
            />
          </div>
        ) : (
          <AnimatedProjectThumbnail variant={project.id as AnimatedThumbnailVariant} motion="hover" />
        )}
      </EditorialThumbnailLink>

      {/* Text — sits below the image, outside any card */}
      <div className="flex flex-1 flex-col gap-4 pt-4">

        {/* Top row — role chip + period */}
        <div className="flex items-center gap-3 font-mono">
          <span className="rounded bg-[var(--bp-cobalt-subtle)] px-2 py-0.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-[var(--bp-cobalt)]">
            {roleLabel}
          </span>
          <span className="text-[0.68rem] text-[var(--bp-ink-muted)]">
            {displayPeriod ?? project.period}
          </span>
        </div>

        {/* Title row — company name with CTAs beside it, right aligned */}
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-fraunces text-[1.55rem] font-semibold leading-[1.06] tracking-tight text-[var(--bp-ink)]">
              {displayTitle ?? project.title}
            </h3>
            <div className="flex shrink-0 items-center gap-2">
              {project.externalHref ? (
                <a
                  href={project.externalHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded-lg border border-[var(--bp-hairline)] bg-white px-3 py-1.5 font-mono text-[0.7rem] font-medium text-[var(--bp-ink)] transition-colors hover:border-[var(--bp-cobalt)]/40 hover:text-[var(--bp-cobalt)]"
                >
                  Product
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ) : null}
              {project.href ? (
                <Link href={project.href}>
                  <span
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-[var(--bp-cobalt)] px-3 py-1.5 font-mono text-[0.7rem] font-medium text-white transition-transform hover:-translate-y-0.5"
                  >
                    Case Study
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ) : null}
            </div>
          </div>
          {visualNote ? (
            <p className="line-clamp-2 text-[0.84rem] leading-[1.55] text-[var(--bp-ink-muted)]">
              {visualNote}
            </p>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
