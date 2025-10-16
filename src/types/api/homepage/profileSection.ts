import type { Intern } from "../intern";
import type { Team } from "../team";

export interface TeamSection {
  section: {
    title: string;
    description: string;
  };
  teams: Team[];
}

export interface InternSection {
  section: {
    title: string;
    description: string;
  };
  interns: Intern[];
}

export interface ProfileSection {
  title: string;
  teamSection: TeamSection;
  internSection: InternSection;
}
