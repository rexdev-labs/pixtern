"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { Image } from "@/components/Image";
import gsap from "gsap";

interface StaffCardProps {
    name: string;
    charImage: string;
    realImage: string;
    bg: string;
    bgImage: string;
    className?: string;
}

export default function StaffCard({
    name,
    charImage,
    realImage,
    bg,
    bgImage,
    className,
}: Readonly<StaffCardProps>) {
    const cardContainerRef = useRef(null);

    const handleEnter = () => {
        if (cardContainerRef.current) {
            gsap.to(cardContainerRef.current, {
                rotateY: 180,
                duration: 0.8,
                ease: "power2.inOut",
            });
        }
    };

    const handleLeave = () => {
        if (cardContainerRef.current) {
            gsap.to(cardContainerRef.current, {
                rotateY: 0,
                duration: 0.8,
                ease: "power2.inOut",
            });
        }
    };

    return (
        <Box
            className={className}
            position="relative"
            cursor="pointer"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{
                perspective: "1000px",
                width: "fit-content",
            }}
        >
            <Box
                ref={cardContainerRef}
                position="relative"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side - Character Image */}
                <Box
                    bg="white"
                    border="2px solid"
                    borderColor="brand.text.black"
                    px={{ base: 1.5, md: 2 }}
                    pt={{ base: 1.5, md: 2 }}
                    rounded={{ base: "2xl", md: "3xl", lg: "3xl" }}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <VStack
                        bg={bg}
                        rounded={{ base: "xl", md: "2xl", lg: "2xl" }}
                        shadow="md"
                        border="2px solid"
                        borderColor="brand.text.black"
                        minW={{ base: "90px", sm: "105px", md: "120px", lg: "175px" }}
                        minH={{ base: "105px", sm: "120px", md: "140px", lg: "205px" }}
                        position="relative"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Image
                            src={charImage}
                            alt={`${name} character`}
                            boxSize={{ base: "126px", sm: "145px", md: "173px", lg: "250px" }}
                            objectFit="cover"
                            objectPosition="center"
                            position="absolute"
                            top={{ base: "-1.5", md: "-2.5" }}
                            left="50%"
                            transform="translateX(-50%)"
                            zIndex={2}
                            pointerEvents="none"
                            overflow="visible"
                        />
                    </VStack>
                    <VStack gap={0} mt={1} pb={2}>
                        <Text
                            fontFamily="bestime"
                            fontWeight="light"
                            textAlign="center"
                            fontSize={{ base: "sm", sm: "md", md: "lg", lg: "2xl" }}
                            color="brand.text.black"
                            lineHeight="shorter"
                        >
                            {name}
                        </Text>
                        <Text
                            fontFamily="bestime"
                            fontWeight="light"
                            textAlign="center"
                            fontSize={{ base: "2xs", sm: "xs", md: "sm", lg: "md" }}
                            color="brand.text.black"
                            opacity={0.7}
                            mt={0.5}
                            lineHeight="shorter"
                        >
                        </Text>
                    </VStack>
                </Box>

                {/* Back Side - Real Image */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    bg="white"
                    border="2px solid"
                    borderColor="brand.text.black"
                    px={{ base: 1.5, md: 2 }}
                    pt={{ base: 1.5, md: 2 }}
                    rounded={{ base: "2xl", md: "3xl", lg: "3xl" }}
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <VStack
                        backgroundImage={`url(${bgImage})`}
                        backgroundSize={{ base: "107%", lg: "102%" }}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        borderRadius="30px"
                        rounded={{ base: "xl", md: "2xl", lg: "2xl" }}
                        border="2px solid"
                        borderColor="brand.text.black"
                        minW={{ base: "90px", sm: "105px", md: "120px", lg: "175px" }}
                        minH={{ base: "105px", sm: "120px", md: "140px", lg: "205px" }}
                        position="relative"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Image
                            src={realImage}
                            alt={`${name} real`}
                            boxSize={{ base: "107px", sm: "122px", md: "143px", lg: "211px" }}
                            objectFit="cover"
                            objectPosition="center"
                            position="absolute"
                            top={{ base: "-1.5", md: "-2", lg: "-2.5" }}
                            left="50%"
                            transform="translateX(-50%)"
                            zIndex={2}
                            pointerEvents="none"
                            overflow="visible"
                        />
                    </VStack>
                    <VStack gap={0} mt={1} pb={2}>
                        <Text
                            fontFamily="bestime"
                            fontWeight="light"
                            textAlign="center"
                            fontSize={{ base: "sm", sm: "md", md: "lg", lg: "2xl" }}
                            color="brand.text.black"
                            position="relative"
                            zIndex={2}
                            lineHeight="shorter"
                        >
                            {name}
                        </Text>
                        <Text
                            fontFamily="bestime"
                            fontWeight="light"
                            textAlign="center"
                            fontSize={{ base: "2xs", sm: "xs", md: "sm", lg: "md" }}
                            color="brand.text.black"
                            opacity={0.7}
                            position="relative"
                            zIndex={2}
                            mt={0.5}
                            lineHeight="shorter"
                        >
                        </Text>
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
}