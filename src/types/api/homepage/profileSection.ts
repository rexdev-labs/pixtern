import type { Intern } from "@/types/api/person/intern";
import type { Team } from "@/types/api/person/team";
import type { Section } from "@/types/api/section";

export interface TeamSection {
  section: Section;
  teams: Team[];
}

export interface InternSection {
  section: Section;
  interns: Intern[];
}

export interface ProfileSection {
  title: string;
  teamSection: TeamSection;
  internSection: InternSection;
}
