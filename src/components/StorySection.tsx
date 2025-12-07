import waterfallImg from "@/assets/waterfall.jpg";

const StorySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Content */}
          <div className="lg:pr-16 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-foreground font-display text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase mb-8 leading-tight">
              In Love<br />With Bali
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              We are a couple of nomads who used to explore the globe. The day we stepped our feet on 
              Balinese ground one thing was clear – we fell in love. We kept coming back every few 
              months and understood that this is a love affair for a lifetime.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We fully moved here in 2018 and been exploring the island ever since. We're excited to 
              share what we've found and show you this beautiful corner of the world.
            </p>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden lg:-mt-32">
              <img
                src={waterfallImg}
                alt="Bali Waterfall"
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
