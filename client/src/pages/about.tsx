import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Lightbulb, Users, BarChart3, Palette } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Human-Centered",
    description: "Every product decision starts with understanding real user needs and pain points.",
    color: "text-red-500",
  },
  {
    icon: Target,
    title: "Data-Driven",
    description: "Combining qualitative insights with quantitative metrics to guide product strategy.",
    color: "text-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focused",
    description: "Constantly exploring new ways to solve problems and create value for users.",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Building bridges between design, engineering, and business to ship great products.",
    color: "text-green-500",
  },
];

const tools = [
  { category: "Analytics", items: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar"] },
  { category: "Design", items: ["Figma", "Sketch", "Miro", "FigJam"] },
  { category: "Research", items: ["UserTesting", "Maze", "Typeform", "Calendly"] },
  { category: "Project Management", items: ["Notion", "Linear", "Jira", "Slack"] },
  { category: "Development", items: ["GitHub", "Vercel", "Firebase", "SQL"] },
];

export default function About() {
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const toolsRef = useScrollAnimation();

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
              About{" "}
              <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm passionate about creating products that make a real difference in people's lives.
              Here's a bit more about my journey and what drives me.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={storyRef.ref}
            className={`slide-in-left ${storyRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              My Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                My journey into product management started with a simple observation: 
                great technology isn't just about what's possible—it's about what's meaningful to people.
              </p>
              <p>
                During my computer science studies, I found myself gravitating toward the intersection 
                of technology and human behavior. I spent countless hours in design thinking workshops, 
                user research sessions, and cross-functional team collaborations.
              </p>
              <p>
                What excites me most about product management is the opportunity to be a translator—
                turning user insights into technical requirements, business goals into product features, 
                and complex problems into elegant solutions.
              </p>
              <p>
                When I'm not building products, you'll find me exploring local coffee shops, 
                experimenting with new design tools, or reading about emerging tech trends 
                that could shape the future of digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={valuesRef.ref}
            className={`text-center mb-16 fade-in ${valuesRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my approach to product management and life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm slide-in-right ${
                  valuesRef.isVisible ? "visible" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`${value.color} mt-1`}>
                      <value.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-xl text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={toolsRef.ref}
            className={`text-center mb-16 fade-in ${toolsRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The toolkit I use to research, design, build, and measure great products.
            </p>
          </div>

          <div className="space-y-8">
            {tools.map((category, index) => (
              <div
                key={index}
                className={`slide-in-left ${toolsRef.isVisible ? "visible" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-body font-semibold text-lg text-foreground mb-4 flex items-center">
                  {category.category === "Analytics" && <BarChart3 className="h-5 w-5 mr-2 text-primary" />}
                  {category.category === "Design" && <Palette className="h-5 w-5 mr-2 text-primary" />}
                  {category.category === "Research" && <Users className="h-5 w-5 mr-2 text-primary" />}
                  {category.category === "Project Management" && <Target className="h-5 w-5 mr-2 text-primary" />}
                  {category.category === "Development" && <Lightbulb className="h-5 w-5 mr-2 text-primary" />}
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((tool, toolIndex) => (
                    <Badge
                      key={toolIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover-glow cursor-pointer bg-card border border-border/50"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}