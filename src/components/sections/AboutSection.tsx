import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <Box py={20} position="relative" overflow="hidden">
      <Container maxW="7xl">
        <Flex justify="center">
          <Text
            marginTop="20"
            fontFamily="Bestime"
            fontSize="64.3px"
            fontWeight="400"
            lineHeight="75.32px"
            textAlign="center"
          >
            The No.1 in Creating
          </Text>
        </Flex>

        <Flex justify="center" alignItems="center" mt={6} position="relative">
          <Box position="absolute" right="17.5%" bottom="50%" zIndex={20}>
            <Image
              src="/images/char/BirdGreen.png"
              alt="Bird"
              w="100px"
              h="auto"
            />
          </Box>
          <Box position="absolute" left="13.5%" bottom="83%" zIndex={20}>
            <Image
              src="/images/char/BirdPurple.png"
              alt="Bird"
              w="100px"
              h="auto"
            />
          </Box>
          <Text
            fontSize="43.46px"
            fontWeight="400"
            fontFamily="Bestime"
            position="absolute"
            top="-33px"
            left="51%"
            transform="rotate(10deg)"
          >
            &
          </Text>

          <Box
            mr={-10}
            mb={10}
            bg="brand.bg.blue.primary"
            fontSize="53.91px"
            fontWeight="400"
            color="brand.text.white"
            px={12}
            rounded="lg"
            transform="rotate(-2deg)"
            borderColor="brand.bg.black"
            borderWidth={2.5}
            filter="drop-shadow(-14px 16px 0px rgba(176, 176, 176, 0.6))"
          >
            <Text fontFamily="Neulis Cursive" textAlign="center">
              Web Design
            </Text>
          </Box>

          <Box
            mt={10}
            bg="brand.bg.yellow.primary"
            fontSize="53.91px"
            fontWeight="400"
            color="brand.text.black"
            px={12}
            rounded="lg"
            transform="rotate(2deg)"
            borderColor="brand.bg.black"
            borderWidth={2.5}
            filter="drop-shadow(14px 16px 0px rgba(176, 176, 176, 0.6))"
          >
            <Text fontFamily="Neulis Cursive" textAlign="center">
              Lorem Ipsum
            </Text>
          </Box>
        </Flex>

        <Flex justify="center" align="flex-start" position="relative" h="120px">
          <Box position="absolute" right="34%" bottom="10%">
            <Image
              src="/images/char/BirdPurple2.png"
              alt="Jelita character"
              w="75.19px"
              h="auto"
            />
          </Box>
        </Flex>

        <Flex
          justify="center"
          align="flex-start"
          mt="10px"
          mb="300px"
          p="10"
          position="relative"
        >
          {/* Right Box */}
          <Box>
            <Box
              position="absolute"
              right="4%"
              bottom="70%"
              w="149.67px"
              h="121.08px"
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(10deg)"
            />
            <Box
              position="absolute"
              right="0"
              bottom="25%"
              w="95.65px"
              h="77.37px"
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(10deg)"
            />
          </Box>
          {/* Left Box */}
          <Box>
            <Box
              position="absolute"
              left="0"
              bottom="25%"
              w="97.88px"
              h="79.18px"
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(-10deg)"
            />
            <Box
              position="absolute"
              left="14%"
              top="2%"
              w="119.68px"
              h="96.82px"
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(10deg)"
            />
            <Box
              position="absolute"
              left="-4%"
              top="-20%"
              w="135.4px"
              h="109.544px"
              bg="gray.300"
              rounded="md"
              border="2px solid"
              borderColor="gray.400"
              transform="rotate(-10deg)"
            />
          </Box>

          <Box maxW="800px" textAlign="center" zIndex={1}>
            <Text
              fontFamily="Bestime"
              fontSize={{ base: "32px", md: "48px" }}
              fontWeight="400"
              mb={4}
              textAlign="center"
            >
              <Text as="span" color="brand.bg.blue.primary">
                What is{" "}
              </Text>
              <Text as="span" color="brand.text.black" fontWeight="bold">
                PIXEL SPACE
              </Text>
              <Text
                as="span"
                display="block"
                color="brand.text.black"
                fontWeight="bold"
              >
                CREATIVE DIGITAL?
              </Text>
            </Text>

            <Text
              px="130px"
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="brand.text.black"
              lineHeight="1.6"
              textAlign="center"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Box>

          <Image
            src="/images/char/ShadowRexsi.png"
            alt="Shadow Rexsi"
            w="369px"
            h="auto"
            position="absolute"
            right="2%"
            bottom="-75%"
            zIndex={0}
          />
          <Image
            src="/images/char/ShadowJelita.png"
            alt="Shadow Rexsi"
            w="369px"
            h="auto"
            position="absolute"
            left="4%"
            bottom="-75%"
            zIndex={0}
          />

          <Box
            position="absolute"
            left="20"
            bottom="0"
            top="32"
            transform="translateY(20%)"
          >
            <Image
              src="/images/char/jelita.png"
              alt="Jelita character"
              w="298px"
              h="394.03px"
            />
          </Box>

          <Box
            position="absolute"
            right="20"
            bottom="0"
            top="32"
            transform="translateY(20%)"
          >
            <Image
              src="/images/char/rexsi.png"
              alt="Rexsi character"
              w="229px"
              h="406.6px"
              transform="rotate(2deg)"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
