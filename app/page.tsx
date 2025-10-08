"use client";
import HeroSection from "../app/components/HeroSection";
import Navigation from "../app/components/Navigation";
import PortfolioSection from "../app/components/PortfoiloSection";
import TestimonialsSection from "../app/components/TestimonialsSection";
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
