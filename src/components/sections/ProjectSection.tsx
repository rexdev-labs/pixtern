"use client";

import { splitTextFirst } from "@/utils/splitText";
import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMemo, useRef } from "react";
import gsap from "gsap";

import type { ProjectSection } from "@/types/api/homepage/projectSection";

export default function ProjectSection({
  data,
}: Readonly<{ data: ProjectSection }>) {
  const containerRef = useRef(null);

  const [splitFirst, rest] = useMemo(
    () => splitTextFirst(data.section.title ?? ""),
    [data.section.title]
  );

  const projects =
    data.projects.map((t) => ({
      title: t.title,
      description: t.description,
      preview: `${process.env.NEXT_PUBLIC_BASE_URL}${t.preview.url}`,
    })) ?? [];

  useGSAP(
    () => {
      gsap.set(".scramble-our", { text: "" });
      gsap.set(".scramble-project", { text: "" });
      gsap.set(".subtitle-project-main", { opacity: 0, y: 50 });
      gsap.set(".underline-project", { opacity: 0, y: 50 });
      gsap.set(".card-project-main", { opacity: 0, x: -50, scale: 0.9 });
      gsap.set(".card-list", { opacity: 0, y: -50, scale: 0.9 });
      gsap.set(".star-project", { opacity: 0, scale: 0.9 });
      gsap.set(".button-project", { opacity: 0, scale: 0.9 });

      ScrollTrigger.create({
        trigger: ".title-project",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".scramble-our", {
            duration: 1.2,
            scrambleText: {
              text: splitFirst,
              chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
              revealDelay: 0.5,
              speed: 0.4,
            },
          })
          .to(
            ".scramble-project",
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
            ".underline-project",
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "sine.out",
            },
            "-=0.8"
          ),
      });

      const splitDesc = new SplitText(".text-desc .split-paragraph", {
        type: "lines",
      });

      gsap.set(splitDesc.lines, { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: ".text-desc",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(splitDesc.lines, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }),
      });

      ScrollTrigger.create({
        trigger: ".subtitle-project-year",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".subtitle-project-year", {
          duration: 1.5,
          scrambleText: {
            text: "2025",
            chars: "1234567890",
            revealDelay: 0.5,
            speed: 0.4,
          },
        }),
      });

      ScrollTrigger.create({
        trigger: ".subtitle-project-main",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
        animation: gsap.to(".subtitle-project-main", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "sine.out",
        }),
      });

      ScrollTrigger.create({
        trigger: ".card-project-main",
        start: "top 85%",
        endTrigger: ".button-project",
        toggleActions: "play reverse play reverse",
        animation: gsap
          .timeline()
          .to(".card-project-main", {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "sine.out",
          })
          .to(
            ".card-list",
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "sine.out",
              stagger: 0.2,
            },
            "-=0.3"
          )
          .to(
            ".star-project",
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "sine.out",
            },
            "-=0.3"
          )
          .to(
            ".button-project",
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "sine.out",
            },
            "-=0.3"
          ),
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Box py="10" ref={containerRef} id="project">
      <Center mt={{ base: "10", md: "20" }} mb="10" className="title-project">
        <Flex gap={4}>
          <Heading
            className="scramble-our"
            fontFamily="bestime"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="light"
            color="brand.text.black"
          >
            {splitFirst}
          </Heading>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Heading
              className="scramble-project"
              fontFamily="bestime"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              color="brand.text.green"
              fontWeight="light"
            >
              {rest}
            </Heading>
            <Image
              className="underline-project"
              src="/images/bg/underline-project.png"
              w={{ base: "36", md: "52", lg: "60" }}
              mt={{ base: "-1.5", md: "-1", lg: "0" }}
              ml={{ base: "-9", md: "-12", lg: "-16" }}
              alt="underline"
              zIndex={2}
            />
          </Box>
        </Flex>
      </Center>

      <Center className="text-desc">
        <Text
          className="split-paragraph"
          w={{ base: "3/4", md: "2/3", lg: "1/2" }}
          textAlign="center"
          fontFamily="inter"
          fontSize="sm"
          px="2"
        >
          {data.section.description}
        </Text>
      </Center>

      <Box
        px={{ base: "4", md: "8" }}
        pt="12"
        pb="10"
        bg="brand.bg.blue.aqua"
        mx={{ base: "5", md: "16" }}
        my="8"
        rounded="xl"
        border="2px solid"
        borderColor="brand.text.black"
        position="relative"
        overflow="visible"
        boxShadow="0px 0px 18px rgba(78, 116, 119, 0.25)"
      >
        <Box mb="6">
          <Text
            className="subtitle-project-year"
            fontFamily="inter"
            color="brand.text.black"
            fontWeight="semibold"
            mb="2"
          >
            2025
          </Text>
          <Heading
            className="subtitle-project-main"
            fontFamily="inter"
            color="brand.text.black"
            fontSize="3xl"
            fontWeight="bold"
          >
            Lorem Ipsum
          </Heading>
        </Box>

        <Flex
          direction={{ base: "column", md: "column", lg: "row" }}
          gap={{ base: 6, md: 8 }}
        >
          {projects.slice(0, 1).map((project, index) => (
            <Box
              key={index}
              className="card-project-main"
              bg="brand.bg.white"
              w={{ base: "full", md: "full", lg: "1/2" }}
              p={{ base: "4", md: "6" }}
              rounded="xl"
              boxShadow="0px 0px 18px rgba(78, 116, 119, 0.25)"
            >
              <Box
                bg="brand.bg.gray"
                w="full"
                h={{ base: "40", md: "56" }}
                rounded="lg"
                overflow="hidden"
              >
                <Image
                  src={project.preview}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  alt={project.title}
                />
              </Box>
              <Heading
                fontFamily="inter"
                color="brand.text.black"
                mt="4"
                fontWeight="bold"
                fontSize={{ base: "lg", md: "xl" }}
              >
                {project.title}
              </Heading>
              <Text
                fontFamily="inter"
                color="brand.text.black"
                mt="3"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="light"
                lineClamp="3"
              >
                {project.description}
              </Text>
            </Box>
          ))}

          <Box
            w={{ base: "full", md: "full", lg: "1/2" }}
            display="flex"
            flexDirection="column"
            gap={6}
          >
            {projects.slice(1, 3).map((project, index) => (
              <Flex
                key={index}
                className="card-list"
                bg="brand.bg.white"
                w="full"
                p={{ base: "4", md: "6" }}
                rounded="xl"
                gap={6}
                direction={{ base: "column", sm: "row" }}
                boxShadow="0px 0px 18px rgba(78, 116, 119, 0.25)"
              >
                <Box
                  bg="brand.bg.gray"
                  minW={{ base: "full", sm: "36" }}
                  h={{ base: "40", md: "36" }}
                  rounded="lg"
                  overflow="hidden"
                >
                  <Image
                    src={project.preview}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    alt={project.title}
                  />
                </Box>
                <Box>
                  <Heading
                    fontFamily="inter"
                    color="brand.text.black"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {project.title}
                  </Heading>
                  <Text
                    fontFamily="inter"
                    color="brand.text.black"
                    mt="3"
                    fontSize="sm"
                    fontWeight="light"
                    lineClamp="5"
                  >
                    {project.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Flex>

        <Image
          className="star-project"
          src="/images/float/stargreen-project.png"
          alt="star-green"
          position="absolute"
          top={{ base: "-2%", md: "30%", lg: "25%" }}
          right={{ base: "-5%", md: "-5%", lg: "-4%" }}
          w={{ base: "16", md: "20", lg: "24" }}
          h={{ base: "16", md: "20", lg: "24" }}
          objectFit="contain"
        />

        <Center mt="12">
          <Box
            className="button-project"
            bg="brand.text.black"
            py="2"
            px="14"
            rounded="full"
            cursor="pointer"
          >
            <Text
              color="brand.text.white"
              fontWeight="light"
              fontFamily="inter"
              fontSize="sm"
            >
              Lihat Selengkapnya
            </Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
