"use client";

import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RocketParallax from "@/components/animations/RocketParallax";
import { setSmoother } from "@/utils/initSmoothScroll";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);
  
  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 2, 
      effects: true, 
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    setSmoother(smoother);

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId) {
          smoother.scrollTo(targetId, true, "top top");
        }
      });
    });

  }, []);

  return (
    <div ref={smoothWrapperRef} id="smooth-wrapper">
      <div ref={smoothContentRef} id="smooth-content">
        <Box minH="200vh">
          <HeroSection />
          <RocketParallax />
        </Box>

        <AboutSection />
      </div>
    </div>
  );
}