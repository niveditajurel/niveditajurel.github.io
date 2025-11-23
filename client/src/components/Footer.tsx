import { Link } from "wouter";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base dark:bg-ink border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-flair/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* CTA Row */}
        <motion.div 
          className="mb-12 rounded-2xl border border-border/50 p-8 lg:p-10 bg-background/60 backdrop-blur-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Let's build something meaningful</h3>
              <p className="text-muted-foreground text-lg">I turn ambiguity into shippable, user-loved products.</p>
            </div>
            <motion.a
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-ink dark:border-base hover:bg-ink/5 dark:hover:bg-base/10 transition-all font-semibold shadow-md hover:shadow-lg"
              aria-label="Contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-body font-semibold text-lg text-foreground">
                Nivedita
              </span>
            </motion.div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Product Manager passionate about building human-centered digital experiences that drive growth and delight users.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Experience", href: "/experience" },
                { name: "Contact", href: "/contact" },
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
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/nivedita-niv/", label: "LinkedIn profile" },
                { icon: FaGithub, href: "https://github.com/niveditajurel", label: "GitHub profile" },
                { icon: FaTwitter, href: "https://x.com/nniv266", label: "Twitter/X profile" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.href}
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

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nivedita. All rights reserved.
          </p>
          <motion.p 
            className="text-sm text-muted-foreground flex items-center space-x-1"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            <span>for the web</span>
          </motion.p>
        </motion.div>
      </div>
      <motion.div 
        className="fixed bottom-4 left-0 w-full flex justify-center z-50 md:hidden pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href="/contact"
          className="pointer-events-auto bg-accent text-accent-foreground px-8 py-3 rounded-full shadow-lg font-bold text-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-accent transition-all duration-200 hover:bg-accent/90"
          aria-label="Let's Talk - contact section"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>
      </motion.div>
    </footer>
  );
} 