import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import React from 'react';

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
      // Typing phase
      if (displayText.length < currentFullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause before deleting
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex]);

  const handleExploreWork = () => {
    trackEvent('Explore My Work');
  };

  const handleDownloadResume = () => {
    trackEvent('Download Resume');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
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
    <section className="relative isolate overflow-hidden py-24 sm:py-32 bg-base dark:bg-ink text-ink dark:text-base min-h-screen flex flex-col lg:flex-row items-center justify-between">
      {/* Glow #1 - top left */}
      <div className="absolute -top-56 -left-48 w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle_at_center,rgba(91,141,239,0.35)_0%,transparent_70%)] blur-[120px] animate-slowPulse pointer-events-none" />
      
      {/* Glow #2 - bottom right */}
      <div className="absolute bottom-[-220px] right-[-260px] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(248,150,118,0.35)_0%,transparent_70%)] blur-[140px] animate-slowPulseReverse pointer-events-none" />
      
      {/* Floating organic shapes */}
      {/* <FloatingShapes /> */}
      
      {/* Floating tech icons */}
      {/* <FloatingTechIcons /> */}

      {/* Left: Text Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          {/* Data pulse line SVG */}
          <svg 
            className="absolute top-8 left-1/2 -translate-x-1/2 w-96 h-16 pointer-events-none mix-blend-difference opacity-10"
            viewBox="0 0 384 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,32 Q96,8 192,32 T384,32" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none"
              strokeDasharray="4 4"
              className="animate-pulse-line"
            />
          </svg>

          {/* Text block */}
          <motion.div variants={itemVariants}>
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 cursor-glow"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Available for New Opportunities
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.15] mb-4 text-ink dark:text-base">
              Hi, I'm Nivedita
              <br />
              <span className="relative inline-block transition-colors duration-300 hover:text-flair">
                Product Manager
                <span className="absolute inset-0 bg-accent/20 rounded-md -z-10 scale-105 blur-sm opacity-0 hover:opacity-100 transition" />
              </span>
              <br />
              you can count on
            </h1>

            {/* Typewriter */}
            <div className="mt-4 text-xl font-medium tracking-wide mb-6">
              <span className="inline-block min-h-[2.5rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="max-w-xl text-lg mb-10 text-muted-foreground">
              Simplicity is my superpower. I turn complex ideas into experiences users love and stakeholders trust. I help startups and companies craft data-driven products that scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/projects">
                <button 
                  className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-base shadow-lg hover:shadow-xl transition cursor-glow hover-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 font-medium bg-[#242424] text-[#d6d6d6]"
                  onClick={handleExploreWork}
                  aria-label="Explore my portfolio projects"
                >
                  Chat with me
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition">
                    →
                  </span>
                </button>
              </Link>
              
              <button 
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full border border-ink/40 dark:border-base/40 hover:bg-ink/5 dark:hover:bg-base/10 transition-all duration-200 cursor-glow hover-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                onClick={handleDownloadResume}
                aria-label="Download my resume PDF"
              >
                <Download className="w-5 h-5" />
                Download Resume
                <span className="transform translate-x-0 group-hover:translate-x-1 transition opacity-0 group-hover:opacity-100">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right: Image with glow, responsive and animated in */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative flex items-center justify-center" style={{ height: 'min(70vw, 620px)' }}>
          {/* Background gradient glow with visible pulse */}
          <div className="absolute z-0 w-[90vw] max-w-[600px] h-[90vw] max-h-[600px] rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-60 blur-2xl animate-pulse" />
          {/* Floating keyword bubbles - white translucent with colored text */}
          <motion.span
            className="absolute left-[44%] top-[-2%] -translate-x-1/2 bg-white/70 dark:bg-base/80 rounded-full px-6 py-2 shadow-xl text-green-600 font-semibold text-base md:text-lg opacity-95 pointer-events-none select-none border border-accent/40"
            initial={{ y: 0, opacity: 0.8 }}
            animate={{ y: [0, -18, 0, 18, 0], opacity: [0.8, 1, 0.8, 1, 0.8] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            style={{ zIndex: 20, textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >Strategy</motion.span>
          <motion.span
            className="absolute left-[8%] top-[10%] bg-white/70 dark:bg-base/80 rounded-full px-6 py-2 shadow-xl text-black dark:text-base font-semibold text-base md:text-lg opacity-90 pointer-events-none select-none border border-accent/20"
            initial={{ x: 0, y: 0, opacity: 0.8 }}
            animate={{ x: [0, 10, 0, -10, 0], y: [0, -20, -30, -20, 0], opacity: [0.8, 1, 0.8, 1, 0.8] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ zIndex: 20, textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >AI</motion.span>
          <motion.span
            className="absolute left-[5%] bottom-[20%] bg-white/70 dark:bg-base/80 rounded-full px-6 py-2 shadow-xl text-flair font-semibold text-base md:text-lg opacity-90 pointer-events-none select-none border border-flair/20"
            initial={{ x: 0, y: 0, opacity: 0.8 }}
            animate={{ x: [0, -12, 0, 12, 0], y: [0, 18, 28, 18, 0], opacity: [0.8, 1, 0.8, 1, 0.8] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            style={{ zIndex: 20, textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >Data</motion.span>
          <motion.span
            className="absolute right-[8%] top-[14%] bg-white/70 dark:bg-base/80 rounded-full px-6 py-2 shadow-xl text-black dark:text-base font-semibold text-base md:text-lg opacity-90 pointer-events-none select-none border border-accent/20"
            initial={{ x: 0, y: 0, opacity: 0.8 }}
            animate={{ x: [0, -10, 0, 10, 0], y: [0, -18, -28, -18, 0], opacity: [0.8, 1, 0.8, 1, 0.8] }}
            transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut', delay: 2.1 }}
            style={{ zIndex: 20, textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >User-First</motion.span>
          <motion.span
            className="absolute right-[12%] top-[60%] bg-white/70 dark:bg-base/80 rounded-full px-6 py-2 shadow-xl text-purple-600 font-semibold text-base md:text-lg opacity-90 pointer-events-none select-none border border-accent/20"
            initial={{ x: 0, y: 0, opacity: 0.8 }}
            animate={{ x: [0, -16, 0, 16, 0], y: [0, 16, 26, 16, 0], opacity: [0.8, 1, 0.8, 1, 0.8] }}
            transition={{ duration: 8.3, repeat: Infinity, ease: 'easeInOut', delay: 3.1 }}
            style={{ zIndex: 20, textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >Metrics</motion.span>
          {/* Profile image */}
          <div className="inline-block z-10 group/profile-img" tabIndex={0} style={{ borderRadius: '50%', outline: 'none' }}>
            <img
              src="/me1.PNG"
              alt="Nivedita portrait"
              className="w-[90vw] max-w-[580px] h-auto pointer-events-auto cursor-pointer profile-img-hover"
              style={{ display: 'block', borderRadius: '50%', transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1)' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Add global CSS for hover/focus if not already present */}
      <style>{`
        .profile-img-hover:hover, .profile-img-hover:focus {
          transform: scale(1.12) rotate(3deg) !important;
          box-shadow: 0 12px 48px 0 rgba(80, 63, 205, 0.25) !important;
          outline: none;
        }
      `}</style>

      {/* Add border pulse animation */}
      <style>{`
        @keyframes borderPulse {
          0%, 100% { filter: blur(8px) opacity(0.7); }
          50% { filter: blur(16px) opacity(1); }
        }
        .animate-borderPulse {
          animation: borderPulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/60 dark:text-base/60">
        <div className="w-[22px] h-[38px] rounded-xl border border-current flex justify-center">
          <div className="w-[4px] h-[8px] bg-current rounded-full animate-scrollDot" />
        </div>
        <span className="text-xs tracking-wide">scroll</span>
      </div>
    </section>
  );
}