"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AchievEduCard() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".title-achiev", { opacity: 0, y: -50 });
      gsap.set(".card-first", { opacity: 0, y: -50 });
      gsap.set(".card-second", { opacity: 0, y: -50 });

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
            ".card-first",
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "sine.out",
            },
            "-=0.3"
          )
          .to(
            ".card-second",
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "sine.out",
            },
            "-=0.3"
          ),
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <>
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
            <Flex
              className="card-first"
              px="6"
              py="4"
              bg="white"
              w="full"
              alignItems="flex-start"
              border="2.5px solid"
              borderColor="brand.text.navy"
              rounded="xl"
              gap={8}
              flexWrap="wrap"
            >
              <Text fontFamily="inter" fontWeight="bold" minW="fit-content">
                2017
              </Text>
              <Text
                fontFamily="inter"
                fontWeight="bold"
                display={{ base: "none", md: "block" }}
              >
                -
              </Text>
              <Text fontFamily="inter" fontWeight="bold">
                SMA TRUNOYOYO 17 JAKARTA
              </Text>
            </Flex>

            <Flex
              className="card-second"
              px="6"
              py="4"
              bg="white"
              w="full"
              alignItems="flex-start"
              border="2.5px solid"
              borderColor="brand.text.navy"
              rounded="xl"
              gap={8}
              flexWrap="wrap"
            >
              <Text fontFamily="inter" fontWeight="bold" minW="fit-content">
                2021
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
                  UNIVERSITAS GADJAH MADA
                </Text>
                <Text fontFamily="inter" fontWeight="reguler" fontSize="sm">
                  S1 Psikologi
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
