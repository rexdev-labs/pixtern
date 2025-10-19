import type { Decoration } from "@/types/api/person/decoration";
import type { Detail } from "@/types/api/person/detail";
import type { Education } from "@/types/api/person/education";
import type { SocialMedia } from "@/types/api/socialMedia";
import type { Quotes } from "@/types/api/quotes";

export interface Team {
  id: number;
  name: string;
  fullName: string;
  slug: string;
  decoration?: Decoration;
  detail?: Detail;
  educations?: Education[];
  socialMedia?: SocialMedia[];
  quotes?: Quotes;
}
