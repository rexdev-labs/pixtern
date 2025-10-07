"use client";
import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { splitTextFirst } from "@/utils/splitText";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import type { WhatWeDoSection } from "@/types/api/homepage/whatWeDoSection";

export default function DoSection({
  data,
}: Readonly<{ data: WhatWeDoSection }>) {
  const sectionRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef(null);
  const birdRef = useRef(null);
<<<<<<< Updated upstream
  const [splitFirst, rest] = splitTextFirst("What We Do?");

  useGSAP(
    () => {
=======
  const [splitFirst, rest] = splitTextFirst(data.section.title);

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const descSplit = new SplitText(descRef.current, {
          type: "lines,words",
        });

        gsap.from(descSplit.words, {
          opacity: 0,
          y: 20,
          stagger: 0.01,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

>>>>>>> Stashed changes
      ScrollTrigger.create({
        trigger: ".title-whatwedo",
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
        onEnter: () => {
          gsap
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
            );
        },
      });

      if (birdRef.current) {
        gsap.from(birdRef.current, {
          opacity: 0,
          x: -100,
          rotation: -45,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: birdRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });

        gsap.to(birdRef.current, {
          y: -15,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      cardsRef.current.forEach((card, index) => {
        if (card) {
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
        }
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <Box
      id="DoSection"
      ref={sectionRef}
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
            <Box
              ref={birdRef}
              position="absolute"
              bottom={{ base: "5%", sm: "10%", md: "60%" }}
              left={{ base: "5%", sm: "8%", md: "8%" }}
            >
              <Image
                src="/images/float/birdDo.png"
                alt="Bird"
                w={{
                  base: 10,
                  sm: 12,
                  md: 16,
                  lg: 20,
                  xl: 24,
                }}
                h="auto"
                display={{ base: "none", md: "flex" }}
              />
            </Box>

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
                ref={descRef}
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box
        my={{ base: 8, md: 12, lg: 14 }}
        position="relative"
        px={{ base: 10, sm: 24, md: 8, lg: 12 }}
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
          {data.jobs.map((item, index) => {
            if (index >= 3) return null;

            return (
              <Card.Root
                key={item.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                rounded={{ base: "lg", md: "xl" }}
                borderWidth={{ base: 2, md: 3 }}
                borderColor="brand.bg.black"
                width={{
                  base: "100%",
                  md: "calc(33.333% - 1rem)",
                  lg: "360px",
                }}
                minH={{
                  base: "auto",
                  md: "340px",
                  lg: "420px",
                  xl: "460px",
                }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                bg="white"
                style={{
                  filter: "drop-shadow(0 0 18px rgba(15, 91, 118, 0.2))",
                }}
              >
                <Card.Body
                  alignItems="center"
                  textAlign="center"
                  flex="1"
                  p={{ base: 4, md: 5, lg: 6 }}
                >
                  <Box
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    gap={{ base: 3, md: 4, lg: 5 }}
                    mt={1}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.illustration.url}`}
                      alt={item.title}
                      w={{
                        base: "75%",
                        md: "80%",
                        lg: "85%",
                      }}
                      maxW="300px"
                      mx="auto"
                      display="block"
                      objectFit="contain"
                    />
                    <Card.Title
                      fontFamily="Inter"
                      fontWeight="extrabold"
                      fontSize={{
                        base: "lg",
                        sm: "xl",
                        md: "lg",
                        lg: "2xl",
                        xl: "3xl",
                      }}
                      lineHeight="shorter"
                      textAlign="center"
                      mt={1}
                    >
                      {item.title}
                    </Card.Title>

                    <Card.Description
                      fontFamily="Inter"
                      fontWeight="normal"
                      fontSize={{
                        base: "2xs",
                        sm: "xs",
                        md: "2xs",
                        lg: "xs",
                        xl: "xs",
                      }}
                      lineHeight="short"
                      textAlign="center"
                      px={{
                        base: 6,
                        sm: 4,
                        md: 6,
                        lg: 8,
                      }}
                      mt={1}
                      color="gray.600"
                    >
                      {item.description}
                    </Card.Description>
                  </Box>
                </Card.Body>
              </Card.Root>
            );
          })}
        </Stack>
      </Box>

      <Box px={{ base: 16, md: 0 }}>
        <Center>
          <Button
            ref={buttonRef}
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
            Lihat Selengkapnya
          </Button>
        </Center>
      </Box>
    </Box>
  );
}
