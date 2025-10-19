import type { Section } from "@/types/api/section";

export interface Project {
  id: number;
  title: string;
  description: string;
  preview: { url: string };
}

export interface ProjectSection {
  section: Section;
  projects?: Project[];
}
