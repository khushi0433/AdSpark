import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfoiloSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleNavClick = (section: string) => {
    navigate(`/${section}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onNavClick={handleNavClick} />
      <PortfolioSection />
      <TestimonialsSection />
    </div>
  );
}
