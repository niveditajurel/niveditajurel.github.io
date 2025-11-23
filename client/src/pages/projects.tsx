import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, ArrowRight, Users, TrendingUp, Clock, Target } from "lucide-react";
import projectsData from "../data/teasers.json";
import { motion } from 'framer-motion';

const projects = projectsData as typeof projectsData;

export default function Projects() {
  const heroRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-16 page-transition">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroRef.ref as React.RefObject<HTMLDivElement>}
            className={`text-center fade-in ${heroRef.isVisible ? "visible" : ""}`}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Featured{" "}
              <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Product case studies showcasing my approach to solving complex user problems 
              through research, design, and data-driven iteration.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={projectsRef.ref as React.RefObject<HTMLDivElement>}
            className="grid gap-8 md:gap-12"
          >
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`group cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden slide-in-left ${
                  projectsRef.isVisible ? "visible" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className={`relative overflow-hidden flex items-center justify-center p-4 ${
                      project.id === "skingenius" ? "bg-[#ce6c47]" : "bg-black"
                    }`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`transition-transform duration-500 group-hover:scale-105 max-w-full max-h-full ${
                          project.id === "skingenius" 
                            ? "w-full h-64 lg:h-full object-contain" 
                            : "w-3/4 h-48 lg:h-3/4 object-contain"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((raw, tagIndex) => {
                          const t = raw.trim();
                          const tag = (/^ai$/i.test(t) ? 'AI'
                            : /^fintech$/i.test(t) ? 'Fintech'
                            : /^saas$/i.test(t) ? 'SaaS'
                            : /^e-?commerce$/i.test(t) ? 'E-commerce'
                            : t);
                          return (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="bg-ink/10 dark:bg-base/10 text-ink dark:text-base border-transparent"
                            >
                              {tag}
                            </Badge>
                          );
                        })}
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="font-body text-lg text-primary font-medium mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      {project.href && (
                        <a
                          href={project.href}
                          className={`inline-flex items-center px-6 py-3 mt-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none group ${
                            project.id === "nomad-ai" || project.id === "skingenius"
                              ? "bg-white text-black border-2 border-black hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-gray-500"
                              : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus-visible:ring-2 focus-visible:ring-blue-500"
                          }`}
                          aria-label={`View case study for ${project.title}`}
                          tabIndex={0}
                        >
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}