import type { Section } from "@/types/api/section";

export interface Job {
  id: number;
  title: string;
  description: string;
  illustration: { url: string };
}

export interface WhatWeDoSection {
  section: Section;
  jobs?: Job[];
}
