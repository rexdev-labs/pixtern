import type { StrapiImage } from "./strapiImage";

export interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  icon: StrapiImage;
}
