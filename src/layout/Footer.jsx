import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/NohaCode-lab", label: "GitHub Profile" },
  { icon: Linkedin, href: "#", label: "LinkedIn Profile" },
  { icon: Twitter, href: "#", label: "Twitter Profile" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <a href="#" aria-label="Noha Ahmed Home" className="text-xl font-bold tracking-tight">
            NA<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} Noha Ahmed. All rights reserved.
          </p>
        </div>

        {/* Social Links distributed attractively */}
        <div className="flex-1 flex justify-around md:justify-center gap-6 mt-6 md:mt-0">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              aria-label={social.label}
              target={social.href !== "#" ? "_blank" : undefined}
              rel={social.href !== "#" ? "noopener noreferrer" : undefined}
              className="p-4 rounded-full glass hover:bg-primary/20 transition-all transform hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <social.icon className="w-6 h-6 text-primary" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 p-3 rounded-full glass hover:bg-primary/20 transition-all z-50"
        >
          <ArrowUp className="w-6 h-6 text-primary" />
        </button>
      )}
    </footer>
  );
};