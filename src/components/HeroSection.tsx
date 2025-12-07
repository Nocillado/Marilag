import { Button } from "@/components/ui/button";
const heroBoracay = "/hero/1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBoracay})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24">
        <div className="max-w-xl">
          <p className="text-cream/90 text-sm md:text-base tracking-widest uppercase mb-4 opacity-0 animate-fade-up">
            It's time to
          </p>
          <h1 className="text-cream font-display text-6xl md:text-7xl lg:text-8xl font-normal mb-6 opacity-0 animate-fade-up animation-delay-100">
            Visit Boracay
          </h1>
          <p className="text-cream/85 text-base md:text-lg leading-relaxed mb-10 max-w-md opacity-0 animate-fade-up animation-delay-200">
            Crave new adventures, pristine white sand beaches and crystal-clear waters? You need to visit Boracay. 
            We make sure that you'll get an experience you'll never forget.
          </p>
          <div className="opacity-0 animate-fade-up animation-delay-300">
            <Button variant="hero" size="lg">
              Our Offers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
