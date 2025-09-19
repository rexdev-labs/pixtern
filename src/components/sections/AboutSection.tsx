import { Box, Container, Flex, Text } from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <Container>
      <Box>
        <Flex justify="center">
          <Text marginTop="20" fontFamily="Bestime" fontSize="5xl">
            The No.1 in Creating
          </Text>
        </Flex>

        <Flex justify="center" alignItems="center" mt={3} position="relative">
          <Text
            fontSize="4xl"
            fontFamily="Bestime"
            position="absolute"
            top="-28px"
            left="52.5%"
            transform="translateX(-50%)"
          >
            &
          </Text>

          <Box
            mr={-10}
            mb={10}
            bg="brand.bg.blue.primary"
            fontSize="4xl"
            fontWeight="normal"
            color="brand.text.white"
            px={12}
            rounded="lg"
            transform="rotate(-2deg)"
            borderColor="brand.bg.black"
            borderWidth={2.5}
          >
            <Text fontFamily="cursive">Web Design</Text>
          </Box>

          <Box
            mt={4}
            bg="brand.bg.yellow.primary"
            fontSize="4xl"
            fontWeight="normal"
            color="brand.text.black"
            px={12}
            rounded="lg"
            transform="rotate(2deg)"
            borderColor="brand.bg.black"
            borderWidth={2.5}
          >
            <Text fontFamily="cursive">Lorem Ipsum</Text>
          </Box>
        </Flex>

        <Flex justify="center" align="center">
          <Box my={100} textAlign="center">
            <Text fontFamily="Bestime" fontSize="3xl">
              <Text as="span" color="brand.bg.blue.primary">
                What is{" "}
              </Text>
              <Text as="span" color="brand.text.black">
                PIXEL SPACE
              </Text>
              <Text as="span" display="block" color="brand.text.black">
                CREATIVE DIGITAL?
              </Text>
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="sm"
              color="brand.text.black"
              mt={4}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
