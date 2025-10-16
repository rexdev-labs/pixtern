import type { StrapiImage } from "@/types/api/strapiImage";

export interface Decoration {
  photoOrnamentPosition: "left" | "right";
  photoOrnament: StrapiImage;
  aboutUsFirstOrnament?: StrapiImage;
  aboutUsSecondOrnament?: StrapiImage;
}
