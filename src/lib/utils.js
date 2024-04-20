import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function tailMergeConfig(...inputs){
  return twMerge(clsx(inputs))
}