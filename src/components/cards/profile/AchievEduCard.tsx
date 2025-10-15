"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AchievEduCardProps {
  data: {
    year: string;
    institution: string;
    detail?: string;
  }[];
}

export default function AchievEduCard({ data }: AchievEduCardProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".title-achiev", { opacity: 0, y: -50 });
      gsap.set(".card-item", { opacity: 0, y: -50 });

      ScrollTrigger.create({
        trigger: ".card-achiev-card",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".title-achiev", {
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
          className="title-achiev"
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
          {data.map((item, index) => (
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
                {item.year}
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
                  {item.institution}
                </Text>
                {item.detail && (
                  <Text fontFamily="inter" fontWeight="regular" fontSize="sm">
                    {item.detail}
                  </Text>
                )}
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
