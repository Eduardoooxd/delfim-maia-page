import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TEAM_MEMBER_BACKGROUNDS_COLORS: {
  cardBackground: string;
  hoverCardBackground: string;
  backButtonBackground: string;
  teamPageBackground: string;
}[] = [
  {
    cardBackground: "bg-[#CCCCCC]",
    teamPageBackground: "fill-[#970505]",
    backButtonBackground: "bg-[#970505]",
    hoverCardBackground: "hover:bg-[#898989]",
  },
  {
    cardBackground: "bg-[#96A8AD]",
    teamPageBackground: "fill-[#75868A]",
    backButtonBackground: "bg-[#75868A]",
    hoverCardBackground: "hover:bg-[#525f63]",
  },
  {
    cardBackground: "bg-[#A9AFBB]",
    teamPageBackground: "fill-[#868FA0]",
    backButtonBackground: "bg-[#868FA0]",
    hoverCardBackground: "hover:bg-[#93979e]",
  },
  {
    cardBackground: "bg-[#D2BDB7]",
    teamPageBackground: "fill-[#896F68]",
    backButtonBackground: "bg-[#896F68]",
    hoverCardBackground: "hover:bg-[#c17763]",
  },
  {
    cardBackground: "bg-[#ABC9CC]",
    teamPageBackground: "fill-[#5E7C7E]",
    backButtonBackground: "bg-[#5E7C7E]",
    hoverCardBackground: "hover:bg-[#84cad1]",
  },
  {
    cardBackground: "bg-[#ebcfbd]",
    teamPageBackground: "fill-[#805850]",
    backButtonBackground: "bg-[#805850]",
    hoverCardBackground: "hover:bg-[#e19767]",
  },
  {
    cardBackground: "bg-[#FAE7F2]",
    teamPageBackground: "fill-[#C7AEBC]",
    backButtonBackground: "bg-[#C7AEBC]",
    hoverCardBackground: "hover:bg-[#c979a7]",
  },
  {
    cardBackground: "bg-[#AEBCB1]",
    teamPageBackground: "fill-[#707A72]",
    backButtonBackground: "bg-[#707A72]",
    hoverCardBackground: "hover:bg-[#89ba94]",
  },
  {
    cardBackground: "bg-[#D3D5EC]",
    teamPageBackground: "fill-[#85889F]",
    backButtonBackground: "bg-[#85889F]",
    hoverCardBackground: "hover:bg-[#8990ff]",
  },
  {
    cardBackground: "bg-[#BAA4A9]",
    teamPageBackground: "fill-[#9C7D84]",
    backButtonBackground: "bg-[#9C7D84]",
    hoverCardBackground: "hover:bg-[#ce8163]",
  },
  {
    cardBackground: "bg-[#FCD4DC]",
    teamPageBackground: "fill-[#803340]",
    backButtonBackground: "bg-[#803340]",
    hoverCardBackground: "hover:bg-[#d7cd6c]",
  },
  {
    cardBackground: "bg-[#E6E7E9]",
    teamPageBackground: "fill-[#30406A]",
    backButtonBackground: "bg-[#30406A]",
    hoverCardBackground: "hover:bg-[#c26157]",
  },
];
