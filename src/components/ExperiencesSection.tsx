import ExperienceCard from "./ExperienceCard";
import adventureImg from "@/assets/adventure.jpg";
import cultureImg from "@/assets/culture.jpg";
import relaxationImg from "@/assets/relaxation.jpg";

const ExperiencesSection = () => {
  const experiences = [
    {
      image: adventureImg,
      title: "Adventure",
      buttonText: "Explore Bali",
    },
    {
      image: cultureImg,
      title: "Culture",
      buttonText: "Understand Bali",
    },
    {
      image: relaxationImg,
      title: "Relaxation",
      buttonText: "Relax in Bali",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background" id="visit">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-foreground font-display text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase text-center mb-16 md:mb-20">
          Licence to Live
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.title}
              image={exp.image}
              title={exp.title}
              buttonText={exp.buttonText}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
