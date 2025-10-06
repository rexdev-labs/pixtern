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
import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { splitTextFirst, splitTextTwo } from "@/utils/splitText";
import ProfileCard from "../cards/ProfileCard";
import gsap from "gsap";

import type { ProfileSection } from "@/types/api/homepage/profileSection";

export default function ProfileSection({
  data,
}: Readonly<{ data: ProfileSection }>) {
  const containerRef = useRef(null);

  const [splitFirst, rest] = useMemo(
    () => splitTextFirst(data.title ?? ""),
    [data.title]
  );

  const [splitTeam, restTeam] = splitTextTwo(
    data.teamSection.section.title ?? ""
  );
  const [splitIntern, restIntern] = splitTextTwo(
    data.internSection.section.title ?? ""
  );

  useGSAP(
    () => {
      gsap.set(".scramble-who", { text: "" });
      gsap.set(".scramble-we-are", { text: "" });
      gsap.set(".profile-card-right", { opacity: 0, x: 20, scale: 0.9 });
      gsap.set(".profile-card-left", { opacity: 0, x: -20, scale: 0.9 });
      gsap.set(".underline-profile", { opacity: 0, y: 50 });

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
              text: splitFirst,
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
                text: rest,
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ?",
                revealDelay: 0.5,
                speed: 0.4,
              },
            },
            "-=0.8"
          )
          .to(
            ".underline-profile",
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "sine.out",
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

      document.fonts.ready.then(() => {
        const teamSectionText = new SplitText(
          ".text-section-left .split-paragraph",
          {
            type: "lines",
          }
        );

        gsap.set(teamSectionText.lines, { opacity: 0, y: 20 });

        ScrollTrigger.create({
          trigger: ".text-section-left",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
          animation: gsap
            .timeline()
            .to(".heading-left", {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "back.out(1.2)",
            })
            .to(
              teamSectionText.lines,
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

        const internSectionText = new SplitText(
          ".text-section-right .split-paragraph",
          {
            type: "lines",
          }
        );

        gsap.set(internSectionText.lines, { opacity: 0, y: 20 });

        ScrollTrigger.create({
          trigger: ".text-section-right",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
          animation: gsap
            .timeline()
            .to(".heading-right", {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "back.out(1.2)",
            })
            .to(
              internSectionText.lines,
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
      });

      gsap.set(".heading-left", { opacity: 0, y: 20 });
      gsap.set(".heading-right", { opacity: 0, y: 20 });

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
    },
    {
      scope: containerRef,
    }
  );

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
            {splitFirst}
          </Heading>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Heading
              className="scramble-we-are"
              fontFamily="bestime"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              color="brand.text.blue"
              fontWeight="light"
            >
              {rest}
            </Heading>
            <Image
              className="underline-profile"
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
                className="heading-left"
                fontFamily="bestime"
                fontWeight="light"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                lineHeight={1}
                color="brand.text.black"
                maxW={{ base: "full", md: "70%", xl: "full" }}
              >
                <Text as="span" color="brand.text.blue">
                  {splitTeam}
                </Text>{" "}
                <Text as="span"> {restTeam}</Text>
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
                {data.teamSection.section.description}
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
                {data.teamSection.teams.slice(0, 2).map((character) => (
                  <ProfileCard
                    key={character.id}
                    name={character.name}
                    charImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.avatarImage.url}`}
                    realImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.profileImage.url}`}
                    bg={character.backgroundColor}
                    bgImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.profileBackground.url}`}
                    className="profile-card-right"
                  />
                ))}
              </HStack>
              <HStack
                gap={{ base: 3, md: 4, lg: 6 }}
                flexWrap={{ base: "wrap", md: "nowrap" }}
                justify="center"
              >
                {data.teamSection.teams.slice(2, 5).map((character) => (
                  <ProfileCard
                    key={character.id}
                    name={character.name}
                    charImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.avatarImage.url}`}
                    realImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.profileImage.url}`}
                    bg={character.backgroundColor}
                    bgImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.profileBackground.url}`}
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
                {data.internSection.interns.slice(0, 3).map((character) => (
                  <ProfileCard
                    key={character.id}
                    name={character.name}
                    charImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.avatarImage.url}`}
                    realImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.profileImage.url}`}
                    bg={character.backgroundColor}
                    bgImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.profileBackground.url}`}
                    className="profile-card-left"
                  />
                ))}
              </HStack>
              <HStack
                gap={{ base: 3, md: 4, lg: 6 }}
                flexWrap={{ base: "wrap", sm: "nowrap" }}
                justify="center"
              >
                {data.internSection.interns.slice(3, 5).map((character) => (
                  <ProfileCard
                    key={character.id}
                    name={character.name}
                    charImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.avatarImage.url}`}
                    realImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.profileImage.url}`}
                    bg={character.backgroundColor}
                    bgImage={`${process.env.NEXT_PUBLIC_BASE_URL}${character.profileBackground.url}`}
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
              className="heading-right"
              fontFamily="bestime"
              fontWeight="light"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              lineHeight={1}
              color="brand.text.black"
              maxW={{ base: "full", md: "70%", xl: "full" }}
            >
              <Text as="span" color="brand.text.orange">
                {splitIntern}
              </Text>{" "}
              {restIntern}
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
              {data.internSection.section.description}
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
