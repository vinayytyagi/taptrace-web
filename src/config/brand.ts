export const BRAND = {
  name: "Taptrace",
  tagline: "Show what you press.",
  description:
    "Tactile mechanical keystroke, shortcut, and mouse visualizer for screen recordings, tutorials, and OBS streams. Safe-by-default with automatic password masking.",
  developer: "Valentir Technologies LLP",
  developerUrl: "https://valentir.in",
  email: "hello@valentir.in",
  pricing: {
    free: {
      name: "Taptrace Free",
      price: "₹0",
      description: "Essential keystroke HUD for creators, teachers, and presenters.",
      features: [
        "Windows Raw Input low-latency capture (no intrusive hooks)",
        "Shortcut-only display mode with smart modifiers",
        "2 Keycap themes (Minimal & Mechanical Dark)",
        "Mouse click rings (Left, Right, Middle)",
        "Zero-lag transparent desktop overlay",
        "Zero telemetry & 100% offline local privacy",
      ],
    },
    pro: {
      name: "Taptrace Pro",
      price: "₹499",
      priceUsd: "$12",
      period: "one-time payment",
      description: "For YouTube educators, Twitch streamers, and power users.",
      features: [
        "Everything in Free, forever",
        "All 5 tactile themes (Neon, Retro 80s, Glass HUD, Mechanical)",
        "Dedicated OBS Studio browser-source URL (alpha transparency)",
        "Multi-monitor positioning & per-screen profiles",
        "Mouse scroll speed gauges & chord formatting (Ctrl+K Ctrl+C)",
        "Custom keycap color palette & font scaling",
        "Use on up to 3 PCs with lifetime 1.x updates",
      ],
    },
  },
} as const;
