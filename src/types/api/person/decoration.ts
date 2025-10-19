import type { StrapiImage } from "@/types/api/strapiImage";

export interface Decoration {
  avatarPosition: "left" | "right";
  photoOrnamentPosition: "left" | "right";
  photoOrnament: StrapiImage;
  aboutUsFirstOrnament?: StrapiImage;
  aboutUsSecondOrnament?: StrapiImage;
}
