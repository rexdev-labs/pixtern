"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileCard from "../cards/ProfileCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProfileSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.set(".title", { opacity: 0, y: 50 });
    gsap.set(".profile-card-right", { opacity: 0, x: 50, scale: 0.9 });
    gsap.set(".profile-card-left", { opacity: 0, x: -50, scale: 0.9 });
    gsap.set(".text-section-left", { opacity: 0, x: -50 });
    gsap.set(".text-section-right", { opacity: 0, x: 50 });
    gsap.set(".bird-up", { opacity: 1 });
    gsap.set(".bird-down", { opacity: 0 });
    gsap.set(".bird-container", { opacity: 0, x: -50, scale: 0.8 });

    const birdTimeline = gsap.timeline({ repeat: -1 });

    birdTimeline
      .to(".bird-up", {
        opacity: 0,
        duration: 0.4,
        ease: "sine.inOut",
      })
      .to(
        ".bird-down",
        {
          opacity: 1,
          duration: 0.4,
          ease: "sine.inOut",
        },
        "<"
      )
      .to(".bird-up", {
        opacity: 1,
        duration: 0.4,
        ease: "sine.inOut",
      })
      .to(
        ".bird-down",
        {
          opacity: 0,
          duration: 0.4,
          ease: "sine.inOut",
        },
        "<"
      );

    gsap.to(".bird-container", {
      x: 0,
      duration: 3,
      ease: "sine.inOut",
    });

    ScrollTrigger.create({
      trigger: ".bird-container",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
      animation: gsap.to(".bird-container", {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 2,
        ease: "power2.out",
      }),
    });

    ScrollTrigger.create({
      trigger: ".title",
      start: "top 85%",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
      animation: gsap.to(".title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out",
      }),
    });

    ScrollTrigger.create({
      trigger: ".profile-card-right",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      animation: gsap.to(".profile-card-right", {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: {
          amount: 0.8,
          from: "start",
        },
        ease: "back.out",
      }),
    });

    ScrollTrigger.create({
      trigger: ".profile-card-left",
      start: "top 85%",
      toggleActions: "play reverse play reverse",
      animation: gsap.to(".profile-card-left", {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: function (index) {
          const customOrder = [2, 1, 0, 4, 3];
          const position = customOrder.indexOf(index);
          return position * (0.8 / 4);
        },
        ease: "back.out",
      }),
    });

    ScrollTrigger.create({
      trigger: ".text-section-left",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
      animation: gsap.to(".text-section-left", {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "back.out",
      }),
    });

    ScrollTrigger.create({
      trigger: ".text-section-right",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
      animation: gsap.to(".text-section-right", {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "back.out",
      }),
    });

    gsap.to(".ballon", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".cloud1", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".cloud2", {
      y: 10,
      x: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const data = [
    {
      name: "Jelita",
      charImage: "/images/char/lita.png",
      realImage: "/images/char/litaReal.jpg",
      bg: "brand.bg.blue.cyan",
    },
    {
      name: "Rexsi",
      charImage: "/images/char/rexsi.png",
      realImage: "/images/char/rexsiReal.jpg",
      bg: "brand.bg.blue.primary",
    },
    {
      name: "Sheva",
      charImage: "/images/char/sheva.png",
      realImage: "/images/char/shevaReal.jpg",
      bg: "brand.bg.green.emelard",
    },
    {
      name: "Firman",
      charImage: "/images/char/firman.png",
      realImage: "/images/char/firmanReal.jpg",
      bg: "brand.bg.purple",
    },
    {
      name: "Raihan",
      charImage: "/images/char/raihan.png",
      realImage: "/images/char/raihanReal.jpg",
      bg: "brand.bg.green.lime",
    },
  ];

  const intern = [
    {
      name: "Tio",
      charImage: "/images/char/tio.png",
      realImage: "/images/char/tioReal.png",
      bg: "brand.bg.blue.cyan",
    },
    {
      name: "Nova",
      charImage: "/images/char/nova.png",
      realImage: "/images/char/novaReal.png",
      bg: "brand.bg.green.softLime",
    },
    {
      name: "Arya",
      charImage: "/images/char/arya.png",
      realImage: "/images/char/aryaReal.jpg",
      bg: "brand.bg.green.lightAqua",
    },
    {
      name: "Farel",
      charImage: "/images/char/farel.png",
      realImage: "/images/char/farelReal.jpg",
      bg: "brand.bg.green.mint",
    },
    {
      name: "Nabil",
      charImage: "/images/char/nabil.png",
      realImage: "/images/char/nabilReal.jpg",
      bg: "brand.bg.yellow.bright",
    },
  ];

  return (
    <Box ref={containerRef}>
      <Center my={{ base: "10", md: "20" }}>
        <Flex gap={2} className="title">
          <Heading
            fontFamily="bestime"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="light"
            color="brand.text.black"
          >
            Who
          </Heading>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Heading
              fontFamily="bestime"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              color="brand.text.blue"
              fontWeight="light"
            >
              We Are?
            </Heading>
            <Image
              src="/images/bg/underline-profile.png"
              w={{ base: "28", md: "40" }}
              mt={{ base: "-1.5", md: "0" }}
              alt="underline"
              zIndex={2}
            />
          </Box>
        </Flex>
      </Center>

      <VStack gap={{ base: 16, md: 24, lg: 32 }}>
        <Flex
          gap={{ base: 4, md: 12, lg: 20 }}
          align="center"
          mx={{ base: "4", md: "20", lg: "20" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Box
            flex="1"
            maxW={{ base: "full", lg: "2/5" }}
            position="relative"
            order={{ base: 2, lg: 1 }}
          >
            <Box
              className="bird-container"
              position="absolute"
              top={{ md: "-220%", lg: "-65%" }}
              left={{ md: "0", lg: "10%" }}
              display={{ base: "none", md: "block" }}
              w={{ base: "16", md: "28", lg: "32" }}
              h={{ base: "16", md: "28", lg: "32" }}
            >
              <Image
                className="bird-up"
                src="/images/float/bird-profile-wing-up.png"
                w={{ base: "16", md: "20", lg: "24" }}
                h={{ base: "16", md: "20", lg: "24" }}
                position="absolute"
                top="0"
                left="0"
                alt="bird-wing-up"
                objectFit="contain"
              />
              <Image
                className="bird-down"
                src="/images/float/bird-profile-wing-down.png"
                w={{ base: "16", md: "20", lg: "24" }}
                h={{ base: "16", md: "20", lg: "24" }}
                position="absolute"
                top="0"
                left="0"
                alt="bird-wing-down"
                objectFit="contain"
              />
            </Box>

            <VStack
              className="text-section-left"
              align={{ base: "center", lg: "flex-start" }}
              gap={6}
              justify="center"
              minH="100%"
              mt={6}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading
                fontFamily="bestime"
                fontWeight="light"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                lineHeight={1}
                color="brand.text.black"
                maxW={{ base: "full", md: "70%", xl: "full" }}
              >
                <Text as="span" color="brand.text.blue">
                  What is
                </Text>{" "}
                PIXEL SPACE CREATIVE DIGITAL?
              </Heading>
              <Text
                fontSize={{ base: "xs", md: "md" }}
                lineHeight="1.6"
                color="brand.text.gray"
                fontFamily="Inter"
                maxW={{ base: "full", lg: "none" }}
                mx={{ base: "6", lg: "0" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Text>
            </VStack>
          </Box>

          <Flex flex="1" justify="center" order={{ base: 1, lg: 2 }}>
            <VStack gap={{ base: 4, md: 6 }}>
              <HStack
                gap={{ base: 3, md: 4, lg: 6 }}
                flexWrap={{ base: "wrap", sm: "nowrap" }}
                justify="center"
              >
                {data.slice(0, 2).map((character, index) => (
                  <ProfileCard
                    key={index}
                    name={character.name}
                    charImage={character.charImage}
                    realImage={character.realImage}
                    bg={character.bg}
                    className="profile-card-right"
                  />
                ))}
              </HStack>
              <HStack
                gap={{ base: 3, md: 4, lg: 6 }}
                flexWrap={{ base: "wrap", md: "nowrap" }}
                justify="center"
              >
                {data.slice(2, 5).map((character, index) => (
                  <ProfileCard
                    key={index}
                    name={character.name}
                    charImage={character.charImage}
                    realImage={character.realImage}
                    bg={character.bg}
                    className="profile-card-right"
                  />
                ))}
              </HStack>
            </VStack>
          </Flex>
        </Flex>

        <Flex
          gap={{ base: 8, md: 16, lg: 20 }}
          align="center"
          mx={{ base: "4", md: "20", lg: "20" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex flex="1" justify="center" order={{ base: 1, lg: 1 }}>
            <VStack gap={{ base: 4, md: 6 }}>
              <HStack
                gap={{ base: 3, md: 4, lg: 6 }}
                flexWrap={{ base: "wrap", md: "nowrap" }}
                justify="center"
              >
                {intern.slice(0, 3).map((character, index) => (
                  <ProfileCard
                    key={index}
                    name={character.name}
                    charImage={character.charImage}
                    realImage={character.realImage}
                    bg={character.bg}
                    className="profile-card-left"
                  />
                ))}
              </HStack>
              <HStack
                gap={{ base: 3, md: 4, lg: 6 }}
                flexWrap={{ base: "wrap", sm: "nowrap" }}
                justify="center"
              >
                {intern.slice(3, 5).map((character, index) => (
                  <ProfileCard
                    key={index}
                    name={character.name}
                    charImage={character.charImage}
                    realImage={character.realImage}
                    bg={character.bg}
                    className="profile-card-left"
                  />
                ))}
              </HStack>
            </VStack>
          </Flex>

          <VStack
            className="text-section-right"
            textAlign={{ base: "center", lg: "end" }}
            flex="1"
            gap={6}
            maxW={{ base: "full", lg: "2/5" }}
            align={{ base: "center", lg: "flex-end" }}
            mb={6}
            order={{ base: 2, lg: 2 }}
          >
            <Heading
              fontFamily="bestime"
              fontWeight="light"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              lineHeight={1}
              color="brand.text.black"
              maxW={{ base: "full", md: "70%", xl: "full" }}
            >
              <Text as="span" color="brand.text.orange">
                What is
              </Text>{" "}
              PIXEL SPACE CREATIVE DIGITAL?
            </Heading>
            <Text
              fontSize={{ base: "xs", md: "md" }}
              lineHeight="1.6"
              color="brand.text.gray"
              fontFamily="Inter"
              maxW={{ base: "full", lg: "none" }}
              mx={{ base: "6", lg: "0" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </VStack>
        </Flex>
      </VStack>

      <Flex
        justifyContent="space-between"
        alignItems="end"
        px={{ base: "4", md: "10", lg: "20" }}
        mt={{ base: 8, md: 12, lg: 16 }}
      >
        <Box ms={{ base: "14", md: "20", lg: 36 }}>
          <Image
            className="cloud2"
            src="/images/cloud/cloud2-profile.png"
            objectFit="cover"
            overflow="visible"
            w={{ base: "16", md: "20", lg: "24" }}
            alt="cloud2"
          />
        </Box>

        <Box
          position="relative"
          w={{ base: "32", md: "40", lg: "48" }}
          h={{ base: "32", md: "40", lg: "48" }}
        >
          <Image
            className="ballon"
            src="/images/float/ballon-profile.png"
            w={{ base: "32", md: "40", lg: "48" }}
            alt="ballon"
            position="absolute"
            bottom="-4"
            left="50%"
            transform="translateX(-50%)"
            zIndex="1"
          />

          <Image
            className="cloud1"
            src="/images/cloud/cloud1-profile.png"
            w={{ base: "28", md: "32", lg: "40" }}
            alt="cloud1"
            position="absolute"
            right={{ base: "12", md: "14", lg: "16" }}
            bottom={{ base: "-10", md: "-10", lg: "-12" }}
            zIndex="2"
          />
        </Box>
      </Flex>
    </Box>
  );
}
