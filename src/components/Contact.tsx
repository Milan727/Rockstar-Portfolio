import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Instagram, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-gradient">Let's Connect</span>
        </h2>
        
        <Card className="bg-card border-border mb-8 animate-fade-in glow-accent/50">
          <CardContent className="p-8">
            <p className="text-lg text-foreground/90 mb-8">
              Have a project in mind or just want to chat about tech and AI? I'd love to hear from you!
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 glow-primary transition-smooth"
                onClick={() => window.location.href = 'mailto:milantiwari2003@gmail.com'}
              >
                <Mail className="mr-2" size={20} />
                Email Me
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                onClick={() => window.open('https://linkedin.com/in/milantiwariofficial', '_blank')}
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                onClick={() => window.open('https://instagram.com/cinematic.milan', '_blank')}
              >
                <Instagram className="mr-2" size={20} />
                Instagram
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <p className="text-lg italic">
            "Code with logic, create with heart."
          </p>
          <Heart className="text-primary animate-pulse" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
