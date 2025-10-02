"use client";

import { Box, Text, Stack, Heading } from "@chakra-ui/react";
import { ClientCard } from "../cards/ClientCard";
import { degrees } from "framer-motion";

const feedbacks = [
    {
        username: "Username",
        date: "01-05-2025",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        color: "brand.bg.yellow.primary",
        rating: 4,
        zIndex: 1,
        rotate: 1.9,
        textColor: "black.900",
    },
    {
        username: "Username",
        date: "01-05-2025",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        color: "pink.400",
        rating: 3,
        zIndex: 2,
    },
    {
        username: "Username",
        date: "01-05-2025",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        color: "blue.400",
        rating: 5,
        zIndex: 3,
    },
];

export default function ClientSection() {
    return (
        <Box position="relative" py={20} bg="white" overflow="hidden">
            {/* Background Text */}
            <Text
                fontFamily="cursive"
                fontSize={{ base: "6xl", md: "8xl" }}
                fontWeight="bold"
                textShadow={
                    "1px 1px 0px  #CED6E1, -1px -1px 0px  #CED6E1, 1px -1px 0px  #CED6E1, -1px 1px 0px  #CED6E1"
                }
                color="white"
                position="absolute"
                top="65%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={0}
                whiteSpace="nowrap"
            >
                <br />
                FEEDBACK
                <br />
                FEEDBACK
                <br />
                FEEDBACK
                <br />
                FEEDBACK
                <br />
                FEEDBACK
                <br />
                FEEDBACK
            </Text>

            {/* Section Heading */}
            <Box textAlign="center" mb={10} zIndex={1} position="relative">
                <Heading fontSize="xxx-large" fontWeight="extrabold"  color="black">
                    CLIENT
                </Heading>
                <Text
                    as="span"
                    bg="brand.bg.yellow.primary"
                    color="black"
                    px={3}
                    py={1}
                    fontSize="sm"
                    fontWeight="bold"
                    rounded="md"
                    ml={2}
                >
                    Feedback
                </Text>
            </Box>

            {/* Cards */}
            <Stack gap={6} maxW="lg" mx="auto" zIndex={1} position="relative">
                {feedbacks.map((fb, idx) => (
                    <ClientCard key={idx} {...fb} />
                ))}
            </Stack>
        </Box>
    );
}
