import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-gradient">About Me</span>
        </motion.h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* ── LEFT: ProfileCard ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0 w-[280px] md:w-[300px]"
          >
            <ProfileCard
              name="Milan Tiwari"
              title="Software Developer"
              handle="Milan727"
              status="Open to Work 🟢"
              contactText="Contact Me"
              avatarUrl="/milan-photo.png"
              iconUrl="/iconpattern.png"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              behindGlowColor="rgba(255, 170, 0, 0.4)"
              innerGradient="linear-gradient(145deg, #1a1a1a 0%, #ffaa0022 100%)"
              onContactClick={() => window.location.href = 'mailto:milantiwari2003@gmail.com'}
            />
          </motion.div>

          {/* ── RIGHT: Introduction text ── */}
          <div className="flex-1 space-y-5 lg:pt-4">
            {/* Name + tagline */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-1">
                Hi, I'm{" "}
                <span className="text-gradient">Milan Tiwari</span> 🌴
              </h3>
              <p className="text-accent font-medium text-lg tracking-wide">
                QA Analyst · Game Tester · Lifelong Gamer
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="h-px bg-gradient-to-r from-primary via-accent to-transparent origin-left"
            />

            {/* Bio paragraphs */}
            {([
              <>
                My journey started in 2006, cruising down Ocean Beach in{" "}
                <span className="text-primary font-semibold">GTA: Vice City</span>. 
                I fell in love with Tommy Vercetti's world, and since then, I've been dissecting how games tick.
              </>,
              <>
                As a Computer Science Engineer (2025 grad), I combine my technical background in{" "}
                <span className="text-accent font-semibold">Python & AI</span> with an obsessive eye for detail to break games systematically and hunt down bugs.
              </>,
              <>
                Whether I'm analyzing game mechanics or writing test automation scripts, my goal is to help creators build{" "}
                <span className="text-gradient font-semibold">flawless, immersive worlds</span>.{" "}
                📍 Based in Bangalore, Karnataka, India.
              </>,
            ] as React.ReactNode[]).map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="text-lg leading-relaxed text-foreground/85"
              >
                {text}
              </motion.p>
            ))}

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { label: "Role Focus", value: "Game Testing / QA" },
                { label: "Core Skills", value: "Bug Hunting · Python · Logic" },
                { label: "Status", value: "Ready to Test 🎮" },
              ].map((chip) => (
                <motion.div
                  key={chip.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card border border-border rounded-xl px-4 py-2 text-sm"
                >
                  <span className="text-muted-foreground">{chip.label}: </span>
                  <span className="text-foreground font-semibold">{chip.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
