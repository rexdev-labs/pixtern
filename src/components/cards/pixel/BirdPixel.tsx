"use client";

import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BirdPixel() {
  const birdRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? true;

  useGSAP(
    () => {
        if (isMobile === undefined) return;

        gsap.set(".bird-float-green", {
          opacity: 0,
          x: -100,
        });
        gsap.set(".bird-float-purple", {
          opacity: 0,
          x: -100,
        });

        gsap.to(".bird-float-green", {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: birdRef.current,
            start: "top center",
            end: "bottom 60%",
            toggleActions: "play reverse play reverse",
          },
          onComplete: () => {
            gsap.to(".bird-float-green", {
              y: -15,
              rotation: 1.5,
              duration: 1.5,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          },
        });
        
        gsap.to(".bird-float-purple", {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: birdRef.current,
            start: isMobile ? "top center" : "top 20%",
            end: "bottom 60%",
            toggleActions: "play reverse play reverse",
          },
          onComplete: () => {
            gsap.to(".bird-float-purple", {
              y: -15,
              rotation: 1.5,
              duration: 1.5,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          },
        });
      },
    { scope: birdRef, dependencies: [isMobile] }
  );

  return (
    <Box ref={birdRef} mt={{ base: "10vh", md: "20vh", lg: "60vh"}} mb={{ base: "20vh", md:"20vh"}} spaceY={{ base: "10vh" ,md: "50vh"}} position="relative">
      <Flex justifyContent="start" mr="40">
        <Image
          className="bird-float-green"
          src="/images/float/bird-about1.svg"
          alt="bird"
          w={{ base: "30%", md: "15%", lg:"8%"}}
          h="auto"
          right="15%"
        />
      </Flex>
      <Flex justifyContent="start" mr="40">
        <Image
          className="bird-float-purple"
          src="/images/float/bird-about2.svg"
          alt="bird"
          w={{ base: "40%" , md: "20%", lg: "10%"}}
          h="auto"
          right="15%"
        />
      </Flex>
    </Box>
  );
}
