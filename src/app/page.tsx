"use client";

import { Box } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RocketParallax from "@/components/animations/RocketParallax";
import ProfileSection from "@/components/sections/ProfileSection";

import { setSmoother, getSmoother } from "@/utils/initSmoothScroll";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current!,
      content: smoothContentRef.current!,
      smooth: 4,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: false,  
      smoothTouch: 0.1,
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
      let sm = getSmoother();
      if (sm) {
        sm.refresh();
        ScrollTrigger.refresh();
      } else {
        smoother = ScrollSmoother.create({
          wrapper: smoothWrapperRef.current!,
          content: smoothContentRef.current!,
          smooth: 4,
          effects: true,
          normalizeScroll: true,
          ignoreMobileResize: false,
          smoothTouch: 0.1,
        });
        setSmoother(smoother);
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
          minH={{
            base: "140vh",
            sm: "130vh",
            md: "135vh",
            xl: "210vh",
            "2xl": "220vh",
          }}
        >
          <HeroSection />
          <RocketParallax />
        </Box>

        <AboutSection />
        <ProfileSection />
      </div>
    </div>
  );
}
