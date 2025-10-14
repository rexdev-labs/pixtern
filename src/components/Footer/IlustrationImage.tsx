import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function IlustrationImage() {
  return (
    <Box position="relative" mt="24">
      {/* Blur */}
      <Box zIndex={1} position="absolute" bottom="-24%" w="100%" >
        <Image
          src="/images/ilust/blur.png"
          alt="Ilustration"
          w="100%"
          h="auto"
        />
      </Box>

      <Box position="relative" w="100%" overflow="hidden">
        {/* background ilustrasion */}
        <Box position="relative" zIndex={3}>
          <Image
            src="/images/ilust/bg-ilustrasion.png"
            alt="Ilustration"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>

        {/* mountain dan cloud */}
        <Box zIndex={2} position="absolute" w="100%" h="100%" top="0" left="0">
          <Image
            src="/images/ilust/cloud.png"
            alt="Ilustration"
            objectFit="cover"
            position="absolute"
            bottom="-10%"
            left="-4%"
            w="92%"
            h="auto"
          />
          <Image
            src="/images/ilust/cloud2.png"
            alt="Ilustration"
            objectFit="cover"
            bottom="25%"
            right="-24%"
            position="absolute"
            w="40%"
            h="auto"
          />
          <Image
            src="/images/ilust/mountain.png"
            alt="Ilustration"
            objectFit="cover"
            position="absolute"
            bottom={{
              base: "18%",
              md: "18%",
              lg: "17%",
              xl: "18%",
              "2xl": "19.5%",
            }}
            right="-1%"
            w={{ base: "70%", md: "70%", xl: "75%", "2xl": "60%" }}
            h="auto"
          />
        </Box>

        {/* Interior left */}
        <Box zIndex={4} position="absolute" w="100%" h="100%" top="0" left="0">
          <Image
            src="/images/ilust/tree.png"
            position="absolute"
            alt="Ilustration"
            objectFit="cover"
            bottom="46%"
            left="-5%"
            w="18%"
            h="auto"
          />
          <Image
            src="/images/ilust/rehanEva.png"
            position="absolute"
            alt="Ilustration"
            objectFit="cover"
            bottom="32%"
            left="5%"
            w="15.5%"
            h="auto"
          />
          <Image
            src="/images/ilust/flower.png"
            position="absolute"
            alt="Ilustration"
            objectFit="cover"
            bottom="-2%"
            left="-4.5%"
            w="28%"
            h="auto"
          />
          <Image
            src="/images/ilust/firman.png"
            position="absolute"
            alt="Ilustration"
            objectFit="cover"
            bottom="-9%"
            left="15%"
            w="28%"
            h="auto"
          />
        </Box>

        {/* interior right */}
        <Box zIndex={4} position="absolute" w="100%" h="100%" top="0" left="0">
          <Image
            src="/images/ilust/rexsiLita.png"
            position="absolute"
            alt="Ilustration"
            objectFit="cover"
            bottom="-16.5%"
            right="-2%"
            w="34%"
            h="auto"
          />
        </Box>
      </Box>
    </Box>
  );
}
