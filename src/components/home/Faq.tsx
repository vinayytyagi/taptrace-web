"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Why does Taptrace use Windows Raw Input instead of keyboard hooks?",
    a: "Traditional visualizers install global low-level keyboard hooks (WH_KEYBOARD_LL) that run code on every keystroke in every process. This causes input lag, triggers false-positive antivirus warnings, and is indistinguishable from keyloggers. Taptrace uses Windows Raw Input (RIDEV_INPUTSINK) to receive hardware event messages with zero latency and zero hook interference.",
  },
  {
    q: "Does Taptrace save or log what I type?",
    a: "No. Never. Taptrace has zero file-logging routines and zero network telemetry. Key representations live only in volatile UI memory for the duration of the display fade (typically 2–3 seconds) and are garbage collected immediately. By default, it operates in Shortcut-Only mode.",
  },
  {
    q: "How does the OBS Studio Browser Source integration work?",
    a: "Taptrace Pro embeds a local web server (http://127.0.0.1:4492) that serves an alpha-transparent canvas. In OBS, you simply add a 'Browser Source' pointing to this local address. Keycaps and mouse clicks are broadcast locally via WebSockets with zero window clipping.",
  },
  {
    q: "What happens if I type a password into a website or password manager?",
    a: "Taptrace automatically identifies password managers and input fields reporting the IsPassword flag. In Password Guard mode, keystrokes are automatically masked into bullet points (••••••) with an amber lock icon, preventing credential exposure during live screen shares.",
  },
  {
    q: "Can I customize the keycap colors to match my stream or brand?",
    a: "Yes. Taptrace Pro includes all 5 pre-rendered themes (Mechanical, Neon, Retro, Glass, Minimal) as well as a custom palette picker to set your own keycap face, legend, and glow colors.",
  },
  {
    q: "Is an internet connection required to run Taptrace?",
    a: "No. Taptrace is 100% offline. Licences are cryptographically verified offline using local Ed25519 signatures.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section section-rule">
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" }}>
          <span className="badge" style={{ marginBottom: "14px" }}>Frequently Asked Questions</span>
          <h2 className="h2" style={{ marginBottom: "16px" }}>Clear answers on safety, OBS, and licensing</h2>
          <p className="lede">
            Everything you need to know about low-latency keyboard visualization and privacy protections.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="card"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <button
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    textAlign: "left",
                    fontWeight: 650,
                    fontSize: "1.05rem",
                    color: "var(--ink)",
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      color: "var(--signal-text)",
                      flexShrink: 0,
                    }}
                  />
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px",
                      color: "var(--ink-2)",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      borderTop: "1px solid var(--rule)",
                    }}
                  >
                    <p style={{ marginTop: "14px" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
