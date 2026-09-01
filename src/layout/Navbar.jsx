import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          aria-label="Noha Ahmed Home"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          NA<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {NavLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong mt-2 animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {NavLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
      
    </header>
  );
};
 