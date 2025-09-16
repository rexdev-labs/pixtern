"use client";

import { Box, Button, Container, Image, Flex } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      overflow="hidden"
      bg="linear-gradient(to bottom left, #27044F 1%, transparent 40%), #080427"
    >
      <Container maxW="7xl" marginTop={"20"} position="relative" zIndex={10}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          py={10}
          gap={10}
        >
          {/* Logo / Title */}
          <Image src="/images/logo.png" alt="Logo" maxW="400px" mb={6} />

          {/* CTA Button */}
          <Button
            size="xs"
            colorScheme="whiteAlpha"
            bg="white"
            color="black"
            _hover={{ bg: "gray.200" }}
            rounded={"full"}
            w={120}
            // marginTop={20}
            borderColor={"black"}
            borderWidth={2}
            shadow={"0px 0px 6px 0px rgba(255,255,255,0.75)"}
          >
            Join Us
          </Button>
        </Flex>
      </Container>

      {/* Floating Assets */}
      <Image
        src="/images/planet2.png"
        alt="Saturn"
        position="absolute"
        top="1%"
        left="16%"
        boxSize={{ base: "80px", md: "150px" }}
        zIndex={20}
      />

      <Image
        src="/images/planet1.png"
        alt="Mars"
        position="absolute"
        top="10%"
        right="4%"
        maxW={"44"}
        zIndex={20}
      />

      <Image
        src="/images/planet3.png"
        alt="Jupiter"
        position="absolute"
        bottom={"40%"}
        right="12%"
        maxW={"44"}
        zIndex={20}
      />

      <Image
        src="/images/moon.png"
        alt="Moon"
        position="absolute"
        bottom="45%"
        left="3%"
        w={"72"}
        zIndex={20}
      />

      <Image
        src="/images/starpurple.png"
        alt="StarPurple1"
        position="absolute"
        top="12%"
        left="8%"
        maxW={"7"}
        rotate={"210deg"}
        zIndex={20}
      />

      <Image
        src="/images/staryellow.png"
        alt="StarYellow"
        position="absolute"
        top="50%"
        left="1%"
        maxW={"8"}
        rotate={"110deg"}
        zIndex={20}
      />

      <Image
        src="/images/starred.png"
        alt="StarRed"
        position="absolute"
        top="12%"
        right="25%"
        maxW={"10"}
        rotate={"170deg"}
        zIndex={20}
      />

      <Image
        src="/images/starpurple.png"
        alt="StarPurple2"
        position="absolute"
        top="39%"
        right="31%"
        maxW={"10"}
        rotate={"30deg"}
        zIndex={20}
      />

      <Image
        src="/images/stargreen.png"
        alt="StarGreen"
        position="absolute"
        top="63%"
        right="23%"
        maxW={"7"}
        rotate={"90deg"}
        zIndex={20}
      />

      <Box position="relative" minH="50vh">
        <Image
          src="/images/character1.png"
          alt="Character Left"
          position="absolute"
          bottom="0"
          left="1%"
          w={"64"}
          zIndex={20}
        />

        <Image
          src="/images/character2.png"
          alt="Character Right"
          position="absolute"
          bottom="20%"
          right="0%"
          w={"60"}
          zIndex={20}
        />

        <Image
          src="/images/character3.png"
          alt="Character Left"
          position="absolute"
          bottom="55%"
          left="20%"
          w={"60"}
          zIndex={20}
        />

        <Image
          src="/images/character4.png"
          alt="Character Right"
          position="absolute"
          bottom="55%"
          right="25%"
          w={"36"}
          zIndex={20}
        />

        <Image
          src="/images/land.png"
          alt="Planet Surface"
          position="absolute"
          bottom="0"
          left="0"
          w="100%"
          objectFit="cover"
          zIndex={10}
        />

        <Image
          src="/images/cloud.png"
          alt="Cloud"
          position="absolute"
          bottom="0"
          w="100%"
          objectFit="cover"
          zIndex={0}
        />
      </Box>
    </Box>
  );
}
