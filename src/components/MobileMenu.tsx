"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center" }} className="mobile-menu-container">
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-outline btn-sm mobile-menu-btn"
        aria-label="Toggle navigation menu"
        style={{ padding: "8px 10px", display: "inline-flex" }}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--paper)",
            borderBottom: "1px solid var(--rule)",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            zIndex: 49,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "var(--ink)",
                textDecoration: "none",
                padding: "8px 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: "16px" }}
          >
            Download Taptrace
          </Link>
        </div>
      )}
    </div>
  );
}
