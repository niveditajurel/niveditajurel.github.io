import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Terminal, Zap, Code2 } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = "npm run build:future";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    trackEvent('Download Resume', {});
    // Trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const typedWords = [
    "0 → 1 Thinker",
    "User-First Mindset",
    "Data-Led Decisions"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % typedWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home" className="relative overflow-hidden py-32 bg-background text-foreground">
      {/* animated gradient blob */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-gradient-to-br from-accent/40 to-flair/30 rounded-full blur-3xl animate-blob pointer-events-none" />

      {/* Secondary blob for balance */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        {/* text block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-6xl font-[600] leading-tight font-display">
            Turning empathy into <span className="text-accent">product&nbsp;strategy</span>
          </h1>

          {/* typewriter */}
          <div className="mt-4 text-xl font-medium tracking-wide h-8 text-muted-foreground">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWordIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {typedWords[currentWordIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Early-career Product Manager passionate about crafting data-driven experiences that delight users and drive growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link href="/projects">
              <button
                onClick={() => trackEvent('Explore My Work', {})}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                Explore My Work →
              </button>
            </Link>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-muted transition-all hover:scale-105 font-medium"
            >
              <Zap className="w-5 h-5" /> {/* Using Zap as generic icon since ArrowDownTrayIcon needs install */}
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-full blur-2xl opacity-40 animate-pulse-glow" />
            <img
              src="/me1.PNG"
              alt="Nivedita profile"
              className="relative w-full h-full rounded-full object-cover shadow-2xl border-4 border-background"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
