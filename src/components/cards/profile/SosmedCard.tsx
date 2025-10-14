"use client";

import { Box, Flex, Heading, Image, Separator, Link } from "@chakra-ui/react";

interface SosmedCardProps {
  sosmedImage: string[];
  sosmedLink: string[];
}

export default function SosmedCard({ sosmedImage, sosmedLink }: SosmedCardProps) {
  return (
    <Box>
      <Heading
        ms="4"
        mb="2"
        fontFamily="bestime"
        fontSize={{ base: "sm", md: "md", lg: "md" }}
        fontWeight="light"
        color="brand.text.navy"
      >
        Contact & Social Media
      </Heading>

      <Flex alignItems="center" gap={4} flexWrap={{ base: "wrap" , md: "wrap" }}>
        {sosmedImage.map((image, index) => (
          <Link
            key={index}
            href={sosmedLink[index]}
            
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            <Box
              px={{ base: "8", md: "6", lg: "8" }}
              py="2"
              bg="white"
              border="2.5px solid"
              borderColor="brand.text.navy"
              rounded="xl"
            >
              <Image src={image} w="10" />
            </Box>
          </Link>
        ))}

        <Flex
          px="2"
          py="2"
          bg="white"
          border="2.5px solid"
          borderColor="brand.text.navy"
          rounded="xl"
          gap={2}
        >
          <Link href="https://www.behance.net" >
            <Image src="/images/sosmed/be.png" w="10" />
          </Link>
          <Separator
            orientation="vertical"
            height="10"
            borderColor="black"
            size="md"
          />
          <Link href="https://www.linkedin.com" >
            <Image src="/images/sosmed/linkedin.png" w="10" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
