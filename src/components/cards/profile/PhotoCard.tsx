"use client";

import { Box, Image } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import type { Detail } from "@/types/api/person/detail";
import type { Decoration } from "@/types/api/person/decoration";

interface ProfileCardProps {
  originalImage: Detail["originalImage"];
  avatarImage: Detail["avatarImage"];
  avatarPosition: Decoration["avatarPosition"];
  photoOrnamentPosition: Decoration["photoOrnamentPosition"];
  photoOrnament: Decoration["photoOrnament"];
}

export default function ProfileCard({
  originalImage,
  avatarImage,
  avatarPosition,
  photoOrnamentPosition,
  photoOrnament,
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const originalImageRef = useRef<HTMLImageElement | null>(null);
  const ornamentRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(originalImageRef.current, { opacity: 0, y: -50, scale: 0.9 });
      gsap.set(ornamentRef.current, { opacity: 0, y: 50, scale: 0.9 });

      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(originalImageRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(ornamentRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "sine.out",
          }),
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Box ref={containerRef} w="full">
      <Box
        ref={cardRef}
        p="2"
        bg="white"
        border="2px solid"
        borderColor="brand.text.navy"
        rounded="xl"
        h="96"
        w="full"
        overflow="visible"
        position="relative"
      >
        <Box
          border="2px solid"
          borderColor="brand.text.navy"
          rounded="lg"
          h="full"
          overflow="hidden"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${originalImage.url}`}
            objectFit="cover"
            mt="-0.5"
            w="110%"
            h="110%"
            rounded="lg"
          />
        </Box>

        <Image
          ref={originalImageRef}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${avatarImage.url}`}
          objectFit="cover"
          w="36"
          position="absolute"
          bottom="-5%"
          left={avatarPosition === "left" ? "-3%" : "auto"}
          right={avatarPosition === "right" ? "-3%" : "auto"}
          overflow="visible"
          zIndex="10"
        />

        <Image
          ref={ornamentRef}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${photoOrnament.url}`}
          objectFit="cover"
          w="11"
          position="absolute"
          top="10%"
          left={photoOrnamentPosition === "left" ? "-5%" : "auto"}
          right={photoOrnamentPosition === "right" ? "-5%" : "auto"}
          overflow="visible"
          zIndex="10"
        />
      </Box>
    </Box>
  );
}
