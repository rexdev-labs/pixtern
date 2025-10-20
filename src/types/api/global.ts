import type { Footer } from "./footer";
import type { StrapiImage } from "./strapiImage";
import type { Navbar } from "./navbar";

export interface Global {
  siteName: string;
  favicon: StrapiImage;
  siteDescription: string;
  navbar: Navbar;
  footer: Footer;
}
