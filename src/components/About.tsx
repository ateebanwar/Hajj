import { useEffect, useRef, useState } from "react";
import { useConfig } from "@/contexts/ConfigContext";

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`relative transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
              }`}
          >
            <div className="relative">
              <img
                src={config.about.image}
                alt="Islamic Architecture"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-dark/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-card p-6 rounded-xl shadow-elevated max-w-xs">
              <p className="text-4xl font-serif font-bold text-accent mb-1">
                {config.about.yearsOfTrust.value}
              </p>
              <p className="text-foreground font-medium">{config.about.yearsOfTrust.label}</p>
              <p className="text-muted-foreground text-sm mt-1">
                {config.about.yearsOfTrust.subLabel}
              </p>
            </div>
          </div>
          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
              }`}
          >
            <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-4">
              {config.about.sectionTitle}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 leading-tight">
              {config.about.mainHeading.pre}{" "}
              <span className="text-emerald">{config.about.mainHeading.highlight}</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {config.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {config.about.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0">
                    {feature.icon === "CheckCircle" && (
                      <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {feature.icon === "Heart" && (
                      <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    {feature.icon === "DollarSign" && (
                      <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {feature.icon === "BookOpen" && (
                      <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
