import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Brain, GraduationCap, Cloud, ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";
import faceRecognitionImg from "@/assets/face-recognition-project.jpg";
import aiChatbotImg from "@/assets/ai-chatbot-project.jpg";
import elearningImg from "@/assets/elearning-project.jpg";
import skystoreImg from "@/assets/skystore-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "SkyStore - Personal Secure Cloud Storage",
      description: "A secure full-stack cloud storage app with strict data isolation, real-time dashboard, and seamless file management — upload, view, rename, and delete files securely.",
      icon: Cloud,
      image: skystoreImg,
      tags: ["Firebase", "AWS S3", "JavaScript", "HTML/CSS"],
      link: "https://cloud-project-pi.vercel.app/login.html"
    },
    {
      title: "Face Recognition with OpenCV",
      description: "A real-time face recognition system built using Python and OpenCV, optimized with Haar Cascade Classifiers and LBP for security-based authentication.",
      icon: Eye,
      image: faceRecognitionImg,
      tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      link: null
    },
    {
      title: "AI ChatBot",
      description: "An NLP-powered chatbot using machine learning for context-aware, real-time conversations.",
      icon: Brain,
      image: aiChatbotImg,
      tags: ["Python", "NLP", "AI", "Machine Learning"],
      link: null
    },
    {
      title: "E-Learning Platform",
      description: "An online learning system with video lectures, quizzes, and progress tracking — crafted for smooth accessibility and scalability.",
      icon: GraduationCap,
      image: elearningImg,
      tags: ["Web Development", "JavaScript", "Database", "UI/UX"],
      link: null
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const content = (
              <Card
                className="h-full bg-card border-border hover:border-primary transition-smooth hover:scale-105 hover:glow-primary group overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:animate-glow">
                    <project.icon className="text-primary" size={24} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth flex items-center justify-between">
                    <span>{project.title}</span>
                    {project.link && <ExternalLink size={18} className="text-muted-foreground shrink-0 ml-2" />}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-foreground/80 mb-4 flex-grow">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-accent/50 text-accent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                className="h-full"
              >
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
