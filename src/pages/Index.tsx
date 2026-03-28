import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border bg-gradient-to-b from-background to-background/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gradient mb-2">Milan Tiwari</h3>
              <p className="text-muted-foreground text-sm">Software Developer | Python & AI Enthusiast</p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/milantiwariofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-smooth hover:glow-primary"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a
                href="https://instagram.com/cinematic.milan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-smooth hover:glow-primary"
              >
                <Instagram size={20} className="text-primary" />
              </a>
              <a
                href="mailto:milantiwari2003@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-smooth hover:glow-primary"
              >
                <Mail size={20} className="text-primary" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © 2025 Milan Tiwari. Built with <Heart size={16} className="text-primary fill-primary animate-pulse" /> and code.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
