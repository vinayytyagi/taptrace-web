import Link from "next/link";
import { BRAND } from "@/config/brand";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/#demo", label: "Live Stage" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#hotkeys", label: "Hotkeys" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link className="brand" href="/" aria-label={`${BRAND.name}, home`}>
          <Logo size={26} />
          <span>{BRAND.name}</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {LINKS.map((l) => (
            <Link key={l.href} className="nav-link" href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="bar-actions">
          <ThemeToggle />
          <Link className="btn btn-primary btn-sm" href="/#download">
            Download Free
          </Link>
          <MobileMenu links={LINKS} />
        </div>
      </div>
    </header>
  );
}
