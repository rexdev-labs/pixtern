"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";

interface PortofolioCardProps {
  portfolioImage: string[];
}

export default function PortofolioCard({ portfolioImage }: PortofolioCardProps) {
  return (
    <Box>
      <Heading
        ms="4"
        mb="3"
        fontFamily="bestime"
        fontSize={{ base: "sm", md: "md", lg: "md" }}
        fontWeight="light"
        color="brand.text.navy"
      >
        Mini Portofolio
      </Heading>

      <Flex alignItems="center" gap={2} maxW="100%">
        {portfolioImage.map((image, index) => (
          <Box
            key={index}
            w={{ base: "32", md: "35%", lg: "32%" }}
            h={{ base: "24", md: "32", lg: "52" }}
            bg="white"
            border="2.5px solid"
            borderColor="brand.text.navy"
            rounded="xl"
            overflow="hidden"
          >
            <Image
              src={image}
              alt={`Portfolio ${index + 1}`}
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
