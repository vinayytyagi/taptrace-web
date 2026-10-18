import LegalPage from "@/components/legal/LegalPage";
import { termsDoc } from "@/content/legal/terms";

export const metadata = {
  title: "Terms of Sale — Taptrace",
  description: "Terms and conditions governing the purchase of Taptrace Pro software licences.",
};

export default function TermsPage() {
  return <LegalPage doc={termsDoc} />;
}
