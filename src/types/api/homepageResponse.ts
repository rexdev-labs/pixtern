import type { HeroSection } from "./homepage/heroSection";
import type { AboutSection } from "./homepage/aboutSection";
import type { ProfileSection } from "./homepage/profileSection";
import type { ProjectSection } from "./homepage/projectSection";
import type { WhatWeDoSection } from "./homepage/whatWeDoSection";

export interface HomepageResponse {
  heroSection: HeroSection;
  aboutSection: AboutSection;
  profileSection: ProfileSection;
  projectSection: ProjectSection;
  whatWeDoSection: WhatWeDoSection;
}
