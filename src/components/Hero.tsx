import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";
import DecryptedText from "./DecryptedText";
import avatarImg from "@/assets/avatar.png";
import CSSilk from "./CSSilk";
import GradientText from "./GradientText";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-x-hidden px-4">
      {/* Silk CSS background */}
      <div className="absolute inset-0">
        <CSSilk
          color="#ffaa00"
          speed={4}
        />
      </div>

      {/* Very subtle overlay just to boost text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <div className="mb-6 flex flex-col items-center">
          <div className="w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full border-4 border-primary glow-primary overflow-hidden relative">
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={avatarImg} 
              alt="Vice City Avatar" 
              className="w-full h-full object-cover origin-[25%_40%]"
            />
          </div>
          <GradientText
            colors={["#ffaa00", "#ff8800", "#ffffff", "#ffaa00"]}
            animationSpeed={5}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hey there, I'm
          </GradientText>
          <div className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mt-2">
            <DecryptedText
              text="Milan Tiwari"
              speed={60}
              maxIterations={12}
              sequential
              revealDirection="start"
              animateOn="both"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
              className="text-white"
              encryptedClassName="text-white/40"
            />
          </div>
        </div>

        <div className="mb-4">
          <GradientText
            colors={["#ffffff", "#ffaa00", "#333333", "#ffffff"]}
            animationSpeed={8}
            className="text-xl md:text-2xl font-semibold"
          >
            QA Analyst | Game Tester | Vice City Veteran
          </GradientText>
        </div>

        <p className="text-lg text-white/70 mb-8">
          📍 Based in Bangalore, Karnataka India
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-xl transition-smooth glow-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Testing Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground backdrop-blur-sm transition-smooth glow-accent"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="https://linkedin.com/in/milantiwariofficial" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-smooth hover:scale-110 hover:text-white">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/Milan727" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-smooth hover:scale-110 hover:text-white">
            <Github size={28} />
          </a>
          <a href="https://instagram.com/cinematic.milan" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-smooth hover:scale-110 hover:text-white">
            <Instagram size={28} />
          </a>
          <a href="mailto:milantiwari2003@gmail.com" className="text-white/70 transition-smooth hover:scale-110 hover:text-white">
            <Mail size={28} />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-white/80" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
