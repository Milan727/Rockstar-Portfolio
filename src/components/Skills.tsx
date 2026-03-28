import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  const languages = ["Python", "JavaScript", "SQL", "C# (Familiarity)", "HTML/CSS"];
  const frameworks = ["Jira", "Test Automation", "Git", "Bug Tracking", "Playtesting", "Agile/Scrum"];
  const domains = ["Quality Assurance (QA)", "Game Testing", "Mechanical Analysis", "Data Logging"];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-gradient">Tech Stack</span>
        </motion.h2>

        <div className="space-y-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-base bg-card border-primary/30 hover:border-primary hover:scale-105 transition-smooth"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">Testing & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-base bg-card border-primary/30 hover:border-primary hover:scale-105 transition-smooth"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">Domains</h3>
            <div className="flex flex-wrap gap-3">
              {domains.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-base bg-card border-primary/30 hover:border-primary hover:scale-105 transition-smooth"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
