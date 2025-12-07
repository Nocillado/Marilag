import { useReveal } from "@/hooks/useReveal";

const waterfallImg = "/hero/2.jpg";

const StorySection = () => {
  const { ref: contentRef, isRevealed: contentRevealed } = useReveal(0.2);
  const { ref: imageRef, isRevealed: imageRevealed } = useReveal(0.2);

  return (
    <section className="pt-48 pb-24 md:pt-64 md:pb-32 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Content */}
          <div
            ref={contentRef}
            className={`lg:pr-16 flex flex-col justify-center order-2 lg:order-1 reveal-left ${contentRevealed ? "revealed" : ""}`}
          >
            <h2 className="text-foreground font-display text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase mb-8 leading-tight">
              In Love<br />With Boracay
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              We are a couple of nomads who used to explore the globe. The day we stepped our feet on
              Boracay's white sand one thing was clear – we fell in love. We kept coming back every few
              months and understood that this is a love affair for a lifetime.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We fully moved here in 2018 and been exploring the island ever since. We're excited to
              share what we've found and show you this beautiful corner of the Philippines.
            </p>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className={`relative order-1 lg:order-2 reveal-right ${imageRevealed ? "revealed" : ""}`}
          >
            <div className="aspect-[4/5] overflow-hidden lg:-mt-32">
              <img
                src={waterfallImg}
                alt="Boracay Beach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
