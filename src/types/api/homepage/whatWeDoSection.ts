import type { Section } from "@/types/api/section";
import type { Job } from "@/types/api/job";

export interface WhatWeDoSection {
  section: Section;
  jobs?: Job[];
}
