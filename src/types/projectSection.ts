export interface ProjectSectionType {
    data: {
        projectSection: {
            section: {
                title: string;
                description: string;
            };
            projects: Project[];
        };
    };
}

export interface Project {
    id: number;
    title: string;
    description: string;
    preview: { url: string };
}
