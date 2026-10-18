import type { LegalDoc } from "./types";

export const privacyDoc: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  summary: "Taptrace does not store, log, or transmit keystrokes. Your keystrokes live only in volatile UI memory for the duration of the visual animation.",
  updated: "2026-10-18",
  sections: [
    {
      id: "no-logging",
      heading: "1. Zero Keystroke Logging Policy",
      blocks: [
        {
          type: "p",
          text: "Taptrace is an on-screen display tool, not a logger. Keystrokes received through Windows Raw Input are formatted solely for immediate on-screen presentation and are garbage-collected as soon as their animation ends (2–3 seconds). Nothing is written to your hard drive or sent over any network.",
        },
      ],
    },
    {
      id: "raw-input",
      heading: "2. Input Mechanism & Safety",
      blocks: [
        {
          type: "p",
          text: "Taptrace uses Windows Raw Input (`RIDEV_INPUTSINK`). It does not install low-level keyboard hooks (`WH_KEYBOARD_LL`) into other running processes, ensuring zero interference with system security.",
        },
      ],
    },
    {
      id: "password-masking",
      heading: "3. Password Guard Protection",
      blocks: [
        {
          type: "p",
          text: "When typing into password fields or known password managers, Taptrace automatically suppresses letter rendering and shows masked dots (`••••••`) with a lock symbol.",
        },
      ],
    },
    {
      id: "rights",
      heading: "4. Personal Data & India DPDP Act 2023",
      blocks: [
        {
          type: "p",
          text: "We collect customer billing details only during licence purchases via Razorpay. We do not receive, store, or process any keystroke or screen content data.",
        },
      ],
    },
  ],
};
