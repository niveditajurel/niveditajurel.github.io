import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { motion } from 'framer-motion';
import { experiences, education, type ExperienceItem } from "@/data/experience";

function ExperienceCard({ experience, index }: {
  experience: ExperienceItem,
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-colors"
      >
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-body font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                  {experience.role}
                </h3>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-body font-semibold text-lg text-primary">
                  {experience.company}
                </h4>
                {experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {experience.description}
          </p>

          <div className="space-y-6">
            <div>
              <h5 className="font-body font-semibold text-foreground mb-3">Skills & Technologies</h5>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="bg-background border-border/50 hover-glow cursor-cursor"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 bg-gradient-to-br from-background via-primary/5 to-background"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              My{" "}
              <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A cross-sector path through software, analytics, community building, and product leadership that eventually sharpened into AI-first product work.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Building products and leading teams across startups, research labs, and tech companies.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Education
            </h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-colors"
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-body font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <h4 className="font-body font-semibold text-lg text-primary mb-2">
                          {edu.institution}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <span>•</span>
                          <span>GPA: {edu.gpa}</span>
                        </div>

                        <div>
                          <h5 className="font-body font-semibold text-foreground mb-3">Activities & Leadership</h5>
                          <ul className="space-y-1">
                            {edu.activities.map((activity, activityIndex) => (
                              <li key={activityIndex} className="flex items-start space-x-2">
                                <span className="text-primary font-semibold mt-1">•</span>
                                <span className="text-muted-foreground text-sm">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-body font-semibold text-foreground mb-3">Relevant Coursework</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge
                              key={courseIndex}
                              variant="outline"
                              className="bg-background border-border/50"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
