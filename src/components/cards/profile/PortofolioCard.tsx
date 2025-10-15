"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface PortofolioCardProps {
  portfolioImage: string[];
}

export default function PortofolioCard({
  portfolioImage,
}: PortofolioCardProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".title-porto", { opacity: 0, y: 50 });
      gsap.set(".card-porto", { opacity: 0, x: 20, scale: 0.9 });

      ScrollTrigger.create({
        trigger: ".container-porto",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".title-porto", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(".card-porto", {
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
    <Box ref={containerRef} w="full">
      <Box className="container-porto">
        <Heading
          className="title-porto"
          ms="4"
          mb="3"
          fontFamily="bestime"
          fontSize={{ base: "sm", md: "md", lg: "md" }}
          fontWeight="light"
          color="brand.text.navy"
        >
          Mini Portofolio
        </Heading>

        <Flex alignItems="center" gap={2} flexWrap="wrap">
          {portfolioImage.map((image, index) => (
            <Box
              key={index}
              className="card-porto"
              w="31%"
              h={{ base: "24", md: "28", lg: "52" }}
              bg="white"
              border="2.5px solid"
              borderColor="brand.text.navy"
              rounded="xl"
              overflow="hidden"
            >
              <Image
                src={image}
                alt={`Portfolio ${index + 1}`}
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
