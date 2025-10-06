export interface TeamOrIntern {
  id: number;
  name: string;
  backgroundColor: string;
  avatarImage: { url: string };
  profileImage: { url: string };
  profileBackground: { url: string };
}

export interface TeamSection {
  section: {
    title: string;
    description: string;
  };
  teams: TeamOrIntern[];
}

export interface InternSection {
  section: {
    title: string;
    description: string;
  };
  interns: TeamOrIntern[];
}

export interface ProfileSection {
  title: string;
  teamSection: TeamSection;
  internSection: InternSection;
}
