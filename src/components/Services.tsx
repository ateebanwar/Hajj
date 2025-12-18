import { useEffect, useRef, useState } from "react";
import { useConfig } from "@/contexts/ConfigContext";

const Services = () => {
  const config = useConfig();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-sand-light relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent text-sm tracking-widest uppercase">
            {config.services.sectionTitle}
          </span>
          <h2 className="text-4xl font-serif font-semibold mt-4">
            {config.services.mainHeading.pre}{" "}
            <span className="text-emerald">
              {config.services.mainHeading.highlight}
            </span>
          </h2>
          <p className="text-muted-foreground mt-4">
            {config.services.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.items.map((service, index) => (
  <div
    key={service.title}
    className={`group relative h-[320px] rounded-2xl overflow-hidden shadow-soft transition-all duration-500 hover:-translate-y-1 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{
        backgroundImage: `url(${service.image ?? "/images/default.jpg"})`,
      }}
    />

    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500" />

    <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
      <h3 className="text-xl font-serif font-semibold mb-2">
        {service.title}
      </h3>

      <p className="text-sm text-white/90 leading-relaxed">
        {service.description}
      </p>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Services;
