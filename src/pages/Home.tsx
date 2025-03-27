import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/WhyChooseUs";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import FeaturesSection from "@/components/sections/Features";
import Website from "@/components/sections/Landing";
import Mantra from "@/components/sections/Mantra";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <main className="relative">
      <Hero />
      <Mantra />
      <FeaturesSection/>
      <Website/>
    
      <Footer/>
    </main>
  );
}