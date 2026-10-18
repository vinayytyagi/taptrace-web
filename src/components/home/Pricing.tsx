import Link from "next/link";
import { Check, ShieldCheck, Download, Sparkles } from "lucide-react";
import { BRAND } from "@/config/brand";

export default function Pricing() {
  const { free, pro } = BRAND.pricing;

  return (
    <section id="pricing" className="section section-rule">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 52px" }}>
          <span className="badge" style={{ marginBottom: "14px" }}>
            <Sparkles size={14} /> Transparent Licencing
          </span>
          <h2 className="h2" style={{ marginBottom: "16px" }}>Free core, one-time Pro. No subscriptions.</h2>
          <p className="lede">
            The core keystroke visualizer is completely free. Upgrade to Pro for OBS Browser Source and all 5 tactile keycap themes.
          </p>
        </div>

        <div className="grid-2" style={{ maxWidth: "880px", margin: "0 auto", alignItems: "stretch" }}>
          {/* Free Tier */}
          <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ marginBottom: "20px" }}>
              <span className="badge" style={{ marginBottom: "10px" }}>Free Forever</span>
              <h3 className="h3" style={{ fontSize: "1.5rem" }}>{free.name}</h3>
              <p style={{ color: "var(--ink-2)", fontSize: "0.9rem", marginTop: "6px" }}>{free.description}</p>
            </div>

            <div style={{ marginBottom: "28px" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-display)" }}>{free.price}</span>
              <span style={{ color: "var(--ink-3)", marginLeft: "8px", fontSize: "0.9rem" }}>no credit card or account</span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
              {free.features.map((feat) => (
                <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.92rem", color: "var(--ink-2)" }}>
                  <Check size={18} style={{ color: "var(--signal-text)", flexShrink: 0, marginTop: "2px" }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <Link href="/#download" className="btn btn-secondary" style={{ marginTop: "auto", width: "100%" }}>
              <Download size={16} />
              Download Free Version
            </Link>
          </div>

          {/* Pro Tier */}
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderColor: "var(--signal)",
              background: "radial-gradient(ellipse at top, rgba(14, 165, 233, 0.08) 0%, var(--card-bg) 70%)",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "-12px", right: "24px" }}>
              <span
                style={{
                  background: "var(--signal)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: "999px",
                  boxShadow: "0 2px 10px var(--cyan-glow)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Recommended
              </span>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <span className="badge" style={{ marginBottom: "10px" }}>Lifetime Licence</span>
              <h3 className="h3" style={{ fontSize: "1.5rem" }}>{pro.name}</h3>
              <p style={{ color: "var(--ink-2)", fontSize: "0.9rem", marginTop: "6px" }}>{pro.description}</p>
            </div>

            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-display)" }}>{pro.price}</span>
                <span style={{ color: "var(--ink-3)", fontSize: "1.1rem" }}>/ {pro.priceUsd}</span>
                <span style={{ color: "var(--ink-3)", fontSize: "0.9rem" }}>{pro.period}</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "#34d399", fontWeight: 600, marginTop: "4px" }}>
                30-day money-back guarantee · GST invoice included
              </div>
            </div>

            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "36px" }}>
              {pro.features.map((feat) => (
                <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.92rem", color: "var(--ink)" }}>
                  <Check size={18} style={{ color: "var(--signal-text)", flexShrink: 0, marginTop: "2px" }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <Link
              href="mailto:hello@valentir.in?subject=Taptrace%20Pro%20Licence%20Enquiry"
              className="btn btn-primary"
              style={{ marginTop: "auto", width: "100%" }}
            >
              <ShieldCheck size={16} />
              Buy Taptrace Pro Licence
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
