import { ShieldCheck, Feather, RefreshCw, IndianRupee, Sparkles, Heart } from "lucide-react";

const props = [
  {
    icon: Feather,
    title: "Premium Fabrics",
    description: "Handpicked silks, cottons & linens from India's finest mills",
  },
  {
    icon: Sparkles,
    title: "Handcrafted Details",
    description: "Every piece features intricate embroidery & artisan finishes",
  },
  {
    icon: RefreshCw,
    title: "Easy 7-Day Exchanges",
    description: "Free returns & exchanges, no questions asked",
  },
  {
    icon: Heart,
    title: "Designed for You",
    description: "Sizes XS-3XL. Celebrating every body with care",
  },
];

export default function ValueProps() {
  return (
    <section className="border-b border-[#c9a86c]/10 bg-[#faf6f1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c9a86c]/10">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="flex flex-col items-center justify-center py-10 px-4 text-center"
            >
              <prop.icon className="h-5 w-5 text-[#c9a86c] mb-3" />
              <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-[#6b1d2b] mb-1 font-sans">
                {prop.title}
              </h3>
              <p className="text-[11px] text-[#6b1d2b]/60 leading-relaxed max-w-[180px]">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}