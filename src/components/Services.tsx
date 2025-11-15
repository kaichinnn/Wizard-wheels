import { Card } from "@/components/ui/card";
import caliperImage from "@/assets/caliper-service.jpg";
import kerbImage from "@/assets/kerb-repair.jpg";
import dechromeImage from "@/assets/dechrome-service.jpg";
import { Sparkles, Shield, Palette } from "lucide-react";

const services = [
  {
    title: "Rims & Caliper Spraying",
    description: "Transform your wheels and brake calipers with custom colors. Professional application for a showroom finish that turns heads.",
    image: caliperImage,
    icon: Palette,
  },
  {
    title: "Kerb Rash Repairs",
    description: "Expert restoration of damaged alloy wheels. We'll make those curb marks disappear, returning your rims to pristine condition.",
    image: kerbImage,
    icon: Shield,
  },
  {
    title: "Dechroming Services",
    description: "Modernize your vehicle by converting chrome trim to sleek matte or gloss black finishes. Premium aesthetic transformation.",
    image: dechromeImage,
    icon: Sparkles,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-carbon">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Premium</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized automotive customization that elevates your vehicle's appearance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-accent/90 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
