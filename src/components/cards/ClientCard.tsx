"use client";

import { Box, Text, Avatar, Flex, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { forwardRef } from "react";

export interface ClientCardProps {
    username: string;
    date: string;
    text: string;
    color: string;
    textColor?: string;
    outline?: string;
    rating: number;
    zIndex?: number;
    rotate?: number;
    top?: any;
    left?: any;
    right?: any;
    bottom?: any;
    position?: any;
    filter?: string;
}

export const ClientCard = forwardRef<HTMLDivElement, ClientCardProps>(({
    username,
    date,
    text,
    color,
    textColor = "brand.text.black",
    rating,
    zIndex,
    rotate = 0,
    outline,
    top,
    left,
    right,
    bottom,
    position,
    filter,
}, ref) => {
    return (
        <Flex
            ref={ref}
            bg={color}
            p={3}
            rounded="xl"
            align="flex-start"
            position={position || "absolute"}
            gap={4}
            outline={outline}
            color={textColor}
            zIndex={zIndex}
            transform={{ base: `rotate(${rotate}deg)`, md: `rotate(${rotate}deg)`, lg: `rotate(${rotate}deg)` }}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
            w={{ base: "85vw", sm: "400px", md: "510px", lg: "500npx" }}
            maxW={{ base: "85vw", sm: "400px", md: "510px", lg: "510px" }}
            filter={filter}
        >
            <Avatar.Root w={12} h={12} color="brand.text.black" bg="brand.bg.black">
                <Avatar.Fallback>{username.charAt(0)}</Avatar.Fallback>
            </Avatar.Root>

            <Box flex="1">
                <Box>
                    <Text fontFamily="heading" fontWeight="bold" fontSize="xl">{username}</Text>
                    <Text fontSize="xs" opacity={0.8}>
                        {date}
                    </Text>
                </Box>

                <Box mt={2} maxW={{ base: "85%", md: "80%", lg: "80%" }}>
                    <Text
                        fontSize={{ base: "sm", md: "md" }}
                        whiteSpace="normal"
                        wordBreak="break-word"
                        lineHeight="short"
                    >
                        {text}
                    </Text>
                </Box>

                <Flex mt={0} justify="flex-end" gap={1}>
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <Box position="relative" key={i} w="18px" h="18px">
                                {/* Outline Star (selalu tampil) */}
                                <Icon
                                    as={FaStar}
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    boxSize="100%"
                                    color="brand.text.black"
                                    opacity={0.8}
                                    stroke="black"
                                    fill="transparent"
                                    strokeWidth="40"
                                />
                                {/* Filled Star (hanya untuk yang terisi) */}
                                {i < rating && (
                                    <Icon
                                        as={FaStar}
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        boxSize="100%"
                                        color="brand.text.black"
                                    />
                                )}
                            </Box>
                        ))}
                </Flex>
            </Box>
        </Flex>
    );
});

ClientCard.displayName = "ClientCard";