"use client";

import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Image } from "@/components/Image";
import gsap from "gsap";

import type { SocialMedia } from "@/types/api/socialMedia";

export default function SocialMediaCard({
  socialMedia,
}: Readonly<{ socialMedia: SocialMedia[] }>) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".title-sosmed", { opacity: 0, y: 50 });
      gsap.set(".card-sosmed", { opacity: 0, x: 20, scale: 0.9 });

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

        <Flex
          alignItems="center"
          gap={4}
          flexWrap={{ base: "wrap", md: "wrap" }}
        >
          {socialMedia.map((media) => (
            <Link
              key={media.id}
              href={media.url}
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.2s"
              className="card-sosmed"
            >
              <Box
                px={{ base: "3", md: "6", lg: "8" }}
                py="2"
                bg="white"
                border="2.5px solid"
                borderColor="brand.text.navy"
                rounded="xl"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${media.icon.url}`}
                  w="10"
                />
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
