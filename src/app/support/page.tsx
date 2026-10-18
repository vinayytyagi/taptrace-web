import LegalPage from "@/components/legal/LegalPage";
import { supportDoc } from "@/content/legal/support";

export const metadata = {
  title: "Support & Troubleshooting — Taptrace",
  description: "Technical support, OBS setup guidance, and vulnerability reporting.",
};

export default function SupportPage() {
  return <LegalPage doc={supportDoc} />;
}
