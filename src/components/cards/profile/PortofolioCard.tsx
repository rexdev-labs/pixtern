"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import type { StrapiImage } from "@/types/api/strapiImage";

export default function PortofolioCard({
  portofolio,
}: Readonly<{
  portofolio: StrapiImage[];
}>) {
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
          {portofolio.map((image, index) => (
            <Box
              key={image.id}
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
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.url}`}
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
