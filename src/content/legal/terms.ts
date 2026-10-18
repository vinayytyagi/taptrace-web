import type { LegalDoc } from "./types";

export const termsDoc: LegalDoc = {
  slug: "terms",
  title: "Terms of Sale",
  summary: "Terms and conditions governing the purchase of Taptrace Pro software licences from Valentir Technologies LLP.",
  updated: "2026-10-18",
  sections: [
    {
      id: "contract",
      heading: "1. Formation of Sale",
      blocks: [
        {
          type: "p",
          text: "When you purchase a Taptrace Pro licence, payment is processed securely via Razorpay. Your contract is with Valentir Technologies LLP, Noida, India. A digital GST tax invoice compliant with Rule 46 of the CGST Rules is issued upon clearance.",
        },
      ],
    },
    {
      id: "delivery",
      heading: "2. Key Delivery",
      blocks: [
        {
          type: "p",
          text: "Your cryptographic Ed25519 licence certificate (.vpl) is delivered immediately via email upon confirmation of payment. You import this file directly into the Taptrace desktop interface without requiring internet activation.",
        },
      ],
    },
  ],
};
