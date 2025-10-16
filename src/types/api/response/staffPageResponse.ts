import type { Team } from "@/types/api/person/team";
import type { Intern } from "@/types/api/person/intern";
import type { Quotes } from "@/types/api/quotes";

export interface InternsData {
  id: number;
  year: number;
  interns: Intern[];
}

export interface StaffPageResponse {
  title: string;
  teams: Team[];
  interns: InternsData[];
  quotes?: Quotes;
}
