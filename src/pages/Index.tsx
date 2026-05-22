import {
  useScroll,
  useTransform,
} from "framer-motion";

import Navbar from "@/components/hero/Navbar";
import Hero from "@/components/hero/Hero";

import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

import CursorGlow from "@/components/effects/CursorGlow";
import BackgroundGrid from "@/components/effects/BackgroundGrid";

import { useMouseGlow } from "@/hooks/useMouseGlow";

export default function Index() {

  const { scrollY } = useScroll();

  const heroScale = useTransform(
    scrollY,
    [0, 500],
    [1, 0.95]
  );

  const heroOpacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0.3]
  );

  const {
    smoothX,
    smoothY,
  } = useMouseGlow();

  return (
    <div className="bg-black text-white overflow-hidden relative font-sans antialiased selection:bg-cyan-500 selection:text-black">

      <CursorGlow
        smoothX={smoothX}
        smoothY={smoothY}
      />

      <BackgroundGrid />

      <Navbar />

      <Hero
        heroScale={heroScale}
        heroOpacity={heroOpacity}
      />

      <AboutSection />

      <ExperienceSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />

      <Footer />
    </div>
  );
}