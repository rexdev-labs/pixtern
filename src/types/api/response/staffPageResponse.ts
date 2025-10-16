import type { Team } from "@/types/api/person/team";
import type { Intern } from "@/types/api/person/intern";
import type { Quotes } from "@/types/api/quotes";

export interface InternsData {
  id: number;
  year: number;
  interns: Intern[];
}

export interface TeamData {
  title: string;
  teams?: Team[]
}

export interface StaffPageResponse {
  title: string;
  team?: TeamData;
  interns: InternsData[];
  quotes?: Quotes;
}
