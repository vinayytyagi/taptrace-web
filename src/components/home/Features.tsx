import {
  Layers,
  Palette,
  MousePointer,
  Radio,
  Lock,
  Monitor,
  Flame,
  Volume2,
  HardDrive,
} from "lucide-react";

const FEATURES = [
  {
    icon: Layers,
    title: "5 Tactile Keycap Themes",
    body: "Choose from Mechanical Dark, Neon Cyberpunk, Retro 80s IBM, Minimal Slate, or Frosted Glass to match your personal brand.",
  },
  {
    icon: Flame,
    title: "Hardware Raw Input Capture",
    body: "Captures via Windows Raw Input (RIDEV_INPUTSINK) without slow low-level keyboard hooks. Input latency stays imperceptible (<4ms).",
  },
  {
    icon: MousePointer,
    title: "Mouse Click Rings & Ripples",
    body: "Renders animated concentric rings for left, right, and middle clicks with distinct color highlights and scroll velocity indicators.",
  },
  {
    icon: Radio,
    title: "OBS Studio Browser Source",
    body: "Run a dedicated local HTTP endpoint (http://127.0.0.1:4492) for high-framerate, transparent overlay rendering directly inside OBS scenes.",
  },
  {
    icon: Lock,
    title: "Smart Password Masking",
    body: "Automatically detects secure password inputs and replaces sensitive keystrokes with discrete locked bullet icons (••••••).",
  },
  {
    icon: Monitor,
    title: "Multi-Monitor Snap Points",
    body: "Snap keycaps to any of 9 screen quadrants across multiple monitors with persistent per-monitor coordinate memories.",
  },
  {
    icon: Palette,
    title: "Modifier Chords & Aggregation",
    body: "Cleanly renders multi-stroke chords (e.g., Ctrl+K Ctrl+C) and combines repeated key presses with multiplier counters (e.g., Ctrl+Z ×4).",
  },
  {
    icon: Volume2,
    title: "Subtle Mechanical Click Sounds",
    body: "Optional gentle acoustic feedback with recorded mechanical switch sounds for tutorials where screen audio adds tactile engagement.",
  },
  {
    icon: HardDrive,
    title: "100% Offline & Private",
    body: "Zero cloud analytics, zero remote database connections. Settings remain stored solely on your local computer.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section section-rule">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 52px" }}>
          <span className="badge" style={{ marginBottom: "14px" }}>Feature Suite</span>
          <h2 className="h2" style={{ marginBottom: "16px" }}>Crafted for perfection on every frame</h2>
          <p className="lede">
            High performance, zero lag, and beautiful aesthetics designed to make your screen captures look studio-produced.
          </p>
        </div>

        <div className="grid-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="card" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "var(--signal-bg)",
                    color: "var(--signal-text)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="h3" style={{ fontSize: "1.2rem" }}>{f.title}</h3>
                <p style={{ color: "var(--ink-2)", fontSize: "0.92rem", lineHeight: "1.55" }}>
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
