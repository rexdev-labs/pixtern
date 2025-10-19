"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import type { Education } from "@/types/api/person/education";

export default function AchievEduCard({
  educations,
}: Readonly<{ educations: Education[] }>) {
  const containerRef = useRef(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      gsap.set(titleRef.current, { opacity: 0, y: -50 });
      gsap.set(".card-item", { opacity: 0, y: -50 });

      ScrollTrigger.create({
        trigger: ".card-achiev-card",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(
            ".card-item",
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "sine.out",
              stagger: 0.2,
            },
            "-=0.3"
          ),
      });
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef}>
      <Box className="card-achiev-card">
        <Heading
          ref={titleRef}
          mx="2"
          mb="3"
          fontFamily="bestime"
          fontWeight="lighter"
          color="brand.text.navy"
          fontSize="md"
        >
          Education / Achievement
        </Heading>

        <Flex direction="column" gap={3} w="full">
          {educations.map((education, index) => (
            <Flex
              key={index}
              className="card-item"
              px="6"
              py="4"
              bg="white"
              w="full"
              alignItems="flex-start"
              border="2.5px solid"
              borderColor="brand.text.navy"
              rounded="xl"
              gap={{ base: 6, md: 8 }}
              flexWrap="nowrap"
            >
              <Text fontFamily="inter" fontWeight="bold" minW="fit-content">
                {education.startYear}
              </Text>

              <Text
                fontFamily="inter"
                fontWeight="bold"
                display={{ base: "none", md: "block" }}
              >
                -
              </Text>

              <Box>
                <Text fontFamily="inter" fontWeight="bold">
                  {education.insitutionName}
                </Text>
                <Text fontFamily="inter" fontWeight="regular" fontSize="sm">
                  {education.fieldOfStudy}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
