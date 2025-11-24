import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? "pt-4" : "pt-6"
          }`}
      >
        <div
          className={`relative flex items-center justify-between transition-all duration-500 ${isScrolled
              ? "w-[90%] max-w-5xl bg-white/80 dark:bg-ink/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/20 dark:border-white/10"
              : "w-full px-6 py-4 bg-transparent"
            }`}
        >
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className={`font-display font-bold text-xl ${isScrolled ? "text-foreground" : "text-foreground"}`}>
                Niv
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive =
                location === item.href ||
                (item.href === "/" && location === "/") ||
                (item.href !== "/" && location.startsWith(item.href));

              return (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Social Icons (Desktop only when scrolled, or always visible if space permits) */}
            <div className={`hidden lg:flex items-center gap-2 mr-2 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-80"}`}>
              <a
                href="https://www.linkedin.com/in/nivedita-niv/"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/niveditajurel"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full hover:bg-muted/80"
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
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
            className="fixed inset-x-4 top-24 z-40 bg-white/95 dark:bg-ink/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 p-4 md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive =
                  location === item.href ||
                  (item.href === "/" && location === "/") ||
                  (item.href !== "/" && location.startsWith(item.href));

                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      onClick={() => handleNavClick(item.href)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                )
              })}

              <div className="flex justify-center gap-6 pt-4 mt-2 border-t border-border">
                <a href="https://www.linkedin.com/in/nivedita-niv/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/niveditajurel" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://x.com/nniv266" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}