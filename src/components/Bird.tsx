"use client";

import { Image } from "./Image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import type { ImageProps } from "@chakra-ui/react";

interface BirdProps {
  facing: "left" | "right";
  variant?: "Green" | "Purple";
  animation?: "default" | "popup";
  tweenVars?: gsap.TweenVars;
}

export default function Bird({
  facing,
  variant = "Green",
  animation = "default",
  tweenVars = undefined,
  ...props
}: Readonly<BirdProps & ImageProps>) {
  const birdRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    if (tweenVars) {
      gsap.set(birdRef.current, tweenVars);
    }

    if (animation === "default") {
      gsap.fromTo(
        birdRef.current,
        {
          y: -200,
          x: -200,
          opacity: 0,
          rotation: -45,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: birdRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(birdRef.current, {
        y: -15,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    } else if (animation === "popup") {
      gsap.set(birdRef.current, { opacity: 0, scale: 0, rotation: 180 });
      gsap.to(birdRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 15,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: birdRef.current,
          start: "top 80%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse",
        },
      });
    }
  });

  return (
    <Image
      ref={birdRef}
      src={`/images/birds/${variant}-${facing}.png`}
      alt="Bird"
      {...props}
    />
  );
}
