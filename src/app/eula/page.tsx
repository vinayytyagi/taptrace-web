import LegalPage from "@/components/legal/LegalPage";
import { eulaDoc } from "@/content/legal/eula";

export const metadata = {
  title: "Software Licence Agreement (EULA) — Taptrace",
  description: "End User Licence Agreement for Taptrace desktop software for Windows.",
};

export default function EulaPage() {
  return <LegalPage doc={eulaDoc} />;
}
