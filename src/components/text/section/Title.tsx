"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { Image } from "@/components/Image";
import { splitTextFirst, splitTextTwo } from "@/utils/splitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface TitleProps {
  text: string;
  variant: "single" | "double";
  color: string;
}

const processor: {
  [key in TitleProps["variant"]]: (text: string) => [string, string];
} = {
  single: splitTextFirst,
  double: splitTextTwo,
};

export default function Title({ text, variant, color }: TitleProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstTextRef = useRef<HTMLHeadingElement | null>(null);
  const secondTextRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [firstText, secondText] = useMemo(
    () => processor[variant](text),
    [text]
  );

  useGSAP(() => {
    gsap.set(imageRef.current, {
      opacity: 0,
      y: 50,
      xPercent: -50,
      left: "50%",
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
      animation: gsap
        .timeline()
        .to(firstTextRef.current, {
          duration: 1.2,
          scrambleText: {
            text: firstText,
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            revealDelay: 0.5,
            speed: 0.4,
          },
        })
        .to(
          secondTextRef.current,
          {
            duration: 1.5,
            scrambleText: {
              text: secondText,
              chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ?",
              revealDelay: 0.5,
              speed: 0.4,
            },
          },
          "-=0.8"
        )
        .to(
          imageRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "sine.out",
          },
          "-=0.8"
        ),
    });
  });

  return (
    <Flex ref={containerRef} gap={2}>
      <Heading
        ref={firstTextRef}
        fontFamily="bestime"
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        fontWeight="light"
        color="brand.text.black"
      />
      <Box position="relative">
        <Heading
          ref={secondTextRef}
          fontFamily="bestime"
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          color={color}
          fontWeight="light"
        />
        <Image
          ref={imageRef}
          src="/images/bg/underline-profile.png"
          position="absolute"
          w={{ base: "28", md: "40" }}
          left="50%"
          transform="translateX(-50%)"
          mt={{ base: "-1.5", md: "0" }}
          alt="underline"
          zIndex={2}
        />
      </Box>
    </Flex>
  );
}
