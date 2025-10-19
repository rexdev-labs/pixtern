"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Bird from "@/components/Bird";
import PersonCard from "@/components/cards/PersonCard";
import gsap from "gsap";

import type { Intern } from "@/types/api/person/intern";
import type { Team } from "@/types/api/person/team";

export default function SeeOthersCard({
  others,
}: Readonly<{ others: Intern[] | Team[] }>) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".title-others", { opacity: 0, y: 50 });
      gsap.set(".card-others", { opacity: 0, x: 50, scale: 0.9 });

      ScrollTrigger.create({
        trigger: ".container-others",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".title-others", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(".card-others", {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            stagger: { amount: 0.8, from: "start" },
            ease: "back.out",
          }),
      });
    },
    { scope: containerRef }
  );

  return (
    <Box ref={containerRef} w="full" position="relative">
      <Bird
        variant="Purple"
        facing="right"
        bottom="-100%"
        left="30%"
        w={{ base: 10, sm: 12, md: 16, lg: 20, xl: 24 }}
        h="auto"
        zIndex={20}
        position="absolute"
        display={{ base: "none", md: "block" }}
      />

      <Bird
        variant="Green"
        facing="right"
        position="absolute"
        bottom="-100%"
        right="30%"
        w={{ base: 8, sm: 10, md: 12, lg: 16, xl: 20 }}
        h="auto"
        zIndex={20}
        display={{ base: "none", md: "block" }}
      />

      <Box className="container-others" my="20" px={{ base: "8", lg: "20" }}>
        <Heading
          className="title-others"
          my="4"
          ms="4"
          fontFamily="bestime"
          fontSize={{ base: "sm", md: "md", lg: "md" }}
          fontWeight="light"
          color="brand.text.navy"
        >
          See Others
        </Heading>

        <Box overflowX="auto" overflowY="hidden">
          <Flex
            alignItems="center"
            gap={{ base: 4, md: 8 }}
            py="2"
            className="cards-wrapper"
          >
            {others.map((person) => (
              <PersonCard
                key={person.id}
                name={person.name}
                backgroundColor={person.detail!.backgroundColor}
                avatarImage={person.detail!.avatarImage}
                personImage={person.detail!.personImage}
                backgroundImage={person.detail!.backgroundImage}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
