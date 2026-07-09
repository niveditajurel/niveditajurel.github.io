import { Link, useLocation } from "wouter";
import { siteConfig } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PixelStripe } from "@/components/ui/PixelBlocks";
import { PixelIcon } from "@/components/ui/PixelIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding;
  const isHome = location === "/";

  const handleHomeSectionClick = (id: string) => {
    if (!isHome) {
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative overflow-hidden bg-[var(--bp-paper)]">
      {/* Pixelated sunset stripe — page-closing brand band */}
      <PixelStripe />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 rounded-xl border border-[var(--bp-cobalt)]/15 bg-[var(--bp-cobalt-subtle)]/45 p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-2 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[var(--bp-ink-muted)]">
                <PixelIcon name="mail" size={13} />
                Contact
              </p>
              <h3 className="font-statement mb-2 text-[2.2rem] font-semibold leading-[1.05] tracking-tight text-[var(--bp-ink)] md:text-[3rem]">
                Let&apos;s build something meaningful
              </h3>
              <p className="text-lg text-[var(--bp-ink-muted)]">
                AI-first product work, grounded in clarity, systems thinking, and execution.
              </p>
            </div>
            <Link href="/contact">
              <motion.span
                className="group inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--bp-cobalt)] px-6 py-3 font-mono text-[0.85rem] font-medium text-white transition-transform hover:-translate-y-0.5"
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
            <p className="text-[var(--bp-ink-muted)] text-sm max-w-xs leading-relaxed">
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
                  key={`${link.href}-${link.sectionId ?? "page"}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={link.href}>
                    <motion.span
                      className="text-sm text-[var(--bp-ink-muted)] hover:text-accent transition-colors duration-200 cursor-pointer block"
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
                    className="w-10 h-10 bg-muted hover:bg-accent/10 rounded-lg flex items-center justify-center text-[var(--bp-ink-muted)] hover:text-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
          <p className="text-sm text-[var(--bp-ink-muted)]">
            © {currentYear} Nivedita. All rights reserved.
          </p>
          <p className="text-sm text-[var(--bp-ink-muted)]">
            Built for thoughtful product conversations and future teams.
          </p>
        </motion.div>
      </div>

    </footer>
  );
}
