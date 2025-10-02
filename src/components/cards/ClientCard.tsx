"use client";

import { Box, Text, Avatar, Flex, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export interface ClientCardProps {
    username: string;
    date: string;
    text: string;
    color: string;
    textColor?: string;
    rating: number;
    zIndex?: number;
    rotate?: number;

}

export function ClientCard({ username, date, text, color, textColor = "white", rating, zIndex, rotate = 0, }: ClientCardProps) {
    return (
        <Flex
            bg={color}
            p={4}
            rounded="xl"
            boxShadow={"1px 1px 0px  #000, -1px -1px 0px  #000, 1px -1px 0px  #000, -1px 1px 0px  #000"}
            align="flex-start"
            position="relative"
            gap={4}
            color={textColor}
            zIndex={1}
            transform={`rotate(${rotate}deg)`}
            
        >
            <Avatar.Root>
                <Avatar.Fallback>{username.charAt(0)}</Avatar.Fallback>
            </Avatar.Root>

            <Box>
                <Flex align="center"  gap={3}>
                    <Text fontWeight="bold">{username}</Text>
                    <Text fontSize="xs" opacity={0.8}>
                        {date}
                    </Text>
                </Flex>

                <Flex align="center" mt={2} gap={2}>
                    <Text>{text}</Text>
                </Flex>

                <Flex mt={3} justify="flex-end" gap={1}>
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <Icon
                                key={i}
                                as={FaStar}
                                color={i < rating ? "yellow.300" : "gray.300"}
                            />
                        ))}
                </Flex>
            </Box>
        </Flex>
    );
}
