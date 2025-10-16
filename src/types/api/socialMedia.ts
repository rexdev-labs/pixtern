import type { StrapiImage } from "@/types/api/strapiImage";

export interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  icon: StrapiImage;
}
