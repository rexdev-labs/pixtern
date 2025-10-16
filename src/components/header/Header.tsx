"use client";

import { Flex, Grid, GridItem, Heading, Icon } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMemo, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { splitTextFirst, splitTextTwo } from "@/utils/splitText";
import gsap from "gsap";
import Link from "next/link";

interface HeaderProps {
  text: string;
  variant: "single" | "double";
  color: string;
}

const processor: {
  [key in HeaderProps["variant"]]: (text: string) => [string, string];
} = {
  single: splitTextFirst,
  double: splitTextTwo,
};

export default function Header({
  text,
  variant,
  color,
}: Readonly<HeaderProps>) {
  const scrambleFirstRef = useRef(null);
  const scrambleRestRef = useRef(null);
  const buttonBackRef = useRef(null);
  const titleProfileRef = useRef(null);

  const [firstText, rest] = useMemo(() => processor[variant](text), [text]);

  useGSAP(
    () => {
      gsap.set([scrambleFirstRef.current, scrambleRestRef.current], {
        text: "",
      });
      gsap.set(buttonBackRef.current, { opacity: 0, x: -50 });

      const triggers: ScrollTrigger[] = [];

      document.fonts?.ready?.then(() => {
        const trigger1 = ScrollTrigger.create({
          trigger: titleProfileRef.current,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
          animation: gsap
            .timeline()
            .to(scrambleFirstRef.current, {
              duration: 1.2,
              scrambleText: {
                text: firstText,
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                revealDelay: 0.4,
                speed: 0.4,
              },
            })
            .to(
              scrambleRestRef.current,
              {
                duration: 1.2,
                scrambleText: {
                  text: rest,
                  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                  revealDelay: 0.4,
                  speed: 0.4,
                },
              },
              "-=0.8"
            ),
        });
        triggers.push(trigger1);
      });

      const trigger2 = ScrollTrigger.create({
        trigger: buttonBackRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
        animation: gsap.to(buttonBackRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "sine.out",
        }),
      });
      triggers.push(trigger2);

      return () => {
        for (const trigger of triggers) {
          trigger.kill();
        }
      };
    },
    { dependencies: [firstText, rest] }
  );

  return (
    <Grid
      templateColumns={{ base: "auto 1fr", lg: "1fr auto 1fr" }}
      alignItems="center"
      mt="20"
      mb={{ base: "10", lg: "20" }}
      px={{ base: "8", lg: "20" }}
      gap={{ base: 4, lg: 0 }}
    >
      <GridItem justifySelf="start">
        <Link href="/">
          <Icon
            ref={buttonBackRef}
            as={FaArrowLeft}
            boxSize={8}
            cursor="pointer"
          />
        </Link>
      </GridItem>

      <GridItem justifySelf={{ base: "start", md: "center" }}>
        <Flex
          ref={titleProfileRef}
          gap={2}
          justify="center"
          align="center"
          flexWrap="wrap"
        >
          <Heading
            ref={scrambleFirstRef}
            fontFamily="bestime"
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            fontWeight="light"
            color="brand.text.navy"
          />
          <Heading
            ref={scrambleRestRef}
            fontFamily="bestime"
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            fontWeight="light"
            color={color}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}
