"use client";

import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

import HeroSection from "@/components/sections/HeroSection";
import RocketParallax from "@/components/animations/RocketParallax";
import AboutSection from "@/components/sections/AboutSection";
import ProfileSection from "@/components/sections/ProfileSection";
import ClientSection from "@/components/sections/ClientSection";

import { setSmoother, getSmoother } from "@/utils/initSmoothScroll";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current!,
      content: smoothContentRef.current!,
      smooth: 4,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    setSmoother(smoother);

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        if (targetId) {
          smoother.scrollTo(targetId, true, "center center");
        }
      });
    });

    const handleResize = () => {
      const sm = getSmoother();
      if (sm) {
        sm.refresh();
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      smoother.kill();
    };
  }, []);

  return (
    <div ref={smoothWrapperRef} id="smooth-wrapper">
      <div ref={smoothContentRef} id="smooth-content">
        <Box
          bg="brand.bg.black"
          position="relative"
          minH={{
            base: "130vh",
            sm: "130vh",
            md: "135vh",
            lg: "180vh",
            xl: "210vh",
            "2xl": "290vh",
          }}
          overflow="visible"
        >
          {/* <HeroSection />
          <RocketParallax /> */}
        </Box>

        {/* <AboutSection /> */}
        <ProfileSection />
        <ClientSection />
      </div>
    </div>
  );
}
