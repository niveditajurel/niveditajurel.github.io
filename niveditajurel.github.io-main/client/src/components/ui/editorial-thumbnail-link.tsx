import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Eye } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

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
  disableAmbientFloat = false,
}: Omit<EditorialThumbnailLinkProps, "href" | "externalHref"> & {
  isExternal: boolean;
}) {
  const shouldReduceMotion = !!useReducedMotion();

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
            : { y: [0, -4, 0], scale: [1, 1.012, 1] }
        }
        transition={{
          duration: 11.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "ease-snappy absolute inset-0 transition-transform duration-700 group-hover/thumbnail:scale-[1.035]",
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
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/thumbnail:opacity-100",
          tone === "dark"
            ? "bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.06),rgba(19,14,11,0.2)_46%,rgba(19,14,11,0.56)_100%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.1),rgba(34,25,20,0.1)_44%,rgba(34,25,20,0.34)_100%)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 border border-white/18 opacity-0 transition-opacity duration-300 group-hover/thumbnail:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,rgba(255,248,239,0)_0%,rgba(31,26,20,0.12)_55%,rgba(31,26,20,0.52)_100%)]" />

      <div className="absolute inset-x-4 bottom-4 flex justify-end md:hidden sm:inset-x-5 sm:bottom-5">
        <span
          className={cn(
            "ease-snappy inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] shadow-[0_16px_32px_-22px_rgba(23,18,15,0.42)] transition-all duration-300 opacity-100",
            tone === "dark"
              ? "border-[#d96f3d] bg-[#cb6638] text-[#fff8ef]"
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
  disableAmbientFloat = false,
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
