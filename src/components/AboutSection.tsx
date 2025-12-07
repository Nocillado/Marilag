import { Button } from "@/components/ui/button";
import templeImg from "@/assets/temple-vertical.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream-dark" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={templeImg}
                alt="Balinese Temple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-foreground font-display text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase mb-8">
              A Place to Be
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              It's no coincidence that Bali is one of the top destinations for the Instagram nation. 
              The breathtaking nature, the endless beaches, exotic temples and friendly locals make 
              the island a place for everyone.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              We know Bali better than the backs of our hands, meaning that whether you want to plan 
              a surfing holiday or find inner peace on a meditation retreat, we know exactly how to 
              start planning your dream trip to Bali.
            </p>
            <Button variant="sage" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
