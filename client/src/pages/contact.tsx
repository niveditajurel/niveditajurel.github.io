import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "nivedita@email.com",
    href: "mailto:nivedita@email.com",
    description: "Best for project inquiries and collaboration",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nivedita-niv",
    href: "https://www.linkedin.com/in/nivedita-niv/",
    description: "Let's connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/niveditajurel",
    href: "https://github.com/niveditajurel",
    description: "Check out my code and contributions",
  },
  {
    icon: Twitter,
    label: "Twitter/X",
    value: "@nniv266",
    href: "https://x.com/nniv266",
    description: "Product thoughts and industry insights",
  },
];

export default function Contact() {
  const heroRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const methodsRef = useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleScheduleMeeting = () => {
    // Track meeting scheduling
    console.log("Meeting scheduling tracked");
    // Open scheduling link
    window.open("https://calendly.com/nivedita", "_blank");
  };

  return (
    <div className="min-h-screen pt-16 page-transition">
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-background via-primary/5 to-background"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroRef.ref as React.RefObject<HTMLDivElement>}
            className={`text-center fade-in ${heroRef.isVisible ? "visible" : ""}`}
          >
            <motion.h1 
              className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Let's{" "}
              <span className="text-gradient">Connect</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm always excited to discuss product opportunities, collaborate on interesting projects, 
              or just chat about the future of technology and design.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={methodsRef.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 fade-in ${methodsRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect—I'm active on all these platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card
                  className={`group cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 card-hover ${
                    methodsRef.isVisible ? "visible" : ""
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <motion.a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div 
                        className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <method.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="font-body font-semibold text-foreground mb-2">
                        {method.label}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-2">
                        {method.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {method.description}
                      </p>
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <motion.section 
        className="py-20 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="flex items-center justify-center space-x-2 text-muted-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Currently in Dallas, TX, USA</span>
          </motion.div>
          <p className="text-muted-foreground mt-2">
            Open to relocation
          </p>
        </div>
      </motion.section>
    </div>
  );
}