"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { Image } from "@/components/Image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import type { StrapiImage } from "@/types/api/strapiImage";

export default function SkillCard({
  skills,
}: Readonly<{ skills: StrapiImage[] }>) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".title-skill", { opacity: 0, y: 50 });
      gsap.set(".card-skill", { opacity: 0, x: 20, scale: 0.9 });

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
    <Box ref={containerRef} w="full" mb="32">
      <Box className="container-skill">
        <Heading
          className="title-skill"
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
          {skills.map((image) => (
            <Box
              key={image.id}
              className="card-skill"
              px={{ base: "3", md: "6", lg: "8" }}
              py="2"
              bg="white"
              border="2.5px solid"
              borderColor="brand.text.navy"
              rounded="xl"
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.2s"
            >
              <Image src={`${process.env.NEXT_PUBLIC_BASE_API}${image.url}`} w="10" alt="Skill" />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
