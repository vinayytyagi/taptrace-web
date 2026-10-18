"use client";

import { useState } from "react";
import { Download, ShieldCheck, Copy, Check, Info } from "lucide-react";
import { DOWNLOAD_VERSION, DOWNLOAD_SIZE_MB, DOWNLOAD_SHA256, DOWNLOAD_URL } from "@/config/release";

export default function DownloadSection() {
  const [copied, setCopied] = useState(false);

  const copyHash = () => {
    if (DOWNLOAD_SHA256) {
      navigator.clipboard.writeText(DOWNLOAD_SHA256);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="download" className="section section-rule">
      <div className="wrap">
        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            background: "radial-gradient(ellipse at top, rgba(14, 165, 233, 0.12) 0%, var(--card-bg) 60%)",
            border: "1px solid var(--signal)",
            borderRadius: "24px",
            padding: "clamp(32px, 5vw, 64px)",
            textAlign: "center",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4)",
          }}
        >
          <span className="badge" style={{ marginBottom: "16px" }}>
            <ShieldCheck size={14} /> Production Build Ready
          </span>

          <h2 className="h2" style={{ marginBottom: "16px" }}>
            Get Taptrace for Windows
          </h2>

          <p className="lede" style={{ maxWidth: "620px", margin: "0 auto 36px" }}>
            Free basic keystroke and mouse visualizer included. Lightweight per-user installation with zero admin rights needed.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
            <a
              href={DOWNLOAD_URL || "#"}
              className="btn btn-primary"
              style={{
                padding: "16px 36px",
                fontSize: "1.1rem",
                borderRadius: "12px",
              }}
            >
              <Download size={20} />
              Download Taptrace for Windows
            </a>

            <div style={{ color: "var(--ink-3)", fontSize: "0.86rem" }}>
              Version {DOWNLOAD_VERSION} · {DOWNLOAD_SIZE_MB} MB · Windows 10/11 (64-bit)
            </div>
          </div>

          {/* Cryptographic Verification Box */}
          <div
            style={{
              background: "var(--paper-2)",
              border: "1px solid var(--rule)",
              borderRadius: "12px",
              padding: "16px 20px",
              textAlign: "left",
              marginBottom: "24px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-3)" }}>
                SHA-256 Checksum Verification
              </span>
              <button
                onClick={copyHash}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.78rem",
                  color: copied ? "#34d399" : "var(--signal-text)",
                  fontWeight: 600,
                }}
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? "Copied" : "Copy Hash"}
              </button>
            </div>
            <code
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                wordBreak: "break-all",
                color: "var(--ink-2)",
              }}
            >
              {DOWNLOAD_SHA256}
            </code>
          </div>

          {/* SmartScreen Note */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              textAlign: "left",
              padding: "14px 18px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.03)",
              fontSize: "0.82rem",
              color: "var(--ink-3)",
            }}
          >
            <Info size={16} style={{ color: "var(--signal-text)", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <strong>Windows SmartScreen notice:</strong> Because our early-access builds are currently self-distributed while the LLP hardware certificate is issued, Windows may prompt &quot;Windows protected your PC&quot;. Click <strong>More info</strong> and then <strong>Run anyway</strong>. You can verify the exact SHA-256 checksum above.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
