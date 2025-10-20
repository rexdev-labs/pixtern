import type { StrapiImage } from "./strapiImage";

export interface Navigation {
  id: number;
  title: string;
  href: string;
}

export interface Navbar {
  darkIcon: StrapiImage;
  lightIcon: StrapiImage;
  navigations: Navigation[];
}
