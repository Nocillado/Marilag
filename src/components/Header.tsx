import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Pricing", href: "#pricing" },
    { label: "Visit", href: "#visit" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a 
          href="/" 
          className="text-cream font-display text-2xl tracking-widest hover:opacity-80 transition-opacity"
        >
          POVEDA
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-cream/90 text-sm tracking-wider uppercase font-body hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sage/95 backdrop-blur-sm">
          <ul className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-cream text-sm tracking-wider uppercase font-body hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
