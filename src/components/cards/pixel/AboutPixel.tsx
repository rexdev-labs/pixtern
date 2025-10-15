"use client";

import { Box, Text, Heading } from "@chakra-ui/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function AboutPixel() {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
        gsap.set(".about-box", { opacity: 0, x: 100 });
        gsap.set(".subtext-fade", { opacity: 0, y: 20 });
        
        const headingSplit = new SplitText(".heading-split", {
          type: "chars",
        });

        const paragraphSplit = new SplitText(".paragraph-split", {
          type: "lines",
          linesClass: "split-line",
        });

        gsap.to(".about-box", {
          scrollTrigger: {
            trigger: ".about-box",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.to(".subtext-fade", {
          scrollTrigger: {
            trigger: ".subtext-fade",
            start: "top 85%",
            end: "bottom -20%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 1,
        });


        gsap.from(headingSplit.chars, {
          scrollTrigger: {
            trigger: ".heading-split",
            start: "top 85%",
            end: "bottom -20%",
            toggleActions: "play reverse play reverse",
          },
          duration: 0.6,
          opacity: 0,
          y: 20,
          ease: "back.out(2)",
          stagger: 0.03,
        });


        gsap.from(paragraphSplit.lines, {
          scrollTrigger: {
            trigger: ".paragraph-split",
            start: "top 85%",
            end: "bottom -20%",
            toggleActions: "play reverse play reverse",
          },
          duration: 1,
          opacity: 0,
          y: 30,
          ease: "power3.out",
          stagger: 0.15,
        });
      }, 
    { scope: aboutRef }
  );

  return (
    <Box ref={aboutRef}>
      <Box mb="6">
        <Heading
          className="heading-split"
          fontFamily="bestime"
          fontSize={{
            base: "xl",
            md: "2xl",
            lg: "3xl",
          }}
          color="brand.text.black"
          fontWeight="normal"
          mb="2"
        >
          Pixel Space Digital Creative
        </Heading>

        <Text
          className="subtext-fade"
          fontFamily="inter"
          fontSize={{
            base: "sm",
            sm: "sm",
            md: "sm",
            lg: "md",
          }}
          color="brand.text.black"
          fontWeight="normal"
        >
          Digital Creative Company
        </Text>
      </Box>

      <Box
        className="about-box"
        bg="white"
        p="6"
        mb={{ base: "4", xl: "8" }}
        rounded="xl"
        border="3px solid"
        borderColor="black"
        minH="462px"
      >
        <Heading
          className="heading-split"
          fontFamily="bestime"
          fontSize={{
            base: "sm",
            md: "md",
            lg: "xl",
          }}
          color="brand.text.black"
          fontWeight="normal"
          mb="4"
        >
          About Pixel Space Digital Creative
        </Heading>

        <Text
          className="paragraph-split"
          color="brand.text.black"
          fontSize={{
            base: "xs",
            md: "sm",
            lg: "md",
          }}
          fontFamily="inter"
          lineHeight="1.6"
        >
          Pixel Space Digital Creative. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
          Pixel Space Digital Creative. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </Text>
      </Box>
    </Box>
  );
}
