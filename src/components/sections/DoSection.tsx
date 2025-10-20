"use client";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { splitTextFirst } from "@/utils/splitText";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhatWeDoCard } from "@/components/cards/WhatWeDoCard";
import { Image } from "@/components/Image";
import Link from "next/link";
import Bird from "@/components/Bird";
import gsap from "gsap";

import type { WhatWeDoSection } from "@/types/api/homepage/whatWeDoSection";

export default function DoSection({
  data,
}: Readonly<{ data: WhatWeDoSection }>) {
  const doSectionRef = useRef(null);
  const [splitFirst, rest] = useMemo(
    () => splitTextFirst(data.section.title),
    [data.section.title]
  );

  useGSAP(
    (context, contextSafe) => {
      document.fonts.ready.then(
        contextSafe!(() => {
          const descSplit = new SplitText(".desc-text", {
            type: "lines,words",
          });

          gsap.from(descSplit.words, {
            opacity: 0,
            y: 20,
            stagger: 0.01,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".desc-text",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
            },
          });
        })
      );

      gsap.set(".underline-do", { opacity: 0, y: 50 });

      ScrollTrigger.create({
        trigger: ".title-whatwedo",
        start: "top 85%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".scramble-our-wo", {
            duration: 1.2,
            scrambleText: {
              text: splitFirst,
              chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
              revealDelay: 0.5,
              speed: 0.4,
            },
          })
          .to(
            ".scramble-title-wo",
            {
              duration: 1.5,
              scrambleText: {
                text: rest,
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ?",
                revealDelay: 0.5,
                speed: 0.4,
              },
            },
            "-=0.8"
          )
          .to(
            ".underline-do",
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "sine.out",
            },
            "-=0.8"
          ),
      });

      gsap.utils.toArray(".card-item").forEach((card: any, index: number) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotation: index % 2 === 0 ? -10 : 10,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      gsap.from(".cta-button", {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".cta-button",
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: doSectionRef, dependencies: [splitFirst, rest] }
  );

  return (
    <Box ref={doSectionRef}>
      <Box
        id="DoSection"
        mt={{ base: "6", md: "10" }}
        py={{ base: "16", md: "28" }}
      >
        <Box spaceY="6">
          <Center
            px={{ base: 4, sm: 6, md: 8, lg: 0 }}
            className="title-whatwedo"
          >
            <Flex
              gap={{ base: 1, md: 2 }}
              flexWrap="wrap"
              justifyContent="center"
              alignItems="baseline"
            >
              <Heading
                className="scramble-our-wo"
                fontFamily="bestime"
                fontSize={{
                  base: "3xl",
                  sm: "4xl",
                  md: "5xl",
                  lg: "6xl",
                }}
                fontWeight="light"
                color="brand.text.black"
              >
                {splitFirst}
              </Heading>
              <Box display="flex" flexDirection="column">
                <Heading
                  className="scramble-title-wo"
                  fontFamily="bestime"
                  fontSize={{
                    base: "3xl",
                    sm: "4xl",
                    md: "5xl",
                    lg: "6xl",
                  }}
                  color="brand.text.orange"
                  fontWeight="light"
                >
                  {rest}
                </Heading>
                <Image
                  className="underline-do"
                  src="/images/bg/underline-do.png"
                  w={{ base: 24, sm: 28, md: 40, lg: 56 }}
                  mt={{ base: -1.5, md: 0 }}
                  pr={{ base: 2, md: 4 }}
                  alt="underline"
                  zIndex={2}
                />
              </Box>
            </Flex>
          </Center>

          <Container
            maxW={{
              base: "100%",
              md: "container.md",
              lg: "container.lg",
            }}
            px={{ base: "4", md: "6" }}
          >
            <Flex
              justify="center"
              align="center"
              position="relative"
              minH={{ base: "60px", md: "80px" }}
            >
              <Bird
                facing="right"
                variant="Purple"
                position="absolute"
                bottom={{ base: "5%", sm: "10%", md: "60%" }}
                left={{ base: "5%", sm: "8%", md: "8%" }}
                w={{
                  base: 10,
                  sm: 12,
                  md: 16,
                  lg: 20,
                  xl: 24,
                }}
                h="auto"
                display={{ base: "none", md: "block" }}
              />

              <Box
                maxW={{
                  base: "90%",
                  sm: "500px",
                  md: "600px",
                  xl: "700px",
                }}
                px={{ base: 10, md: 0 }}
              >
                <Text
                  className="desc-text"
                  fontFamily="heading"
                  fontWeight="normal"
                  textAlign="center"
                  fontSize={{
                    base: "2xs",
                    sm: "xs",
                    md: "md",
                    xl: "lg",
                  }}
                  lineHeight={{ base: 1.4, md: 1.6 }}
                  color="gray.700"
                >
                  {data.section.description}
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box
          my={{ base: 8, md: 12, lg: 14 }}
          position="relative"
          px={{ base: 16, sm: 24, md: 8, lg: 12 }}
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w={{ base: "150%", md: "120%", lg: "100%" }}
            zIndex={0}
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
          >
            <Image
              src="/images/bg/bg-wave.png"
              alt="bgWave"
              w="full"
              objectFit="contain"
              opacity="0.9"
            />
          </Box>

          <Stack
            direction={{ base: "column", md: "row" }}
            justify="center"
            align="stretch"
            gap={{ base: 6, md: 6, lg: 8, xl: 10 }}
            zIndex={2}
            position="relative"
            maxW="1200px"
            mx="auto"
          >
            {data.jobs?.map((job, index) => {
              if (index >= 3) return null;

              return <WhatWeDoCard key={job.id} job={job} />;
            })}
          </Stack>
        </Box>

        <Box px={{ base: 16, md: 0 }}>
          <Center>
            <Button
              asChild
              className="cta-button"
              bg="brand.bg.black"
              rounded="full"
              fontFamily="heading"
              fontWeight="normal"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              px={{ base: 10, sm: 12, md: 12, lg: 16 }}
              py={{ base: 5, md: 6 }}
              w={{ base: "full", sm: "auto" }}
              minW={{ sm: "200px" }}
            >
              <Link href="/what-we-do">Lihat Selengkapnya</Link>
            </Button>
          </Center>
        </Box>
      </Box>

      <Bird
        facing="left"
        variant="Green"
        w="10%"
        h="auto"
        position="absolute"
        right="15rem"
        display={{ base: "none", md: "block" }}
      />
    </Box>
  );
}
