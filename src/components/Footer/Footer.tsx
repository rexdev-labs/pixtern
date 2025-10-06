"use client";
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FootLink from "./FootLink";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import IlustrationImage from "./IlustrationImage";

export default function Footer() {
  return (
    <>
      <IlustrationImage />
      <Box
        zIndex={20}
        bg="brand.bg.green.forest"
        color="brand.text.white"
        position="relative"
        overflow="hidden"
        px={{ md: "6", xl: "20", "2xl": "0" }}
      >
        <Image
          src="/images/bg/flower.png"
          alt=""
          position="absolute"
          bottom={{
            base: "2%",
            sm: "-3%",
            md: "-2%",
            lg: "-1%",
            xl: "-1%",
          }}
          right={{
            base: "-30%",
            sm: "-25%",
            md: "-18%",
            lg: "-15%",
            xl: "-14%",
          }}
          opacity={{
            base: "0.05",
            sm: "0.07",
            md: "0.08",
            lg: "0.1",
            xl: "0.1",
          }}
          w={{
            base: "100%",
            sm: "75%",
            md: "70%",
            lg: "65%",
            xl: "60%",
          }}
          h="auto"
          pointerEvents="none"
        />

        <Container
          maxW="container.xl"
          py={{ base: "10", sm: "12", md: "16", lg: "18", xl: "20" }}
          position="relative"
          zIndex="1"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-around"
            mb={{ base: "6", sm: "7", md: "8", lg: "9", xl: "10" }}
            gap={{
              base: "6",
              sm: "7",
              md: "10",
              lg: "11",
              xl: "12",
            }}
          >
            <Box
              maxW={{ base: "full", md: "xs" }}
              display="flex"
              flexDirection="column"
              spaceY="14"
            >
              <Image
                src="/images/logo/pixel.png"
                alt="Pixel Space"
                w={{
                  base: "28",
                  sm: "30",
                  md: "36",
                  lg: "38",
                  xl: "40",
                }}
              />
              <Text
                fontSize={{ base: "xs", sm: "xs", md: "sm" }}
                fontWeight="normal"
                fontFamily="heading"
                lineHeight="1.6"
                pr={{
                  base: "0",
                  sm: "4",
                  md: "12",
                  lg: "16",
                  xl: "20",
                }}
                pb={{
                  base: "6",
                  sm: "8",
                  md: "20",
                  lg: "24",
                  xl: "28",
                }}
              >
                We are creative development with creative people ready to create
                something.
              </Text>
              <HStack
                gap={{ base: "3", sm: "3", md: "4" }}
                mt={{
                  base: "6",
                  sm: "8",
                  md: "16",
                  lg: "18",
                  xl: "20",
                }}
                display={{ base: "none", md: "flex" }}
              >
                <IconButton
                  aria-label="Facebook"
                  rounded="full"
                  border="1px solid"
                  borderColor="brand.text.white"
                  color="brand.text.white"
                  bg="transparent"
                  size={{ base: "sm", sm: "md", md: "md" }}
                  _hover={{
                    bg: "brand.text.white",
                    color: "brand.bg.green.forest",
                  }}
                >
                  <FaFacebookF />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  rounded="full"
                  border="1px solid"
                  borderColor="brand.text.white"
                  color="brand.text.white"
                  bg="transparent"
                  size={{ base: "sm", sm: "md", md: "md" }}
                  _hover={{
                    bg: "brand.text.white",
                    color: "brand.bg.green.forest",
                  }}
                >
                  <FaInstagram />
                </IconButton>
                <IconButton
                  aria-label="YouTube"
                  rounded="full"
                  border="1px solid"
                  borderColor="brand.text.white"
                  color="brand.text.white"
                  bg="transparent"
                  size={{ base: "sm", sm: "md", md: "md" }}
                  _hover={{
                    bg: "brand.text.white",
                    color: "brand.bg.green.forest",
                  }}
                >
                  <FaYoutube />
                </IconButton>
              </HStack>
            </Box>
            <Flex
              direction="row"
              gap={{
                base: "4",
                sm: "5",
                md: "6",
                lg: "7",
                xl: "8",
              }}
              align="flex-start"
              flexWrap={{ base: "wrap", md: "nowrap" }}
            >
              <FootLink
                title="Lorem Ipsum"
                links={[
                  "Lorem Ipsum",
                  "Lorem Ipsum",
                  "Lorem Ipsum",
                  "Lorem Ipsum",
                ]}
              />

              <Box
                w="0.5px"
                h="auto"
                ml={{
                  base: "4",
                  sm: "0",
                  md: "0",
                  lg: "6",
                  xl: "14",
                  "2xl": "32",
                }}
                mb={{
                  base: "0",
                  sm: "0",
                  md: "-8",
                  lg: "-9",
                  xl: "-10",
                }}
                bg="brand.text.white"
                alignSelf="stretch"
              />

              <FootLink
                title="Lorem Ipsum"
                links={[
                  "Lorem Ipsum",
                  "Lorem Ipsum",
                  "Lorem Ipsum",
                  "Lorem Ipsum",
                ]}
              />

              <Box
                w="0.5px"
                h="auto"
                ml={{
                  base: "4",
                  sm: "0",
                  md: "0",
                  lg: "6",
                  xl: "14",
                  "2xl": "32",
                }}
                mb={{
                  base: "0",
                  sm: "0",
                  md: "-8",
                  lg: "-9",
                  xl: "-10",
                }}
                bg="brand.text.white"
                alignSelf="stretch"
              />

              <FootLink
                title="Lorem Ipsum"
                links={[
                  "Lorem Ipsum",
                  "Lorem Ipsum",
                  "Lorem Ipsum",
                  "Lorem Ipsum",
                ]}
              />
            </Flex>
          </Stack>

          <HStack
            gap={{ base: "3", sm: "3" }}
            mt={{ base: "8", sm: "10" }}
            justify="flex-start"
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              aria-label="Facebook"
              rounded="full"
              border="1px solid"
              borderColor="brand.text.white"
              color="brand.text.white"
              bg="transparent"
              size={{ base: "sm", sm: "md" }}
              _hover={{
                bg: "brand.text.white",
                color: "brand.bg.green.forest",
              }}
            >
              <FaFacebookF />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              rounded="full"
              border="1px solid"
              borderColor="brand.text.white"
              color="brand.text.white"
              bg="transparent"
              size={{ base: "sm", sm: "md" }}
              _hover={{
                bg: "brand.text.white",
                color: "brand.bg.green.forest",
              }}
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              aria-label="YouTube"
              rounded="full"
              border="1px solid"
              borderColor="brand.text.white"
              color="brand.text.white"
              bg="transparent"
              size={{ base: "sm", sm: "md" }}
              _hover={{
                bg: "brand.text.white",
                color: "brand.bg.green.forest",
              }}
            >
              <FaYoutube />
            </IconButton>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
