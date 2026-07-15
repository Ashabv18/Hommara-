import Link from "next/link";

export const metadata = {
  title: "Returns & Exchanges — ZOROVA",
  description: "Our easy returns and exchange policy.",
};

const steps = [
  {
    title: "1. Initiate Within 7 Days",
    body: "Raise a return or exchange request within 7 days of delivery through email or phone. We'll guide you through the process.",
  },
  {
    title: "2. Keep Items in Original Condition",
    body: "Items must be unworn, unwashed, and returned with original tags, packaging, and the invoice. Certain items (e.g. sale or custom pieces) may be marked non-returnable.",
  },
  {
    title: "3. Pickup & Inspection",
    body: "Once approved, we arrange a reverse pickup. After we receive and inspect the item, we process your refund or exchange.",
  },
  {
    title: "4. Refunds",
    body: "Approved refunds are credited to your original payment method or as store credit within 5–7 business days after inspection.",
  },
];

const faqs = [
  { q: "Do I pay for return shipping?", a: "Reverse pickup is free for defective or incorrect items. For other returns, a nominal shipping fee may apply." },
  { q: "Can I exchange for a different size?", a: "Yes — size exchanges are available subject to stock. If the size is unavailable, we'll issue store credit." },
  { q: "What if my item is damaged?", a: "Report damage within 48 hours of delivery with photos, and we'll arrange an immediate replacement or refund." },
];

export default function ReturnsPage() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf6f1] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.15em] text-[#6b1d2b]/50 mb-2 font-sans">
          ZOROVA
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#6b1d2b]">
          Easy Returns & Exchanges
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a86c] mt-5 mb-10" />

        <p className="text-neutral-600 font-sans leading-relaxed mb-12">
          We want you to love every ZOROVA piece. If something isn't quite right,
          our hassle-free return and exchange process makes it simple.
        </p>

        <div className="space-y-8 mb-12">
          {steps.map((step) => (
            <div key={step.title}>
              <h2 className="text-lg font-serif font-semibold text-[#6b1d2b] mb-2">
                {step.title}
              </h2>
              <p className="text-neutral-600 font-sans leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-serif font-semibold text-[#6b1d2b] mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5 mb-12">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <p className="text-[#6b1d2b] font-semibold font-sans mb-1">{faq.q}</p>
              <p className="text-neutral-600 font-sans leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#c9a86c]/20">
          <Link
            href="/"
            className="inline-block bg-[#6b1d2b] text-white px-8 py-4 text-xs tracking-[0.12em] uppercase font-semibold hover:bg-[#6b1d2b]/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}