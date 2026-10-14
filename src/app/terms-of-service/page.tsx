import Link from "next/link";

export const metadata = {
  title: "Terms of Service — HOMMARA",
  description:
    "The terms and conditions governing your use of the HOMMARA website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the HOMMARA website (the \"Site\"), you agree to be bound by these Terms of Service and all applicable laws. If you do not agree with any part of these terms, please do not use our Site or services.",
  },
  {
    title: "2. Use of the Site",
    body: "You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the Site. You must not attempt to gain unauthorised access to any part of the Site, other accounts, or computer systems connected to the Site.",
  },
  {
    title: "3. Accounts",
    body: "When you create an account with us, you are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You agree to provide accurate and complete information and to update it as necessary. We reserve the right to suspend or terminate accounts that violate these terms.",
  },
  {
    title: "4. Orders & Pricing",
    body: "All orders placed through the Site are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion. Prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. We strive to ensure pricing accuracy but are not liable for typographical or photographic errors.",
  },
  {
    title: "5. Payment",
    body: "Payments are processed securely through our payment partners, including PhonePe. By placing an order, you authorise us to charge the total amount to your selected payment method. We are not responsible for any fees or charges imposed by your bank or payment provider.",
  },
  {
    title: "6. Shipping & Delivery",
    body: "Estimated delivery times are provided for convenience and are not guaranteed. Risk of loss and title for items pass to you upon delivery to the carrier. We are not liable for delays caused by circumstances beyond our reasonable control.",
  },
  {
    title: "7. Returns & Exchanges",
    body: "We accept returns and exchanges in accordance with our Returns Policy, provided items are unworn, unwashed, and in original condition with tags attached. Certain items may be marked as non-returnable. Sale items may be eligible for exchange or store credit only.",
  },
  {
    title: "8. Intellectual Property",
    body: "All content on the Site — including text, graphics, logos, images, and product designs — is the property of HOMMARA or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.",
  },
  {
    title: "9. Limitation of Liability",
    body: "To the fullest extent permitted by law, HOMMARA shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the Site or products. Our total liability shall not exceed the amount paid for the relevant order.",
  },
  {
    title: "10. Changes to Terms",
    body: "We may revise these Terms of Service at any time. Changes take effect upon posting to this page with an updated effective date. Your continued use of the Site after changes constitutes acceptance of the revised terms.",
  },
  {
    title: "11. Contact Us",
    body: "For any questions about these Terms of Service, please contact us at Bindulakshmish6@gmail.com or call +91 9113564990. Our registered address is Sapthagiri, Maruthi Circle, near Nataraja Oil Mill Road, Agrahara, Tumkur 572101.",
  },
];

export default function TermsOfServicePage() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf6f1] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.15em] text-[#6b1d2b]/50 mb-2 font-sans">
          HOMMARA
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#6b1d2b]">
          Terms of Service
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a86c] mt-5 mb-10" />
        <p className="text-sm text-neutral-500 font-sans mb-12">
          Last updated: July 2026
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-serif font-semibold text-[#6b1d2b] mb-3">
                {section.title}
              </h2>
              <p className="text-neutral-600 font-sans leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[#c9a86c]/20">
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