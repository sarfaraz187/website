import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ELanguages } from "@src/i18n/intl"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getInitialLanguage = (): ELanguages =>
  (localStorage.getItem("language") as ELanguages) ||
  (navigator.language === "de" ? ELanguages.DE : ELanguages.EN);
