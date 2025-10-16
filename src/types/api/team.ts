import type { StrapiImage } from "@/types/api/strapiImage";

export interface Team {
  id: number;
  name: string;
  fullName: string;
  slug: string;
  backgroundColor: string;
  avatarImage: StrapiImage;
  profileImage: StrapiImage;
  profileBackground: StrapiImage;
}
