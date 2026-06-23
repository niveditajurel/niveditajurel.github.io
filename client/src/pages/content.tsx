import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { BackgroundComponents } from "@/components/ui/background-components";
import { cn } from "@/lib/utils";
import { contentItems } from "@/data/content";
import { siteConfig } from "@/data/site";

const groupedContent = [
  {
    title: "Writing and longer-form thinking",
    description:
      "Essays, frameworks, and reflections that make the reasoning behind product decisions easier to evaluate.",
    items: contentItems.filter((item) => item.id === "writing-archive" || item.id === "linkedin-writing"),
  },
  {
    title: "Short-form and social notes",
    description:
      "Curated posts that capture product observations, pattern recognition, and what I keep noticing in the field.",
    items: contentItems.filter((item) => item.id === "instagram-notes"),
  },
];

export default function Content() {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <BackgroundComponents
      variant={isClayNotionMode ? "clay-notion-paper" : "concentric-squares"}
      className="min-h-screen bg-background"
      contentClassName="relative"
    >
      <div className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8">
        <section className="mx-auto max-w-7xl border-b border-border/65 pb-10 lg:pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(23rem,0.75fr)] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="space-y-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Content
              </p>
              <h1
                className={cn(
                  "max-w-[13ch] text-balance text-[clamp(2.8rem,4.7vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground",
                  isClayNotionMode && "font-editorial tracking-[-0.045em]",
                )}
              >
                Product thinking, notes, and public writing that show how I reason.
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
                This page is intentionally curated. It exists to show communication quality, product
                judgment, and the kinds of ideas I keep returning to, not to duplicate the Work page.
              </p>
            </motion.aside>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-7xl space-y-8 lg:mt-10">
          {groupedContent.map((group, groupIndex) => (
            <section key={group.title} className="space-y-5">
              <div className="space-y-2">
                <h2
                  className={cn(
                    "clay-section-heading max-w-[12ch] text-foreground",
                    isClayNotionMode && "font-editorial md:text-[2.65rem]",
                  )}
                >
                  {group.title}
                </h2>
                <p className="max-w-3xl text-base leading-7 text-muted-foreground">{group.description}</p>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {group.items.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: (groupIndex * 2 + index) * 0.06, ease: "easeOut" }}
                    className={cn(
                      "rounded-[1.9rem] border border-border/60 bg-background/90 p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.18)] backdrop-blur-sm",
                      isClayNotionMode && "bg-[#fffdf8]/88 shadow-[0_20px_50px_-38px_rgba(81,57,24,0.14)]",
                    )}
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.format}
                    </p>
                    <h3
                      className={cn(
                        "clay-card-title mt-3 text-foreground",
                        isClayNotionMode && "font-editorial text-[1.45rem]",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>

                    {item.featuredPieces?.length ? (
                      <div className="mt-5 space-y-2">
                        {item.featuredPieces.map((piece) => (
                          <a
                            key={`${piece.platform}-${piece.title}`}
                            href={piece.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block text-sm leading-6 text-foreground/84 transition-colors hover:text-primary"
                          >
                            <span className="mr-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8f5636]">
                              {piece.platform}
                            </span>
                            {piece.title}
                          </a>
                        ))}
                      </div>
                    ) : null}

                    {item.platformLinks?.length ? (
                      <div className="mt-5 flex flex-wrap gap-2">
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

                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        Open source
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        href="/projects#writing"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        Back to writing overview
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </motion.article>
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </BackgroundComponents>
  );
}
