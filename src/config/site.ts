import { BRAND } from "./brand";

export const SITE = {
  url: "https://taptrace.valentir.in",
  name: BRAND.name,
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description: BRAND.description,
  keywords: [
    "keystroke visualizer",
    "keyboard on screen display",
    "key visualizer for streaming",
    "OBS key overlay",
    "shortcut visualizer for tutorials",
    "mechanical keycap overlay",
    "mouse click visualizer",
    "screen recording keyboard overlay",
  ],
  author: BRAND.developer,
  twitter: "@valentir",
} as const;
