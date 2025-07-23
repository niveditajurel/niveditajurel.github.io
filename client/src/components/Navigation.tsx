import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer hover-glow -ml-8" tabIndex={0} aria-label="Go to Home" role="link">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              </div>
              <span className="font-body font-semibold text-2xl text-foreground">
                Niv
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`font-body font-medium transition-colors duration-200 cursor-pointer hover:text-primary ${
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  tabIndex={0}
                  aria-label={`Go to ${item.name}`}
                  role="link"
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/nivedita-niv/" 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/niveditajurel" 
                aria-label="GitHub" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/nniv266" 
                aria-label="Twitter/X" 
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
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <div
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-200 ${
                      location === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
              <div className="pt-2 border-t border-border/50">
                <div className="flex justify-center gap-6 py-4">
                  <a 
                    href="https://www.linkedin.com/in/nivedita-niv/" 
                    aria-label="LinkedIn" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://github.com/niveditajurel" 
                    aria-label="GitHub" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://x.com/nniv266" 
                    aria-label="Twitter/X" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}