import { Link } from "wouter";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base dark:bg-ink border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              </div>
              <span className="font-body font-semibold text-lg text-foreground">
                Nivedita
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Product Manager passionate about building human-centered digital experiences that drive growth and delight users.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/">
                <span className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer block">
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer block">
                  About
                </span>
              </Link>
              <Link href="/projects">
                <span className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer block">
                  Projects
                </span>
              </Link>
              <Link href="/experience">
                <span className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer block">
                  Experience
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer block">
                  Contact
                </span>
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/nivedita-niv/" 
                aria-label="LinkedIn profile" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-muted hover:bg-accent/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/niveditajurel" 
                aria-label="GitHub profile" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-muted hover:bg-accent/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/nniv266" 
                aria-label="Twitter/X profile" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-muted hover:bg-accent/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nivedita. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the web</span>
          </p>
        </div>
      </div>
      <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 md:hidden pointer-events-none">
        <a
          href="#contact"
          className="pointer-events-auto bg-accent text-accent-foreground px-8 py-3 rounded-full shadow-lg font-bold text-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-accent transition-all duration-200 hover:bg-accent/90"
          aria-label="Let’s Talk - contact section"
        >
          Let’s Talk
        </a>
      </div>
    </footer>
  );
} 