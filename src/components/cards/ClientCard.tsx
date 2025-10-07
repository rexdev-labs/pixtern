"use client";

import { Box, Text, Avatar, Flex, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import type { Ref } from "react";
import type { Testimonial } from "@/types/api/homepage/testimonialSection";

export interface ClientCardProps {
  ref: Ref<HTMLDivElement | null>;
  color: string;
  textColor?: string;
  zIndex?: number;
  rotate?: number;
  top?: any;
  left?: any;
  right?: any;
  bottom?: any;
  position?: any;
  filter?: string;
}

export const ClientCard = (
  props: ClientCardProps & Omit<Testimonial, "id">
) => {
  return (
    <Flex
      ref={props.ref}
      bg={props.color}
      p={3}
      rounded="xl"
      align="flex-start"
      position={props.position || "absolute"}
      gap={4}
      outline="1.5px solid #080427"
      color={props.textColor}
      zIndex={props.zIndex}
      transform={{
        base: `rotate(${props.rotate}deg)`,
        md: `rotate(${props.rotate}deg)`,
        lg: `rotate(${props.rotate}deg)`,
      }}
      top={props.top}
      right={props.right}
      bottom={props.bottom}
      left={props.left}
      w={{ base: "85vw", sm: "400px", md: "510px", lg: "500npx" }}
      maxW={{ base: "85vw", sm: "400px", md: "510px", lg: "510px" }}
      filter={props.filter}
    >
      <Avatar.Root w={12} h={12} color="brand.text.black" bg="brand.bg.black">
        {props.avatar.formats?.thumbnail?.url ? (
          <Avatar.Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${props.avatar.formats.thumbnail.url}`}
          />
        ) : (
          <Avatar.Fallback>{props.username.charAt(0)}</Avatar.Fallback>
        )}
      </Avatar.Root>

      <Box flex="1">
        <Box>
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize={{ base: "sm", md: "md", lg: "xl" }}
          >
            {props.username}
          </Text>
          <Text fontSize={{ base: "8px", md: "md", lg: "xs" }} opacity={0.8}>
            {props.date}
          </Text>
        </Box>

        <Box mt={2} maxW={{ base: "100%", md: "80%", lg: "80%" }}>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            whiteSpace="normal"
            wordBreak="break-word"
            lineHeight="short"
          >
            {props.review}
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
                {i < props.rating && (
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
};

ClientCard.displayName = "ClientCard";
