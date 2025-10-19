import type { StrapiImage } from "@/types/api/strapiImage";

export interface Detail {
  aboutMe?: string;
  role: string;
  backgroundColor: string;
  originalImage: StrapiImage;
  avatarImage: StrapiImage;
  personImage: StrapiImage;
  backgroundImage: StrapiImage;
  portofolio: StrapiImage[];
  skills: StrapiImage[];
}
