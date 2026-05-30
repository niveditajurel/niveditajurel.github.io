import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { contentItems } from "@/data/content";

export const ContentPreview = () => {
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;

  return (
    <section id="content-preview" className="bg-transparent px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl border-t border-border/70 pt-8">
        <div className="mb-8 space-y-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Content
            </p>
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <h2
                className={cn(
                  "clay-section-heading max-w-[14ch] text-foreground md:text-[2.6rem]",
                  isClayNotionMode && "font-editorial",
                )}
              >
                Writing and content that show how I think.
              </h2>
              <p className="max-w-[36rem] text-base leading-7 text-muted-foreground xl:text-right">
                A curated preview of writing, notes, and social posts that show product thinking,
                pattern recognition, and how I communicate ideas in public.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {contentItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              className={cn(
                "rounded-[1.8rem] border border-border/60 bg-background/90 p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.18)] backdrop-blur-sm",
                isClayNotionMode && "bg-[#fffdf8]/88 shadow-[0_20px_50px_-38px_rgba(81,57,24,0.14)]",
              )}
            >
              <div className="space-y-3">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.format}
                </p>
                <h3
                  className={cn(
                    "clay-card-title text-foreground",
                    isClayNotionMode && "font-editorial text-[1.48rem]",
                  )}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>

              <a
                href={item.href ?? siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Open link
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
