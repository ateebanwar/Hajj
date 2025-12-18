import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { openWhatsApp } from "@/lib/utils";
import Logo from "./Logo";
import { useConfig } from "@/contexts/ConfigContext";

const Navbar = () => {
  const config = useConfig();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop vs mobile
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Scroll behavior (desktop only)
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          isDesktop
            ? isScrolled
              ? "bg-emerald/20 backdrop-blur-xl shadow-soft border-b border-emerald/30"
              : "bg-transparent"
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20 lg:h-24">

          {/* LOGO */}
          <Logo
            onClick={() => handleNavClick("#home")}
            href="#home"
            textClassName={`
              transition-all duration-500
              ${
                isDesktop && isScrolled
                  ? "text-foreground drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"

                  : "text-primary-foreground"
              }
            `}
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {config.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`
                  text-sm font-medium tracking-wide transition-all duration-500
                  ${
                    isScrolled
                      ? "text-foreground drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"

                      : "text-primary-foreground"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={config.general.contact.phoneLink}
              className={`
                flex items-center gap-2 text-sm font-medium transition-all duration-500
                ${
                  isScrolled
                    ? "text-foreground drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"

                    : "text-primary-foreground"
                }
              `}
            >
              <Phone className="w-4 h-4" />
              <span>{config.general.contact.phone}</span>
            </a>

            <button
              onClick={() => openWhatsApp()}
              className="px-6 py-2.5 bg-accent text-accent-foreground rounded-full shadow-gold hover:shadow-lg transition-all"
            >
              {config.general.buttons.bookNow}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* MOBILE SIDEBAR (PERMANENT BLUR) */}
        <div
          className={`
            lg:hidden absolute left-0 right-0 top-full
            bg-emerald/20 backdrop-blur-xl shadow-elevated
            transition-all duration-300
            ${
              isMobileMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-4"
            }
          `}
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            {config.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-foreground text-lg font-medium py-2 border-b border-border/40"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => openWhatsApp()}
              className="mt-4 px-6 py-3 bg-accent text-accent-foreground rounded-full shadow-gold"
            >
              {config.general.buttons.bookNow}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
