import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium car wheel customization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Ride's Style
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Premium rim spraying, caliper customization, kerb rash repairs, and professional dechroming services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-accent hover:shadow-glow transition-all duration-300"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-metallic hover:bg-metallic/10"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-metallic rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};
