import Image from "next/image";
import HeroSection from "./homepage/HeroSection";
import Projects from "./homepage/Projects";
import Space from "./homepage/Space";
import Services from "./homepage/Service";
import Events from "./homepage/Events";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Space />
      <Services />
      <Events />
      <Contact />
    </>
  );
}
