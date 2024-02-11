export interface TeamMember {
  teamMemberId: string;
  name: string;
  image: string;
  cardImage: string;
  rolePt: string;
  roleEn: string;
  email: string;
  cpEn?: string;
  cpPt?: string;
  formationsEn?: {
    formationsEnItem: string;
  }[];
  formationsPt?: {
    formationPtItem: string;
  }[];
  preferencesAreaEn?: {
    preferenceaAreaItemEn: string;
  }[];
  preferencesAreaPt?: {
    preferenceaAreaItemPt: string;
  }[];
}
