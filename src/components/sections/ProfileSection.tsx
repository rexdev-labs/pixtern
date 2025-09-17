import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ProfileSection() {
  const data = [
    { name: "Jelita", image: "/images/char/lita.png" },
    { name: "Rexsi", image: "/images/char/rexsi.png" },
    { name: "Sheva", image: "/images/char/scheva.png" },
    { name: "Firman", image: "/images/char/firman.png" },
    { name: "Raihan", image: "/images/char/raihan.png" },
  ];

  return (
    <Box>
      <Center my="20">
        <Flex gap={2}>
          <Heading fontFamily="bestime" fontSize="4xl" fontWeight="light">
            Who
          </Heading>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Heading
              fontFamily="bestime"
              fontSize="4xl"
              color="blue.500"
              fontWeight="light"
            >
              We Are?
            </Heading>
            <Image src="/images/bg/underline-profile.png" w="32" mt="-1.5" />
          </Box>
        </Flex>
      </Center>

      <Flex gap={20} align="center" mx="10">
        <VStack textAlign="start" flex="1" gap={4} maxW="2/5">
          <Heading fontFamily="bestime" fontWeight="light" fontSize="2xl">
            <Text as="span" color="blue.500">
              What is
            </Text>{" "}
            PIXEL SPACE CREATIVE DIGITAL?
          </Heading>
          <Text fontSize="xs" lineHeight="1.6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </VStack>

        <Flex flex="1" justify="end" align="start">
          <VStack gap={6} align="center">
            <HStack gap={6}>
              {data.slice(0, 2).map((character, index) => (
                <Box key={index} position="relative" bg="red">
                  <VStack
                    bg="white"
                    borderRadius="xl"
                    p={4}
                    pt={12}
                    pb={4}
                    shadow="md"
                    border="3px solid"
                    borderColor="blue.400"
                    minW="130px"
                    minH="200px"
                    position="relative"
                  >
                    <Image
                      src={character.image}
                      alt={character.name}
                      boxSize="140px"
                      objectFit="contain"
                      position="absolute"
                      top="-10px"
                      left="50%"
                      transform="translateX(-50%)"
                      zIndex="2"
                    />
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="gray.700"
                      mt={2}
                    >
                      {character.name}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </HStack>

            <HStack gap={6}>
              {data.slice(2, 5).map((character, index) => (
                <Box key={index} position="relative" pt="8">
                  <VStack
                    bg="white"
                    borderRadius="xl"
                    p={4}
                    pt={12}
                    pb={4}
                    shadow="md"
                    border="3px solid"
                    borderColor="blue.400"
                    minW="130px"
                    position="relative"
                  >
                    <Image
                      src={character.image}
                      alt={character.name}
                      boxSize="100px"
                      objectFit="contain"
                      position="absolute"
                      top="-20px"
                      left="50%"
                      transform="translateX(-50%)"
                      zIndex="2"
                    />
                    <Box height="6" />
                    <Text
                      fontWeight="bold"
                      fontSize="sm"
                      color="gray.700"
                      mt={2}
                    >
                      {character.name}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}
