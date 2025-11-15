import { Check } from "lucide-react";

const benefits = [
  "Premium Quality Materials",
  "Expert Technicians",
  "Fast Turnaround Time",
  "Lifetime Workmanship Guarantee",
  "Free Quotes & Consultations",
  "Mobile Service Available",
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-carbon">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-accent">Our Service?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're passionate about automotive excellence. With years of experience and cutting-edge techniques, 
              we deliver results that exceed expectations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent blur-3xl opacity-20 rounded-full" />
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-metallic">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-accent">10+</div>
                  <div className="text-muted-foreground">Years of Experience</div>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-accent">5000+</div>
                  <div className="text-muted-foreground">Vehicles Transformed</div>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-accent">100%</div>
                  <div className="text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
