import { Keyboard } from "lucide-react";

const HOTKEYS = [
  { keys: ["Ctrl", "Alt", "K"], action: "Toggle Taptrace overlay on / off", highlight: true },
  { keys: ["Ctrl", "Alt", "P"], action: "Toggle Password & Letter-Masking mode" },
  { keys: ["Ctrl", "Alt", "M"], action: "Cycle through Keycap Themes (Mechanical, Neon, Retro, Glass)" },
  { keys: ["Ctrl", "Alt", "C"], action: "Panic Clear — immediately wipe current on-screen keycaps" },
  { keys: ["Ctrl", "Alt", "↑ / ↓"], action: "Increase / Decrease on-screen keycap font size" },
  { keys: ["Ctrl", "Alt", "1-9"], action: "Jump keycap anchor position to screen quadrant" },
];

export default function Hotkeys() {
  return (
    <section id="hotkeys" className="section section-rule">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 44px" }}>
          <span className="badge" style={{ marginBottom: "14px" }}>
            <Keyboard size={14} /> Global Control
          </span>
          <h2 className="h2" style={{ marginBottom: "16px" }}>Control your overlay with global shortcuts</h2>
          <p className="lede">
            Pause capture when entering secrets, toggle themes, or clear the screen instantly without opening the settings window.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {HOTKEYS.map((h, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 24px",
                  borderBottom: i < HOTKEYS.length - 1 ? "1px solid var(--rule)" : "none",
                  background: h.highlight ? "rgba(14, 165, 233, 0.05)" : "transparent",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "0.95rem", color: h.highlight ? "var(--ink)" : "var(--ink-2)", fontWeight: h.highlight ? 600 : 400 }}>
                  {h.action}
                </span>

                <div style={{ display: "flex", gap: "6px" }}>
                  {h.keys.map((k, ki) => (
                    <kbd
                      key={ki}
                      style={{
                        padding: "5px 10px",
                        borderRadius: "6px",
                        background: "var(--paper-2)",
                        border: "1px solid var(--card-border)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                        color: h.highlight ? "var(--signal-text)" : "var(--ink)",
                        fontWeight: 650,
                        boxShadow: "0 2px 0 rgba(0,0,0,0.2)",
                      }}
                    >
                      {k}
                    </kbd>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
