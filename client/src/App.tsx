import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Experience from "@/pages/experience";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import NomadAiCaseStudy from './pages/projects/nomad-ai';
import SkingeniusCaseStudy from './pages/projects/skingenius';


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects/nomad-ai" component={NomadAiCaseStudy} />
      <Route path="/projects/skingenius" component={SkingeniusCaseStudy} />
      <Route path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="h-16 relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-16">
              <Router />
            </main>
            <Footer />
            <ScrollToTop />
            <Toaster />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
