import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { useConfig } from "@/contexts/ConfigContext";

const Contact = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-sand-light relative overflow-hidden"
    >
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-4">
            {config.contact.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            {config.contact.mainHeading.pre} <span className="text-emerald">{config.contact.mainHeading.highlight}</span> {config.contact.mainHeading.post}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {config.contact.description}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="bg-card p-8 rounded-2xl shadow-soft max-w-[600px] mx-auto">
              <h3 className="text-2xl font-serif text-center mb-4">{config.contact.formTitle}</h3>
              <ContactForm className="space-y-6 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

