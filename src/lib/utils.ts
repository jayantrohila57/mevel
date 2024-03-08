import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names using clsx and tailwind-merge.
 *
 * Combines multiple class names into a single string, supporting arrays
 * and conditional values. Handles merging Tailwind CSS classes using
 * tailwind-merge to properly merge utility classes.
 *
 * @param inputs Class name values to merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
