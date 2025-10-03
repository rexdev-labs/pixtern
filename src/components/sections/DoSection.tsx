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
    const doData = [
        {
            id: 1,
            title: "PROGRAMING",
            img: "/images/char/programing.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            id: 2,
            title: "UI/UX DESIGNER",
            img: "/images/char/uiUx.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            id: 3,
            title: "DEV?",
            img: "/images/char/programing.png",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
    ];

    return (
        <Box
            id="DoSection"
            mt={{ base: "6", md: "10" }}
            py={{ base: "16", md: "28" }}
        >
            <Box spaceY="6">
                <Center px={{ base: "4", md: "0" }}>
                    <Flex
                        gap={{ base: 1, md: 2 }}
                        flexWrap="wrap"
                        justifyContent="center"
                    >
                        <Heading
                            className=""
                            fontFamily="bestime"
                            fontSize={{
                                base: "3xl",
                                sm: "4xl",
                                md: "5xl",
                                lg: "6xl",
                            }}
                            fontWeight="light"
                            color="brand.text.black"
                        >
                            Who
                        </Heading>
                        <Box display="flex" flexDirection="column">
                            <Heading
                                fontFamily="bestime"
                                fontSize={{
                                    base: "3xl",
                                    sm: "4xl",
                                    md: "5xl",
                                    lg: "6xl",
                                }}
                                color="brand.text.orange"
                                fontWeight="light"
                            >
                                We Do?
                            </Heading>
                            <Image
                                src="/images/bg/underline-do.png"
                                w={{ base: "24", sm: "28", md: "56" }}
                                mt={{ base: "-1.5", md: "0" }}
                                pr={{ base: "2", md: "4" }}
                                alt="underline"
                                zIndex={2}
                            />
                        </Box>
                    </Flex>
                </Center>

                <Container
                    maxW={{
                        base: "100%",
                        md: "container.md",
                        lg: "container.lg",
                    }}
                    px={{ base: "4", md: "6" }}
                >
                    <Flex
                        justify="center"
                        align="center"
                        position="relative"
                        minH={{ base: "60px", md: "80px" }}
                    >
                        <Box
                            position="absolute"
                            bottom={{ base: "5%", sm: "10%", md: "60%" }}
                            left={{ base: "5%", sm: "8%", md: "8%" }}
                        >
                            <Image
                                src="/images/float/birdDo.png"
                                alt="Bird"
                                w={{
                                    base: "40px",
                                    sm: "50px",
                                    md: "70px",
                                    lg: "75px",
                                    xl: "100px",
                                }}
                            />
                        </Box>

                        <Box
                            maxW={{ base: "90%", sm: "500px", xl: "700px" }}
                            px={{ base: "4", md: "0" }}
                        >
                            <Text
                                fontFamily="heading"
                                fontWeight="normal"
                                textAlign="center"
                                fontSize={{ base: "2xs", sm: "xs", xl: "sm" }}
                                lineHeight={{ base: "1.4", md: "1.5" }}
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

            <Box
                my={{ base: "8", md: "14" }}
                position="relative"
                px={{ base: "4", md: "6", lg: "8" }}
            >
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w={{ base: "150%", md: "120%", lg: "100%" }}
                    zIndex={0}
                    display="flex"
                    justifyContent="center"
                >
                    <Image
                        src="/images/bg/bg-wave.png"
                        alt="bgWave"
                        w="full"
                        objectFit="contain"
                        opacity="0.9"
                    />
                </Box>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    justify="center"
                    align="stretch"
                    gap={{ base: 6, md: 6, lg: 10 }}
                    zIndex={2}
                    position="relative"
                    maxW="1200px"
                    mx="auto"
                >
                    {doData.map((item, index) => {
                        if (index >= 3) return null;

                        return (
                            <Card.Root
                                key={item.id}
                                rounded={{ base: "lg", md: "xl" }}
                                borderWidth={{ base: 2, md: 3 }}
                                borderColor="brand.bg.black"
                                width={{
                                    base: "100%",
                                    md: "260px",
                                    lg: "360px",
                                }}
                                minH={{
                                    base: "auto",
                                    md: "340px",
                                    lg: "460px",
                                }}
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                bg="white"
                            >
                                <Card.Body
                                    alignItems="center"
                                    textAlign="center"
                                    flex="1"
                                    p={{ base: "4", md: "6" }}
                                >
                                    <Box
                                        flex="1"
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                        gap={{ base: 3, md: 4, lg: 5 }}
                                        mt="1"
                                    >
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            w={{
                                                base: "75%",
                                                md: "80%",
                                                lg: "85%",
                                            }}
                                            maxW="300px"
                                            mx="auto"
                                            display="block"
                                            objectFit="contain"
                                        />
                                        <Card.Title
                                            fontFamily="Inter"
                                            fontWeight="extrabold"
                                            fontSize={{
                                                base: "lg",
                                                sm: "lg",
                                                md: "xl",
                                                xl: "3xl"
                                            }}
                                            lineHeight="100%"
                                            textAlign="center"
                                            mt="1"
                                        >
                                            {item.title}
                                        </Card.Title>

                                        <Card.Description
                                            fontFamily="Inter"
                                            fontWeight="normal"
                                            fontSize={{ 
                                                base: "2xs", 
                                                md: "2xs",
                                                xl: "xs"
                                            }}
                                            lineHeight="120%"
                                            textAlign="center"
                                            px={{
                                                base: "4",
                                                md: "6",
                                                lg: "10",
                                            }}
                                            mt="1"
                                        >
                                            {item.desc}
                                        </Card.Description>
                                    </Box>
                                </Card.Body>
                            </Card.Root>
                        );
                    })}
                </Stack>
            </Box>

            <Box px={{ base: "4", md: "0" }}>
                <Center>
                    <Button
                        bg="brand.bg.black"
                        rounded="full"
                        fontFamily="heading"
                        fontWeight="normal"
                        fontSize={{ base: "xs", md: "xs", xl:"md" }}
                        px={{ base: "10", md: "12", xl: "16" }}
                        w={{ base: "full", sm: "auto" }}
                    >
                        Lihat Selengkapnya
                    </Button>
                </Center>
            </Box>
        </Box>
    );
}
