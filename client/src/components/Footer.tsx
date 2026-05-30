import { Link, useLocation } from "wouter";
import { siteConfig } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;
  const isHome = location === "/";
  const showFloatingMobileCta =
    location !== "/work" &&
    location !== "/projects" &&
    !location.startsWith("/projects/");

  const handleHomeSectionClick = (id: string) => {
    if (!isHome) {
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className={cn(
      "relative overflow-hidden border-t border-border/50 bg-base dark:bg-ink",
      isClayNotionMode && "bg-[#fff8ef]/70",
    )}>
      <div className={cn(
        "pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-flair/5",
        isClayNotionMode && "from-[#f4dfbf]/40 via-transparent to-[#d8ead1]/30",
      )} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className={cn(
            "mb-12 rounded-[2rem] border border-border/50 bg-background/60 p-8 shadow-lg backdrop-blur-lg lg:p-10",
            isClayNotionMode && "paper-panel bg-[#fffdf7]/90 shadow-[0_18px_50px_-40px_rgba(81,57,24,0.16)]",
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              {isClayNotionMode ? (
                <p className="mb-2 font-hand text-[1.35rem] leading-none text-[#a36b37]">
                  good product work starts with sharper questions
                </p>
              ) : null}
              <h3 className={cn(
                "mb-2 text-2xl font-bold text-foreground md:text-3xl",
                isClayNotionMode && "font-editorial text-[2.2rem] font-medium tracking-[-0.045em] md:text-[3rem]",
              )}>
                Let&apos;s build something meaningful
              </h3>
              <p className="text-lg text-muted-foreground">
                AI-first product work, grounded in clarity, systems thinking, and execution.
              </p>
            </div>
            <Link href="/contact">
              <motion.span
                className={cn(
                  "group inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-semibold shadow-md transition-all hover:bg-ink/5 hover:shadow-lg dark:border-base dark:hover:bg-base/10",
                  isClayNotionMode && "border-border bg-[#1f1a14] text-[#fff8ef] hover:bg-[#2a241d]",
                )}
                aria-label="Contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="grid gap-10 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              {isClayNotionMode ? (
                <div className="flex flex-col">
                  <span className="font-display text-xl font-semibold tracking-[-0.04em] text-foreground">
                    Nivedita
                  </span>
                  <span className="font-hand text-[1.05rem] leading-none text-[#a36b37]">product manager</span>
                </div>
              ) : (
                <>
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <span className="font-body font-semibold text-lg text-foreground">
                    Nivedita
                  </span>
                </>
              )}
            </motion.div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              AI-first Product Manager focused on clear product thinking, structured execution, and human-centered outcomes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Featured Work", href: "/", sectionId: "featured-work" },
                { name: "Case Studies + Builds", href: "/", sectionId: "case-studies-builds" },
                { name: "What I’m Building With", href: "/", sectionId: "toolkit" },
                { name: "Journey", href: "/journey" },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={link.href}>
                    <motion.span
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer block"
                      onClick={() => link.sectionId ? handleHomeSectionClick(link.sectionId) : undefined}
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {siteConfig.socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-accent/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col items-center justify-between space-y-4 border-t border-border/50 pt-8 md:flex-row md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nivedita. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for thoughtful product conversations and future teams.
          </p>
        </motion.div>
      </div>

      {showFloatingMobileCta ? (
        <motion.div
          className="pointer-events-none fixed bottom-4 left-0 z-50 flex w-full justify-center md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/contact">
            <motion.span
              className="pointer-events-auto cursor-pointer rounded-full bg-accent px-8 py-3 text-lg font-bold text-accent-foreground shadow-lg transition-all duration-200 hover:bg-accent/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
              aria-label="Let's Talk - contact section"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
            </motion.span>
          </Link>
        </motion.div>
      ) : null}
    </footer>
  );
}
