import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/site";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [location] = useLocation();
    const { theme, setTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar bg
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = siteConfig.nav;

    const handleMobileLinkClick = () => setIsOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
                ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        {siteConfig.name}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary relative group ${location === link.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                {link.name}
                                {(location === link.href) && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                    />
                                )}
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        ))}

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {siteConfig.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <Moon className="h-5 w-5 text-slate-700" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <Moon className="h-5 w-5 text-slate-700" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 -mr-2 text-foreground hover:text-primary transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border/50 bg-background/95 backdrop-blur-md overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleMobileLinkClick}
                                    className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${location === link.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
