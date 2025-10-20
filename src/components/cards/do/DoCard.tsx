"use client"

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

interface DoItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface DoCardProps {
    doItem: DoItem;
    index: number;
}

export default function DoCard({ doItem, index }: DoCardProps) {
    const doRef = useRef(null);
    
    const cardClass = `card-do-${index}`;
    const boxClass = `box-do-${index}`;
    const boxImageClass = `box-image-${index}`;
    const boxTitleClass = `box-title-${index}`;
    const imageClass = `image-do-${index}`;
    const headingClass = `heading-do-${index}`;
    const textClass = `text-do-${index}`;
    const splitLineClass = `split-line-${index}`;

    useGSAP(
        () => {
            gsap.set(`.${cardClass}`, { opacity: 0, y: 150 });
            gsap.set(`.${boxClass}`, { opacity: 0, y: 50 });
            gsap.set(`.${boxImageClass}`, { opacity: 0, scale: 0.8 });
            gsap.set(`.${boxTitleClass}`, { opacity: 0 });

            const headingSplit = new SplitText(`.${headingClass}`, {
                type: "chars",
            });

            new SplitText(`.${textClass}`, {
                type: "lines",
                linesClass: splitLineClass,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: `.${cardClass}`,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            });

            tl.to(`.${cardClass}`, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
            })
            .to(`.${boxClass}`, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
            }, "-=0.3")
            .to(`.${boxImageClass}`, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.5)",
            }, "-=0.4")
            .to(`.${boxTitleClass}`, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            }, "-=0.3")
            .from(headingSplit.chars, {
                opacity: 0,
                y: 20,
                stagger: 0.03,
                duration: 0.5,
                ease: "power2.out",
            }, "-=0.2")
            .from(`.${splitLineClass}`, {
                opacity: 0,
                y: 10,
                stagger: 0.05,
                duration: 0.4,
                ease: "power2.out",
            }, "-=0.3");
        },
        { scope: doRef, dependencies: [index] }
    );

    return (
        <Box className={cardClass} ref={doRef}>
            <Box
                className={boxClass}
                bg="white"
                rounded="2xl"
                border="3px solid"
                borderColor="brand.bg.black"
                p={{ base: "6", lg: "8" }}
            >
                <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 4, md: 6 }}
                >
                    <Box
                        className={boxImageClass}
                        flex={{ base: "1", md: "2", lg: "1" }}
                        minW={{ base: "100%", md: "0" }}
                    >
                        <Box
                            bg="brand.bg.anothergray"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            rounded="xl"
                            h={{ base: "auto", md: "100%" }}
                            p={{ base: "6", md: "8", lg: "10" }}
                            minH={{ base: "200px", md: "250px" }}
                        >
                            <Image
                                className={imageClass}
                                src={doItem.image}
                                alt={doItem.title}
                                boxSize={{ base: "60%", md: "80%", lg: "100%" }}
                                objectFit="contain"
                            />
                        </Box>
                    </Box>

                    <Box
                        className={boxTitleClass}
                        flex={{ base: "1", md: "2", lg: "3" }}
                        minW={{ base: "100%", md: "0" }}
                    >
                        <Box
                            bg="brand.bg.anothergray"
                            rounded="xl"
                            px={{ base: "4", md: "6", lg: "10" }}
                            py={{ base: "4", md: "6", lg: "8" }}
                            h="100%"
                            minH={{ base: "400px", md: "250px" }}
                        >
                            <Heading
                                className={headingClass}
                                fontFamily="Inter"
                                fontWeight="extrabold"
                                fontSize={{ base: "xl", md: "2xl" }}
                                lineHeight="short"
                                mb={{ base: "4", md: "6" }}
                            >
                                {doItem.title}
                            </Heading>

                            <Text
                                className={textClass}
                                fontFamily="Inter"
                                fontWeight="medium"
                                fontSize={{ base: "sm", md: "md" }}
                                lineHeight="base"
                            >
                                {doItem.description}
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}