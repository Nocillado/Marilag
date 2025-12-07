const Footer = () => {
  return (
    <footer className="bg-sage py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a 
            href="/" 
            className="text-cream font-display text-2xl tracking-widest hover:opacity-80 transition-opacity"
          >
            POVEDA
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a href="#visit" className="text-cream/80 text-sm tracking-wider uppercase hover:text-cream transition-colors">
              Visit
            </a>
            <a href="#about" className="text-cream/80 text-sm tracking-wider uppercase hover:text-cream transition-colors">
              About
            </a>
            <a href="#contact" className="text-cream/80 text-sm tracking-wider uppercase hover:text-cream transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-cream/60 text-sm">
            © 2025 Poveda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
