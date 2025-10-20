"use client";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

import type { Job } from "@/types/api/job";

export default function JobCard({ job }: { job: Job }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const boxImageRef = useRef<HTMLDivElement>(null);
  const boxTitleRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      gsap.set(cardRef.current, { opacity: 0, y: 150 });
      gsap.set(boxRef.current, { opacity: 0, y: 50 });
      gsap.set(boxImageRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(boxTitleRef.current, { opacity: 0 });

      const headingSplit = new SplitText(headingRef.current, {
        type: "chars",
      });

      const textSplit = new SplitText(textRef.current, {
        type: "lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          boxRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          boxImageRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        )
        .to(
          boxTitleRef.current,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          headingSplit.chars,
          {
            opacity: 0,
            y: 20,
            stagger: 0.03,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(
          textSplit.lines,
          {
            opacity: 0,
            y: 10,
            stagger: 0.05,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3"
        );
    },
    { scope: cardRef }
  );

  return (
    <Box ref={cardRef}>
      <Box
        ref={boxRef}
        bg="white"
        rounded="2xl"
        border="3px solid"
        borderColor="brand.bg.black"
        p={{ base: "6", lg: "8" }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 4, md: 6 }}
        >
          <Box
            ref={boxImageRef}
            flex={{ base: "1", md: "2", lg: "1" }}
            minW={{ base: "100%", md: "0" }}
          >
            <Box
              bg="brand.bg.anothergray"
              display="flex"
              alignItems="center"
              justifyContent="center"
              rounded="xl"
              h={{ base: "auto", md: "100%" }}
              p={{ base: "6", md: "8", lg: "10" }}
              minH={{ base: "200px", md: "250px" }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${job.illustration.url}`}
                alt={`${job.title} illustration`}
                boxSize={{ base: "60%", md: "80%", lg: "100%" }}
                objectFit="contain"
              />
            </Box>
          </Box>

          <Box
            ref={boxTitleRef}
            flex={{ base: "1", md: "2", lg: "3" }}
            minW={{ base: "100%", md: "0" }}
          >
            <Box
              bg="brand.bg.anothergray"
              rounded="xl"
              px={{ base: "4", md: "6", lg: "10" }}
              py={{ base: "4", md: "6", lg: "8" }}
              h="100%"
              minH={{ base: "400px", md: "250px" }}
            >
              <Heading
                ref={headingRef}
                fontFamily="Inter"
                fontWeight="extrabold"
                fontSize={{ base: "xl", md: "2xl" }}
                lineHeight="short"
                mb={{ base: "4", md: "6" }}
              >
                {job.title}
              </Heading>

              <Text
                ref={textRef}
                fontFamily="Inter"
                fontWeight="medium"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="base"
              >
                {job.description}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}