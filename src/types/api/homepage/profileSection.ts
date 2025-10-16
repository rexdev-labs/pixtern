import type { Intern } from "@/types/api/person/intern";
import type { Team } from "@/types/api/person/team";

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
