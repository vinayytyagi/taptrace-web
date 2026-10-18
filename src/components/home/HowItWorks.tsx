import { Cpu, ShieldCheck, Layers, Radio } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: Cpu,
    title: "Raw Input, No Hooks",
    body: "Unlike old keyloggers using WH_KEYBOARD_LL that trigger antivirus alarms, Taptrace registers via Windows Raw Input (RIDEV_INPUTSINK) for sub-4ms hardware event processing.",
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Shortcut-Only Default",
    body: "Only key combinations containing modifiers (Ctrl, Alt, Shift, Win) or function keys are rendered by default. Normal typing is never shown or logged.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Tactile Keycap Physics",
    body: "Keys render with mechanical switch depth, beveled skirts, and tactile press animation. Repeated strokes automatically aggregate into clean multipliers (e.g., Ctrl+Z ×4).",
  },
  {
    num: "04",
    icon: Radio,
    title: "OBS Studio Browser Source",
    body: "Streamers can pipe keycaps directly into OBS via a local 127.0.0.1 browser source with alpha transparency, eliminating messy window captures forever.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section section-rule">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 52px" }}>
          <span className="badge" style={{ marginBottom: "14px" }}>Architecture</span>
          <h2 className="h2" style={{ marginBottom: "16px" }}>How Taptrace captures without compromising safety</h2>
          <p className="lede">
            Engineered specifically for live coding instructors, software demoers, and tutorial creators.
          </p>
        </div>

        <div className="grid-4">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
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
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--ink-3)", fontWeight: 700 }}>
                    {s.num}
                  </span>
                </div>
                <h3 className="h3">{s.title}</h3>
                <p style={{ color: "var(--ink-2)", fontSize: "0.93rem", lineHeight: "1.55" }}>
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
