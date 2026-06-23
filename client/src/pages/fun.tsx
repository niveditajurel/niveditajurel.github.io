import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Sparkles,
} from "lucide-react";
import { BsMedium, BsSubstack } from "react-icons/bs";
import { Link } from "wouter";
import { BackgroundComponents } from "@/components/ui/background-components";
import { ThumbnailPreviewMedia } from "@/components/ui/editorial-thumbnail-link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { funMediaItems, type FunMediaItem } from "@/data/fun";
import { experiments } from "@/data/experiments";

function SourceBadge({ source }: { source: FunMediaItem["source"] }) {
  const tone =
    source === "Instagram"
      ? "bg-[#fff1e7] text-[#a65e39] border-[#e5c6b0]"
      : source === "LinkedIn"
        ? "bg-[#eef4ff] text-[#4168b6] border-[#cfdfff]"
        : source === "Medium"
          ? "bg-[#f4ede5] text-[#7f5b39] border-[#dfcfbf]"
          : "bg-[#fff3ea] text-[#a05b2f] border-[#e7c7ae]";

  return (
    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]", tone)}>
      {source}
    </span>
  );
}

function sourceActionLabel(source: FunMediaItem["source"]) {
  if (source === "Instagram") {
    return "Open Instagram";
  }

  if (source === "LinkedIn") {
    return "Open LinkedIn";
  }

  if (source === "Medium") {
    return "Open Medium";
  }

  return "Open Substack";
}

function VisualCard({
  item,
  className,
}: {
  item: FunMediaItem;
  className?: string;
}) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="site"
      data-cursor-label={sourceActionLabel(item.source)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "group/thumbnail hover-cursor-target flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#d9c8b8]/70 bg-[#fffaf4] shadow-[0_18px_42px_-34px_rgba(63,42,20,0.16)]",
        className,
      )}
    >
      {item.imageSrc ? (
        <div className="relative overflow-hidden border-b border-[#dccbbb]/72 bg-[#f4eadf]">
          <img
            src={item.imageSrc}
            alt={item.imageAlt ?? item.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/thumbnail:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(24,17,12,0.02),rgba(24,17,12,0.14))]" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/thumbnail:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.08),rgba(24,17,12,0.14)_46%,rgba(24,17,12,0.34)_100%)]" />
          <div className="pointer-events-none absolute inset-0 border border-white/14 opacity-0 transition-opacity duration-300 group-hover/thumbnail:opacity-100" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <SourceBadge source={item.source} />
          <h3 className="mt-4 max-w-[16ch] text-balance font-editorial text-[clamp(1.75rem,2.2vw,2.5rem)] leading-[0.95] tracking-[-0.04em] text-[#221913]">
            {item.title}
          </h3>
          <p className="mt-3 max-w-[34rem] text-sm leading-6 text-[#6b5848]">
            {item.description}
          </p>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b9653d] transition-colors group-hover/thumbnail:text-[#8f5636]">
          {sourceActionLabel(item.source)}
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.a>
  );
}

function LinkedInCard({ item }: { item: FunMediaItem }) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="site"
      data-cursor-label="Open LinkedIn"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group/thumbnail hover-cursor-target flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#d9c8b8]/70 bg-[#fffaf4] shadow-[0_18px_42px_-34px_rgba(63,42,20,0.16)]"
    >
      <div className="relative border-b border-[#d6e3ff] bg-[linear-gradient(180deg,#eef4ff,#f8fbff)] p-4">
        <div className="relative overflow-hidden rounded-[1.15rem] border border-[#d6e3ff] bg-white">
          <img
            src="/linkedin-profile-header.png"
            alt="LinkedIn profile header preview"
            className="h-32 w-full object-cover object-top"
          />
        </div>
        <div className="relative -mt-4 ml-auto w-[82%] overflow-hidden rounded-[1.15rem] border border-[#d6e3ff] bg-white shadow-[0_16px_34px_-24px_rgba(65,104,182,0.3)]">
          <img
            src="/linkedin-featured-posts.png"
            alt="LinkedIn featured posts preview"
            className="h-52 w-full object-cover object-top"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/thumbnail:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),rgba(39,71,133,0.08)_46%,rgba(39,71,133,0.2)_100%)]" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <SourceBadge source={item.source} />
          <h3 className="mt-4 max-w-[15ch] text-balance font-editorial text-[clamp(1.75rem,2.1vw,2.4rem)] leading-[0.95] tracking-[-0.04em] text-[#221913]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#6b5848]">{item.description}</p>
        </div>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4168b6] transition-colors group-hover/thumbnail:text-[#274785]">
          Open LinkedIn
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.a>
  );
}

function WritingCard({
  item,
  accent,
}: {
  item: FunMediaItem;
  accent: "medium" | "substack";
}) {
  const cardTone =
    accent === "medium"
      ? "bg-[linear-gradient(180deg,#fff8f0,#fff4ea)] border-[#e0cdbd]"
      : "bg-[linear-gradient(180deg,#fff6ef,#fff0e3)] border-[#e4c6a8]";

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      data-cursor="site"
      data-cursor-label={sourceActionLabel(item.source)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "group/thumbnail hover-cursor-target flex h-full flex-col justify-between rounded-[2rem] border p-6 shadow-[0_18px_42px_-34px_rgba(63,42,20,0.16)]",
        cardTone,
      )}
    >
      <div>
        <SourceBadge source={item.source} />
        <h3 className="mt-4 max-w-[15ch] text-balance font-editorial text-[clamp(1.75rem,2vw,2.35rem)] leading-[0.95] tracking-[-0.04em] text-[#221913]">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#6b5848]">{item.description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between rounded-[1.3rem] border border-white/60 bg-white/50 px-4 py-3">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#8f5636]">
          {accent === "medium" ? "Essay" : "Publication"}
        </span>
        <ArrowUpRight className="h-4 w-4 text-[#8f5636]" />
      </div>
    </motion.a>
  );
}

function SideQuestCard({
  title,
  eyebrow,
  summary,
  href,
  imageSrc,
  imageAlt,
  videoSrc,
}: {
  title: string;
  eyebrow: string;
  summary: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
}) {
  return (
    <Link
      href={href}
      className="group/thumbnail block hover-cursor-target"
      data-cursor="project"
      data-cursor-label="Open project"
    >
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -3 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.9rem] border border-[#d9c8b8]/70 bg-[#fffaf4] shadow-[0_18px_42px_-34px_rgba(63,42,20,0.16)]"
      >
        <div className="relative overflow-hidden border-b border-[#dccbbb]/72 bg-[#efe5d9]">
          <div className="relative aspect-[16/10]">
            <ThumbnailPreviewMedia
              imageSrc={imageSrc}
              videoSrc={videoSrc}
              alt={imageAlt}
              imageClassName="transition-transform duration-700 group-hover/thumbnail:scale-[1.03]"
              videoClassName="transition-transform duration-700 group-hover/thumbnail:scale-[1.03]"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/thumbnail:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,248,239,0.08),rgba(24,17,12,0.12)_46%,rgba(24,17,12,0.34)_100%)]" />
          <div className="pointer-events-none absolute inset-0 border border-white/16 opacity-0 transition-opacity duration-300 group-hover/thumbnail:opacity-100" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#b9653d]">
              {eyebrow}
            </p>
            <h3 className="mt-3 font-editorial text-[1.85rem] leading-[0.95] tracking-[-0.04em] text-[#221913]">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#6b5848]">{summary}</p>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b9653d] transition-colors group-hover/thumbnail:text-[#8f5636]">
            Open project
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function Fun() {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;
  const instagramFeature = funMediaItems.find((item) => item.id === "instagram-ai-learning-stack");
  const linkedinFeature = funMediaItems.find((item) => item.id === "linkedin-public-trail");
  const mediumFeature = funMediaItems.find((item) => item.id === "medium-upi");
  const substackFeature = funMediaItems.find((item) => item.id === "substack-home");
  const lowerVisuals = funMediaItems.filter((item) =>
    ["instagram-software-fundamentals", "instagram-weak-prompt", "instagram-builder-notes"].includes(item.id),
  );

  const sideQuests = experiments.filter((experiment) =>
    ["learning-council", "finwise", "uber-case-study"].includes(experiment.id),
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  if (!instagramFeature || !linkedinFeature || !mediumFeature || !substackFeature) {
    return null;
  }

  return (
    <BackgroundComponents
      variant={isClayNotionMode ? "clay-notion-paper" : "concentric-squares"}
      className="min-h-screen bg-background"
      contentClassName="relative"
    >
      <div className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8">
        <section className="mx-auto max-w-7xl border-b border-border/65 pb-10 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.78fr)] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="space-y-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Fun page
              </p>
              <h1
                className={cn(
                  "max-w-[12ch] text-balance text-[clamp(2.8rem,4.8vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground",
                  isClayNotionMode && "font-editorial tracking-[-0.045em]",
                )}
              >
                Ideas in public, side quests, and the things I kept building anyway.
              </h1>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              className={cn(
                "rounded-[2rem] border border-border/70 bg-background/80 p-6 shadow-[0_24px_70px_-56px_rgba(15,23,42,0.22)] backdrop-blur-sm",
                isClayNotionMode && "paper-panel bg-[#fffdf7]/88 shadow-[0_24px_60px_-42px_rgba(81,57,24,0.16)]",
              )}
            >
              <p className="text-base leading-7 text-muted-foreground">
                This page is the less formal side of the portfolio: Instagram reels, LinkedIn proof,
                Medium essays, Substack notes, and a few side builds that show what I notice when I
                am not packaging everything into a case study.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Instagram", "LinkedIn", "Medium", "Substack", "Side builds"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full border border-[#dccbbb] bg-[#fff7ef] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#8f5636]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-7xl space-y-5 lg:mt-10">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                In public
              </p>
              <h2 className="clay-section-heading max-w-[14ch] text-foreground font-editorial md:text-[2.6rem]">
                The ideas and artifacts that show up outside the case studies.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <VisualCard item={instagramFeature} className="h-full" />
            </div>

            <div className="space-y-4 lg:col-span-5">
              <LinkedInCard item={linkedinFeature} />
              <div className="grid gap-4 sm:grid-cols-2">
                <WritingCard item={mediumFeature} accent="medium" />
                <WritingCard item={substackFeature} accent="substack" />
              </div>
            </div>

            {lowerVisuals.map((item) => (
              <div key={item.id} className="lg:col-span-4">
                <VisualCard item={item} />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-7xl space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Side quests
            </p>
            <h2 className="clay-section-heading max-w-[12ch] text-foreground font-editorial md:text-[2.6rem]">
              Smaller product bets, experiments, and things worth opening.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {sideQuests.map((experiment) => (
              <SideQuestCard
                key={experiment.id}
                title={experiment.title}
                eyebrow={experiment.eyebrow}
                summary={experiment.description ?? experiment.caseStudyTitle ?? ""}
                href={experiment.href ?? "/projects"}
                imageSrc={experiment.thumbnail?.src ?? "/case-study-thumbnails/learning-council-panel.png"}
                imageAlt={experiment.thumbnail?.alt ?? experiment.title}
                videoSrc={experiment.thumbnail?.videoSrc}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-7xl rounded-[2rem] border border-[#dccbbb]/70 bg-[#fffaf4]/86 p-6 shadow-[0_20px_60px_-44px_rgba(63,42,20,0.16)] backdrop-blur-sm">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8f5636]">
                Why this page exists
              </p>
              <h2 className="font-editorial text-[clamp(2rem,3vw,3rem)] leading-[0.96] tracking-[-0.04em] text-[#221913]">
                Not everything useful belongs in a polished case study.
              </h2>
              <p className="max-w-3xl text-sm leading-7 text-[#6b5848]">
                Some signals show up better as a reel, a builder note, a public essay, or a quick
                side project. This page keeps those artifacts visible without forcing them into the
                formal work narrative.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8c2ae] bg-[#fff7ef] px-4 py-2 text-sm font-semibold text-[#241913] transition-colors hover:border-[#b98c65]"
              >
                <Sparkles className="h-4 w-4 text-[#b9653d]" />
                Instagram
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8c2ae] bg-[#fff7ef] px-4 py-2 text-sm font-semibold text-[#241913] transition-colors hover:border-[#b98c65]"
              >
                <BriefcaseBusiness className="h-4 w-4 text-[#4168b6]" />
                LinkedIn
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8c2ae] bg-[#fff7ef] px-4 py-2 text-sm font-semibold text-[#241913] transition-colors hover:border-[#b98c65]"
              >
                <Github className="h-4 w-4 text-[#241913]" />
                GitHub
              </a>
              <a
                href="https://medium.com/@nivedita9826"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8c2ae] bg-[#fff7ef] px-4 py-2 text-sm font-semibold text-[#241913] transition-colors hover:border-[#b98c65]"
              >
                <BsMedium className="h-4 w-4 text-[#171717]" />
                Medium
              </a>
              <a
                href="https://nivedita9826.substack.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d8c2ae] bg-[#fff7ef] px-4 py-2 text-sm font-semibold text-[#241913] transition-colors hover:border-[#b98c65]"
              >
                <BsSubstack className="h-4 w-4 text-[#ff6719]" />
                Substack
              </a>
            </div>
          </div>
        </section>
      </div>
    </BackgroundComponents>
  );
}
