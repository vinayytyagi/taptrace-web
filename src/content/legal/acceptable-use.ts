import type { LegalDoc } from "./types";

export const acceptableUseDoc: LegalDoc = {
  slug: "acceptable-use",
  title: "Acceptable Use Policy",
  summary: "Taptrace is an open visualizer for tutorials, presentations, and streams. Covert keylogging or surveillance use is strictly barred.",
  updated: "2026-10-18",
  sections: [
    {
      id: "permitted",
      heading: "1. Permitted Uses",
      blocks: [
        {
          type: "ul",
          items: [
            "Recording coding tutorials, screencasts, and YouTube software walkthroughs.",
            "Displaying keystrokes live during Twitch, YouTube, or Discord live streams.",
            "Classroom instruction, corporate software demos, and technical webinars.",
          ],
        },
      ],
    },
    {
      id: "prohibited",
      heading: "2. Strictly Prohibited Uses",
      blocks: [
        {
          type: "ul",
          items: [
            "Any attempt to modify or configure the software as a hidden keystroke logger for covert surveillance.",
            "Recording or intercepting passwords, confidential credentials, or financial payment data without explicit consent.",
          ],
        },
      ],
    },
  ],
};
