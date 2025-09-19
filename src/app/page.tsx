import { Box } from "@chakra-ui/react";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RocketParallax from "@/components/animations/RocketParallax";

export default function Home() {
  return (
    <>
      <Box minH="300vh">
        <HeroSection />
        <RocketParallax />
      </Box>

      {/* About Section - Appears after parallax animation */}
      <AboutSection />
    </>
  );
}