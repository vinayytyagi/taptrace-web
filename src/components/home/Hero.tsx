import Link from "next/link";
import { Download, Sparkles, Shield, ArrowRight, Radio } from "lucide-react";
import { BRAND } from "@/config/brand";
import { DOWNLOAD_VERSION, DOWNLOAD_SIZE_MB } from "@/config/release";

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: "clamp(50px, 7vw, 90px)" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div style={{ display: "inline-flex", marginBottom: "20px" }}>
          <span className="badge">
            <Sparkles size={13} />
            <span>Windows Raw Input (RIDEV_INPUTSINK) · Sub-4ms Zero-Lag Engine</span>
          </span>
        </div>

        <h1 className="display" style={{ maxWidth: "940px", margin: "0 auto 24px" }}>
          Show what you press.
          <span style={{ display: "block", color: "var(--signal-text)" }}>
            Tactile 3D keycaps for tutorials & streams.
          </span>
        </h1>

        <p className="lede" style={{ maxWidth: "720px", margin: "0 auto 36px" }}>
          Never have your viewers ask &quot;what did you press?&quot; again. Taptrace renders physical-looking mechanical keycaps, chords, and mouse ripples that float over your screen or feed directly into OBS Studio.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", marginBottom: "32px" }}>
          <Link href="/#download" className="btn btn-primary" style={{ padding: "14px 28px", fontSize: "1.05rem" }}>
            <Download size={18} />
            Download Taptrace Free
          </Link>
          <Link href="/#demo" className="btn btn-secondary" style={{ padding: "14px 24px" }}>
            Try Interactive Keycaps
            <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", color: "var(--ink-3)", fontSize: "0.85rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Shield size={15} style={{ color: "var(--signal-text)" }} />
            <span>Password Safe · Never Stores Keystrokes</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Radio size={15} style={{ color: "var(--signal-text)" }} />
            <span>OBS Studio Alpha Browser Source Ready</span>
          </div>
          <div>
            Windows 10/11 64-bit · v{DOWNLOAD_VERSION} (~{DOWNLOAD_SIZE_MB} MB)
          </div>
        </div>
      </div>
    </section>
  );
}
