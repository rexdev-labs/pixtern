"use client";

import { Box, Image } from "@chakra-ui/react";

interface ProfileCardProps {
  realImage: string;
  charImage: string;
  charPosition: string;
  ornamenImage: string;
  ornamenPosition: string;
}

export default function ProfileCard({
  realImage,
  charImage,
  charPosition,
  ornamenImage,
  ornamenPosition,
}: ProfileCardProps) {
  return (
    <Box
      p="2"
      bg="white"
      border="2px solid"
      borderColor="brand.text.navy"
      rounded="xl"
      h="96"
      w="full"
      overflow="visible"
      position="relative"
    >
      <Box
        border="2px solid"
        borderColor="brand.text.navy"
        rounded="lg"
        h="full"
        overflow="hidden"
      >
        <Image
          src={realImage}
          objectFit="cover"
          mt="-0.5"
          w="110%"
          h="110%"
          rounded="lg"
        />
      </Box>

      <Image
        src={charImage}
        objectFit="cover"
        w="36"
        position="absolute"
        bottom="-5%"
        left={charPosition === "left" ? "-3%" : "auto"}
        right={charPosition === "right" ? "-3%" : "auto"}
        overflow="visible"
        zIndex="10"
      />

      <Image
        src={ornamenImage}
        objectFit="cover"
        w="11"
        position="absolute"
        top="10%"
        left={ornamenPosition === "left" ? "-5%" : "auto"}
        right={ornamenPosition === "right" ? "-5%" : "auto"}
        overflow="visible"
        zIndex="10"
      />
    </Box>
  );
}
