"use client";

import { Box, Button, Container, Image, Flex } from "@chakra-ui/react";
import RocketParallax from "../animations/RocketParallax";

export default function HeroSection() {
  return (
    <Box
      as="section"
      position="relative"
      minH={{
        base: "120vh",
        md: "110vh",
        xl: "100vh",
      }}
      overflow="hidden"
      bg="brand.hero"
    >
      <Container maxW="7xl" marginTop={"20"} position="relative" zIndex={3}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          py={10}
          gap={10}
        >
          {/* Logo */}
          <Image src="/images/logo/logo.png" alt="Logo" maxW="400px" mb={6} />

          <Button
            size="xs"
            colorScheme="whiteAlpha"
            bg="white"
            color="brand.text.black"
            _hover={{ bg: "gray.200" }}
            rounded={"full"}
            w={120}
            fontFamily="heading"
            // marginTop={20}
            borderColor={`brand.bg.black`}
            borderWidth={2}
            shadow={"0px 0px 6px 0px rgba(255,255,255,0.75)"}
          >
            Join Us
          </Button>
        </Flex>
      </Container>

      <Image
        src="/images/float/planet2.png"
        alt="Saturn"
        position="absolute"
        top="1%"
        left="16%"
        boxSize={{ base: "80px", md: "150px" }}
        zIndex={3}
      />

      <Image
        src="/images/float/planet1.png"
        alt="Mars"
        position="absolute"
        top="10%"
        right="4%"
        maxW={"44"}
        zIndex={3}
      />

      <Image
        src="/images/float/planet3.png"
        alt="Jupiter"
        position="absolute"
        bottom={"40%"}
        right="12%"
        maxW={"44"}
        zIndex={3}
      />

      <Image
        src="/images/float/moon.png"
        alt="Moon"
        position="absolute"
        bottom="45%"
        left="3%"
        w={"72"}
        zIndex={3}
      />

      <Image
        src="/images/float/starpurple.png"
        alt="StarPurple1"
        position="absolute"
        top="12%"
        left="8%"
        maxW={"7"}
        rotate={"210deg"}
        zIndex={3}
      />

      <Image
        src="/images/float/staryellow.png"
        alt="StarYellow"
        position="absolute"
        top="50%"
        left="1%"
        maxW={"8"}
        rotate={"110deg"}
        zIndex={3}
      />

      <Image
        src="/images/float/starred.png"
        alt="StarRed"
        position="absolute"
        top="12%"
        right="25%"
        maxW={"10"}
        rotate={"170deg"}
        zIndex={3}
      />

      <Image
        src="/images/float/starpurple.png"
        alt="StarPurple2"
        position="absolute"
        top="39%"
        right="31%"
        maxW={"10"}
        rotate={"30deg"}
        zIndex={3}
      />

      <Image
        src="/images/float/stargreen.png"
        alt="StarGreen"
        position="absolute"
        top="63%"
        right="23%"
        maxW={"7"}
        rotate={"90deg"}
        zIndex={3}
      />

      <Box position="relative" minH="50vh">
        <Image
          src="/images/char/character1.png"
          alt="Character Left"
          position="absolute"
          bottom="0"
          left="1%"
          w={"64"}
          zIndex={3}
        />

        <Image
          src="/images/char/character2.png"
          alt="Character Right"
          position="absolute"
          bottom="20%"
          right="0%"
          w={"60"}
          zIndex={3}
        />

        <Image
          src="/images/char/character3.png"
          alt="Character Left"
          position="absolute"
          bottom="55%"
          left="20%"
          w={"60"}
          zIndex={3}
        />

        <Image
          src="/images/char/character4.png"
          alt="Character Right"
          position="absolute"
          bottom="55%"
          right="25%"
          w={"36"}
          zIndex={3}
        />

        <Image
          src="/images/bg/land.png"
          alt="Planet Surface"
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          objectFit="cover"
          zIndex={1}
        />

        <Image
          src="/images/bg/cloud.png"
          alt="Cloud"
          position="absolute"
          bottom="0"
          w="100%"
          objectFit="cover"
          zIndex={0}
        />
      </Box>
      {/* <RocketParallax/> */}
    </Box>
  );
}
