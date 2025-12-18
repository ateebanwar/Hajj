import { useEffect, useRef, useState } from "react";
import { Shield, Users, Clock, Award, Heart, Headphones } from "lucide-react";
import { useConfig } from "@/contexts/ConfigContext";

const iconMap: Record<string, any> = {
  "Shield": Shield,
  "Users": Users,
  "Clock": Clock,
  "Award": Award,
  "Heart": Heart,
  "Headphones": Headphones,
};

const WhyChooseUs = () => {
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
      className="py-20 lg:py-32 gradient-spiritual relative overflow-hidden"
    >
      <div className="absolute inset-0 pattern-overlay opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-gold font-medium text-sm tracking-widest uppercase mb-4">
            {config.whyChooseUs?.sectionTitle || "Why Choose Us"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground mb-6">
            {config.whyChooseUs?.mainHeading?.pre || "Trust Your Journey With"} <span className="text-gold">{config.whyChooseUs?.mainHeading?.highlight || "Al-Qasim Tours & Travels"}</span>
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            {config.whyChooseUs?.description || "We don't just arrange trips—we craft sacred experiences with attention to every detail,"}
            ensuring your focus remains on worship and reflection.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.whyChooseUs?.reasons?.map((reason, index) => {
            const Icon = iconMap[reason.icon] || Shield;
            return (
              <div
                key={reason.title}
                className={`text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-5">
                  <Icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-3">
                  {reason.title}
                </h3>

                <p className="text-primary-foreground/70 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {config.whyChooseUs?.stats?.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">{stat.number}</p>
              <p className="text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

