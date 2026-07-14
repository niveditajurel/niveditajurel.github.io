import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Eye } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { PixelIcon, type PixelIconName } from "@/components/ui/PixelIcon";

type OverlayTone = "light" | "dark";

interface EditorialThumbnailLinkProps {
  children: ReactNode;
  ctaLabel: string;
  href?: string;
  externalHref?: string;
  mediaClassName?: string;
  panelClassName?: string;
  tone?: OverlayTone;
  cursorKind?: "case-study" | "overview" | "build" | "project" | "repo" | "site";
  disableAmbientFloat?: boolean;
}

function ThumbnailPanel({
  children,
  ctaLabel,
  mediaClassName,
  panelClassName,
  tone = "light",
  isExternal,
  disableAmbientFloat = true,
}: Omit<EditorialThumbnailLinkProps, "href" | "externalHref"> & {
  isExternal: boolean;
}) {
  const shouldReduceMotion = !!useReducedMotion();
  const lowerLabel = ctaLabel.toLowerCase();
  const markerIcon: PixelIconName = lowerLabel.includes("build")
    ? "spark"
    : lowerLabel.includes("site") || isExternal
      ? "cursor"
      : "case";

  return (
    <div
      className={cn(
        "relative isolate block overflow-hidden",
        panelClassName,
      )}
    >
      <motion.div
        animate={
          shouldReduceMotion || disableAmbientFloat
            ? undefined
            : { y: [0, -2, 0], scale: [1, 1.006, 1] }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "ease-snappy absolute inset-0 transition-transform duration-500 group-hover/thumbnail:scale-[1.02]",
          mediaClassName,
        )}
      >
        {children}
      </motion.div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          tone === "dark"
            ? "bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.2),transparent_24%),linear-gradient(180deg,rgba(255,248,239,0.02)_0%,rgba(255,248,239,0.04)_32%,rgba(19,14,11,0.36)_100%)]"
            : "bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.3),transparent_24%),linear-gradient(180deg,rgba(255,248,239,0.02)_0%,rgba(255,248,239,0.04)_38%,rgba(34,25,20,0.18)_100%)]",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover/thumbnail:opacity-100",
          tone === "dark"
            ? "bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.06),rgba(19,14,11,0.2)_46%,rgba(19,14,11,0.56)_100%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.1),rgba(34,25,20,0.1)_44%,rgba(34,25,20,0.34)_100%)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 border border-white/18 opacity-0 transition-opacity duration-200 group-hover/thumbnail:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,rgba(255,248,239,0)_0%,rgba(31,26,20,0.12)_55%,rgba(31,26,20,0.52)_100%)]" />

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute right-4 top-4 grid h-9 w-9 translate-y-1 place-items-center border opacity-45 shadow-[3px_3px_0_rgba(27,22,17,0.15)] transition-[transform,opacity,background-color] duration-200 ease-snappy group-hover/thumbnail:translate-y-0 group-hover/thumbnail:opacity-100",
          tone === "dark"
            ? "border-white/35 bg-[rgba(28,28,30,0.72)]"
            : "border-[var(--bp-hairline-strong)] bg-[rgba(255,253,246,0.88)]",
        )}
      >
        <PixelIcon
          name={markerIcon}
          size={15}
          color={tone === "dark" ? "var(--ms-sunshine-300)" : "var(--bp-cobalt)"}
        />
      </span>

      <div className="absolute inset-x-4 bottom-4 flex justify-end md:hidden sm:inset-x-5 sm:bottom-5">
        <span
          className={cn(
            "ease-snappy inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] shadow-[0_16px_32px_-22px_rgba(23,18,15,0.42)] transition-all duration-200 opacity-100",
            tone === "dark"
              ? "border-[var(--bp-cobalt-hover)] bg-[var(--bp-cobalt)] text-[var(--bp-action-ink)]"
              : "border-[#d96f3d] bg-[#cb6638] text-[#fff8ef]",
          )}
        >
          <Eye className="h-3.5 w-3.5" />
          <span>{ctaLabel}</span>
          {isExternal ? (
            <ArrowUpRight className="h-3.5 w-3.5" />
          ) : (
            <ArrowRight className="h-3.5 w-3.5" />
          )}
        </span>
      </div>
    </div>
  );
}

export function EditorialThumbnailLink({
  children,
  ctaLabel,
  href,
  externalHref,
  mediaClassName,
  panelClassName,
  tone = "light",
  cursorKind,
  disableAmbientFloat = true,
}: EditorialThumbnailLinkProps) {
  const isExternal = Boolean(externalHref);
  const lowerLabel = ctaLabel.toLowerCase();
  const resolvedCursorKind =
    cursorKind ??
    (isExternal
      ? lowerLabel.includes("repo")
        ? "repo"
        : "site"
      : lowerLabel.includes("overview")
        ? "overview"
        : lowerLabel.includes("build")
          ? "build"
          : lowerLabel.includes("project")
            ? "project"
            : "case-study");
  const panel = (
    <ThumbnailPanel
      ctaLabel={ctaLabel}
      mediaClassName={mediaClassName}
      panelClassName={panelClassName}
      tone={tone}
      isExternal={isExternal}
      disableAmbientFloat={disableAmbientFloat}
    >
      {children}
    </ThumbnailPanel>
  );

  if (externalHref) {
    return (
      <a
        href={externalHref}
        target="_blank"
        rel="noreferrer"
        className="group/thumbnail block hover-cursor-target"
        data-cursor={resolvedCursorKind}
        data-cursor-label={ctaLabel}
      >
        {panel}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className="group/thumbnail block hover-cursor-target"
        data-cursor={resolvedCursorKind}
        data-cursor-label={ctaLabel}
      >
        {panel}
      </Link>
    );
  }

  return panel;
}

export function ThumbnailPreviewMedia({
  alt,
  imageSrc,
  videoSrc,
  className,
  imageClassName,
  videoClassName,
}: {
  alt: string;
  imageSrc: string;
  videoSrc?: string;
  className?: string;
  imageClassName?: string;
  videoClassName?: string;
}) {
  const shouldReduceMotion = !!useReducedMotion();

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      {videoSrc && !shouldReduceMotion ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={imageSrc}
          aria-hidden="true"
          className={cn("h-full w-full object-cover object-center", videoClassName)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}

      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className={cn(
          "h-full w-full object-cover object-center",
          videoSrc && !shouldReduceMotion ? "hidden" : "block",
          imageClassName,
        )}
      />
    </div>
  );
}
