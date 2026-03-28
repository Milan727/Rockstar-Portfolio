import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Mic } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "1st Place",
      description: "RGPV University-Level Photography Competition",
      color: "text-yellow-400",
    },
    {
      icon: Mic,
      title: "Team Member",
      description: "TEDx RGPV University – handled event coordination and speaker logistics",
      color: "text-red-500",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-smooth hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-primary/20 ${achievement.color}`}>
                  <achievement.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-foreground/80">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
