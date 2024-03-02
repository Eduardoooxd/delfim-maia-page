import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSizeClass = (size: string) => {
  switch (size) {
    case "small":
      return "card-small";
    case "medium":
      return "card-medium";
    case "large":
      return "card-large";
    default:
      return "card-medium"; // Default size or handle error
  }
};
