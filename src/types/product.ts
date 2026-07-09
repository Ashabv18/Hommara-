export interface ProductColor {
  name: string;
  hex: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  badge?: "Sale" | "Sold Out" | "New";
  isSoldOut?: boolean;
  fabricCare?: string;
  sizeGuide?: string;
  modelInfo?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: ProductColor;
}

export interface Category {
  id: string;
  name: string;
  href: string;
  items?: { name: string; href: string }[];
}