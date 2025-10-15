import BackgroundCloud from "@/components/background/BackgroundCloud";
import Footer from "@/components/Footer/Footer";
import HeaderPixel from "@/components/Headers/HeaderPixel";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import AboutPixel from "@/components/cards/pixel/AboutPixel";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import ProfilePixel from "@/components/cards/pixel/ProfilePixel";
import BirdPixel from "@/components/cards/pixel/BirdPixel";
import SosmedCard from "@/components/cards/profile/SosmedCard";

export default function AboutPage() {
  const sosmedImage = [
    "images/sosmed/instagram.png",
    "images/sosmed/facebook.png",
    "images/sosmed/discord.png",
  ]

  const sosmedLink = [
    "https://www.instagram.com/username",
    "https://www.facebook.com/username",
    "https://discord.gg/example",
  ];

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
          <Container
            maxW="9xl" px="8"
            position="relative"
            zIndex={1}
          >
            <HeaderPixel />
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 3fr" }} gap="8">
              <GridItem>
                <ProfilePixel />
              </GridItem>

              <GridItem>
                <AboutPixel />
                <SosmedCard sosmedImage={sosmedImage} sosmedLink={sosmedLink} />
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