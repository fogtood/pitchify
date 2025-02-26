import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatNumber(num: number) {
  if (num > 999) {
    return `${(num / 1000).toFixed(1)}k views`;
  }
  return num > 1 ? `${num} views` : `${num} view`;
};