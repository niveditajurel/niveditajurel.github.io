import { Hero } from "@/components/Hero";
import { TechSkills } from "@/components/TechSkills";
import { DaniStyleWork } from "@/components/DaniStyleWork";
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Hero />
      </motion.div>

      {/* Daniella-style Work Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <DaniStyleWork />
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <TechSkills />
      </motion.div>
    </div>
  );
}