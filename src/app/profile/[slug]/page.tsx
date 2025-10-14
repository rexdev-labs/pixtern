"use client";

import PortofolioCard from "@/components/profile/cards/PortofolioCard";
import ProfileCard from "@/components/profile/cards/ProfileCard";
import SkillCard from "@/components/profile/cards/SkillCard";
import SosmedCard from "@/components/profile/cards/SosmedCard";
import ProfileCardSection from "@/components/cards/ProfileCard";
import Footer from "@/components/Footer/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  Grid,
  GridItem,
  Heading,
  Icon,
  Flex,
  Box,
  Image,
  Text,
  Container,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import { splitTextTwo } from "@/utils/splitText";
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function Profile() {
  const containerRef = useRef(null);
  const [splitFirst, rest] = splitTextTwo("Meet Our Creative Team");



  const profileImage = {
    realImage: "/images/char/JelitaReal.jpg",
    charImage: "/images/char/lita.png",
    charPosition: "left",
    ornamenImage: "/images/float/starProfile.png",
    ornamenPosition: "right",
  };

  const sosmedImage = [
    "/images/logo/instagram.png",
    "/images/logo/facebook.png",
    "/images/logo/discord.png",
    "/images/logo/linkedin.png",
  ];

  const sosmedLink = [
    "https://www.instagram.com/username",
    "https://www.facebook.com/username",
    "https://discord.gg/example",
    "https://www.linkedin.com/in/username",
  ];

  const skillImage = [
    "/images/logo/instagram.png",
    "/images/logo/facebook.png",
    "/images/logo/discord.png",
    "/images/logo/linkedin.png",
  ];

  const portofolioImage = [
    "/images/char/bgArya.png",
    "/images/char/bgNabil.png",
    "/images/char/bgFarel.png",
  ];

  return (
    <>
      <Container ref={containerRef} maxW="container.xl" px={{ base: 4, lg: 8 }}>
        <Grid
          templateColumns={{ base: "auto auto", lg: "1fr auto 1fr" }}
          alignItems="center"
          mt="20"
          mb={{ base: "10", lg: "20" }}
          px={{ base: "4", lg: "8" }}
        >
          <GridItem justifySelf="start">
            <Icon
              as={FaArrowLeft}
              boxSize={8}
              cursor="pointer"
              className="button-back"
            />
          </GridItem>

          <GridItem justifySelf={{ base: "center", md: "start", lg: "center" }}>
            <Flex
              gap={2}
              justify="center"
              align="center"
              className="title-profile-page"
            >
              <Heading
                className="scramble-first"
                fontFamily="bestime"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="light"
                color="brand.text.navy"
              >
                {splitFirst}
              </Heading>
              <Heading
                className="scramble-rest"
                fontFamily="bestime"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="light"
                color="brand.text.orange"
              >
                {rest}
              </Heading>
            </Flex>
          </GridItem>
        </Grid>

        <Grid
          templateColumns={{ base: "1fr", md: "2fr 3fr" }}
          templateRows="2"
          px={{ base: "4", lg: "8" }}
          columnGap={{ base: 10, md: 14, lg: 20 }}
          rowGap={{ base: 10, md: 12 }}
        >
          <GridItem>
            <ProfileCard {...profileImage} />
          </GridItem>

          <GridItem>
            <Box>
              <Heading
                fontFamily="bestime"
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                fontWeight="light"
                color="brand.text.navy"
              >
                Jelita (Nama Lengkap)
              </Heading>
              <Text fontFamily="inter" fontWeight="reguler" fontSize="sm">
                Illustrator, Employee
              </Text>
            </Box>

            <Box
              my="6"
              px="5"
              py="5"
              bg="white"
              border="2.5px solid"
              borderColor="brand.text.navy"
              rounded="xl"
              position="relative"
            >
              <Heading
                fontFamily="bestime"
                fontWeight="lighter"
                mb="2"
                color="brand.text.navy"
              >
                About Jelita
              </Heading>
              <Text fontFamily="inter" fontWeight="medium" fontSize="sm">
                Hai! I’m Jelita. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </Text>

              <Image
                src="/images/float/starYellow-profile.png"
                objectFit="cover"
                w="14"
                position="absolute"
                bottom="20%"
                left={{ base: "-6%", lg: "-5%" }}
                overflow="visible"
                zIndex="-10"
              />
              <Image
                src="/images/float/ornamen-profile.png"
                objectFit="cover"
                w="16"
                position="absolute"
                top="-7%"
                right={{ base: "-8%", lg: "-5%" }}
                overflow="visible"
                zIndex="10"
              />
            </Box>

            <SosmedCard sosmedImage={sosmedImage} sosmedLink={sosmedLink} />
          </GridItem>

          <GridItem>
            <Heading
              mx="2"
              mb="3"
              fontFamily="bestime"
              fontWeight="lighter"
              color="brand.text.navy"
              fontSize="md"
            >
              Education / Achievement
            </Heading>
            <Flex direction="column" gap={3} w="full">
              <Flex
                px="6"
                py="4"
                bg="white"
                w="full"
                alignItems="flex-start"
                border="2.5px solid"
                borderColor="brand.text.navy"
                rounded="xl"
                gap={8}
              >
                <Text fontFamily="inter" fontWeight="bold">
                  2017
                </Text>
                <Text fontFamily="inter" fontWeight="bold">
                  -
                </Text>
                <Text fontFamily="inter" fontWeight="bold">
                  SMA TRUNOYOYO 17 JAKARTA
                </Text>
              </Flex>

              <Flex
                px="6"
                py="4"
                bg="white"
                w="full"
                alignItems="flex-start"
                border="2.5px solid"
                borderColor="brand.text.navy"
                rounded="xl"
                gap={8}
              >
                <Text fontFamily="inter" fontWeight="bold">
                  2021
                </Text>
                <Text fontFamily="inter" fontWeight="bold">
                  -
                </Text>
                <Box>
                  <Text fontFamily="inter" fontWeight="bold">
                    UNIVERSITAS GADJAH MADA
                  </Text>
                  <Text fontFamily="inter" fontWeight="reguler" fontSize="sm">
                    S1 Psikologi
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem>
            <PortofolioCard portfolioImage={portofolioImage} />
            <SkillCard skillImage={skillImage} />
          </GridItem>
        </Grid>

        <Box my="20" px={{ base: "4", lg: "8" }}>
          <Heading
            my="4"
            ms="4"
            fontFamily="bestime"
            fontSize={{ base: "sm", md: "md", lg: "md" }}
            fontWeight="light"
            color="brand.text.navy"
          >
            See Others
          </Heading>

          <Box maxW="9xl" overflowX="auto" overflowY="hidden">
            <Flex alignItems="center" gap={{ base: 4, md: 8 }} py="2">
              {Array(9)
                .fill(null)
                .map((_, i) => (
                  <ProfileCardSection
                    key={i}
                    name="Rexsi"
                    charImage="/images/char/rexsi.png"
                    realImage="/images/char/rexsiReal.png"
                    bg="0781E6"
                    bgImage="/images/char/bgRexsi.png"
                  />
                ))}
            </Flex>
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
