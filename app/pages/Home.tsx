"use client";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import PortfolioSection from "../components/PortfoiloSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavClick = (section: string) => {
    router.push(`/${section}`);
  };

  return (
    <>
    <Navigation />
      <HeroSection onNavClick={handleNavClick} />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
}
