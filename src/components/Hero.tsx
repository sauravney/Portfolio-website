import { FileText } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ResumeButton from "./ResumeButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 px-6 md:px-12"
    >
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-300/30 filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <AnimatedSection animation="fadeIn">
            <Badge
              variant="outline"
              className="px-4 py-1 text-xs font-medium bg-primary/10 text-primary mb-6"
            >
              Welcome to my portfolio
            </Badge>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={100} className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Saurav Mishra</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={200} className="mb-8">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              I design and build modern web applications with a focus on user
              experience, performance, and attention to detail.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-12 px-8">
                <a href="#projects">View Projects</a>
              </Button>

              <ResumeButton resumePath="/sauravmishra.pdf" />

              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
