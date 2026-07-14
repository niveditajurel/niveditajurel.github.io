import { motion } from "framer-motion";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import {
  EditorialThumbnailLink,
  ThumbnailPreviewMedia,
} from "@/components/ui/editorial-thumbnail-link";
import { AnimatedProjectThumbnail, type AnimatedThumbnailVariant } from "@/components/ui/AnimatedProjectThumbnail";
import { LiveArtifactPanel } from "@/components/ui/LiveArtifactPanel";
import { PixelIcon, type PixelIconName } from "@/components/ui/PixelIcon";

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
  return (
    <section id="featured-work" className="mistral-section pt-10 lg:pt-14">
      <div className="mistral-section-shell !border-t-0 !pt-0">
        <SectionIntro
          number="01"
          label="Selected product work"
          title="Work worth opening first."
          description="Three shipped products that show how I frame systems, make product decisions, and move ambiguous work into delivery."
          icon="case"
          headingStyle="editorial"
        />

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
            />
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Link href="/projects">
            <span className="mistral-outline-action cursor-pointer">
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
}) {
  const resolvedMediaSrc = mediaSrc ?? (project.imageMode !== "none" ? project.image : undefined);
  const imageClassName =
    mediaClassName ??
    (project.imageMode === "contain"
      ? "h-full w-full object-contain p-6"
      : "h-full w-full object-cover object-center");

  const ctaLabel = project.externalHref ? "View product page" : "View case study";
  const proofIcon: PixelIconName =
    project.id === "anand-pag" ? "system" : project.id === "nomad-ai" ? "bolt" : "eye";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.48, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
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
          "relative min-h-[22rem] overflow-hidden border border-[var(--bp-hairline)] sm:min-h-[24rem]",
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
              className="h-[82%] w-[74%] border border-black/5 object-cover object-left-top shadow-[0_22px_48px_-24px_rgba(24,44,24,0.34)] transition-transform duration-500 ease-snappy group-hover/thumbnail:-translate-y-1 group-hover/thumbnail:scale-[1.025]"
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
          <span className="inline-flex items-center gap-1.5 rounded bg-[var(--bp-cobalt-subtle)] px-2 py-0.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-[var(--bp-cobalt)]">
            <PixelIcon name={proofIcon} size={10} color="currentColor" />
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
