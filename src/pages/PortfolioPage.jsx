import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TechStackSection from "../components/sections/TechStackSection";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />

      <main className="mx-auto flex max-w-artifact flex-col gap-7 px-5 pb-28 pt-28 md:px-6 md:pt-32">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
