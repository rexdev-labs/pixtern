import type { StrapiImage } from "./strapiImage";
import type { SocialMedia } from "./socialMedia";

export interface FooterGroupLink {
  id: number;
  title: string;
  href: string;
}

export interface FooterGroup {
  id: number;
  title: string;
  links: FooterGroupLink[];
}

export interface Footer {
  logo: StrapiImage;
  message?: string;
  socialMedia?: SocialMedia[];
  groups?: FooterGroup[];
}
