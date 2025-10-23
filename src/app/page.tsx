import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import CallToAction from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HowItWorks />
        <AboutUs />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
