import { useRef, useEffect } from "react";
import { useConfig } from "@/contexts/ConfigContext";

const Gallery = () => {
  const config = useConfig();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-sand-light relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-4">
            {config.gallery.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            {config.gallery.mainHeading.pre} <span className="text-emerald">{config.gallery.mainHeading.highlight}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {config.gallery.description}
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-8 -mx-4 px-4 md:grid md:grid-cols-4 md:auto-rows-[300px] md:gap-4 md:overflow-visible md:pb-0"
        >
          {config.gallery.images.map((img, i) => (
            <div
              key={i}
              className={`relative group rounded-2xl overflow-hidden shadow-lg flex-shrink-0 w-[85vw] md:w-auto h-[300px] md:h-auto ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white text-lg font-serif">
                  {img.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
