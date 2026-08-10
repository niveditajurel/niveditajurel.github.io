import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { PixelIcon, type PixelIconName } from "@/components/ui/PixelIcon";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = siteConfig.nav;
  const navIcons: Record<string, PixelIconName> = { Home: "house", Work: "case", Fun: "flask", Journey: "flag" };
  const socialLinks = siteConfig.socials.slice(0, 2); // LinkedIn + GitHub only — sober bar

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (sectionId) {
      if (location === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.sessionStorage.setItem("homeSectionTarget", sectionId);
      return;
    }
    if (href === "/" && location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-[var(--bp-surface)]/95 backdrop-blur-sm transition-shadow duration-150",
          isScrolled
            ? "border-[var(--bp-hairline)] shadow-[0_1px_2px_rgba(31,31,31,0.04)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Wordmark */}
          <Link href="/">
            <span className="font-display cursor-pointer text-2xl text-[var(--bp-ink)]">
              Nivedita<span className="text-[var(--bp-cobalt)]">_</span>
            </span>
          </Link>

          {/* Links — segmented-tab pattern */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  onClick={() => handleNavClick(item.href, item.sectionId)}
                  className="inline-flex cursor-pointer items-center gap-2 border-b-2 border-transparent py-1 font-mono text-[0.8rem] font-medium text-[#f45117]"
                >
                  <PixelIcon name={navIcons[item.name] ?? "spark"} size={13} color="#f45117" />
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Right: socials + dark CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={siteConfig.links.email}
              aria-label="Email Nivedita"
              className="text-[var(--bp-ink-muted)] transition-colors duration-150 hover:text-[var(--bp-ink)]"
            >
              <Mail className="h-4 w-4" />
            </a>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-[var(--bp-ink-muted)] transition-colors duration-150 hover:text-[var(--bp-ink)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
            <Link href="/contact">
              <span className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[var(--bp-ink)] px-4 py-2 font-mono text-[0.8rem] font-medium text-[var(--bp-action-ink)] transition-colors duration-200 hover:bg-[#3d3931]">
                Let&apos;s talk
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-lg border border-[var(--bp-hairline)] bg-white p-2 text-[var(--bp-ink)] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[#d8c08f] bg-[#fffaf0] shadow-[0_12px_24px_-12px_rgba(31,31,31,0.12)] md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    onClick={() => handleNavClick(item.href, item.sectionId)}
                    className="flex cursor-pointer items-center gap-3 border-b border-[#e1cda3] py-3.5 text-base font-semibold text-[#f45117]"
                  >
                    <PixelIcon name={navIcons[item.name] ?? "spark"} size={15} color="#f45117" />
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="flex items-center justify-between py-4">
                <div className="flex gap-5">
                  <a
                    href={siteConfig.links.email}
                    aria-label="Email Nivedita"
                    className="text-[#6d665b] transition-colors hover:text-[#211f1a]"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  {siteConfig.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="text-[#6d665b] transition-colors hover:text-[#211f1a]"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
                <Link href="/contact">
                  <span
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[var(--bp-ink)] px-4 py-2 font-mono text-[0.8rem] font-medium text-white"
                  >
                    Let&apos;s talk
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
