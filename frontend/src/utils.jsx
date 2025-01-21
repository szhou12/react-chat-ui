import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// util function to dynamically merge input attribute with fixed tailwind class
// e.g. cn("w-10 h-10", iconColor): This combines the fixed classes w-10 h-10 with whatever value is in iconColor. If iconColor is undefined, it will be ignored.
export function cn(...inputs) {
    // twMerge cleans up any Tailwind CSS conflicts
    // e.g. twMerge(clsx('p-2', 'p-4'))  // => "p-4" (intelligently merged)
    return twMerge(clsx(inputs))
}