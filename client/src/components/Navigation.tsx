import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, FlaskConical, House, Menu, Waypoints, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
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
    Fun: FlaskConical,
    Journey: Waypoints,
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
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4"
      >
        <div
          className={cn(
            "mx-auto w-full max-w-7xl rounded-2xl border px-3 shadow-[0_18px_60px_-48px_rgba(34,25,20,0.42),inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-[22px] saturate-[1.28] transition duration-300 sm:px-4",
            isScrolled
              ? "border-[#e0cdbd]/88 bg-[linear-gradient(180deg,rgba(255,250,244,0.76),rgba(244,233,221,0.56))]"
              : "border-[#e4d3c2]/74 bg-[linear-gradient(180deg,rgba(255,250,244,0.66),rgba(244,233,221,0.42))]",
          )}
        >
          <div className="flex min-h-[3.75rem] items-center justify-between gap-4 md:hidden">
            <Link href="/">
              <motion.div
                className="flex cursor-pointer items-center space-x-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="font-display text-2xl font-semibold text-foreground">
                  Nivedita
                </span>
              </motion.div>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-[#cdb7a3]/80 bg-[rgba(255,250,244,0.84)] text-[#2d2118] shadow-sm backdrop-blur-sm hover:bg-[rgba(255,250,244,0.96)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <div className="hidden min-h-[3.85rem] md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
            <div className="flex justify-start">
              <Link href="/">
                <motion.div
                  className={cn(
                    "flex cursor-pointer flex-col items-start justify-center gap-0 px-1 py-0.5",
                    isClayNotionMode && "pl-1",
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={cn(
                    "font-display text-2xl font-semibold text-foreground",
                    isClayNotionMode && "font-display text-2xl font-semibold",
                  )}>
                    Nivedita
                  </span>
                  {isClayNotionMode ? (
                    <span className="font-hand text-base font-medium leading-none text-[#8b5431]">
                      product manager
                    </span>
                  ) : null}
                </motion.div>
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="flex items-center gap-1 rounded-full border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,247,239,0.12))] p-1 shadow-[0_14px_42px_-30px_rgba(34,25,20,0.34),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-[18px] saturate-[1.22]">
                {desktopTabs.map((item) => {
                  const isActive =
                    !item.sectionId &&
                    (location === item.href ||
                      (item.href === "/" && location === "/") ||
                      (item.href !== "/" && location.startsWith(item.href)));
                  const Icon = item.icon;

                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.span
                        className={cn(
                          "inline-flex cursor-pointer items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold text-[#5f4a39] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isActive && "bg-foreground text-background",
                          !isActive && "hover:bg-[rgba(255,248,239,0.46)] hover:text-[#241913]",
                        )}
                        onClick={() => handleNavClick(item.href, item.sectionId)}
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
            </div>

            <div className="flex justify-end">
              <div className={cn(
                "flex items-center justify-end gap-1 rounded-full px-0.5 py-0.5",
              )}>
                <div className="flex items-center gap-1 rounded-full border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,247,239,0.12))] p-1 shadow-[0_14px_42px_-30px_rgba(34,25,20,0.34),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-[18px] saturate-[1.22]">
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
                          "rounded-full p-1.5 text-[#6a5443] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(255,248,239,0.46)] hover:text-[#241913]",
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
              "fixed inset-x-4 top-24 z-40 rounded-2xl border border-[#cdb8a5]/82 bg-[rgba(248,239,228,0.95)] p-4 shadow-2xl backdrop-blur-xl md:hidden",
            )}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive =
                  !item.sectionId &&
                  (location === item.href ||
                    (item.href === "/" && location === "/") ||
                    (item.href !== "/" && location.startsWith(item.href)));
                const Icon = navIcons[item.name as keyof typeof navIcons];

                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors ${isActive
                          ? "bg-foreground text-background"
                          : "text-[#5f4a39] hover:bg-[#f2e7d9] hover:text-[#241913]"
                        }`}
                      onClick={() => handleNavClick(item.href, item.sectionId)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {item.name}
                    </motion.div>
                  </Link>
                )
              })}

              <div className="mt-2 flex justify-center gap-3 border-t border-[#d5c0ae] pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="rounded-full border border-[#ccb7a3]/82 bg-[rgba(255,250,244,0.88)] p-3 text-[#5f4a39] transition-all duration-200 hover:border-[#b98c65] hover:text-[#241913]"
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
