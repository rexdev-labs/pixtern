import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProfileSection from "@/components/sections/ProfileSection";
import DoSection from "@/components/sections/DoSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ClientSection from "@/components/sections/ClientSection";
import RocketParallax from "@/components/animations/RocketParallax";
import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";
import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import { fetchData } from "@/utils/fetchData";

import type { HomepageResponse } from "@/types/api/response/homepageResponse";

async function getHomepageData() {
  return await fetchData<HomepageResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/homepage`,
    {
      next: { revalidate: 60 },
    }
  );
}

export default async function Home() {
  const response = await getHomepageData();

  return (
    <ScrollSmootherWrapper>
      <Navbar />

      <HeroSection data={response.data.heroSection} />
      <RocketParallax />

      <AboutSection data={response.data.aboutSection} />
      <ProfileSection data={response.data.profileSection} />
      <DoSection data={response.data.whatWeDoSection} />
      <ProjectSection data={response.data.projectSection} />
      <ClientSection data={response.data.testimonialSection} />
      <Footer />
    </ScrollSmootherWrapper>
  );
}
