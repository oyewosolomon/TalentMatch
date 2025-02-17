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
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import Products from "@/components/sections/Products";
import Industries from "@/components/sections/Industries";
import Services from "@/components/sections/Services";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturesSection from "@/components/sections/Features";
import FAQs from "@/components/sections/FAQ";
import Website from "@/components/sections/Landing";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection/>
      <Website/>
    
      <Footer/>
    </main>
  );
}