import type { LegalDoc } from "./types";

export const refundsDoc: LegalDoc = {
  slug: "refunds",
  title: "Refund & Cancellation Policy",
  summary: "Our 30-day money-back guarantee policy for Taptrace Pro purchases.",
  updated: "2026-10-18",
  sections: [
    {
      id: "guarantee",
      heading: "1. 30-Day Money-Back Guarantee",
      blocks: [
        {
          type: "p",
          text: "If Taptrace Pro does not fit your video recording or streaming workflow, email `hello@valentir.in` within 30 days of purchase with your order ID.",
        },
        {
          type: "p",
          text: "We will issue a 100% full refund with zero questions asked. Refunds process back to your payment account via Razorpay within 5–7 business days.",
        },
      ],
    },
  ],
};
