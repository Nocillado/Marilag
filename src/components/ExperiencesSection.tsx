import ExperienceCard from "./ExperienceCard";
import { useReveal } from "@/hooks/useReveal";

const ExperiencesSection = () => {
  const { ref: titleRef, isRevealed: titleRevealed } = useReveal(0.2);
  const { ref: cardsRef, isRevealed: cardsRevealed } = useReveal(0.1);

  const experiences = [
    {
      image: "/hero/4.jpg",
      title: "Adventure",
      buttonText: "Explore Boracay",
    },
    {
      image: "/hero/5.jpg",
      title: "Culture",
      buttonText: "Discover Boracay",
    },
    {
      image: "/hero/6.jpg",
      title: "Relaxation",
      buttonText: "Relax in Boracay",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background" id="visit">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2
          ref={titleRef}
          className={`text-foreground font-display text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase text-center mb-16 md:mb-20 reveal ${titleRevealed ? "revealed" : ""}`}
        >
          Licence to Live
        </h2>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 reveal ${cardsRevealed ? "revealed" : ""}`}
        >
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
