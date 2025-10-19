"use client";

import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { splitTextTwo } from "@/utils/splitText";
import { Image } from "@/components/Image";
import Bird from "@/components/Bird";
import PersonCard from "@/components/cards/PersonCard";
import Title from "@/components/text/section/Title";
import gsap from "gsap";

import type { ProfileSection } from "@/types/api/homepage/profileSection";
import type { Team } from "@/types/api/person/team";
import type { Intern } from "@/types/api/person/intern";
import type { Section } from "@/types/api/section";

function Section({
  section,
  data,
  personType,
  flipPosition = false,
}: {
  section: Section;
  data: Team[] | Intern[];
  personType: "teams" | "interns",
  flipPosition?: boolean;
}) {
  const sectionContainerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionTitleRef = useRef<HTMLDivElement | null>(null);
  const sectionDescriptionRef = useRef<HTMLDivElement | null>(null);

  const [firstText, restText] = useMemo(
    () => splitTextTwo(section.title),
    [section.title]
  );

  const chunks = useMemo(
    () =>
      data.reduce<Team[][] | Intern[][]>(
        (acc, _, i, array) => (i % 3 ? acc : [...acc, array.slice(i, i + 3)]),
        []
      ),
    [data]
  );

  useGSAP(
    (context, contextSafe) => {
      const selector = gsap.utils.selector(sectionContainerRef);

      gsap.set(selector(".person-cards"), { opacity: 0, x: 20, scale: 0.9 });

      ScrollTrigger.create({
        trigger: selector(".person-cards"),
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(selector(".person-cards"), {
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

      document.fonts.ready.then(
        contextSafe!(() => {
          const sectionDescription = new SplitText(
            sectionDescriptionRef.current,
            {
              type: "lines",
            }
          );

          gsap.set(sectionDescription.lines, { opacity: 0, y: 20 });

          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            animation: gsap
              .timeline()
              .to(sectionTitleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.2)",
              })
              .to(
                sectionDescription.lines,
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
        })
      );

      gsap.set(sectionTitleRef.current, { opacity: 0, y: 20 });
    },
    { scope: sectionContainerRef }
  );

  return (
    <Flex
      gap={{ base: 8, md: 16, lg: 20 }}
      align="center"
      mx={{ base: "4", md: "20", lg: "20" }}
      direction={{
        base: "column",
        lg: flipPosition ? "row-reverse" : "row",
      }}
      ref={sectionContainerRef}
    >
      <Flex flex="1" justify="center" order={{ base: 1, lg: 1 }}>
        <VStack gap={{ base: 4, md: 6 }}>
          {chunks.map((persons, index) => (
            <HStack
              key={index}
              gap={{ base: 3, md: 4, lg: 6 }}
              flexWrap={{ base: "wrap", md: "nowrap" }}
              justify="center"
            >
              {persons.map((person) => (
                <PersonCard
                  key={person.id}
                  href={`${personType}/${person.slug}`}
                  name={person.name}
                  backgroundColor={person.detail!.backgroundColor}
                  avatarImage={person.detail!.avatarImage}
                  personImage={person.detail!.personImage}
                  backgroundImage={person.detail!.backgroundImage}
                  className="person-cards"
                />
              ))}
            </HStack>
          ))}
        </VStack>
      </Flex>

      <VStack
        ref={sectionRef}
        textAlign={{ base: "center", lg: "end" }}
        flex="1"
        gap={6}
        maxW={{ base: "full", lg: "2/5" }}
        align={{ base: "center", lg: "flex-end" }}
        mb={6}
        order={{ base: 2, lg: 2 }}
      >
        <Heading
          ref={sectionTitleRef}
          fontFamily="bestime"
          fontWeight="light"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          lineHeight={1}
          color="brand.text.black"
          maxW={{ base: "full", md: "70%", xl: "full" }}
        >
          <Text as="span" color="brand.text.orange">
            {firstText}
          </Text>{" "}
          {restText}
        </Heading>
        <Text
          ref={sectionDescriptionRef}
          fontSize={{ base: "xs", md: "md" }}
          lineHeight="1.6"
          color="brand.text.gray"
          fontFamily="Inter"
          maxW={{ base: "full", lg: "none" }}
          mx={{ base: "6", lg: "0" }}
        >
          {section.description}
        </Text>
      </VStack>
    </Flex>
  );
}

export default function ProfileSection({
  data,
}: Readonly<{ data: ProfileSection }>) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".container-ballon", { opacity: 0, x: 20 });
      gsap.set(".cloud", { opacity: 0, x: -20 });

      ScrollTrigger.create({
        trigger: ".container-ballon",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".container-ballon", {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(".container-ballon", {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
      });

      ScrollTrigger.create({
        trigger: ".cloud",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".cloud", {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(".cloud", {
            y: 10,
            x: -15,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Box ref={containerRef} id="profil">
      <Center my={{ base: "10", md: "20" }}>
        <Title text={data.title} variant="single" color="brand.text.blue" />
      </Center>

      <VStack gap={{ base: 16, md: 24, lg: 32 }} position="relative">
        <Bird
          facing="right"
          w={{ base: "16", md: "20", lg: "24" }}
          h={{ base: "16", md: "20", lg: "24" }}
          position="absolute"
          objectFit="contain"
          left="20%"
          tweenVars={{ xPercent: -50, left: "20%" }}
          display={{ base: "none", md: "block" }}
        />

        <Section
          section={data.teamSection.section}
          data={data.teamSection.teams}
          flipPosition={true}
          personType="teams"
        />

        <Section
          section={data.internSection.section}
          data={data.internSection.interns}
          personType="interns"
        />
      </VStack>

      <Flex
        justifyContent="space-between"
        alignItems="end"
        px={{ base: "4", md: "10", lg: "20" }}
        mt={{ base: "4", md: "10", lg: "20" }}
      >
        <Box ms={{ base: "14", md: "20", lg: "24" }} className="cloud">
          <Image
            src="/images/cloud/cloud2-profile.png"
            objectFit="cover"
            overflow="visible"
            w={{ base: "16", md: "20", lg: "24" }}
            alt="cloud2"
          />
        </Box>

        <Box
          className="container-ballon"
          position="relative"
          w={{ base: "32", md: "40", lg: "48" }}
          h={{ base: "32", md: "40", lg: "48" }}
        >
          <Image
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
