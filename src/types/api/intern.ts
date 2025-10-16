import type { StrapiImage } from "./strapiImage";

export interface Intern {
  id: number;
  name: string;
  fullName: string;
  slug: string;
  backgroundColor: string;
  avatarImage: StrapiImage;
  profileImage: StrapiImage;
  profileBackground: StrapiImage;
}
