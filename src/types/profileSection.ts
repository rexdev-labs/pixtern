export interface TeamSection {
    data: {
        profileSection: {
            title: string;
            teamSection: {
                section: {
                    title: string;
                    description: string;
                };
                teams: Team[];
            };
        };
    };
}

export interface Team {
    id: number;
    name: string;
    backgroundColor: string;
    avatarImage: { url: string };
    profileImage: { url: string };
    profileBackground: { url: string };
}

export interface InternSection {
    data: {
        profileSection: {
            title: string;
            internSection: {
                section: {
                    title: string;
                    description: string;
                };
                interns: Intern[];
            };
        };
    };
}

export interface Intern {
    id: number;
    name: string;
    backgroundColor: string;
    avatarImage: { url: string };
    profileImage: { url: string };
    profileBackground: { url: string };
}
