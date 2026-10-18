import LegalPage from "@/components/legal/LegalPage";
import { refundsDoc } from "@/content/legal/refunds";

export const metadata = {
  title: "Refund Policy — Taptrace",
  description: "Our 30-day money-back guarantee policy for Taptrace Pro purchases.",
};

export default function RefundsPage() {
  return <LegalPage doc={refundsDoc} />;
}
