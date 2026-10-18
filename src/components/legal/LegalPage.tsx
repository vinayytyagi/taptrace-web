import type { ReactNode } from "react";
import { BRAND } from "@/config/brand";
import { COMPANY } from "@/config/company";
import type { Block, LegalDoc } from "@/content/legal/types";
import Inline from "./Inline";

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

function renderBlock(block: Block, key: number): ReactNode {
  switch (block.type) {
    case "p":
      return (
        <p key={key} style={{ marginBottom: "14px", lineHeight: "1.6" }}>
          <Inline text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul key={key} style={{ paddingLeft: "24px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} style={{ paddingLeft: "24px", marginBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <div key={key} style={{ padding: "12px 18px", background: "var(--paper-2)", borderLeft: "3px solid var(--signal)", borderRadius: "4px", marginBottom: "16px" }}>
          <Inline text={block.text} />
        </div>
      );
    case "table":
      return (
        <div key={key} style={{ overflowX: "auto", marginBottom: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--rule)" }}>
                {block.head.map((h, i) => (
                  <th key={i} scope="col" style={{ padding: "10px 14px", fontWeight: 700 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} style={{ borderBottom: "1px solid var(--rule)" }}>
                  {row.map((cell, c) => (
                    <td key={c} style={{ padding: "10px 14px" }}>
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="wrap" style={{ paddingBlock: "64px 80px", maxWidth: "860px" }}>
      <header style={{ marginBottom: "40px", borderBottom: "1px solid var(--rule)", paddingBottom: "28px" }}>
        <h1 className="h2" style={{ marginBottom: "14px" }}>{doc.title}</h1>
        <p className="lede" style={{ marginBottom: "16px" }}>{doc.summary}</p>
        <p style={{ fontSize: "0.85rem", color: "var(--ink-3)" }}>
          Last updated {formatDate(doc.updated)}. {BRAND.name} is developed by {BRAND.developer}.
        </p>
      </header>

      <div className="prose">
        {doc.sections.map((s) => (
          <section key={s.id} id={s.id} style={{ marginBottom: "40px" }}>
            <h2 className="h3" style={{ marginBottom: "14px", color: "var(--signal-text)" }}>
              {s.heading}
            </h2>
            {s.blocks.map((b, i) => renderBlock(b, i))}
          </section>
        ))}

        <section style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid var(--rule)" }}>
          <h2 className="h3" style={{ marginBottom: "10px" }}>Who we are</h2>
          <p style={{ color: "var(--ink-2)", fontSize: "0.95rem" }}>
            {COMPANY.legalName}, {COMPANY.city}. Registered Address: {COMPANY.registeredAddress || COMPANY.city}. Contact:{" "}
            <a href={`mailto:${COMPANY.email}`} style={{ color: "var(--signal-text)" }}>{COMPANY.email}</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
