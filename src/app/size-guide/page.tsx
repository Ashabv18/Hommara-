import Link from "next/link";

export const metadata = {
  title: "Size Guide — ZOROVA",
  description: "Find your perfect fit with the ZOROVA size guide.",
};

const sizeChart = [
  { size: "XS", bust: "32", waist: "26", hip: "36", kurtaLength: "40" },
  { size: "S", bust: "34", waist: "28", hip: "38", kurtaLength: "42" },
  { size: "M", bust: "36", waist: "30", hip: "40", kurtaLength: "43" },
  { size: "L", bust: "38", waist: "32", hip: "42", kurtaLength: "44" },
  { size: "XL", bust: "40", waist: "34", hip: "44", kurtaLength: "45" },
  { size: "XXL", bust: "42", waist: "36", hip: "46", kurtaLength: "46" },
];

const tips = [
  "Measure over light clothing or undergarments for the most accurate fit.",
  "Bust: measure around the fullest part of your chest, keeping the tape level.",
  "Waist: measure at the narrowest part of your natural waistline.",
  "Hip: measure around the widest part of your hips.",
  "If you are between sizes, we recommend sizing up for a relaxed fit.",
];

export default function SizeGuidePage() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf6f1] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.15em] text-[#6b1d2b]/50 mb-2 font-sans">
          ZOROVA
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#6b1d2b]">
          Size Guide
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a86c] mt-5 mb-10" />

        <p className="text-neutral-600 font-sans leading-relaxed mb-10">
          Our garments are designed for a graceful, true-to-size fit. Use the
          chart below (all measurements in inches) to find your perfect size.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left border-collapse font-sans">
            <thead>
              <tr className="border-b border-[#c9a86c]/30 text-[#6b1d2b]">
                <th className="py-3 pr-4 text-xs uppercase tracking-[0.1em]">Size</th>
                <th className="py-3 pr-4 text-xs uppercase tracking-[0.1em]">Bust</th>
                <th className="py-3 pr-4 text-xs uppercase tracking-[0.1em]">Waist</th>
                <th className="py-3 pr-4 text-xs uppercase tracking-[0.1em]">Hip</th>
                <th className="py-3 text-xs uppercase tracking-[0.1em]">Kurta Length</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row) => (
                <tr key={row.size} className="border-b border-neutral-200 text-neutral-600">
                  <td className="py-3 pr-4 font-semibold text-[#6b1d2b]">{row.size}</td>
                  <td className="py-3 pr-4">{row.bust}"</td>
                  <td className="py-3 pr-4">{row.waist}"</td>
                  <td className="py-3 pr-4">{row.hip}"</td>
                  <td className="py-3">{row.kurtaLength}"</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-serif font-semibold text-[#6b1d2b] mb-4">
          How to Measure
        </h2>
        <ul className="space-y-2.5 mb-12">
          {tips.map((tip) => (
            <li
              key={tip}
              className="text-neutral-600 font-sans leading-relaxed flex gap-2"
            >
              <span className="text-[#c9a86c]">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

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