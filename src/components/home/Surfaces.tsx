import { Code2, Video, Radio, GraduationCap, Lock, ShieldCheck } from "lucide-react";

const USE_CASES = [
  {
    title: "Coding Tutorials & Courses",
    icon: Code2,
    body: "Show exact IDE chords like Ctrl+K, Ctrl+C or multi-cursor shortcuts in VS Code, IntelliJ, or Neovim without typing over code.",
  },
  {
    title: "YouTube Video Creation",
    icon: Video,
    body: "Eliminate hours of manual subtitle editing and shortcut annotations. Keys pop up automatically during recording in your channel style.",
  },
  {
    title: "Twitch & YouTube Gaming / Streams",
    icon: Radio,
    body: "Add a crisp, transparent OBS browser source to your stream layout. Display speedrun inputs, APM, or hotkey actions effortlessly.",
  },
  {
    title: "Classroom Teaching & Webinars",
    icon: GraduationCap,
    body: "Large keycaps and mouse click ripples let students at the back of the lecture hall or on mobile phones see every click clearly.",
  },
];

export default function Surfaces() {
  return (
    <section id="surfaces" className="section section-rule">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px" }}>
          <span className="badge" style={{ marginBottom: "14px" }}>Use Cases</span>
          <h2 className="h2" style={{ marginBottom: "16px" }}>Built for the screens that educate and entertain</h2>
          <p className="lede">
            Whether you teach Python on YouTube or demonstrate complex 3D workflows in Blender, Taptrace keeps viewers focused.
          </p>
        </div>

        <div className="grid-2" style={{ marginBottom: "40px" }}>
          {USE_CASES.map((u) => {
            const Icon = u.icon;
            return (
              <div key={u.title} className="card" style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "var(--signal-bg)",
                    color: "var(--signal-text)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="h3" style={{ fontSize: "1.15rem", marginBottom: "6px" }}>{u.title}</h3>
                  <p style={{ color: "var(--ink-2)", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    {u.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Password Guard Transparency Box */}
        <div
          style={{
            background: "rgba(14, 165, 233, 0.05)",
            border: "1px solid rgba(14, 165, 233, 0.25)",
            borderRadius: "14px",
            padding: "24px 28px",
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <ShieldCheck size={24} style={{ color: "var(--signal-text)", flexShrink: 0, marginTop: "2px" }} />
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--signal-text)", marginBottom: "6px" }}>
              Our Zero-Leak Security Pledge
            </h4>
            <p style={{ fontSize: "0.9rem", color: "var(--ink-2)", lineHeight: "1.55" }}>
              Taptrace does not store keystrokes to disk, does not keep a history file, and does not make external network requests.
              When focused on password managers (Bitwarden, 1Password, KeePass) or secure fields, Taptrace automatically pauses visualization to protect your credentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
