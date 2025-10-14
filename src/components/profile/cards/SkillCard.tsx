"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";

interface SkillCardProps {
  skillImage: string[];
}

export default function SkillCard({ skillImage }: SkillCardProps) {
  return (
    <Box>
      <Heading
        mt="6"
        ms="4"
        mb="2"
        fontFamily="bestime"
        fontSize={{ base: "sm", md: "md", lg: "md" }}
        fontWeight="light"
        color="brand.text.navy"
      >
        Software Skill
      </Heading>

      <Flex alignItems="center" gap={4} flexWrap="wrap">
        {skillImage.map((image, index) => (
          <Box
            key={index}
            px={{ base: "8", md: "6", lg: "8" }}
            py="2"
            bg="white"
            border="2.5px solid"
            borderColor="brand.text.navy"
            rounded="xl"
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            <Image src={image} w="10" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
