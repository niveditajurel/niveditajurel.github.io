import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HoverCursor } from "@/components/ui/hover-cursor";
import Home from "@/pages/home";
import About from "@/pages/about";
import Content from "@/pages/content";
import Projects from "@/pages/projects";
import Experience from "@/pages/experience";
import Contact from "@/pages/contact";
import Fun from "@/pages/fun";
import NotFound from "@/pages/not-found";
import AnandPagCaseStudy from './pages/projects/anand-pag';
import FinwiseCaseStudy from './pages/projects/finwise';
import LearningCouncilCaseStudy from './pages/projects/learning-council';
import NomadAiCaseStudy from './pages/projects/nomad-ai';
import SkingeniusCaseStudy from './pages/projects/skingenius';
import UberDriverNavigationCaseStudy from "./pages/projects/uber-driver-navigation";
import AisliResearchPage from "./pages/research/aisli";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/content" component={Content} />
      <Route path="/projects/anand-pag" component={AnandPagCaseStudy} />
      <Route path="/projects/finwise" component={FinwiseCaseStudy} />
      <Route path="/projects/learning-council" component={LearningCouncilCaseStudy} />
      <Route path="/projects/nomad-ai" component={NomadAiCaseStudy} />
      <Route path="/projects/skingenius" component={SkingeniusCaseStudy} />
      <Route path="/projects/uber-driver-navigation" component={UberDriverNavigationCaseStudy} />
      <Route path="/research/aisli" component={AisliResearchPage} />
      <Route path="/work" component={Projects} />
      <Route path="/projects" component={Projects} />
      <Route path="/journey" component={Experience} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
      <Route path="/fun" component={Fun} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter hook={useHashLocation}>
            <div className="relative min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1 pt-[4.5rem] md:pt-[4.65rem]">
                <Router />
              </main>
              <Footer />
              <HoverCursor />
              <ScrollToTop />
              <Toaster />
            </div>
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
