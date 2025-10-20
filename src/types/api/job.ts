import type { StrapiImage } from "@/types/api/strapiImage";

export interface Job {
  id: number;
  title: string;
  excerpt?: string
  description: string;
  illustration: StrapiImage;
}
