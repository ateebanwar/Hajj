import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="overflow-x-hidden">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <Hero onOpenContact={() => setIsContactOpen(true)} />
      <About />
      <Services />
      <Packages />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
};

export default Index;

