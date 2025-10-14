"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface SkillCardProps {
  skillImage: string[];
}

export default function SkillCard({ skillImage }: SkillCardProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".title-skill", { opacity: 0, y: 50 });
      gsap.set(".card-skill", { opacity: 0, x: 50, scale: 0.9 });

      ScrollTrigger.create({
        trigger: ".container-skill",
        start: "-50% 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".title-skill", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(".card-skill", {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            stagger: {
              amount: 0.8,
              from: "start",
            },
            ease: "back.out",
          }),
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Box ref={containerRef}>
      <Box className="container-skill">
        <Heading
          mt="6"
          ms="4"
          mb="2"
          fontFamily="bestime"
          fontSize={{ base: "sm", md: "md", lg: "md" }}
          fontWeight="light"
          color="brand.text.navy"
        >
          Software Skill
        </Heading>

        <Flex alignItems="center" gap={4} flexWrap="wrap">
          {skillImage.map((image, index) => (
            <Box
              key={index}
              className="card-skill"
              px={{ base: "8", md: "6", lg: "8" }}
              py="2"
              bg="white"
              border="2.5px solid"
              borderColor="brand.text.navy"
              rounded="xl"
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.2s"
            >
              <Image src={image} w="10" />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
