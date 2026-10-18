import Link from "next/link";
import { Fragment } from "react";

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

export default function Inline({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("`") && part.endsWith("`")) return <code key={i} style={{ fontFamily: "var(--font-mono)", padding: "2px 5px", background: "var(--paper-2)", borderRadius: "4px" }}>{part.slice(1, -1)}</code>;
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          const [, label, href] = link as unknown as [string, string, string];
          if (href.startsWith("/")) return <Link key={i} href={href} style={{ color: "var(--signal-text)" }}>{label}</Link>;
          return (
            <a key={i} href={href} rel="noopener" target="_blank" style={{ color: "var(--signal-text)" }}>
              {label}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
