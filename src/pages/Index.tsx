import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperiencesSection />
      <AboutSection />
      <StorySection />
      <Footer />
    </main>
  );
};

export default Index;
