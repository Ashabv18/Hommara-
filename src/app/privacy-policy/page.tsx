import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — HOMMARA",
  description:
    "How HOMMARA collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, phone number, shipping address, and payment details when you place an order, create an account, or contact us. We also collect certain technical information automatically through cookies and similar technologies, including your device type, browser, IP address, and browsing activity on our site.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect to process and fulfil your orders, communicate with you about your purchases, provide customer support, send promotional communications (where permitted), improve our products and website, and comply with legal obligations.",
  },
  {
    title: "3. Sharing Your Information",
    body: "We do not sell your personal information. We share it only with trusted third parties who help us operate our business — including payment processors (such as PhonePe), shipping and logistics partners, and website analytics providers — strictly to the extent necessary to provide our services. We may also disclose information when required by law.",
  },
  {
    title: "4. Payment Security",
    body: "All payments are processed through secure, PCI-DSS compliant payment gateways. HOMMARA does not store your full card or UPI credentials on our servers. We take reasonable technical and organisational measures to protect your information against unauthorised access or disclosure.",
  },
  {
    title: "5. Cookies & Tracking",
    body: "We use cookies and similar technologies to keep you signed in, remember your cart, analyse site traffic, and personalise your experience. You can disable cookies in your browser settings, although some features of the site may not function properly as a result.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data by contacting us. Where applicable under law, you may also object to or restrict certain processing of your information and withdraw consent at any time.",
  },
  {
    title: "7. Data Retention",
    body: "We retain your personal information for as long as necessary to fulfil the purposes described in this policy, including for the duration of your account and as required to comply with legal, accounting, or reporting obligations.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be reflected on this page with an updated effective date. Your continued use of the site after changes constitutes acceptance of the revised policy.",
  },
  {
    title: "9. Contact Us",
    body: "If you have any questions about this Privacy Policy or our data practices, please reach out to us at Bindulakshmish6@gmail.com or call +91 9113564990. Our registered address is Sapthagiri, Maruthi Circle, near Nataraja Oil Mill Road, Agrahara, Tumkur 572101.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf6f1] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.15em] text-[#6b1d2b]/50 mb-2 font-sans">
          HOMMARA
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#6b1d2b]">
          Privacy Policy
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