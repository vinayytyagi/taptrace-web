export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Section = {
  id: string;
  heading: string;
  blocks: Block[];
};

export type LegalDoc = {
  slug: "privacy" | "terms" | "eula" | "refunds" | "support" | "acceptable-use";
  title: string;
  summary: string;
  updated: string;
  sections: Section[];
};
