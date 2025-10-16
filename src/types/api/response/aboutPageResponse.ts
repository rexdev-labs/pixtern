import type { SocialMedia } from "@/types/api/socialMedia";

export interface AboutPageResponse {
  about: string;
  socialMedia?: SocialMedia[];
}
