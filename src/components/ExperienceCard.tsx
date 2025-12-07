import { Button } from "@/components/ui/button";

interface ExperienceCardProps {
  image: string;
  title: string;
  buttonText: string;
  delay?: number;
}

const ExperienceCard = ({ image, title, buttonText, delay = 0 }: ExperienceCardProps) => {
  return (
    <div 
      className="flex flex-col items-center opacity-0 animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-foreground font-display text-xl md:text-2xl tracking-widest uppercase mb-4">
        {title}
      </h3>
      <Button variant="sage" size="sm">
        {buttonText}
      </Button>
    </div>
  );
};

export default ExperienceCard;
