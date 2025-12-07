import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

const templeImg = "/hero/3.jpg";

const AboutSection = () => {
  const { ref: imageRef, isRevealed: imageRevealed } = useReveal(0.2);
  const { ref: contentRef, isRevealed: contentRevealed } = useReveal(0.2);

  return (
    <section className="py-24 md:py-32 bg-cream-dark" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative reveal-left ${imageRevealed ? "revealed" : ""}`}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={templeImg}
                alt="Boracay Scenery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`lg:pl-8 reveal-right ${contentRevealed ? "revealed" : ""}`}
          >
            <h2 className="text-foreground font-display text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase mb-8">
              A Place to Be
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              It's no coincidence that Boracay is one of the top destinations for the Instagram nation.
              The pristine white sand beaches, crystal-clear turquoise waters, stunning sunsets and
              friendly locals make the island a place for everyone.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              We know Boracay better than the backs of our hands, meaning that whether you want to plan
              a water sports holiday or find inner peace watching the sunset, we know exactly how to
              start planning your dream trip to Boracay.
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
