"use client";
import {
    Box,
    Text,
    Container,
    Icon,
    Grid,
    GridItem,
    Heading,
    Flex,
    Center,
    Image
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import SosmedCard from "@/components/cards/profile/SosmedCard";

export default function AboutPixel() {
    const sosmedImage = [
        "images/sosmed/instagram.png",
        "images/sosmed/facebook.png",
        "images/sosmed/discord.png",
    ]

    const sosmedLink = [
        "https://www.instagram.com/username",
        "https://www.facebook.com/username",
        "https://discord.gg/example",
    ];

    return (
        <Box
            as="section"
            position="relative"
            pt={{ base: "80px", md: "100px" }}
            pb="60px"
            // mb={{ base: "70vh" , md: "250vh"}}
            overflow="hidden"
            zIndex={1}
        >
            <Container maxW="9xl" px="8" position="relative" zIndex={1}>
                <Grid templateColumns="1fr auto 1fr" mb="16" gap="4">
                    <GridItem>
                        <Icon as={FaArrowLeft} boxSize={8} />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Flex gap={2} justifyContent="center">
                            <Heading
                                fontFamily="bestime"
                                fontSize={{
                                    base: "2xl",
                                    md: "4xl",
                                    lg: "5xl",
                                }}
                                fontWeight="normal"
                                color="brand.text.black"
                            >
                                Tagline
                            </Heading>
                            <Heading
                                fontFamily="bestime"
                                fontSize={{
                                    base: "2xl",
                                    md: "4xl",
                                    lg: "5xl",
                                }}
                                color="brand.text.blue"
                                fontWeight="normal"
                            >
                                Pixel Space
                            </Heading>
                        </Flex>
                    </GridItem>
                </Grid>

                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 3fr" }} gap="8">
                    <GridItem>
                        <Box bg="white" p="3" rounded="3xl" border="3px solid" borderColor="black">
                            <Box
                                bg="linear-gradient(144.87deg, #0C0524 24.82%, #2E138A 99.41%)"
                                rounded="xl"
                                py="60"
                                px={{ base: "20", md: "24", lg: "28", xl: "32" }}
                            >
                                <Center>
                                    <Image src="images/logo/logo-about.png" alt="logo" />
                                </Center>
                            </Box>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box mb="6">
                            <Heading
                                fontFamily="bestime"
                                fontSize={{
                                    base: "xl",
                                    md: "2xl",
                                    lg: "3xl",
                                }}
                                color="brand.text.black"
                                fontWeight="normal"
                                mb="2"
                            >
                                Pixel Space Digital Creative
                            </Heading>
                            <Text
                                fontFamily="inter"
                                fontSize={{
                                    base: "sm",
                                    sm: "sm",
                                    md: "sm",
                                    lg: "md",
                                }}
                                color="brand.text.black"
                                fontWeight="normal"
                            >
                                Digital Creative Company
                            </Text>
                        </Box>

                        <Box spaceY={8}>
                            <Box
                                bg="white"
                                p="6"
                                rounded="xl"
                                border="3px solid"
                                borderColor="black"
                                minH="462px"
                            >
                                <Heading
                                    fontFamily="bestime"
                                    fontSize={{
                                        base: "sm",
                                        md: "md",
                                        lg: "xl",
                                    }}
                                    color="brand.text.black"
                                    fontWeight="normal"
                                    mb="4"
                                >
                                    About Pixel Space Digital Creative
                                </Heading>

                                <Text
                                    color="brand.text.black"
                                    fontSize={{
                                        base: "xs",
                                        md: "sm",
                                        lg: "md"
                                    }}
                                    fontFamily="inter"
                                    lineHeight="1.6"
                                >
                                    Pixel Space Digital Creative. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    <br /><br />
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    <br /><br />
                                    Pixel Space Digital Creative. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </Text>
                            </Box>
                            <SosmedCard sosmedImage={sosmedImage} sosmedLink={sosmedLink} />
                        </Box>
                    </GridItem>
                </Grid>
                <Box mt="60vh" mb="20vh" spaceY="50vh">
                    <Flex
                        justifyContent="start"
                        mr="40"
                        display={{ base: "none", lg: "flex" }}
                    >
                        <Image
                            src="/images/float/bird-about1.svg"
                            alt="bird"
                            w="8%"
                            h="auto"
                            right="15%"
                        />
                    </Flex>
                    <Flex
                        justifyContent="start"
                        mr="40"
                        display={{ base: "none", lg: "flex" }}
                    >
                        <Image
                            src="/images/float/bird-about2.svg"
                            alt="bird"
                            w="10%"
                            h="auto"
                            right="15%"
                        />
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
}