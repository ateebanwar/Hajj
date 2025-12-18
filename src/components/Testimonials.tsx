import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import { useConfig } from "@/contexts/ConfigContext";

const Testimonials = () => {
  const config = useConfig();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-4">
            {config.testimonials.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            {config.testimonials.mainHeading.pre} <span className="text-emerald">{config.testimonials.mainHeading.highlight}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {config.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {config.testimonials.items.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="absolute -top-4 -left-2 w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-emerald" />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center">
                  <span className="text-emerald font-serif font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location} • {testimonial.trip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
