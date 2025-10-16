import type { HeroSection } from "@/types/api/homepage/heroSection";
import type { AboutSection } from "@/types/api/homepage/aboutSection";
import type { ProfileSection } from "@/types/api/homepage/profileSection";
import type { ProjectSection } from "@/types/api/homepage/projectSection";
import type { WhatWeDoSection } from "@/types/api/homepage/whatWeDoSection";
import type { TestimonialSection } from "@/types/api/homepage/testimonialSection";

export interface HomepageResponse {
  heroSection: HeroSection;
  aboutSection: AboutSection;
  profileSection: ProfileSection;
  projectSection: ProjectSection;
  whatWeDoSection: WhatWeDoSection;
  testimonialSection: TestimonialSection;
}
