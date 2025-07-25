import { useState } from "react";
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

const projects = projectsData as typeof projectsData;

export default function Projects() {
  const heroRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
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
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
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
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
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
                          className="inline-flex items-center px-4 py-2 mt-2 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          aria-label={`View case study for ${project.title}`}
                          tabIndex={0}
                        >
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}