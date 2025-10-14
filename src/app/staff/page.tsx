"use client";

import { Box, Container, Heading, Text, SimpleGrid, VStack, Flex } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";
import StaffCard from "@/components/cards/StaffCard";
import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { splitTextFirst, splitTextTwo } from "@/utils/splitText";
import { Image } from "@/components/Image";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

interface TeamMember {
    id: number;
    name: string
    charImage: string;
    realImage: string;
    bg: string;
    bgImage: string;
}

export default function StaffPage() {
    const containerRef = useRef(null);

    const [splitFirst, rest] = useMemo(
        () => splitTextTwo("Meet Our Creative Team"),
        []
    );

    useGSAP(
        () => {
            gsap.set(".scramble-meet", { text: "" });
            gsap.set(".scramble-creative", { text: "" });

            ScrollTrigger.create({
                trigger: ".title-staff",
                start: "top 85%",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
                animation: gsap
                    .timeline()
                    .to(".scramble-meet", {
                        duration: 1.2,
                        scrambleText: {
                            text: splitFirst,
                            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                            revealDelay: 0.5,
                            speed: 0.4,
                        },
                    })
                    .to(
                        ".scramble-creative",
                        {
                            duration: 1.5,
                            scrambleText: {
                                text: rest,
                                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                                revealDelay: 0.5,
                                speed: 0.4,
                            },
                        },
                        "-=0.8"
                    )
            });
        },
        {
            scope: containerRef,
        }
    );

    // Data Core Team
    const coreTeam: TeamMember[] = [
        {
            id: 1,
            name: "Rexsi",
            charImage: "/images/char/rexsi.png",
            realImage: "/images/char/rexsiReal.png",
            bg: "brand.bg.blue.primary",
            bgImage: "/images/char/bgRexsi.png",
        },
        {
            id: 2,
            name: "Lita",
            charImage: "/images/char/lita.png",
            realImage: "/images/char/litaReal.png",
            bg: "brand.bg.blue.cyan",
            bgImage: "/images/char/bgLita.png",
        },
        {
            id: 3,
            name: "Firman",
            charImage: "/images/char/firman.png",
            realImage: "/images/char/firmanReal.png",
            bg: "brand.bg.purple",
            bgImage: "/images/char/bgFirman.png",
        },
        {
            id: 4,
            name: "Raihan",
            charImage: "/images/char/raihan.png",
            realImage: "/images/char/raihanReal.png",
            bg: "brand.bg.green.lime",
            bgImage: "/images/char/bgRaihan.png",
        },
        {
            id: 5,
            name: "Sheva",
            charImage: "/images/char/sheva.png",
            realImage: "/images/char/shevaReal.png",
            bg: "brand.bg.green.emelard",
            bgImage: "/images/char/bgSheva.png",
        },
    ];

    // Data Internship Team
    const internshipTeam: TeamMember[] = [
        {
            id: 6,
            name: "Farel",
            charImage: "/images/char/farel.png",
            realImage: "/images/char/farelReal.png",
            bg: "brand.bg.green.mint",
            bgImage: "/images/char/bgFarel.png",
        },
        {
            id: 7,
            name: "Nabil",
            charImage: "/images/char/nabil.png",
            realImage: "/images/char/nabilReal.png",
            bg: "brand.bg.yellow.bright",
            bgImage: "/images/char/bgNabil.png",
        },
        {
            id: 8,
            name: "Tio",
            charImage: "/images/char/tio.png",
            realImage: "/images/char/tioReal.png",
            bg: "brand.bg.blue.cyan",
            bgImage: "/images/char/bgTio.png",
        },
        {
            id: 9,
            name: "Arya",
            charImage: "/images/char/arya.png",
            realImage: "/images/char/aryaReal.png",
            bg: "brand.bg.green.lightAqua",
            bgImage: "/images/char/bgArya.png",
        },
        {
            id: 10,
            name: "Nova",
            charImage: "/images/char/nova.png",
            realImage: "/images/char/novaReal.png",
            bg: "brand.bg.green.softLime",
            bgImage: "/images/char/bgNova.png",
        },
    ];

    return (    
        <Box ref={containerRef} minH="120vh" display="flex" flexDirection="column">
            
            <Box as="main" flex="1">
                <Box
                    bgGradient="linear(to-br, blue.50, purple.50)"
                    py={{ base: 12, md: 20 }}
                    px={4}
                >
                    <Container maxW="6xl">
                        <VStack gap={4} textAlign="center" className="title-staff">
                            <Flex gap={2} flexWrap="wrap" justifyContent="center">
                                <Heading
                                    className="scramble-meet"
                                    as="h1"
                                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                    fontFamily="bestime"
                                    fontWeight="light"
                                    color="brand.text.black"
                                >
                                    {splitFirst}
                                </Heading>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <Heading
                                        className="scramble-creative"
                                        as="h1"
                                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                                        fontFamily="bestime"
                                        fontWeight="light"
                                        color="brand.text.blue"
                                    >
                                        {rest}
                                    </Heading>
                                </Box>
                            </Flex>
                        </VStack>
                    </Container>
                </Box>

                {/* Core Team Section */}
                <Box py={{ base: 12, md: 16 }} px={4} >
                    <Container maxW="6xl">
                        <VStack gap={12}>
                            <VStack gap={4}>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
                                    fontFamily="bestime"
                                    color="brand.text.black"
                                    textAlign="center"
                                >
                                    Our Core Team
                                </Heading>
                                <Image
                                    className="underline-staff"
                                    position="absolute"
                                    top="7"
                                    src="/images/bg/underline-core.png"
                                    w={{ base: "32", md: "48" }}
                                    mt={{ base: "-1.5", md: "0" }}
                                    alt="underline"
                                    zIndex={2}
                                />
                            </VStack>
                            <Image
                                className="bird-float"
                                src="/images/float/birdDo.png"
                                w={{ base: "16", md: "20", lg: "24" }}
                                h={{ base: "16", md: "20", lg: "24" }}
                                position="absolute"
                                top="80"
                                left="32"
                                alt="bird-wing-up"
                                objectFit="contain"
                            />
                            <VStack gap={{ base: 4, md: 6, lg: 8 }}>
                                {/* Baris pertama - 3 cards */}
                                <SimpleGrid
                                    columns={3}
                                    gapX={{ base: 4, md: 6, lg: 8 }}
                                    justifyItems="center"
                                >
                                    {coreTeam.slice(0, 3).map((member) => (
                                        <StaffCard
                                            key={member.id}
                                            name={member.name}
                                            charImage={member.charImage}
                                            realImage={member.realImage}
                                            bg={member.bg}
                                            bgImage={member.bgImage}
                                        />
                                    ))}
                                </SimpleGrid>

                                {/* Baris kedua - 2 cards (centered) */}
                                <Flex
                                    gap={{ base: 4, md: 6, lg: 8 }}
                                    justifyContent="center"
                                >
                                    {coreTeam.slice(3, 5).map((member) => (
                                        <StaffCard
                                            key={member.id}
                                            name={member.name}
                                            charImage={member.charImage}
                                            realImage={member.realImage}
                                            bg={member.bg}
                                            bgImage={member.bgImage}
                                        />
                                    ))}
                                </Flex>
                            </VStack>
                        </VStack>
                    </Container>
                </Box>

                {/* Internship Team Section */}
                <Box
                    py={{ base: 12, md: 16 }}
                    px={4}
                >
                    <Container maxW="6xl">
                        <VStack gap={12}>
                            <VStack gap={4}>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
                                    fontFamily="bestime"
                                    color="brand.text.black"
                                    textAlign="center"
                                >
                                    2025 Internship Team
                                </Heading>
                                <Image
                                    className="underline-intern"
                                    position="absolute"
                                    top="7"
                                    src="/images/bg/underline-core.png"
                                    w={{ base: "32", md: "48" }}
                                    mt={{ base: "-1.5", md: "0" }}
                                    alt="underline"
                                    zIndex={2}
                                />
                            </VStack>
                            <Image
                                className="bird-float"
                                src="/images/float/bird-profile-wing-up.png"
                                w={{ base: "16", md: "20", lg: "18" }}
                                h={{ base: "16", md: "20", lg: "18" }}
                                position="absolute"
                                top="0"
                                left="0"
                                alt="bird-wing-up"
                                objectFit="contain"
                            />
                            <Image
                                className="bird-float"
                                src="/images/float/birdDo.png"
                                w={{ base: "16", md: "20", lg: "28" }}
                                h={{ base: "16", md: "20", lg: "28" }}
                                position="absolute"
                                top="0"
                                right="0"
                                alt="bird-wing-up"
                                objectFit="contain"
                            />
                            <VStack gap={{ base: 4, md: 6, lg: 8 }}>
                                {/* Baris pertama - 3 cards */}
                                <SimpleGrid
                                    columns={3}
                                    gapX={{ base: 4, md: 6, lg: 8 }}
                                    justifyItems="center"
                                >
                                    {internshipTeam.slice(0, 3).map((member) => (
                                        <StaffCard
                                            key={member.id}
                                            name={member.name}
                                            charImage={member.charImage}
                                            realImage={member.realImage}
                                            bg={member.bg}
                                            bgImage={member.bgImage}
                                        />
                                    ))}
                                </SimpleGrid>

                                {/* Baris kedua - 2 cards (centered) */}
                                <Flex
                                    gap={{ base: 4, md: 6, lg: 8 }}
                                    justifyContent="center"
                                >
                                    {internshipTeam.slice(3, 5).map((member) => (
                                        <StaffCard
                                            key={member.id}
                                            name={member.name}
                                            charImage={member.charImage}
                                            realImage={member.realImage}
                                            bg={member.bg}
                                            bgImage={member.bgImage}
                                        />
                                    ))}
                                </Flex>
                            </VStack>
                        </VStack>
                    </Container>
                </Box>

            </Box>

            {/* <Footer /> */}
        </Box>
    );
}