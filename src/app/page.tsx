import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Services />
      <CallToAction />
    </main>
  );
}
