import { notFound } from "next/navigation";
import { profiles } from "@/data/profileData";
import PortofolioCard from "@/components/cards/profile/PortofolioCard";
import ProfileCard from "@/components/cards/profile/ProfileCard";
import SkillCard from "@/components/cards/profile/SkillCard";
import SosmedCard from "@/components/cards/profile/SocialMediaCard";
import Footer from "@/components/Footer/Footer";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import HeaderProfile from "@/components/header/HeaderProfile";
import AboutCard from "@/components/cards/profile/AboutCard";
import AchievEduCard from "@/components/cards/profile/AchievEduCard";
import SeeOthersCard from "@/components/cards/profile/SeeOthersCard";
import BackgroundCloud from "@/components/background/BackgroundCloud";
import { QuotesCard } from "@/components/cards/QuotesCard";

interface ProfilePageProps {
  params: { slug: string };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const profile = profiles.find((p) => p.slug === params.slug);

  if (!profile) return notFound();

  return (
    <BackgroundCloud>
      <HeaderProfile />

      <Container maxW="100%" px={{ base: "8", md: "8", lg: "20" }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 3fr" }}
          columnGap={{ base: 4, md: 10, lg: 20 }}
          rowGap={{ base: 8, md: 10, lg: 12 }}
        >
          <GridItem>
            <ProfileCard
              realImage={profile.realImage}
              charImage={profile.charImage}
              charPosition={profile.charPosition}
              ornamenImage={profile.ornamenImage}
              ornamenPosition={profile.ornamenPosition}
            />
          </GridItem>

          <GridItem>
            <AboutCard
              name={profile.name}
              fullName={profile.fullName}
              job={profile.job}
              desc={profile.desc}
              ornamenFirst={profile.ornamenFirst}
              ornamenSecond={profile.ornamenSecond}
            />
            <SosmedCard
              sosmedImage={profile.sosmedImage}
              sosmedLink={profile.sosmedLink}
            />
          </GridItem>

          <GridItem>
            <AchievEduCard data={profile.achievEdu} />
          </GridItem>

          <GridItem>
            <PortofolioCard portfolioImage={profile.portofolioImage} />
            <SkillCard skillImage={profile.skillImage} />
          </GridItem>
        </Grid>
      </Container>

      <QuotesCard quote={profile.quote} />
      <SeeOthersCard />
      <Footer />
    </BackgroundCloud>
  );
}
