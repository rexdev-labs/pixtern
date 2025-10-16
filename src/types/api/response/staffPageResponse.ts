import type { Team } from "../team";
import type { Intern } from "../intern";
import type { Quotes } from "../quotes";

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
