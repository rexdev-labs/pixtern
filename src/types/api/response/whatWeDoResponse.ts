import type { Job } from "@/types/api/job";
import type { StrapiImage } from "@/types/api/strapiImage";

export interface WhatWeDoResponse {
  jobs?: Job[];
  documentation?: StrapiImage[];
}
