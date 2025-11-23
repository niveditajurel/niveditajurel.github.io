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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-flair to-accent origin-left" 
           style={{ transform: `scaleX(${scrollProgress / 100})`, transformOrigin: 'left' }} />
      
      <div className="w-full px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer hover-glow" 
              tabIndex={0} 
              aria-label="Go to Home" 
              role="link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-white font-bold text-sm">N</span>
              </motion.div>
              <span className="font-body font-semibold text-2xl text-foreground">
                Niv
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 justify-center flex-1">
            {navItems.map((item) => {
              const isActive = location === item.href || 
                (item.href === "/" && location === "/") ||
                (item.href !== "/" && location.startsWith(item.href));
              
              return (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    className={`relative font-body font-medium transition-colors duration-200 cursor-pointer px-3 py-2 rounded-lg ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    tabIndex={0}
                    aria-label={`Go to ${item.name}`}
                    role="link"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 justify-end">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-3 lg:gap-4">
              <a 
                href="https://www.linkedin.com/in/nivedita-niv/" 
                aria-label="LinkedIn profile"
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/niveditajurel" 
                aria-label="GitHub profile"
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/nniv266" 
                aria-label="Twitter/X profile"
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="cursor-glow hover-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Sun className="h-4 w-4" aria-hidden="true" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
                className="px-2 pt-2 pb-3 space-y-1"
              >
                {navItems.map((item, index) => {
                  const isActive = location === item.href || 
                    (item.href === "/" && location === "/") ||
                    (item.href !== "/" && location.startsWith(item.href));
                  
                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-200 ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-primary hover:bg-muted"
                        }`}
                        onClick={() => handleNavClick(item.href)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-2 border-t border-border/50"
                >
                  <div className="flex justify-center gap-6 py-4">
                    <motion.a
                      href="https://www.linkedin.com/in/nivedita-niv/" 
                      aria-label="LinkedIn" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/niveditajurel" 
                      aria-label="GitHub" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://x.com/nniv266" 
                      aria-label="Twitter/X" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTwitter className="w-6 h-6" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}