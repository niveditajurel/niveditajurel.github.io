import { motion } from "framer-motion";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { PixelWalker } from "@/components/ui/PixelWalker";
import { ArrowUpRight } from "lucide-react";
import { BsMedium, BsSubstack } from "react-icons/bs";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { contentItems, type ContentItem } from "@/data/content";
import { PixelIcon } from "@/components/ui/PixelIcon";

const instagramCovers = [
  "/instagram-cover-6.png",
  "/instagram-cover-2.png",
  "/instagram-cover-3.png",
  "/instagram-cover-7.png",
  "/instagram-cover-8.png",
] as const;

const instagramItem = contentItems.find((item) => item.id === "instagram-notes");
const linkedinItem = contentItems.find((item) => item.id === "linkedin-writing");
const archiveItem = contentItems.find((item) => item.id === "writing-archive");

function SectionLink({ item }: { item: ContentItem }) {
  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
      >
        Open link
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link
      href="/content"
      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
    >
      Open archive
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

function InstagramPreview({ href }: { href?: string }) {
  const collage = (
    <div className="relative overflow-hidden border border-[#dccbbb]/72 bg-[radial-gradient(circle_at_top_right,rgba(233,215,194,0.95),transparent_34%),linear-gradient(180deg,#efe2d5,#f8f1e8)] p-4 sm:p-5">
      <div className="absolute left-4 top-4 z-10 rounded-full border border-[#d9c8b8] bg-[#fff8f0]/90 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8f5636] shadow-sm">
        Recent Instagram Covers
      </div>
      <div className="grid min-h-[20rem] grid-cols-[1.2fr_0.8fr_0.8fr] grid-rows-2 gap-3 pt-12 sm:min-h-[23rem]">
        {instagramCovers.map((src, index) => (
          <div
            key={src}
            className={cn(
              "group relative overflow-hidden rounded-lg border border-[#dccbbb] bg-[#f3e6d8] shadow-[0_18px_36px_-34px_rgba(81,57,24,0.2)]",
              index === 0 && "row-span-2",
            )}
          >
            <img
              src={src}
              alt={`Instagram post cover ${index + 1}`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,12,10,0.02),rgba(17,12,10,0.18))]" />
          </div>
        ))}
      </div>
    </div>
  );

  if (!href) {
    return collage;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {collage}
    </a>
  );
}

function LinkedInPreview({ href }: { href?: string }) {
  const preview = (
    <div className="rounded-lg border border-white/65 bg-[linear-gradient(180deg,#eef4ff,#f8fbff)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
      <div className="relative overflow-hidden rounded-md border border-[#d6e3ff] bg-white">
        <img
          src="/linkedin-profile-header.png"
          alt="LinkedIn profile preview"
          className="h-28 w-full object-cover object-top"
        />
      </div>
      <div className="relative -mt-3 ml-auto w-[78%] overflow-hidden rounded-md border border-[#d6e3ff] bg-white shadow-[0_14px_30px_-22px_rgba(65,104,182,0.28)]">
        <img
          src="/linkedin-featured-posts.png"
          alt="LinkedIn featured posts preview"
          className="h-40 w-full object-cover object-top"
        />
      </div>
    </div>
  );

  if (!href) {
    return preview;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {preview}
    </a>
  );
}

function ArchivePreview({ item }: { item: ContentItem }) {
  const pieces = item.featuredPieces?.slice(0, 3) ?? [];

  return (
    <div className="rounded-lg border border-white/65 bg-[#fffdf9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
      <div className="space-y-3">
        {pieces.map((piece) => (
          <a
            key={`${piece.platform}-${piece.title}`}
            href={piece.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 rounded-md bg-[#fff7ef] p-3 transition-colors hover:bg-[#fff3e8]"
          >
            <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-md bg-[#f2dcc7] text-[#8f5636]">
              {piece.platform === "Medium" ? (
                <BsMedium className="h-4 w-4 text-[#171717]" />
              ) : piece.platform === "Substack" ? (
                <BsSubstack className="h-4 w-4 text-[#ff6719]" />
              ) : (
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em]">
                  {piece.platform.slice(0, 2)}
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8f5636]">
                {piece.platform}
              </div>
              <div className="mt-1 text-sm leading-5 text-[#5e4638]">{piece.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function FeaturedPiecesList({
  item,
  limit = 2,
}: {
  item: ContentItem;
  limit?: number;
}) {
  const pieces = item.featuredPieces?.slice(0, limit) ?? [];

  if (!pieces.length) {
    return null;
  }

  return (
    <div className="mt-4 space-y-2">
      {pieces.map((piece) => (
        <a
          key={`${piece.platform}-${piece.title}`}
          href={piece.href}
          target="_blank"
          rel="noreferrer"
          className="block text-sm leading-5 text-foreground/82 transition-colors hover:text-primary"
        >
          <span className="mr-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8f5636]">
            {piece.platform}
          </span>
          {piece.title}
        </a>
      ))}
    </div>
  );
}

function SupportingCard({
  item,
  index,
  preview,
}: {
  item: ContentItem;
  index: number;
  preview: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="mistral-surface flex h-full flex-col rounded-none p-6 shadow-none"
    >
      <p className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--bp-ink-muted)]">
        <PixelIcon
          name={item.id === "linkedin-writing" ? "system" : "pen"}
          size={12}
          color="var(--bp-cobalt)"
        />
        {item.format}
      </p>
      <h3 className="font-fraunces mt-3 text-[1.75rem] leading-[1.05] text-[var(--bp-ink)]">
        {item.title}
      </h3>
      <div className="mt-5">{preview}</div>
      <p className="mt-5 text-sm leading-6 text-[var(--bp-ink-muted)]">{item.description}</p>
      <FeaturedPiecesList item={item} />
      {item.platformLinks?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.platformLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/82 px-3 py-1 text-[0.72rem] font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      ) : null}
      <div className="mt-5">
        <SectionLink item={item} />
      </div>
    </motion.article>
  );
}

export const ContentPreview = () => {
  if (!instagramItem || !linkedinItem || !archiveItem) {
    return null;
  }

  return (
    <section id="content-preview" className="mistral-section">
      <div className="mistral-section-shell">
        <PixelWalker duration={90} delay={2} wrench />
        <SectionIntro
          number="04"
          label="Public trail"
          title="Writing that shows how I think."
          description="Selected posts and visual notes on product judgment, AI workflows, ambiguity, and building in public."
          icon="pen"
          headingStyle="editorial"
        />

        <div className="grid gap-4 xl:grid-cols-[1.18fr_0.92fr_0.92fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mistral-surface flex h-full flex-col rounded-none shadow-none"
          >
            <div className="p-6 pb-0">
              <InstagramPreview href={instagramItem.href} />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--bp-ink-muted)]">
                <PixelIcon name="spark" size={12} color="var(--bp-cobalt)" />
                {instagramItem.format}
              </p>
              <h3 className="font-fraunces mt-3 text-[2rem] leading-[1.02] text-[var(--bp-ink)]">
                {instagramItem.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--bp-ink-muted)]">
                {instagramItem.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <SectionLink item={instagramItem} />
                <Link
                  href="/fun"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  Open fun page
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.article>

          <SupportingCard
            item={linkedinItem}
            index={1}
            preview={<LinkedInPreview href={linkedinItem.href} />}
          />

          <SupportingCard
            item={archiveItem}
            index={2}
            preview={<ArchivePreview item={archiveItem} />}
          />
        </div>
      </div>
    </section>
  );
};
