import HeroBanner from "@/components/layout/HeroBanner";
import ValueProps from "@/components/layout/ValueProps";
import ProductGrid from "@/components/product/ProductGrid";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ValueProps />
      <ProductGrid />
    </>
  );
}