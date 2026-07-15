import Link from "next/link";

export const metadata = {
  title: "Contact Us — ZOROVA",
  description: "Get in touch with the ZOROVA team.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf6f1] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.15em] text-[#6b1d2b]/50 mb-2 font-sans">
          ZOROVA
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#6b1d2b]">
          Contact Us
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a86c] mt-5 mb-10" />

        <p className="text-neutral-600 font-sans leading-relaxed mb-12">
          We'd love to hear from you. For orders, sizing help, or anything else,
          reach out through any of the channels below.
        </p>

        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-xs uppercase tracking-[0.12em] text-[#c9a86c] mb-2 font-sans">
              Phone
            </h2>
            <a
              href="tel:+919113564990"
              className="text-lg font-serif font-semibold text-[#6b1d2b] hover:underline"
            >
              +91 9113564990
            </a>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.12em] text-[#c9a86c] mb-2 font-sans">
              Email
            </h2>
            <a
              href="mailto:Bindulakshmish6@gmail.com"
              className="text-lg font-serif font-semibold text-[#6b1d2b] hover:underline"
            >
              Bindulakshmish6@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.12em] text-[#c9a86c] mb-2 font-sans">
              Address
            </h2>
            <p className="text-neutral-600 font-sans leading-relaxed">
              Sapthagiri, Maruthi Circle, near Nataraja Oil Mill Road, Agrahara,
              Tumkur 572101
            </p>
          </div>
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