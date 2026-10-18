import Link from "next/link";
import { BRAND } from "@/config/brand";
import { COMPANY } from "@/config/company";
import Logo from "./Logo";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <Link className="brand" href="/" style={{ marginBottom: "16px" }}>
              <Logo size={24} />
              <span>{BRAND.name}</span>
            </Link>
            <p style={{ maxWidth: "340px", color: "var(--ink-2)", fontSize: "0.9rem", lineHeight: "1.55" }}>
              Tactile mechanical keystroke, shortcut, and mouse visualizer for screen recordings, tutorials, and OBS streams.
            </p>
            <div style={{ marginTop: "16px", fontSize: "0.82rem", color: "var(--ink-3)" }}>
              Engineered by <a href={BRAND.developerUrl} target="_blank" rel="noreferrer" style={{ color: "var(--signal-text)" }}>{COMPANY.legalName}</a>.
            </div>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><Link href="/#demo">Interactive Stage</Link></li>
              <li><Link href="/#how-it-works">Raw Input Capture</Link></li>
              <li><Link href="/#features">Keycap Themes</Link></li>
              <li><Link href="/#hotkeys">Controls & Hotkeys</Link></li>
              <li><Link href="/#pricing">Pricing (Free & Pro)</Link></li>
              <li><Link href="/#download">Windows Download</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Safety & Help</h4>
            <ul>
              <li><Link href="/support">Technical Support</Link></li>
              <li><Link href="/#faq">FAQ & Password Safety</Link></li>
              <li><Link href="/acceptable-use">Acceptable Use Policy</Link></li>
              <li><a href={`mailto:${BRAND.email}`}>Report Vulnerability</a></li>
              <li><Link href="/third-party-notices">Third-Party Notices</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Sale</Link></li>
              <li><Link href="/eula">Software Licence (EULA)</Link></li>
              <li><Link href="/refunds">30-Day Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {currentYear} {COMPANY.legalName}. All rights reserved. 100% offline local software.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>Windows 10 / 11 64-bit</span>
            <span>Zero Keystroke Storage</span>
            <span>Raw Input (No Global Hook)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
