"use client";

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

import type { StrapiImage } from "@/types/api/strapiImage";

interface AboutCardProps {
  name: string;
  fullName: string;
  aboutMe: string;
  role: string;
  aboutUsFirstOrnament?: StrapiImage;
  aboutUsSecondOrnament?: StrapiImage;
}

export default function AboutCard({
  name,
  fullName,
  aboutMe,
  role,
  aboutUsFirstOrnament,
  aboutUsSecondOrnament,
}: Readonly<AboutCardProps>) {
  const containerRef = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      const splitDesc = new SplitText(".text-desc .split-paragraph", {
        type: "lines",
      });

      gsap.set(splitDesc.lines, { opacity: 0, y: 20 });
      gsap.set(".scramble-name", { text: "" });
      gsap.set(".jobs", { opacity: 0, y: 50 });
      gsap.set(".text-about", { opacity: 0, y: 50 });
      gsap.set(".ornamen-first", { opacity: 0, y: 50, scale: 0.9 });
      gsap.set(".ornamen-second", { opacity: 0, y: 50, scale: 0.9 });

      document.fonts?.ready?.then(
        contextSafe!(() => {
          ScrollTrigger.create({
            trigger: ".card-about-team",
            start: "top 95%",
            toggleActions: "play reverse play reverse",
            animation: gsap
              .timeline()
              .to(
                ".scramble-name",
                {
                  duration: 1.2,
                  scrambleText: {
                    text: `${name} (${fullName})`,
                    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ()",
                    revealDelay: 0.4,
                    speed: 0.4,
                  },
                },
                "-=0.4"
              )
              .to(
                ".jobs",
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "sine.out",
                },
                "-=0.4"
              )
              .to(
                ".text-about",
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "sine.out",
                },
                "-=0.4"
              )
              .to(
                splitDesc.lines,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.1,
                  ease: "power2.out",
                },
                "-=0.4"
              )
              .to(
                ".ornamen-first",
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: "sine.out",
                },
                "-=0.4"
              )
              .to(
                ".ornamen-second",
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: "sine.out",
                },
                "-=0.4"
              ),
          });
        })
      );
    },
    {
      scope: containerRef,
    }
  );
  return (
    <>
      <Box ref={containerRef}>
        <Box className="card-about-team">
          <Box>
            <Heading
              className="scramble-name"
              fontFamily="bestime"
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight="light"
              color="brand.text.navy"
            >
              {name} ({fullName})
            </Heading>
            <Text
              className="jobs"
              fontFamily="inter"
              fontWeight="normal"
              fontSize="sm"
            >
              {role}
            </Text>
          </Box>

          <Box
            my="6"
            px="5"
            py="5"
            bg="white"
            border="2.5px solid"
            borderColor="brand.text.navy"
            rounded="xl"
            position="relative"
          >
            <Heading
              className="text-about"
              fontFamily="bestime"
              fontWeight="lighter"
              mb="2"
              color="brand.text.navy"
            >
              About {name}
            </Heading>
            <Box className="text-desc">
              <Text
                className="split-paragraph"
                fontFamily="inter"
                fontWeight="medium"
                fontSize="sm"
              >
                {aboutMe}
              </Text>
            </Box>

            {aboutUsFirstOrnament && (
              <Image
                className="ornamen-first"
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${aboutUsFirstOrnament.url}`}
                objectFit="cover"
                w="14"
                position="absolute"
                bottom="20%"
                left={{ base: "-6%", lg: "-5%" }}
                overflow="visible"
                zIndex="-10"
              />
            )}

            {aboutUsSecondOrnament && (
              <Image
                className="ornamen-second"
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${aboutUsSecondOrnament.url}`}
                objectFit="cover"
                w="16"
                position="absolute"
                top="-7%"
                right={{ base: "-8%", lg: "-5%" }}
                overflow="visible"
                zIndex="10"
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
