"use client";

import { Box, Center, Image } from "@chakra-ui/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, useGSAP);

export default function ProfilePixel() {
  const headerPixelRef = useRef(null);

  useGSAP(
    () => {
        gsap.set(".box-pixel", {
          opacity: 0,
          x: -80,
        });

        gsap.to(".box-pixel", {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".box-pixel",
            start: "top 85%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          },
        });

        gsap.set(".logo-pixel", {
          opacity: 0,
          scale: 0.8,
        });

        gsap.to(".logo-pixel", {
          scrollTrigger: {
            trigger: ".logo-pixel",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.fromTo(
          ".bg-pixel",
          {
            background:
              "linear-gradient(144.87deg, #2E138A 24.82%, #8C4FFF 99.41%)",
          },
          {
            background:
              "linear-gradient(144.87deg, #0C0524 24.82%, #2E138A 99.41%)",
            duration: 2.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".bg-pixel",
              start: "top 85%",
              end: "bottom 60%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      },
    { scope: headerPixelRef }
  );

  return (
    <Box ref={headerPixelRef}>
      <Box
        className="box-pixel"
        bg="white"
        p="3"
        rounded="3xl"
        border="3px solid"
        borderColor="black"
      >
        <Box
          className="bg-pixel"
          rounded="xl"
          py={{ base: "48", sm: "72", xl:"60"}}
          px={{ base: "14", sm: "16", md: "24", lg: "28", xl: "32" }}
        >
          <Center>
            <Image
              className="logo-pixel"
              src="images/logo/logo-about.png"
              alt="logo"
            />
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
