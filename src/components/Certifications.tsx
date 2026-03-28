import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import awsLogo from "@/assets/aws-logo.svg";
import salesforceLogo from "@/assets/salesforce-logo.svg";
import googleLogo from "@/assets/google-logo.svg";

const Certifications = () => {
  const certifications = [
    { name: "AWS Certified Cloud Practitioner", link: "https://www.credly.com/badges/b35aa5d6-1038-4887-9d40-8ae8798f4ad9/public_url", logo: awsLogo },
    { name: "The Joy of Computing using Python — NPTEL (IIT Ropar)", link: null, logo: null },
    { name: "Salesforce Developer Virtual Internship", link: "https://skillwallet.smartinternz.com/internships/salesforce_certificates/eeaebbffb5d29ff62799637fc51adb7b", logo: salesforceLogo },
    { name: "Salesforce Developer Catalyst — NASSCOM", link: null, logo: salesforceLogo },
    { name: "Google AI/ML Virtual Internship", link: null, logo: googleLogo },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => {
            const content = (
              <Card
                key={index}
                className="bg-card border-border hover:border-accent transition-smooth hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-accent/20">
                    {cert.logo ? (
                      <img src={cert.logo} alt="" className="w-6 h-6 object-contain" />
                    ) : (
                      <Award className="text-accent" size={24} />
                    )}
                  </div>
                  <p className="text-foreground/90 flex-1">{cert.name}</p>
                  {cert.link && <ExternalLink size={16} className="text-muted-foreground" />}
                </CardContent>
              </Card>
            );
            return cert.link ? (
              <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer">{content}</a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
