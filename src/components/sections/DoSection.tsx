"use client";
import {
    Avatar,
    Box,
    Button,
    Card,
    Center,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";

export default function DoSection() {
    return (
        <Box id="DoSection" mt="10" py="28">
            <Box spaceY="6">
                <Center>
                    <Flex gap={2}>
                        <Heading
                            className="scramble-who"
                            fontFamily="bestime"
                            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                            fontWeight="light"
                            color="brand.text.black"
                        >
                            Who
                        </Heading>
                        <Box display="flex" flexDirection="column">
                            <Heading
                                fontFamily="bestime"
                                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                                color="brand.text.orange"
                                fontWeight="light"
                            >
                                We Do?
                            </Heading>
                            <Image
                                src="/images/bg/underline-do.png"
                                w={{ base: "28", md: "56" }}
                                mt={{ base: "-1.5", md: "0" }}
                                pr="4"
                                alt="underline"
                                zIndex={2}
                            />
                        </Box>
                    </Flex>
                </Center>

                <Container>
                    <Flex
                        justify="center"
                        align="center"
                        position="relative"
                        minH="80px"
                    >
                        <Box
                            position="absolute"
                            top={{ base: "10%", md: "15%" }}
                            left={{ base: "10%", md: "14%" }}
                        >
                            <Image
                                src="/images/float/birdDo.png"
                                alt="Bird"
                                w={{
                                    base: "50px",
                                    sm: "55px",
                                    md: "70px",
                                    lg: "75px",
                                    xl: "100px",
                                }}
                            />
                        </Box>

                        <Box maxW={{ base: "500px", xl: "700px" }}>
                            <Text
                                fontFamily="heading"
                                fontWeight="400"
                                textAlign="center"
                                fontSize={{ base: "xs", xl: "sm" }}
                            >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </Text>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Box my="28" position="relative">
                <Box position="absolute" top="0" left="0" w="100%" zIndex={1}>
                    <Image
                        src="/images/bg/bg-wave.png"
                        alt="bgWave"
                        w="100%"
                        objectFit="cover"
                    />
                </Box>

                <Stack
                    direction="row"
                    justify="center"
                    zIndex={2}
                    spaceX={4}
                    position="relative"
                >
                    <Card.Root
                        rounded="xl"
                        borderCollapse=""
                        borderColor="brand.bg.black"
                        width="420px"
                    >
                        <Card.Body gap="2">
                            <Image
                                src="/images/char/programing.png"
                                alt="programing"
                                w="80%"
                            />
                            <Card.Title textAlign="center" mt="2">
                                Programing
                            </Card.Title>
                            <Card.Description textAlign="center">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                            </Card.Description>
                        </Card.Body>
                    </Card.Root>
                </Stack>
            </Box>
        </Box>
    );
}
