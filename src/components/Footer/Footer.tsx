import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  Image,
  Separator,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FooterNavigationGroup } from "./FooterNavigationGroup";
import IlustrationImage from "./IlustrationImage";
import qs from "qs";

import type { GlobalSite } from "@/types/api/global";
import type { ApiResponse } from "@/types/api/response/apiResponse";

async function getGlobalSiteData(): Promise<ApiResponse<GlobalSite>> {
  const query = qs.stringify({
    populate: {
      footer: {
        populate: {
          logo: {
            populate: "*",
          },
          socialMedia: {
            populate: "*",
          },
          groups: {
            populate: "*",
          },
        },
      },
    },
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/global?${query}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Footer() {
  const response = await getGlobalSiteData();
  const footer = response.data.footer;

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
            justify="space-evenly"
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
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${footer.logo.url}`}
                alt="Pixel Space"
                w={{
                  base: "28",
                  sm: "30",
                  md: "36",
                  lg: "38",
                  xl: "40",
                }}
              />
              {footer.message && (
                <Text
                  fontSize={{ base: "xs", sm: "xs", md: "sm" }}
                  fontWeight="normal"
                  fontFamily="heading"
                  lineHeight="1.6"
                  pr={{
                    base: "20",
                    sm: "16",
                    md: "28",
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
                  {footer.message}
                </Text>
              )}
              {footer.socialMedia && (
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
                  {footer.socialMedia.map((socialMedia) => {
                    return (
                      <ChakraLink
                        key={socialMedia.platform}
                        as="a"
                        href={socialMedia.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        _hover={{ textDecoration: "none" }}
                      >
                        <IconButton
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
                          aria-label={`Follow us on ${socialMedia.platform}`}
                        >
                        </IconButton>
                      </ChakraLink>
                    );
                  })}
                </HStack>
              )}
            </Box>

            {footer.groups && (
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
                {footer.groups.map((group, index) => (
                  <Flex key={group.id}>
                    <FooterNavigationGroup group={group} />

                    {index + 1 !== footer.groups?.length && (
                      <Separator
                        orientation="vertical"
                        w="0.5px"
                        h="auto"
                        ml={{
                          base: "4",
                          sm: "8",
                          md: "10",
                          lg: "10",
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
                    )}
                  </Flex>
                ))}
              </Flex>
            )}
          </Stack>

          {footer.socialMedia && (
            <HStack
              gap={{ base: "3", sm: "3" }}
              mt={{ base: "8", sm: "10" }}
              justify="flex-start"
              display={{ base: "flex", md: "none" }}
            >
              {footer.socialMedia.map((socialMedia) => {
                return (
                  <ChakraLink
                    key={socialMedia.platform}
                    as="a"
                    href={socialMedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    _hover={{ textDecoration: "none" }}
                  >
                    <IconButton
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
                      aria-label={`Follow us on ${socialMedia.platform}`}
                    >
                    </IconButton>
                  </ChakraLink>
                );
              })}
            </HStack>
          )}
        </Container>
      </Box>
    </>
  );
}