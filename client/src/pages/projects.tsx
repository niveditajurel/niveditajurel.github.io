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

const projects = [
  {
    id: "mindful-money",
    title: "MindfulMoney",
    subtitle: "Personal Finance App for Gen Z",
    description: "A behavioral finance app that helps young adults build healthy money habits through gamification and micro-investing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Mobile App", "FinTech", "Behavioral Design"],
    metrics: {
      users: "15K+",
      growth: "85%",
      timeline: "8 months",
      impact: "45% improvement in savings rate",
    },
    challenge: "Young adults struggle with financial literacy and saving money. Traditional finance apps are overwhelming and don't address the psychological barriers to good financial habits.",
    solution: "Created a gamified experience that breaks down financial goals into small, achievable actions. Integrated behavioral economics principles to make saving feel rewarding rather than restrictive.",
    process: [
      "Conducted 30+ user interviews with college students and recent graduates",
      "Analyzed competitor apps and identified gaps in emotional engagement",
      "Prototyped and tested 5 different gamification approaches",
      "Collaborated with behavioral economists to validate psychological principles",
      "Launched MVP with core saving features and iterated based on user feedback",
    ],
    results: [
      "15,000+ active users within 6 months of launch",
      "85% month-over-month user growth",
      "45% improvement in average user savings rate",
      "4.8/5 app store rating with 500+ reviews",
    ],
    role: "Led product strategy, user research, and cross-functional coordination between design and engineering teams.",
  },
  {
    id: "eco-track",
    title: "EcoTrack",
    subtitle: "Sustainability Dashboard for Small Businesses",
    description: "A comprehensive platform helping small businesses track, analyze, and reduce their environmental impact through actionable insights.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    tags: ["Web Platform", "Sustainability", "Analytics"],
    metrics: {
      users: "200+",
      growth: "120%",
      timeline: "6 months",
      impact: "30% average carbon footprint reduction",
    },
    challenge: "Small businesses want to be more sustainable but lack the tools and knowledge to measure and improve their environmental impact effectively.",
    solution: "Built an intuitive dashboard that aggregates sustainability data from multiple sources and provides personalized recommendations for reducing environmental impact.",
    process: [
      "Partnered with 15 local businesses to understand sustainability pain points",
      "Researched carbon accounting methodologies and industry standards",
      "Designed wireframes focusing on data visualization and actionable insights",
      "Built MVP with energy tracking and basic reporting features",
      "Implemented advanced analytics and recommendation engine",
    ],
    results: [
      "200+ businesses onboarded in pilot program",
      "120% quarter-over-quarter growth in active users",
      "30% average reduction in reported carbon footprint",
      "Featured in 3 sustainability publications",
    ],
    role: "Owned end-to-end product development from concept to launch, including market research, feature prioritization, and go-to-market strategy.",
  },
  {
    id: "study-sync",
    title: "StudySync",
    subtitle: "Collaborative Learning Platform",
    description: "A peer-to-peer study platform that connects students with complementary skills and creates structured study groups for better learning outcomes.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    tags: ["EdTech", "Community", "Matching Algorithm"],
    metrics: {
      users: "5K+",
      growth: "200%",
      timeline: "4 months",
      impact: "25% improvement in study effectiveness",
    },
    challenge: "Students struggle to find effective study partners and often study in isolation, leading to decreased motivation and learning outcomes.",
    solution: "Created a matching algorithm that pairs students based on learning styles, subject strengths, and availability, then provides structured tools for collaborative studying.",
    process: [
      "Surveyed 200+ students about study habits and collaboration preferences",
      "Analyzed existing study group formation patterns on campus",
      "Designed and tested matching algorithm with different weighting factors",
      "Built core platform with messaging, scheduling, and progress tracking",
      "Ran pilot program with computer science and business students",
    ],
    results: [
      "5,000+ students signed up during beta launch",
      "200% month-over-month growth in study sessions",
      "25% improvement in self-reported study effectiveness",
      "Adopted by 3 university departments as official study tool",
    ],
    role: "Led product design and development, conducted user research, and coordinated with university administrators for pilot program implementation.",
  },
];

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
            ref={heroRef.ref}
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
            ref={projectsRef.ref}
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

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {project.metrics.users} users
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {project.metrics.growth} growth
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {project.metrics.timeline}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            Key impact
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="flex-1 hover-glow bg-primary text-primary-foreground hover:bg-primary/90"
                              onClick={() => setSelectedProject(project)}
                            >
                              View Case Study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-display">
                                {project.title} Case Study
                              </DialogTitle>
                              <DialogDescription className="text-base">
                                {project.subtitle}
                              </DialogDescription>
                            </DialogHeader>
                            
                            {/* Case Study Content */}
                            <div className="space-y-8 py-4">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-lg"
                              />

                              <div>
                                <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                                <p className="text-muted-foreground">{project.challenge}</p>
                              </div>

                              <div>
                                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                                <p className="text-muted-foreground">{project.solution}</p>
                              </div>

                              <div>
                                <h3 className="text-xl font-semibold mb-3">Process</h3>
                                <ul className="space-y-2">
                                  {project.process.map((step, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                      <span className="text-primary font-semibold">{index + 1}.</span>
                                      <span className="text-muted-foreground">{step}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-xl font-semibold mb-3">Results</h3>
                                <ul className="space-y-2">
                                  {project.results.map((result, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                      <span className="text-green-500">✓</span>
                                      <span className="text-muted-foreground">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-xl font-semibold mb-3">My Role</h3>
                                <p className="text-muted-foreground">{project.role}</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Button
                          variant="outline"
                          className="hover-glow border-border/50"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </div>
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