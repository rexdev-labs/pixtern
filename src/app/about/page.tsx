import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { fetchData } from "@/utils/fetchData";
import BackgroundCloud from "@/components/background/BackgroundCloud";
import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import AboutPixel from "@/components/cards/pixel/AboutPixel";
import ProfilePixel from "@/components/cards/pixel/ProfilePixel";
import BirdPixel from "@/components/cards/pixel/BirdPixel";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import SocialMediaCard from "@/components/cards/profile/SocialMediaCard";
import qs from "qs";

import type { AboutPageResponse } from "@/types/api/response/aboutPageResponse";
import type { GlobalSite } from "@/types/api/global";
import type { Metadata } from "next";

async function getAboutPageData() {
  const query = qs.stringify({
    populate: {
      socialMedia: {
        populate: "*",
      },
    },
  });

  return await fetchData<AboutPageResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/company-profile?${query}`,
    {
      next: { revalidate: 60 },
    }
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { data: globalData } = await fetchData<GlobalSite>(
    `${process.env.NEXT_PUBLIC_API_URL}/global`,
    {
      next: { revalidate: 60 },
    }
  );

  return {
    title: globalData.siteName,
    description: globalData.siteDescription,
  };
}

export default async function AboutPage() {
  const data = await getAboutPageData();

  return (
    <>
      <Navbar />
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
              <Header
                text="Tagline Pixel Space"
                variant="single"
                color="brand.text.blue"
              />
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
    </>
  );
}
