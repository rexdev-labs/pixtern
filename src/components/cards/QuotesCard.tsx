"use client";

import { Box, Center, Container, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import type { Quotes } from "@/types/api/quotes";

export default function QuotesCard({ quotes }: Readonly<{ quotes: Quotes }>) {
  const quotesRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".card-qoutes", {
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(".box-qoutes", {
        opacity: 0,
        y: -200,
        rotate: 180,
      });

      gsap.set(".box-year", {
        opacity: 0,
        y: -200,
        rotate: 180,
      });

      const headingSplit = new SplitText(".heading-quotes", {
        type: "chars",
      });

      gsap.to(".card-qoutes", {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "elastic.inOut",
        scrollTrigger: {
          trigger: ".card-qoutes",
          start: "top bottom",
          end: "bottom top",
          markers: true,
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.to(".box-qoutes", {
        opacity: 1,
        y: 0,
        rotate: 10,
        duration: 2,
        ease: "elastic.inOut",
        scrollTrigger: {
          trigger: ".card-qoutes",
          start: "top bottom",
          end: "bottom top",
          markers: true,
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.to(".box-year", {
        opacity: 1,
        y: 0,
        rotate: -4,
        duration: 2,
        ease: "elastic.inOut",
        scrollTrigger: {
          trigger: ".card-qoutes",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(headingSplit.chars, {
        duration: 0.6,
        opacity: 0,
        y: 20,
        ease: "back.out(2)",
        stagger: 0.03,
        scrollTrigger: {
          trigger: ".heading-quotes",
          start: "top 85%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: quotesRef }
  );

  return (
    <Container
      ref={quotesRef}
      zIndex={30}
      maxW={{ md: "xl" }}
      px="8"
      my="20"
      position="relative"
    >
      <Center>
        <Box
          className="card-qoutes"
          bg="white"
          rounded="xl"
          border="2px solid"
          borderColor="brand.bg.black"
          px={{ base: "6", md: "16" }}
          py="7"
          minH={{ base: "0", md: "100px" }}
          minW={{ base: "0", md: "500px" }}
          fontWeight="semibold"
          fontSize={{ base: "xs", md: "md" }}
          filter={{
            base: "drop-shadow(-5px 8px 0px rgba(54, 54, 54, 0.4))",
            md: "drop-shadow(-10px 12px 0px rgba(54, 54, 54, 0.4))",
            lg: "drop-shadow(-8px 8px 0px rgba(54, 54, 54, 0.4))",
          }}
        >
          <Text className="heading-quotes" fontFamily="inter">
            {quotes.quotes}
          </Text>
        </Box>
        <Box position="absolute" top="-12%" right="0">
          <Box
            className="box-year"
            position="absolute"
            top="-55%"
            left="35%"
            transform="rotate(-4deg)"
            zIndex={2}
            bg="brand.bg.blue.primary"
            color="brand.text.white"
            fontWeight="bold"
            fontSize="lg"
            border="2px solid"
            borderColor="brand.bg.black"
            px="6"
            rounded="full"
            textAlign="center"
          >
            <Text fontFamily="cursive">{quotes.year}</Text>
          </Box>

          <Box
            className="box-qoutes"
            bg="brand.bg.pink"
            color="brand.text.white"
            fontWeight="bold"
            fontSize="lg"
            border="2px solid"
            borderColor="brand.bg.black"
            transform="rotate(10deg)"
            py="1"
            px="6"
            rounded="full"
            textAlign="center"
            zIndex="1"
          >
            <Text fontFamily="cursive">QUOTES</Text>
          </Box>
        </Box>
      </Center>
    </Container>
  );
}
