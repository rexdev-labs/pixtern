import type { SocialMedia } from "../socialMedia";

export interface AboutPageResponse {
  about: string;
  socialMedia?: SocialMedia[];
}
