import Link from "next/link";

export const metadata = {
  title: "Track Your Order — HOMMARA",
  description: "Track the status of your HOMMARA order.",
};

const steps = [
  { label: "Order Placed", desc: "We've received your order and payment." },
  { label: "Processing", desc: "Your piece is being carefully prepared and quality-checked." },
  { label: "Shipped", desc: "Your order is on its way. Tracking details are shared via SMS/email." },
  { label: "Delivered", desc: "Your HOMMARA order has arrived. Enjoy!" },
];

export default function TrackOrderPage() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf6f1] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.15em] text-[#6b1d2b]/50 mb-2 font-sans">
          HOMMARA
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#6b1d2b]">
          Track Your Order
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a86c] mt-5 mb-10" />

        <p className="text-neutral-600 font-sans leading-relaxed mb-10">
          Once your order ships, we'll email and SMS your tracking number along
          with the courier partner's link. You can also reach out to us directly
          with your Order ID and we'll be happy to assist.
        </p>

        <div className="space-y-6 mb-12">
          {steps.map((step, i) => (
            <div key={step.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#6b1d2b] text-white flex items-center justify-center text-xs font-semibold font-sans">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#c9a86c]/40 mt-1" />
                )}
              </div>
              <div className="pb-2">
                <h2 className="text-lg font-serif font-semibold text-[#6b1d2b]">
                  {step.label}
                </h2>
                <p className="text-neutral-600 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#c9a86c]/20 p-6 mb-12">
          <p className="text-sm text-neutral-600 font-sans leading-relaxed">
            Need help tracking your order? Email us at{" "}
            <a
              href="mailto:Bindulakshmish6@gmail.com"
              className="text-[#6b1d2b] font-semibold hover:underline"
            >
              Bindulakshmish6@gmail.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+919113564990"
              className="text-[#6b1d2b] font-semibold hover:underline"
            >
              +91 9113564990
            </a>{" "}
            with your Order ID.
          </p>
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