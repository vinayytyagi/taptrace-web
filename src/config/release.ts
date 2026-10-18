import { Download, Mail } from "lucide-react";
import { BRAND } from "./brand";

export const DOWNLOADS_ENABLED = true;

const on = <T,>(value: T): T | null => (DOWNLOADS_ENABLED ? value : null);

export const DOWNLOAD_URL: string | null = on(
  "https://github.com/vinayytyagi/Valentir-pen-releases/releases/download/v1.0.0-preview.3/Taptrace-Setup-1.0.0.exe"
);

export const RELEASE_PAGE_URL: string | null = on(
  "https://github.com/vinayytyagi/Valentir-pen-releases/releases/tag/v1.0.0-preview.3"
);

export const DOWNLOAD_VERSION: string | null = on("1.0.0");
export const DOWNLOAD_SIZE_MB: number | null = on(99.8);
export const DOWNLOAD_SHA256: string | null = on(
  "787c7e1b2c6262b33750c655aa1facdb3ebe3210e2d5c9c965f69fb8d7a2708d"
);

export const CTA_LABEL = DOWNLOAD_URL ? "Download Taptrace for Windows" : "Get early access";
export const CtaIcon = DOWNLOAD_URL ? Download : Mail;

export function earlyAccessHref(topic = `${BRAND.name} early access`): string {
  return `mailto:${BRAND.email}?subject=${encodeURIComponent(topic)}`;
}
