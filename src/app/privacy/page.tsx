import LegalPage from "@/components/legal/LegalPage";
import { privacyDoc } from "@/content/legal/privacy";

export const metadata = {
  title: "Privacy Policy — Taptrace",
  description: "Taptrace does not store, log, or transmit keystrokes.",
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyDoc} />;
}
