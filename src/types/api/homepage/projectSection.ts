export interface Project {
  id: number;
  title: string;
  description: string;
  preview: { url: string };
}

export interface ProjectSection {
  section: {
    title: string;
    description: string;
  };
  projects?: Project[];
}
