import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Sparkles, Globe, ChevronDown } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

const typewriterTexts = [
  "0→1 Thinker",
  "Data-Led Decisions",
  "User-First Mindset"
];

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter animation effect
  useEffect(() => {
    const currentFullText = typewriterTexts[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentFullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
          setIsTyping(true);
        }, 400);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex]);

  const handleDownloadResume = () => {
    trackEvent('Download Resume', {});
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center pt-20 pb-12 sm:pt-32 sm:pb-16 bg-base dark:bg-ink text-ink dark:text-base">
      {/* Refined Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] animate-slowPulse pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-flair/20 blur-[120px] animate-slowPulseReverse pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
                Available for New Opportunities
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-sm font-medium bg-flair/10 text-flair border-flair/20 backdrop-blur-sm"
              >
                <Globe className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
                Open to relocation
              </Badge>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight text-foreground">
              Hi, I'm Nivedita <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-flair">
                Product Manager
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="h-8 mb-8 text-xl sm:text-2xl font-medium text-muted-foreground">
              <span className="inline-block">
                {displayText}
                <span className="animate-pulse ml-1 text-primary">|</span>
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              I shape raw ideas into data-smart products that scale. Grounded in technical rigor and a founder’s mindset, I pair empathy with practical AI to move from MVP to market.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl bg-foreground text-background hover:bg-foreground/90"
                >
                  <span className="relative z-10 flex items-center">
                    See My Work
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>

              <a
                href="https://drive.google.com/file/d/1RTBlSBIM6AnV3tBhFuGj34yHxIZoS7fm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center px-8 py-6 rounded-full text-lg font-semibold border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Image with Floating Elements */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[500px] mx-auto aspect-square">
              {/* Main Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl z-10">
                <img
                  src="/me1.PNG"
                  alt="Nivedita portrait"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute inset-[-20px] rounded-full border border-flair/20 animate-spin-slow animation-delay-2000" style={{ animationDirection: 'reverse' }} />

              {/* Floating Keywords */}
              {[
                { text: "Strategy", x: "0%", y: "-45%", color: "text-green-600", delay: 0 },
                { text: "AI", x: "45%", y: "-20%", color: "text-blue-600", delay: 1 },
                { text: "Data", x: "-45%", y: "20%", color: "text-orange-600", delay: 2 },
                { text: "User-First", x: "40%", y: "40%", color: "text-purple-600", delay: 3 },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  className={`absolute left-1/2 top-1/2 bg-white/90 dark:bg-ink/90 backdrop-blur-md px-5 py-2 rounded-full shadow-lg border border-border/50 font-semibold text-sm ${item.color} z-20`}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{
                    x: `calc(-50% + ${item.x})`,
                    opacity: 1,
                    y: [`calc(-50% + ${item.y})`, `calc(-50% + ${item.y} - 10px)`, `calc(-50% + ${item.y})`]
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.5 + i * 0.1 },
                    x: { duration: 0.5, delay: 0.5 + i * 0.1 },
                    y: {
                      repeat: Infinity, repeatType: "reverse", duration: 3, delay: 1 + i
                    }
                  }}
                >
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}