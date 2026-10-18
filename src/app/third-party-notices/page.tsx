const NOTICES = [
  { name: "Electron", licence: "MIT", author: "OpenJS Foundation" },
  { name: "React & React-DOM", licence: "MIT", author: "Meta Platforms, Inc." },
  { name: "Next.js", licence: "MIT", author: "Vercel, Inc." },
  { name: "Lucide React", licence: "ISC", author: "Lucide Contributors" },
  { name: "TypeScript", licence: "Apache-2.0", author: "Microsoft Corporation" },
  { name: "Koffi", licence: "MIT", author: "Koffi Contributors" },
  { name: "Zod", licence: "MIT", author: "Colin McDonnell" },
];

export const metadata = {
  title: "Third-Party Notices — Taptrace",
  description: "Open-source software licences and attributions for Taptrace.",
};

export default function ThirdPartyNoticesPage() {
  return (
    <div className="wrap" style={{ paddingBlock: "64px 80px", maxWidth: "860px" }}>
      <header style={{ marginBottom: "36px", borderBottom: "1px solid var(--rule)", paddingBottom: "24px" }}>
        <h1 className="h2" style={{ marginBottom: "12px" }}>Third-Party Notices</h1>
        <p className="lede">
          Taptrace includes open-source software packages licensed under permissive licenses (MIT, ISC, Apache-2.0).
        </p>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {NOTICES.map((n) => (
          <div key={n.name} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--ink)" }}>{n.name}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--ink-3)" }}>{n.author}</div>
            </div>
            <span className="badge">{n.licence}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
