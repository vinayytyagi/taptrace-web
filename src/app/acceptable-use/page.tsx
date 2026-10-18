import LegalPage from "@/components/legal/LegalPage";
import { acceptableUseDoc } from "@/content/legal/acceptable-use";

export const metadata = {
  title: "Acceptable Use Policy — Taptrace",
  description: "Taptrace acceptable use policy for streaming, presentations, and tutorials.",
};

export default function AcceptableUsePage() {
  return <LegalPage doc={acceptableUseDoc} />;
}
