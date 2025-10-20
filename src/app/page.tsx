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
import { fetchData, fetchGlobalData } from "@/utils/fetchData";

import type { HomepageResponse } from "@/types/api/response/homepageResponse";
import type { Metadata } from "next";

async function getHomepageData() {
  return await fetchData<HomepageResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/homepage`,
    {
      next: { revalidate: 60 },
    }
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { data: globalData } = await fetchGlobalData();

  return {
    title: globalData.siteName,
    description: globalData.siteDescription,
  };
}

export default async function Home() {
  const { data: homepageData } = await getHomepageData();

  return (
    <>
      <Navbar theme="dark" />
      <ScrollSmootherWrapper>
        <HeroSection data={homepageData.heroSection} />
        <RocketParallax />

        <AboutSection data={homepageData.aboutSection} />
        <ProfileSection data={homepageData.profileSection} />
        <DoSection data={homepageData.whatWeDoSection} />
        <ProjectSection data={homepageData.projectSection} />
        <ClientSection data={homepageData.testimonialSection} />
        <Footer />
      </ScrollSmootherWrapper>
    </>
  );
}
