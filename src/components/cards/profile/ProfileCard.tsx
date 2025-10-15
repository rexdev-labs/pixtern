"use client";

import { Box, Image } from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ProfileCardProps {
  realImage: string;
  charImage: string;
  charPosition: string;
  ornamenImage: string;
  ornamenPosition: string;
}

export default function ProfileCard({
  realImage,
  charImage,
  charPosition,
  ornamenImage,
  ornamenPosition,
}: ProfileCardProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".char-image", { opacity: 0, y: -50, scale: 0.9 });
      gsap.set(".ornamen", { opacity: 0, y: 50, scale: 0.9 });

      ScrollTrigger.create({
        trigger: ".card-profile-image",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".char-image", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(
            ".ornamen",
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "sine.out",
            },
          ),
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Box ref={containerRef} w="full">
      <Box
        className="card-profile-image"
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
            src={realImage}
            objectFit="cover"
            mt="-0.5"
            w="110%"
            h="110%"
            rounded="lg"
          />
        </Box>

        <Image
          className="char-image"
          src={charImage}
          objectFit="cover"
          w="36"
          position="absolute"
          bottom="-5%"
          left={charPosition === "left" ? "-3%" : "auto"}
          right={charPosition === "right" ? "-3%" : "auto"}
          overflow="visible"
          zIndex="10"
        />

        <Image
          className="ornamen"
          src={ornamenImage}
          objectFit="cover"
          w="11"
          position="absolute"
          top="10%"
          left={ornamenPosition === "left" ? "-5%" : "auto"}
          right={ornamenPosition === "right" ? "-5%" : "auto"}
          overflow="visible"
          zIndex="10"
        />
      </Box>
    </Box>
  );
}
