import type { LegalDoc } from "./types";

export const eulaDoc: LegalDoc = {
  slug: "eula",
  title: "Software Licence Agreement (EULA)",
  summary: "This agreement governs your installation and use of Taptrace desktop software for Microsoft Windows.",
  updated: "2026-10-18",
  sections: [
    {
      id: "grant",
      heading: "1. Licence Grant",
      blocks: [
        {
          type: "p",
          text: "Valentir Technologies LLP grants you a non-exclusive, non-transferable licence to run Taptrace on compatible Windows devices. The Free tier may be used for personal, commercial, or educational presentations and video streams.",
        },
        {
          type: "p",
          text: "A Taptrace Pro licence grants activation of all 5 themes and OBS browser-source streaming endpoints on up to three (3) personal or workstation PCs.",
        },
      ],
    },
    {
      id: "restrictions",
      heading: "2. Restrictions",
      blocks: [
        {
          type: "ul",
          items: [
            "You may not modify, decompile, or reverse engineer the software package.",
            "You may not use Taptrace to create unauthorized covert surveillance or hidden monitoring tools.",
            "You may not redistribute or sell licence files without written permission.",
          ],
        },
      ],
    },
  ],
};
