import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28 bg-[#faf6f1] min-h-screen flex items-center">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.15em] text-[#6b1d2b]/50 mb-2 font-sans">
          HOMMARA
        </p>
        <h1 className="text-7xl sm:text-8xl font-serif font-bold text-[#6b1d2b]">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#6b1d2b] mt-2">
          Page Not Found
        </h2>
        <div className="w-16 h-0.5 bg-[#c9a86c] mx-auto mt-6" />
        <p className="mt-6 text-neutral-500 font-sans leading-relaxed max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to something beautiful.
        </p>
        <Link
          href="/"
          className="inline-block mt-10 bg-[#c9a86c] text-white hover:bg-[#c9a86c]/90 text-xs tracking-[0.12em] uppercase font-semibold h-12 px-10 rounded-md shadow-lg transition-all"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}