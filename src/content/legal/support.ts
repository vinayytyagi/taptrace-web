import type { LegalDoc } from "./types";

export const supportDoc: LegalDoc = {
  slug: "support",
  title: "Technical Support & Troubleshooting",
  summary: "Setup guidance, OBS browser-source configuration, and vulnerability reporting.",
  updated: "2026-10-18",
  sections: [
    {
      id: "contact",
      heading: "1. Reaching Support",
      blocks: [
        {
          type: "p",
          text: "For questions regarding OBS browser source setup, multiple monitor positioning, or custom theme styling, email `hello@valentir.in`. We reply within 1 business day.",
        },
      ],
    },
    {
      id: "requirements",
      heading: "2. Supported Operating Systems",
      blocks: [
        {
          type: "ul",
          items: [
            "**Windows 11**: All editions (64-bit and ARM64 via emulation).",
            "**Windows 10**: Version 2004 or later with Desktop Window Manager enabled.",
            "Streaming Software: OBS Studio v28+, Streamlabs Desktop, XSplit, or any browser-source compatible tool.",
          ],
        },
      ],
    },
  ],
};
