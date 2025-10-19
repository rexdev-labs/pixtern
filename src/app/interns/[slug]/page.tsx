import { Container, Grid, GridItem } from "@chakra-ui/react";
import { fetchData } from "@/utils/fetchData";
import QuotesCard from "@/components/cards/QuotesCard";
import PortofolioCard from "@/components/cards/profile/PortofolioCard";
import PhotoCard from "@/components/cards/profile/PhotoCard";
import SkillCard from "@/components/cards/profile/SkillCard";
import SocialMediaCard from "@/components/cards/profile/SocialMediaCard";
import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import AboutCard from "@/components/cards/profile/AboutCard";
import EducationCard from "@/components/cards/profile/EducationCard";
import SeeOthersCard from "@/components/cards/profile/SeeOthersCard";
import BackgroundCloud from "@/components/background/BackgroundCloud";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import Header from "@/components/header/Header";

import type { Intern } from "@/types/api/person/intern";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

interface InternWithSeeOthers extends Intern {
  seeOthers: Intern[];
}

async function getInternData(slug: string) {
  return await fetchData<InternWithSeeOthers>(
    `${process.env.NEXT_PUBLIC_API_URL}/interns/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );
}

export default async function ProfilePage({
  params,
}: Readonly<ProfilePageProps>) {
  const { slug } = await params;
  const { data: person } = await getInternData(slug);

  return (
    <ScrollSmootherWrapper>
      <BackgroundCloud>
        <Navbar />

        <Header
          text="Meet Our Creative Team"
          variant="double"
          color="brand.text.orange"
        />

        <Container maxW="100%" px={{ base: "8", md: "8", lg: "20" }}>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 3fr" }}
            columnGap={{ base: 4, md: 10, lg: 20 }}
            rowGap={{ base: 8, md: 10, lg: 12 }}
          >
            <GridItem>
              <PhotoCard
                originalImage={person.detail!.originalImage}
                avatarImage={person.detail!.avatarImage}
                avatarPosition={person.decoration!.avatarPosition}
                photoOrnamentPosition={person.decoration!.photoOrnamentPosition}
                photoOrnament={person.decoration!.photoOrnament}
              />
            </GridItem>

            <GridItem>
              <AboutCard
                name={person.name}
                fullName={person.fullName}
                role={person.detail!.role}
                aboutMe={person.detail!.aboutMe!}
                aboutUsFirstOrnament={person.decoration!.aboutUsFirstOrnament}
                aboutUsSecondOrnament={person.decoration!.aboutUsSecondOrnament}
              />
              <SocialMediaCard socialMedia={person.socialMedia!} />
            </GridItem>

            <GridItem>
              <EducationCard educations={person.educations!} />
            </GridItem>

            <GridItem>
              {person.detail?.portofolio && (
                <PortofolioCard portofolio={person.detail.portofolio} />
              )}
              {person.detail?.skills && (
                <SkillCard skills={person.detail?.skills} />
              )}
            </GridItem>
          </Grid>
        </Container>

        {person.quotes && <QuotesCard quotes={person.quotes} />}
        <SeeOthersCard others={person.seeOthers} />
        <Footer />
      </BackgroundCloud>
    </ScrollSmootherWrapper>
  );
}
