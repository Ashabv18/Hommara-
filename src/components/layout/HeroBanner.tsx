import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full aspect-video overflow-hidden">
      <Image
        src="/hommara-herobanner.png"
        alt="HOMMARA Fashion Collection"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
