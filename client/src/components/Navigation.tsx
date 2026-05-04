import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, House, Menu, UserRound, Waypoints, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = siteConfig.nav;
  const socialLinks = siteConfig.socials;
  const isClayNotionMode = siteConfig.experiments.clayNotionLanding && location === "/";
  const navIcons = {
    Home: House,
    Work: BriefcaseBusiness,
    Journey: Waypoints,
    About: UserRound,
  } as const;
  const desktopTabs = navItems.map((item) => ({
    ...item,
    icon: navIcons[item.name as keyof typeof navIcons],
  }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "/" && location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
          isClayNotionMode
            ? "border-border/45 bg-[#fffaf2]/92 backdrop-blur-xl"
            : isScrolled
              ? "border-border/40 bg-background/82 backdrop-blur-xl"
              : "border-transparent bg-background/72",
        )}
      >
        <div
          className={cn(
            "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
            isClayNotionMode ? "py-3" : "py-3",
          )}
        >
          <div className="flex min-h-[4.75rem] items-center justify-between gap-4 md:hidden">
            <Link href="/">
              <motion.div
                className="flex cursor-pointer items-center space-x-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="font-display text-[1.95rem] font-bold tracking-[-0.04em] text-foreground">
                  Nivedita
                </span>
              </motion.div>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-border/60 bg-white/80 shadow-sm backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <div className="hidden min-h-[5rem] md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
            <div className="flex justify-start">
              <Link href="/">
                <motion.div
                  className={cn(
                    "flex cursor-pointer flex-col items-start justify-center gap-0.5 px-2 py-1",
                    isClayNotionMode && "pl-1",
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={cn(
                    "font-display text-[1.68rem] font-bold tracking-[-0.045em] text-foreground",
                    isClayNotionMode && "font-sans text-[1.36rem] font-semibold tracking-[-0.04em]",
                  )}>
                    Nivedita
                  </span>
                  {isClayNotionMode ? (
                    <span className="font-hand text-[1.02rem] leading-none text-[#a36b37]">
                      product manager
                    </span>
                  ) : null}
                </motion.div>
              </Link>
            </div>

            <div className="flex justify-center">
              {isClayNotionMode ? (
                <div className="flex items-center gap-1 rounded-full border border-border/60 bg-[#fffdf7]/90 p-1.5 shadow-[0_14px_36px_-30px_rgba(48,30,10,0.14)] backdrop-blur-md">
                  {desktopTabs.map((item) => {
                    const isActive =
                      location === item.href ||
                      (item.href === "/" && location === "/") ||
                      (item.href !== "/" && location.startsWith(item.href));
                    const Icon = item.icon;

                    return (
                      <Link key={item.name} href={item.href}>
                        <motion.span
                          className={cn(
                            "inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors",
                            isActive && "bg-[#1d1a15] text-[#fff9ef]",
                            !isActive && "hover:bg-[#f5eee2] hover:text-foreground",
                          )}
                          onClick={() => handleNavClick(item.href)}
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                          {item.name}
                        </motion.span>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <SlideTabs
                  tabs={desktopTabs}
                  activeHref={location}
                  onNavigate={handleNavClick}
                  className="shadow-[0_14px_40px_-30px_rgba(15,23,42,0.28)]"
                />
              )}
            </div>

            <div className="flex justify-end">
              <div className={cn(
                "flex items-center justify-end gap-1 rounded-full px-1 py-1",
                isClayNotionMode && "rounded-[1.2rem]",
              )}>
                <div className="flex items-center gap-1 rounded-full border border-border/60 bg-[#fffdf7]/90 p-1.5 shadow-[0_14px_36px_-30px_rgba(48,30,10,0.14)] backdrop-blur-md">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className={cn(
                          "rounded-full p-2 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/60 hover:text-foreground",
                          isClayNotionMode && "hover:bg-[#f5eee2]",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-x-4 top-24 z-40 rounded-2xl border p-4 shadow-2xl backdrop-blur-xl md:hidden",
              isClayNotionMode
                ? "border-border/60 bg-[#fffaf2]/95"
                : "border-white/40 bg-white/95",
            )}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive =
                  location === item.href ||
                  (item.href === "/" && location === "/") ||
                  (item.href !== "/" && location.startsWith(item.href));
                const Icon = navIcons[item.name as keyof typeof navIcons];

                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors ${isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      onClick={() => handleNavClick(item.href)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {item.name}
                    </motion.div>
                  </Link>
                )
              })}

              <div className="mt-2 flex justify-center gap-3 border-t border-border pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="rounded-full border border-border/70 bg-white p-3 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:text-primary"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
