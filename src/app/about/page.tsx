import BackgroundCloud from "@/components/background/BackgroundCloud";
import Footer from "@/components/Footer/Footer";
import HeaderPixel from "@/components/header/HeaderPixel";
import AboutPixel from "@/components/cards/pixel/AboutPixel";
import ProfilePixel from "@/components/cards/pixel/ProfilePixel";
import BirdPixel from "@/components/cards/pixel/BirdPixel";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import SocialMediaCard from "@/components/cards/profile/SocialMediaCard";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import qs from "qs";

import type { ApiResponse } from "@/types/api/response/apiResponse";
import type { AboutPageResponse } from "@/types/api/response/aboutPageResponse";

async function getAboutPageData(): Promise<ApiResponse<AboutPageResponse>> {
  const query = qs.stringify({
    populate: {
      socialMedia: {
        populate: "*"
      }
    },
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/company-profile?${query}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function AboutPage() {
  const data = await getAboutPageData();

  return (
    <ScrollSmootherWrapper>
      <BackgroundCloud>
        <Box
          position="relative"
          pt={{ base: "80px", md: "100px" }}
          pb="60px"
          overflow="hidden"
          zIndex={1}
        >
          <Container maxW="9xl" px="8" position="relative" zIndex={1}>
            <HeaderPixel />
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 3fr" }}
              gap="8"
            >
              <GridItem>
                <ProfilePixel />
              </GridItem>

              <GridItem>
                <AboutPixel />
                <SocialMediaCard socialMedia={data.data.socialMedia || []} />
              </GridItem>
            </Grid>

            <BirdPixel />
          </Container>
        </Box>
      </BackgroundCloud>
      <Footer />
    </ScrollSmootherWrapper>
  );
}
