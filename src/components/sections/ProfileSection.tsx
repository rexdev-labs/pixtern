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
import ProfileCard from "../cards/ProfileCard";
import { ScrollTrigger, ScrambleTextPlugin, SplitText } from "gsap/all";
import { TeamSection } from "@/types/profileSection";
import { InternSection } from "@/types/profileSection";
import useFetch from "@/hooks/useFetch";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

export default function ProfileSection() {
  const containerRef = useRef(null);
  const { data: dataTeam } = useFetch<TeamSection>(
    "/homepage?populate[profileSection][populate][teamSection][populate][section][populate]=*&populate[profileSection][populate][teamSection][populate][teams][populate]=*"
  );
  const { data: dataIntern } = useFetch<InternSection>(
    "/homepage?populate[profileSection][populate][internSection][populate][section][populate]=*&populate[profileSection][populate][internSection][populate][interns][populate]=*"
  );

  const teamSection = dataTeam?.data.profileSection.teamSection.section;

  const teams =
    dataTeam?.data.profileSection.teamSection.teams.map((t) => ({
      name: t.name,
      charImage: `${process.env.NEXT_PUBLIC_BASE_URL}${t.avatarImage.url}`,
      realImage: `${process.env.NEXT_PUBLIC_BASE_URL}${t.profileImage.url}`,
      bg: t.backgroundColor,
      bgImage: `${process.env.NEXT_PUBLIC_BASE_URL}${t.profileBackground.url}`,
    })) ?? [];

  const internSection = dataIntern?.data.profileSection.internSection.section;

  const interns =
    dataIntern?.data.profileSection.internSection.interns.map((t) => ({
      name: t.name,
      charImage: `${process.env.NEXT_PUBLIC_BASE_URL}${t.avatarImage.url}`,
      realImage: `${process.env.NEXT_PUBLIC_BASE_URL}${t.profileImage.url}`,
      bg: t.backgroundColor,
      bgImage: `${process.env.NEXT_PUBLIC_BASE_URL}${t.profileBackground.url}`,
    })) ?? [];

  useGSAP(() => {
    gsap.set(".scramble-who", { text: "" });
    gsap.set(".scramble-we-are", { text: "" });
    gsap.set(".profile-card-right", { opacity: 0, x: 20, scale: 0.9 });
    gsap.set(".profile-card-left", { opacity: 0, x: -20, scale: 0.9 });

    ScrollTrigger.create({
      trigger: ".title-profile",
      start: "top 85%",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
      animation: gsap
        .timeline()
        .to(".scramble-who", {
          duration: 1.2,
          scrambleText: {
            text: "Who",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            revealDelay: 0.5,
            speed: 0.4,
          },
        })
        .to(
          ".scramble-we-are",
          {
            duration: 1.5,
            scrambleText: {
              text: "We Are?",
              chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ?",
              revealDelay: 0.5,
              speed: 0.4,
            },
          },
          "-=0.8"
        ),
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

    const splitLeft = new SplitText(".text-section-left .split-heading", {
      type: "words,chars",
    });
    const splitLeftPara = new SplitText(".text-section-left .split-paragraph", {
      type: "lines",
    });

    gsap.set(splitLeft.chars, { opacity: 0, y: 20 });
    gsap.set(splitLeftPara.lines, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: ".text-section-left",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
      animation: gsap
        .timeline()
        .to(splitLeft.chars, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.02,
          ease: "back.out(1.2)",
        })
        .to(
          splitLeftPara.lines,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        ),
    });

    const splitRight = new SplitText(".text-section-right .split-heading", {
      type: "words,chars",
    });
    const splitRightPara = new SplitText(
      ".text-section-right .split-paragraph",
      {
        type: "lines",
      }
    );

    gsap.set(splitRight.chars, { opacity: 0, y: 20 });
    gsap.set(splitRightPara.lines, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: ".text-section-right",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
      animation: gsap
        .timeline()
        .to(splitRight.chars, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.02,
          ease: "back.out(1.2)",
        })
        .to(
          splitRightPara.lines,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        ),
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

  return (
    <Box ref={containerRef}>
      <Center my={{ base: "10", md: "20" }} className="title-profile">
        <Flex gap={2} className="title">
          <Heading
            className="scramble-who"
            fontFamily="bestime"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="light"
            color="brand.text.black"
          >
            Who
          </Heading>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Heading
              className="scramble-we-are"
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
          id="profil"
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
                className="split-heading"
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
                className="split-paragraph"
                fontSize={{ base: "xs", md: "md" }}
                lineHeight="1.6"
                color="brand.text.gray"
                fontFamily="Inter"
                maxW={{ base: "full", lg: "none" }}
                mx={{ base: "6", lg: "0" }}
              >
                {teamSection?.description}
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
                {teams.slice(0, 2).map((character, index) => (
                  <ProfileCard
                    key={index}
                    name={character.name}
                    charImage={character.charImage}
                    realImage={character.realImage}
                    bg={character.bg}
                    bgImage={character.bgImage}
                    className="profile-card-right"
                  />
                ))}
              </HStack>
              <HStack
                gap={{ base: 3, md: 4, lg: 6 }}
                flexWrap={{ base: "wrap", md: "nowrap" }}
                justify="center"
              >
                {teams.slice(2, 5).map((character, index) => (
                  <ProfileCard
                    key={index}
                    name={character.name}
                    charImage={character.charImage}
                    realImage={character.realImage}
                    bg={character.bg}
                    bgImage={character.bgImage}
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
                {interns.slice(0, 3).map((character, index) => (
                  <ProfileCard
                    key={index}
                    name={character.name}
                    charImage={character.charImage}
                    realImage={character.realImage}
                    bg={character.bg}
                    bgImage={character.bgImage}
                    className="profile-card-left"
                  />
                ))}
              </HStack>
              <HStack
                gap={{ base: 3, md: 4, lg: 6 }}
                flexWrap={{ base: "wrap", sm: "nowrap" }}
                justify="center"
              >
                {interns.slice(3, 5).map((character, index) => (
                  <ProfileCard
                    key={index}
                    name={character.name}
                    charImage={character.charImage}
                    realImage={character.realImage}
                    bg={character.bg}
                    bgImage={character.bgImage}
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
              className="split-heading"
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
              className="split-paragraph"
              fontSize={{ base: "xs", md: "md" }}
              lineHeight="1.6"
              color="brand.text.gray"
              fontFamily="Inter"
              maxW={{ base: "full", lg: "none" }}
              mx={{ base: "6", lg: "0" }}
            >
              {internSection?.description}
            </Text>
          </VStack>
        </Flex>
      </VStack>

      <Flex
        justifyContent="space-between"
        alignItems="end"
        px={{ base: "4", md: "10", lg: "20" }}
        mt={{ base: "4", md: "10", lg: "20" }}
      >
        <Box ms={{ base: "14", md: "20", lg: "24" }}>
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
