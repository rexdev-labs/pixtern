import PortofolioCard from "@/components/cards/profile/PortofolioCard";
import ProfileCard from "@/components/cards/profile/ProfileCard";
import SkillCard from "@/components/cards/profile/SkillCard";
import SosmedCard from "@/components/cards/profile/SosmedCard";
import Footer from "@/components/Footer/Footer";
import { Box, Container, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import HeaderProfile from "@/components/Headers/HeaderProfile";
import AboutCard from "@/components/cards/profile/AboutCard";
import AchievEduCard from "@/components/cards/profile/AchievEduCard";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import SeeOthersCard from "@/components/cards/profile/SeeOthersCard";

export default function Profile() {
  const profileImage = {
    realImage: "/images/char/JelitaReal.jpg",
    charImage: "/images/char/lita.png",
    charPosition: "left",
    ornamenImage: "/images/float/starProfile.png",
    ornamenPosition: "right",
  };

  const sosmedImage = [
    "/images/logo/instagram.png",
    "/images/logo/facebook.png",
    "/images/logo/discord.png",
    "/images/logo/linkedin.png",
  ];

  const sosmedLink = [
    "https://www.instagram.com/username",
    "https://www.facebook.com/username",
    "https://discord.gg/example",
    "https://www.linkedin.com/in/username",
  ];

  const skillImage = [
    "/images/logo/instagram.png",
    "/images/logo/facebook.png",
    "/images/logo/discord.png",
    "/images/logo/linkedin.png",
  ];

  const portofolioImage = [
    "/images/char/bgArya.png",
    "/images/char/bgNabil.png",
    "/images/char/bgFarel.png",
  ];

  return (
    // <ScrollSmootherWrapper>
    <>
      <HeaderProfile />
      <Container maxW="100%" px={{ base: "8", md: "8", lg: "20" }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 3fr" }}
          columnGap={{ base: 4, md: 10, lg: 20 }}
          rowGap={{ base: 8, md: 10, lg: 12 }}
        >
          <GridItem>
            <ProfileCard {...profileImage} />
          </GridItem>

          <GridItem>
            <AboutCard />
            <SosmedCard sosmedImage={sosmedImage} sosmedLink={sosmedLink} />
          </GridItem>

          <GridItem>
            <AchievEduCard />
          </GridItem>

          <GridItem>
            <PortofolioCard portfolioImage={portofolioImage} />
            <SkillCard skillImage={skillImage} />
          </GridItem>
        </Grid>
      </Container>

      <SeeOthersCard/>

      <Footer />
    {/* </ScrollSmootherWrapper> */}
      </>
  );
}