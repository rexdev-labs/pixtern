import type { StrapiImage } from "@/types/api/strapiImage";

export interface Testimonial {
  id: number;
  username: string;
  date: string;
  review: string;
  rating: number;
  avatar: StrapiImage;
}

export interface TestimonialSection {
  testimonials?: Testimonial[];
}
