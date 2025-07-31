import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Anand PAG",
    role: "Product Consultant",
    duration: "Jan 2025 - Present",
    location: "Dallas, TX",
    description: "Leading business process optimization and digital transformation initiatives using SAP Signavio and BPMN 2.0 modeling.",
    achievements: [
      "Mapped 30+ workflows across 4 departments into BPMN 2.0 models using SAP Signavio, reducing documentation gaps by 35%",
      "Analyzed bottlenecks using Signavio Process Intelligence, reducing average cycle time by 18%",
      "Delivered actionable insights that shaped the roadmap for digital transformation and automation opportunities",
    ],
    skills: ["BPMN 2.0", "SAP Signavio", "Process Optimization", "Digital Transformation", "Data Analysis"],
    website: null,
  },
  {
    company: "Skingenius",
    role: "Product Manager",
    duration: "Aug 2024 - Dec 2024",
    location: "Boston, MA",
    description: "Led end-to-end product development for a B2C skincare recommendation platform with AI-driven suggestions.",
    achievements: [
      "Optimized onboarding flow and refined AI-driven suggestions, boosting engagement by 30% and quiz completion by 25%",
      "Built and managed agile product roadmaps in Jira, streamlining release cycles and improving team delivery efficiency by 33%",
    ],
    skills: ["Product Management", "AI/ML", "Agile", "Jira", "User Experience", "B2C"],
    website: null,
  },
  {
    company: "Nomad AI",
    role: "Product Manager",
    duration: "May 2024 - Jul 2024",
    location: "Boston, MA",
    description: "Developed pricing strategy and product requirements for a financial SaaS product for SMB valuation.",
    achievements: [
      "Developed pricing strategy and PRD for financial SaaS product, leveraging RAG and Vercel analytics",
      "Projected 42% lift in conversions and 28% increase in MRR through data-driven optimization",
      "Defined product success metrics (AARRR, OMTM) and used Mixpanel, SQL, and Mage AI for retention optimization",
    ],
    skills: ["SaaS", "Financial Tech", "Pricing Strategy", "Data Analytics", "SQL", "Mixpanel"],
    website: null,
  },
  {
    company: "Cognizant",
    role: "Business Analyst",
    duration: "Aug 2021 - Jul 2022",
    location: "Remote",
    description: "Managed agile product backlog for EdTech product and engineered data preprocessing strategies.",
    achievements: [
      "Managed agile product backlog for EdTech product, resulting in 33% increase in user satisfaction and 10% reduction in time-to-market",
      "Engineered data preprocessing strategies, reducing data processing time by 18% and decreasing data errors by 20%",
      "Automated data dashboards using BI tools, accelerating access to insights and improving data-driven decision-making",
    ],
    skills: ["Business Analysis", "Agile", "ETL", "BI Tools", "Data Processing", "EdTech"],
    website: "https://cognizant.com",
  },
  {
    company: "Symbionic",
    role: "Product Manager",
    duration: "Sep 2020 - Aug 2021",
    location: "Remote",
    description: "Owned digital app for bionic arm technology, defining product roadmap and managing cross-functional collaboration.",
    achievements: [
      "Owned digital app for bionic arm, defining product roadmap and developing PRDs, optimizing release cycles and performance",
      "Managed cross-functional stakeholder collaboration (Biomechanical, Software, Design teams), improving product quality and increasing user satisfaction by 19%",
      "Conducted in-person market validation research with 100+ participants, contributing to 21% improvement in satisfaction",
      "Restructured customer satisfaction KPIs, leading to 17% increase in NPS and 13% boost in conversion rates",
    ],
    skills: ["Health Tech", "Hardware Integration", "Market Research", "Cross-functional Leadership", "NPS Optimization"],
    website: null,
  },
  {
    company: "UNMITI",
    role: "Data Scientist",
    duration: "Jan 2020 - May 2020",
    location: "Remote",
    description: "Applied data science and analytics to drive business insights and decision-making processes.",
    achievements: [
      "Developed data models and analytics solutions to support business objectives",
      "Conducted statistical analysis and created predictive models for business optimization",
      "Collaborated with cross-functional teams to implement data-driven solutions",
    ],
    skills: ["Data Science", "Statistical Analysis", "Predictive Modeling", "Business Intelligence", "Analytics"],
    website: null,
  },
  {
    company: "Entrepreneurship Cell, VIT",
    role: "Director of External Affairs",
    duration: "2020",
    location: "Vellore, India",
    description: "Led external partnerships and strategic initiatives for the university's entrepreneurship ecosystem.",
    achievements: [
      "Managed external partnerships and stakeholder relationships for entrepreneurship initiatives",
      "Organized events and programs to foster entrepreneurial culture among students",
      "Developed strategic partnerships with industry leaders and startup ecosystem players",
    ],
    skills: ["Strategic Partnerships", "Leadership", "Event Management", "Stakeholder Relations", "Entrepreneurship"],
    website: null,
  },
  {
    company: "LegalMind",
    role: "Product Marketing Manager",
    duration: "Jul 2019 - Nov 2019",
    location: "Remote",
    description: "Led product marketing strategies and customer relationship management for legal technology solutions.",
    achievements: [
      "Developed strategic marketing campaigns and go-to-market strategies",
      "Managed customer relationships and implemented CRM systems for improved client engagement",
      "Conducted market analysis and competitive research to inform product positioning",
    ],
    skills: ["Product Marketing", "Strategic Thinking", "Business Analysis", "CRM", "Market Research"],
    website: null,
  },
  {
    company: "Web Development & Data Science",
    role: "Intern",
    duration: "May 2019 - Jul 2019",
    location: "Remote",
    description: "Gained hands-on experience in web development and data science through cross-functional project work.",
    achievements: [
      "Developed web applications using HTML, CSS, and modern web technologies",
      "Applied data science techniques to analyze and visualize business data",
      "Led cross-functional team initiatives and collaborated on technical projects",
    ],
    skills: ["Web Development", "HTML", "CSS", "Data Science", "Cross-functional Leadership"],
    website: null,
  },
];

const education = [
  {
    institution: "Northeastern University",
    degree: "Master of Science in Engineering Management",
    duration: "Sep 2022 - May 2024",
    gpa: "3.8/4.0",
    activities: [
      "Techstars Boston '24 - Event Organizer",
      "Women in Tech - Mentorship Coordinator",
      "Startup Accelerator Program - Participant",
      "Engineering Management Society - Member",
    ],
    coursework: [
      "Product Management",
      "Engineering Management",
      "Business Strategy",
      "Data Analytics",
      "Project Management",
      "Innovation & Entrepreneurship",
    ],
  },
  {
    institution: "Vellore Institute of Technology",
    degree: "Master of Technology Integrated in Software Engineering",
    duration: "2018 - 2022",
    gpa: "3.8/4.0",
    activities: [
      "Entrepreneurship Cell - Director of External Affairs",
      "Technical Clubs - Active Member",
      "Hackathons - Regular Participant",
    ],
    coursework: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Machine Learning",
      "Database Management",
      "Web Development",
      "Software Architecture",
    ],
  },
];

function ExperienceCard({ experience, index, isVisible }: { 
  experience: typeof experiences[0], 
  index: number, 
  isVisible: boolean 
}) {
  return (
    <Card
      className={`cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm slide-in-right ${
        isVisible ? "visible" : ""
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-body font-bold text-xl text-foreground">
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
                  className="bg-background border-border/50 hover-glow cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Experience() {
  const heroRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const educationRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroRef.ref}
            className={`text-center fade-in ${heroRef.isVisible ? "visible" : ""}`}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              My{" "}
              <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building products that matter, surrounded by brilliant product builders. Every experience taught me that great products come from understanding users deeply and shipping relentlessly.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }} className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={experienceRef.ref}
            className={`mb-16 fade-in ${experienceRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Building products and leading teams across startups, research labs, and tech companies.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isVisible={experienceRef.isVisible}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }} className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={educationRef.ref}
            className={`mb-16 fade-in ${educationRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Education
            </h2>
          </div>

          {education.map((edu, index) => (
            <Card
              key={index}
              className={`cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm slide-in-left ${
                educationRef.isVisible ? "visible" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-body font-bold text-xl text-foreground mb-2">
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
          ))}
        </div>
      </motion.section>
    </div>
  );
}