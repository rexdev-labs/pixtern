import qs from "qs";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProfileSection from "@/components/sections/ProfileSection";
import DoSection from "@/components/sections/DoSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ClientSection from "@/components/sections/ClientSection";
import RocketParallax from "@/components/animations/RocketParallax";

import ScrollSmootherWrapper from "@/components/ScrollSmootherWrapper";

import type { ApiResponse } from "@/types/api/response/apiResponse";
import type { HomepageResponse } from "@/types/api/response/homepageResponse";
import Footer from "@/components/Footer/Footer";

async function getHomepageData(): Promise<ApiResponse<HomepageResponse>> {
  const query = qs.stringify({
    populate: {
      heroSection: { populate: "*" },
      aboutSection: { populate: "*" },
      profileSection: {
        populate: {
          teamSection: {
            populate: {
              section: {
                populate: "*",
              },
              teams: {
                populate: "*",
              },
            },
          },
          internSection: {
            populate: {
              section: {
                populate: "*",
              },
              interns: {
                populate: "*",
              },
            },
          },
        },
      },
      whatWeDoSection: {
        populate: {
          section: {
            populate: "*",
          },
          jobs: {
            populate: "*",
          },
        },
      },
      projectSection: {
        populate: {
          section: {
            populate: "*",
          },
          projects: {
            populate: "*",
          },
        },
      },
      testimonialSection: {
        populate: {
          testimonials: {
            populate: "*",
          },
        },
      },
    },
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/homepage?${query}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const response = await getHomepageData();

  return (
    <ScrollSmootherWrapper>
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
