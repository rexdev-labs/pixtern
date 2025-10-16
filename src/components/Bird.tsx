"use client";

import { Image } from "./Image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import type { ImageProps } from "@chakra-ui/react";

interface BirdProps {
  facing: "left" | "right";
  variant?: "Green" | "Purple";
}

export default function Bird({
  facing,
  variant = "Green",
  ...props
}: Readonly<BirdProps & ImageProps>) {
  const birdRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: birdRef.current,
      start: "top 90%",
      toggleActions: "play none none reverse",
      animation: gsap.fromTo(
        birdRef.current,
        {
          y: -200,
          x: -200,
          opacity: 0,
          rotation: -45 + (facing === "left" ? 180 : 0),
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          rotation: 0 + (facing === "left" ? 180 : 0),
          duration: 1.5,
          ease: "power3.out",
        }
      ),
    });

    gsap.to(birdRef.current, {
      y: -15,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <Image
      ref={birdRef}
      transform={facing === "left" ? "scaleX(-1)" : ""}
      transformOrigin={"center"}
      src={`/images/birds/${variant}.png`}
      alt="Bird"
      {...props}
    />
  );
}
