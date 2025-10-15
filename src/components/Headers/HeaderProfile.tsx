"use client";

import { splitTextTwo } from "@/utils/splitText";
import { Flex, Grid, GridItem, Heading, Icon } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function HeaderProfile() {
  const containerRef = useRef(null);
  const [splitFirst, rest] = splitTextTwo("Meet Our Creative Team");

  useGSAP(
    () => {
      gsap.set(".scramble-first, .scramble-rest", { text: "" });
      gsap.set(".button-back", { opacity: 0, x: -50 });

      document.fonts?.ready?.then(() => {
        ScrollTrigger.create({
          trigger: ".title-profile-page",
          start: "top 95%",
          toggleActions: "play none none none",
          animation: gsap
            .timeline()
            .to(".scramble-first", {
              duration: 1.2,
              scrambleText: {
                text: splitFirst,
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                revealDelay: 0.4,
                speed: 0.4,
              },
            })
            .to(
              ".scramble-rest",
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
      });

      ScrollTrigger.create({
        trigger: ".button-back",
        start: "top 95%",
        toggleActions: "play none none none",
        animation: gsap.to(".button-back", {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "sine.out",
        }),
      });
    },
    { scope: containerRef }
  );

  return (
    <Grid
      ref={containerRef}
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
            as={FaArrowLeft}
            boxSize={8}
            cursor="pointer"
            className="button-back"
          />
        </Link>
      </GridItem>

      <GridItem justifySelf={{ base: "start", md: "center" }}>
        <Flex
          gap={2}
          justify="center"
          align="center"
          className="title-profile-page"
          flexWrap="wrap"
        >
          <Heading
            className="scramble-first"
            fontFamily="bestime"
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            fontWeight="light"
            color="brand.text.navy"
          />
          <Heading
            className="scramble-rest"
            fontFamily="bestime"
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            fontWeight="light"
            color="brand.text.orange"
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}
