"use client";

import { Box, Flex, Heading, Image, Separator, Link } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface SosmedCardProps {
  sosmedImage: string[];
  sosmedLink: string[];
}

export default function SosmedCard({
  sosmedImage,
  sosmedLink,
}: SosmedCardProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".title-sosmed", { opacity: 0, y: 50 });
      gsap.set(".card-sosmed", { opacity: 0, x: 50, scale: 0.9 });

      ScrollTrigger.create({
        trigger: ".container-sosmed",
        start: "-10% 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".title-sosmed", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(".card-sosmed", {
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
      <Box className="container-sosmed">
      <Heading
        className="title-sosmed"
        ms="4"
        mb="2"
        fontFamily="bestime"
        fontSize={{ base: "sm", md: "md", lg: "md" }}
        fontWeight="light"
        color="brand.text.navy"
      >
        Contact & Social Media
      </Heading>

      <Flex alignItems="center" gap={4} flexWrap={{ base: "wrap", md: "wrap" }}>
        {sosmedImage.map((image, index) => (
          <Link
            key={index}
            href={sosmedLink[index]}
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
            className="card-sosmed"
          >
            <Box
              px={{ base: "8", md: "6", lg: "8" }}
              py="2"
              bg="white"
              border="2.5px solid"
              borderColor="brand.text.navy"
              rounded="xl"
            >
              <Image src={image} w="10" />
            </Box>
          </Link>
        ))}

        <Flex
          className="card-sosmed"
          px="2"
          py="2"
          bg="white"
          border="2.5px solid"
          borderColor="brand.text.navy"
          rounded="xl"
          gap={2}
        >
          <Link href="https://www.behance.net">
            <Image src="/images/logo/be.png" w="10" />
          </Link>
          <Separator
            orientation="vertical"
            height="10"
            borderColor="black"
            size="md"
          />
          <Link href="https://www.linkedin.com">
            <Image src="/images/logo/linkedin.png" w="10" />
          </Link>
        </Flex>
      </Flex>
      </Box>
    </Box>
  );
}
