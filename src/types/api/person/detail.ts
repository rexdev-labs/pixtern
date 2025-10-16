import type { StrapiImage } from "@/types/api/strapiImage";

export interface Detail {
  aboutMe?: string;
  role: string;
  backgroundColor: string;
  avatarImage: StrapiImage;
  profileImage: StrapiImage;
  profileBackground: StrapiImage;
  portofolio: StrapiImage[];
}
