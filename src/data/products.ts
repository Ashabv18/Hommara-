import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "new-arrivals",
    name: "New Arrivals",
    href: "/category/new-arrivals",
  },
  {
    id: "women",
    name: "Women",
    href: "/category/women",
    items: [
      { name: "Kurtas & Tunics", href: "/category/women/kurtas" },
      { name: "Dresses & Gowns", href: "/category/women/dresses" },
      { name: "Ethnic Sets", href: "/category/women/ethnic-sets" },
      { name: "Bottoms", href: "/category/women/bottoms" },
      { name: "Accessories", href: "/category/women/accessories" },
    ],
  },
  {
    id: "collections",
    name: "Collections",
    href: "/category/collections",
    items: [
      { name: "Summer Florals", href: "/category/collections/summer-florals" },
      { name: "Festive Edit", href: "/category/collections/festive-edit" },
      { name: "Daily Grace", href: "/category/collections/daily-grace" },
      { name: "Evening Luxe", href: "/category/collections/evening-luxe" },
    ],
  },
  {
    id: "best-sellers",
    name: "Best Sellers",
    href: "/category/best-sellers",
  },
];

export const products: Product[] = [
  {
    id: "9",
    name: "Embroidered Maroon A-Line Kurta",
    slug: "embroidered-maroon-a-line-kurta",
    category: "Kurtas & Tunics",
    price: 1599,
    description:
      "A beautifully embroidered A-line kurta in deep maroon, crafted with intricate thread work along the neckline and hem. The silhouette skims the body gracefully, making it perfect for festive occasions, office wear, and family gatherings. Pair with leggings or palazzos for an elegant ethnic look.",
    colors: [
      { name: "Maroon", hex: "#800000" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/b2.jpeg",
      "/b1.jpeg",
    ],
    fabricCare: "100% Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Length 42\", Bust 36\" | M: Length 43\", Bust 38\" | L: Length 44\", Bust 40\" | XL: Length 45\", Bust 42\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "10",
    name: "Elegant Printed Flared Dress",
    slug: "elegant-printed-flared-dress",
    category: "Dresses & Gowns",
    price: 1250,
    originalPrice: 3999,
    description:
      "A stunning new arrival featuring a beautiful printed flared dress with elegant detailing. Designed for effortless grace, this dress flows beautifully and complements any occasion. Pair with minimal accessories for a complete look.",
    colors: [
      { name: "Medium Brown", hex: "#6E472A" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/dress4.jpeg",
      "/dress-2.jpg",
      "/dress-3.jpg",
      "/dress-1.jpg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Bust 36\", Waist 28\", Length 48\" | M: Bust 38\", Waist 30\", Length 49\" | L: Bust 40\", Waist 32\", Length 50\" | XL: Bust 42\", Waist 34\", Length 51\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "11",
    name: "Bandhani Discharge Printed Suit Set",
    slug: "printed-flared-dress-color-collection",
    category: "Ethnic Sets",
    price: 1250,
    originalPrice: 2000,
    description:
      "❤️❤️ Festival Special New launch ❤️❤️\n\nLook Beautiful in our New all over Bandhani Discharge Printed suit set cotton Dupatta pant set for all day comfort 💖\n\nFabric: Cotton 60*60\n\nSize  L40, XL42, XXL44, XXXL46\n\nColor -4\n\nKurta length 44+\nPant length 37-38\nDuppata length 2.15\n\nShop Price. 1250/-\n\nReady To Dispatch ✈️✈️✈️✈️✈️",
    colors: [
      { name: "Fuchsia Pink", hex: "#E0115F", imageUrl: "/d11.jpeg" },
      { name: "Royal Purple", hex: "#5A3A8E", imageUrl: "/d11c1.jpeg" },
      { name: "rust orange", hex: "#D2691E", imageUrl: "/d11c2.jpeg" },
      { name: "Burnt Red", hex: "#990000", imageUrl: "/d11c3.jpeg" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/d11.jpeg",
      "/d11c1.jpeg",
      "/d11c2.jpeg",
      "/d11c3.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Bust 36\", Waist 28\", Length 48\" | M: Bust 38\", Waist 30\", Length 49\" | L: Bust 40\", Waist 32\", Length 50\" | XL: Bust 42\", Waist 34\", Length 51\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "13",
    name: "Ajrakh Cotton Suit Set",
    slug: "ajrakh-cotton-suit-set",
    category: "Ethnic Sets",
    price: 1250,
    description:
      "🖤🤎 New Arrival: Ajrakh Cotton Suit Set 🤎🖤\n\nStep into timeless elegance with this beautiful Ajrakh handblock printed suit set 🌿\nCrafted in 100% pure cotton, it feels super soft on the skin and keeps you comfortable all day long ✨\n\nThe kurta features classic Ajrakh motifs with subtle mirror and kantha work detailing 💫, paired with comfortable cotton plazoo and a matching printed dupatta that complements the ethnic look effortlessly 😍\n\nPerfect for daily wear, office wear, casual outings & festive days 🌸\n\n⚡ Lightweight\n🌿 Breathable\n🫶 Skin-friendly\n✨ Elegant & classy\n\nKurti length 45+\n\n📏 Sizes: M | L | XL | XXL | 3XL\n\n💰 Price: ₹1250/-🛍️\n\n✨ Grab this bestselling beauty before it's gone! ✨",
    colors: [
      { name: "Deep Indigo Black", hex: "#1A1A24", imageUrl: "/d21.jpeg" },
      { name: "Plum", hex: "#512551", imageUrl: "/d22 (2).jpeg" },
      { name: "Muted Maroon", hex: "#70353B", imageUrl: "/d23.jpeg" },
    ],
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    images: [
      "/d21.jpeg",
      "/d22 (2).jpeg",
      "/d23.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Pure Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "M: Kurta Length 45\", Bust 38\" | L: Kurta Length 45\", Bust 40\" | XL: Kurta Length 45\", Bust 42\" | XXL: Kurta Length 45\", Bust 44\" | 3XL: Kurta Length 45\", Bust 46\"\nPlazzo & Dupatta included.",
    modelInfo: "Comfort fit for all body types",
  },
  {
    id: "14",
    name: "Cotton Printed Flared Kurta Set",
    slug: "cotton-printed-flared-kurta-set",
    category: "Ethnic Sets",
    price: 1399,
    description:
      "🌸 Elevate your everyday style with this beautifully printed cotton kurta set — featuring a flared kurta with delicate lace and scalloped hem detailing, paired with matching straight pants and a lightweight dupatta.\n\nCrafted from breathable pure cotton, this set is perfect for office wear, college, casual outings, and festive get-togethers. The soft blush pink hues and intricate floral prints add a touch of effortless grace to your wardrobe.\n\n✨ Features:\n• Flared kurta with scalloped lace hem\n• Lightweight & breathable pure cotton fabric\n• Matching straight pants with elasticated waist\n• Elegant all-over floral prints\n• Easy-to-style dupatta included",
    colors: [
      { name: "Blush Pink", hex: "#D4A5A5" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/a1.jpeg",
      "/a2.jpeg",
      "/a3.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Pure Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Kurta Length 44\", Bust 36\" | M: Kurta Length 44\", Bust 38\" | L: Kurta Length 44\", Bust 40\" | XL: Kurta Length 44\", Bust 42\" | XXL: Kurta Length 44\", Bust 44\"\nPant Length: 37\" | Dupatta Length: 2.15m",
    modelInfo: "Model is 5'5\" wearing size S",
  },
  {
    id: "15",
    name: "Embroidered Ethnic Suit Set",
    slug: "embroidered-ethnic-suit-set",
    category: "Ethnic Sets",
    price: 1899,
    description:
      "A captivating ethnic suit set featuring intricate embroidery and traditional detailing. Crafted from premium fabric, this ensemble combines elegance with comfort, making it ideal for festive occasions, family functions, and cultural celebrations. The detailed craftsmanship and timeless silhouette ensure you stand out with understated grace.\n\n✨ Features:\n• Rich embroidered neckline and border detailing\n• Soft, breathable fabric for all-day comfort\n• Matching dupatta with complementary patterns\n• Versatile design suitable for both day and evening events\n• Perfect blend of tradition and contemporary style",
    colors: [
      { name: "Ruby Red", hex: "#9B111E" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/e1.jpeg",
      "/e2.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Premium Cotton. Dry clean recommended for best results. Hand wash gentle cycle if needed. Iron on medium heat.",
    sizeGuide: "S: Kurta Length 42\", Bust 36\" | M: Kurta Length 43\", Bust 38\" | L: Kurta Length 44\", Bust 40\" | XL: Kurta Length 45\", Bust 42\" | XXL: Kurta Length 45\", Bust 44\"\nPalazzo Length: 38\" | Dupatta Length: 2.2m",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "16",
    name: "Traditional Embroidered Gown",
    slug: "traditional-embroidered-gown",
    category: "Dresses & Gowns",
    price: 2499,
    description:
      "An exquisite traditional gown blending classic embroidery with modern silhouette. Perfect for weddings, receptions, and special occasions. The flowing fabric and detailed craftsmanship create a regal look that's both comfortable and stunning.",
    colors: [
      { name: "Maroon", hex: "#800000" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/e11.jpeg",
      "/e12.jpeg",
    ],
    badge: "New",
    fabricCare: "Premium Blend. Dry clean recommended. Store carefully to preserve embroidery.",
    sizeGuide: "S: Bust 36\", Waist 28\", Length 54\" | M: Bust 38\", Waist 30\", Length 55\" | L: Bust 40\", Waist 32\", Length 56\" | XL: Bust 42\", Waist 34\", Length 57\" | XXL: Bust 44\", Waist 36\", Length 58\"",
    modelInfo: "Model is 5'7\" wearing size S",
  },
  {
    id: "22",
    name: "Embroidered Straight Kurta",
    slug: "embroidered-straight-kurta-k1",
    category: "Kurtas & Tunics",
    price: 1400,
    description:
      "A timeless straight-cut kurta adorned with delicate embroidery along the neckline and sleeves. The clean silhouette and soft fabric make it a wardrobe essential for both casual outings and festive occasions. Pair with jeans or leggings for a balanced contemporary look.",
    colors: [
      { name: "Cream White", hex: "#F5F5DC" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/k1.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Premium Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Length 42\", Bust 36\" | M: Length 43\", Bust 38\" | L: Length 44\", Bust 40\" | XL: Length 45\", Bust 42\" | XXL: Length 45\", Bust 44\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "23",
    name: "Printed A-Line Cotton Kurta",
    slug: "printed-a-line-cotton-kurta-k2",
    category: "Kurtas & Tunics",
    price: 1350,
    description:
      "A breezy A-line cotton kurta featuring vibrant all-over prints. The relaxed fit and breathable fabric keep you comfortable through long days. Perfect for college, office, or weekend outings. Style it with skinny jeans or classic leggings for an easy upgrade.",
    colors: [
      { name: "Sky Blue", hex: "#87CEEB" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/k2.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash cold. Tumble dry low. Iron on medium.",
    sizeGuide: "S: Length 40\", Bust 36\" | M: Length 41\", Bust 38\" | L: Length 42\", Bust 40\" | XL: Length 43\", Bust 42\"",
    modelInfo: "Model is 5'5\" wearing size S",
  },
  {
    id: "24",
    name: "Casual Collar Neck Kurta",
    slug: "casual-collar-neck-kurta-k3",
    category: "Kurtas & Tunics",
    price: 1400,
    description:
      "A modern collared kurta crafted from soft cotton with a structured yet relaxed fit. Features subtle stitching details and a side vent for ease of movement. A versatile piece that transitions seamlessly from workwear to weekend casual.",
    colors: [
      { name: "Light Grey", hex: "#D3D3D3" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/k3.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Length 41\", Bust 36\" | M: Length 42\", Bust 38\" | L: Length 43\", Bust 40\" | XL: Length 44\", Bust 42\" | XXL: Length 45\", Bust 44\"",
    modelInfo: "Model is 5'7\" wearing size S",
  },
  {
    id: "25",
    name: "Floral Embroidered Tunic",
    slug: "floral-embroidered-tunic-k4",
    category: "Kurtas & Tunics",
    price: 1300,
    description:
      "An elegant tunic featuring hand-finished floral embroidery on a soft fabric base. The slightly dropped shoulders and curved hem create a flattering silhouette. Ideal for brunches, office casual, or festive day events when paired with minimal accessories.",
    colors: [
      { name: "Blush Pink", hex: "#D4A5A5" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/k4.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Hand wash recommended. Lay flat to dry. Iron on low heat.",
    sizeGuide: "XS: Length 38\", Bust 34\" | S: Length 39\", Bust 36\" | M: Length 40\", Bust 38\" | L: Length 41\", Bust 40\" | XL: Length 42\", Bust 42\"",
    modelInfo: "Model is 5'5\" wearing size S",
  },
  {
    id: "26",
    name: "Classic V-Neck Cotton Kurta",
    slug: "classic-v-neck-cotton-kurta-k5",
    category: "Kurtas & Tunics",
    price: 1400,
    description:
      "A classic V-neck kurta in pure cotton with understated pleat detailing on the front. The relaxed fit and smooth texture make it a go-to choice for daily wear. Pair with joggers or leggings for a smart-casual vibe that feels effortless.",
    colors: [
      { name: "Olive Green", hex: "#6B8E23" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/k5.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Length 40\", Bust 36\" | M: Length 41\", Bust 38\" | L: Length 42\", Bust 40\" | XL: Length 43\", Bust 42\" | XXL: Length 44\", Bust 44\"",
    modelInfo: "Model is 5'6\" wearing size M",
  },
  {
    id: "27",
    name: "Floral Printed Midi Dress",
    slug: "floral-printed-midi-dress-d1",
    category: "Dresses & Gowns",
    price: 999,
    description:
      "A charming floral printed midi dress with a flattering A-line silhouette. The soft pastel tones and flowing fabric make it a perfect choice for daytime events, brunch dates, and garden parties. Features a flared skirt and an easy-to-wear button-down front.",
    colors: [
      { name: "Blush Pink", hex: "#FADADD" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/d1.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Bust 36\", Waist 28\", Length 44\" | M: Bust 38\", Waist 30\", Length 45\" | L: Bust 40\", Waist 32\", Length 46\" | XL: Bust 42\", Waist 34\", Length 47\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "28",
    name: "Elegant Evening Maxi Dress",
    slug: "elegant-evening-maxi-dress-d2",
    category: "Dresses & Gowns",
    price: 699,
    description:
      "A sophisticated maxi dress crafted for evening elegance. The rich fabric and refined silhouette create a timeless look perfect for weddings, receptions, and formal dinners. Subtle detailing at the waist adds a graceful feminine touch while ensuring all-night comfort.",
    colors: [
      { name: "Deep Plum", hex: "#4A192C" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/d2.jpeg",
    ],
    badge: "New",
    fabricCare: "Premium Blend. Dry clean recommended. Store on padded hanger.",
    sizeGuide: "S: Bust 34\", Waist 26\", Length 54\" | M: Bust 36\", Waist 28\", Length 55\" | L: Bust 38\", Waist 30\", Length 56\" | XL: Bust 40\", Waist 32\", Length 57\"",
    modelInfo: "Model is 5'7\" wearing size S",
  },
  {
    id: "29",
    name: "Casual Day Dress with Pockets",
    slug: "casual-day-dress-pockets-d3",
    category: "Dresses & Gowns",
    price: 1200,
    description:
      "A comfortable day dress designed with practical side pockets and a relaxed fit. The breathable cotton fabric keeps you cool while the playful print adds character. Ideal for shopping trips, casual Fridays, or simply lounging in style.",
    colors: [
      { name: "Navy Blue", hex: "#000080" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/d3.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash cold. Tumble dry low. Iron on medium.",
    sizeGuide: "S: Bust 36\", Waist 28\", Length 40\" | M: Bust 38\", Waist 30\", Length 41\" | L: Bust 40\", Waist 32\", Length 42\" | XL: Bust 42\", Waist 34\", Length 43\" | XXL: Bust 44\", Waist 36\", Length 44\"",
    modelInfo: "Model is 5'5\" wearing size S",
  },
  {
    id: "30",
    name: "Ruffled Wrap Dress",
    slug: "ruffled-wrap-dress-d4",
    category: "Dresses & Gowns",
    price: 699,
    description:
      "A stunning wrap dress with delicate ruffle detailing along the neckline and hem. The wrap-style cinches at the waist to create a beautiful hourglass shape, while the soft fabric drapes gracefully. Perfect for date nights, parties, and celebratory occasions.",
    colors: [
      { name: "Ruby Red", hex: "#9B111E" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/d4.jpeg",
    ],
    badge: "New",
    fabricCare: "Cotton Blend. Hand wash cold. Hang to dry. Iron on low heat.",
    sizeGuide: "S: Bust 34\", Waist 26\", Length 42\" | M: Bust 36\", Waist 28\", Length 43\" | L: Bust 38\", Waist 30\", Length 44\" | XL: Bust 40\", Waist 32\", Length 45\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "31",
    name: "Traditional Antique Gold-Plated Necklace and Earrings Combo Set",
    slug: "handcrafted-beaded-earrings-g1",
    category: "Accessories",
    price: 1200,
    description:
      "An antique-style gold-plated necklace and matching earrings set featuring intricate filigree work and traditional motifs. Perfect for weddings, festivals, and special occasions to add a touch of timeless elegance.",
    colors: [
      { name: "Multicolor", hex: "#E8A0BF" }
    ],
    sizes: ["One Size"],
    images: [
      "/g1.jpeg"
    ],
    badge: "New",
    fabricCare: "Store in a separate airtight pouch or box. Keep away from water, perfumes, and other chemicals. Clean with a soft, dry microfiber cloth after use.",
    sizeGuide: "One size fits all. Adjustable drawstring (Tariz) for the necklace length.",
    modelInfo: "Pair with a festive saree, lehenga, or grand ethnic fusion wear for a complete traditional look."
  },
  {
  id: "32",
  name: "Antiquity Temple Laxmi Necklace Set",
  slug: "antiquity-temple-laxmi-necklace-set",
  category: "Accessories",
  price: 699,
  description: "An exquisite antique-finished temple jewelry set featuring a detailed necklace with Goddess Lakshmi motifs and elegant matching earrings. Beautifully accented with delicate pearl droplets, this set brings timeless grace to bridal, festive, and traditional attire.",
  colors: [
    { name: "Gold", hex: "#D4AF37" }
  ],
  sizes: ["One Size"],
  images: [
    "/g2.jpeg"
  ],
  badge: "New",
  fabricCare: "Avoid contact with water, perfumes, and heat. Store in a soft pouch or airtight box after use.",
  sizeGuide: "Adjustable necklace chain with matching hanging earrings.",
  modelInfo: "Perfect for traditional festive wear, weddings, and grand ethnic occasions."
},
  {
    id: "33",
    name: "Traditional Jhumka Earrings",
    slug: "traditional-jhumka-earrings-g3",
    category: "Accessories",
    price: 699,
    description:
      "Classic traditional jhumka earrings with delicate filigree work and a bell-shaped drop. These timeless pieces add a touch of elegance to any ethnic ensemble. Light enough for extended wear yet bold enough to make a statement at celebrations and festivals.",
    colors: [
      { name: "Antique Gold", hex: "#CFB53B" },
    ],
    sizes: ["One Size"],
    images: [
      "/g3.jpeg",
    ],
    badge: "New",
    fabricCare: "Keep away from moisture. Store in a jewelry box. Clean with a soft cloth.",
    sizeGuide: "One size. Drop length: approximately 2.5 inches.",
    modelInfo: "Ideal for weddings, festivals, and traditional events",
  },
 {
  id: "34",
  name: "Traditional Elephant Jhumka Earrings",
  slug: "traditional-elephant-jhumka-earrings",
  category: "Accessories",
  price: 899,
  description: "A stunning pair of traditional jhumka earrings featuring an intricate elephant motif, adorned with sparkling white stones, vibrant ruby and emerald-colored accents, and elegant cascading pearl drops. A perfect statement piece for festive celebrations and weddings.",
  colors: [
    { name: "Gold & Multi", hex: "#D4AF37" },
  ],
  sizes: ["One Size"],
  images: [
    "/g4.jpeg",
  ],
  badge: "New",
  fabricCare: "Avoid contact with water and perfumes. Wipe with a dry cloth after each use. Store in a separate box or jewelry pouch to prevent tarnishing.",
  sizeGuide: "Length: 3.5 inches. Width: 1.2 inches.",
  modelInfo: "Pairs beautifully with silk sarees, lehengas, and heavy ethnic wear",
},
{
  id: "35",
  name: "Antique Gold Temple Jewelry Set",
  slug: "antique-gold-temple-jewelry-set",
  category: "Accessories",
  price: 1300,
  description: "An exquisite antique gold-finished temple jewelry set featuring an elaborate double-layer long necklace and matching jhumka earrings. The intricately crafted pieces are adorned with traditional divine motifs, elegant elephant carvings, and delicate pearl drop hangings, perfect for bridal and festive occasions.",
  colors: [
    { name: "Gold", hex: "#D4AF37" }
  ],
  sizes: ["One Size"],
  images: [
    "/g5.jpeg"
  ],
  badge: "New",
  fabricCare: "Avoid contact with water, perfumes, and heat. Store in a soft pouch or airtight box after use.",
  sizeGuide: "Adjustable necklace chain. Matching jhumka earrings included.",
  modelInfo: "Perfect for traditional bridal, festive, and wedding wear"
},
  {
    id: "36",
    name: "Pleated Cotton Trousers",
    slug: "pleated-cotton-trousers-p1",
    category: "Bottoms",
    price: 799,
    description:
      "Elegant pleated cotton trousers with a comfortable high-waisted fit. Features a straight-leg cut that flatters every body type. The lightweight cotton makes them ideal for long workdays and casual outings alike. Pair with kurtas, tunics, or crop tops for a polished look.",
    colors: [
      { name: "Beige", hex: "#F5F5DC" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/p1.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "XS: Waist 26\", Hip 36\" | S: Waist 28\", Hip 38\" | M: Waist 30\", Hip 40\" | L: Waist 32\", Hip 42\" | XL: Waist 34\", Hip 44\"\nInseam: 36\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "37",
    name: "Ethnic Print Palazzo Pants",
    slug: "ethnic-print-palazzo-pants-p2",
    category: "Bottoms",
    price: 799,
    description:
      "Wide-legged palazzo pants adorned with traditional ethnic prints. The elasticated waistband ensures a comfortable fit, while the flowing silhouette adds grace to any outfit. Perfect for festive occasions, casual gatherings, or daily ethnic wear.",
    colors: [
      { name: "Teal", hex: "#008080" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/p2.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash cold. Tumble dry low. Iron on medium.",
    sizeGuide: "S: Waist 26-28\", Length 38\" | M: Waist 28-30\", Length 38\" | L: Waist 30-32\", Length 39\" | XL: Waist 32-34\", Length 39\" | XXL: Waist 34-36\", Length 40\"",
    modelInfo: "Model is 5'5\" wearing size S",
  },
  {
    id: "38",
    name: "High-Waist Straight Pants",
    slug: "high-waist-straight-pants-p3",
    category: "Bottoms",
    price: 799,
    description:
      "A versatile pair of high-waist straight pants crafted from soft cotton. The clean lines and minimal design make them a wardrobe essential that pairs seamlessly with everything from casual tees to elegant kurtas. Features functional front pockets and a zip fly.",
    colors: [
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/p3.jpeg",
    ],
    badge: "New",
    fabricCare: "Cotton Blend. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "XS: Waist 26\", Hip 36\" | S: Waist 28\", Hip 38\" | M: Waist 30\", Hip 40\" | L: Waist 32\", Hip 42\" | XL: Waist 34\", Hip 44\"\nInseam: 34\"",
    modelInfo: "Model is 5'7\" wearing size S",
  },
  {
    id: "39",
    name: "Flared Ankle-Length Pants",
    slug: "flared-ankle-length-pants-p4",
    category: "Bottoms",
    price: 799,
    description:
      "Trendy flared pants with an ankle-length cut that shows off your footwear. The gentle flare from the knee creates a retro-inspired silhouette that's both flattering and fashionable. Made from breathable cotton with a hint of stretch for all-day comfort.",
    colors: [
      { name: "Dusty Rose", hex: "#C08081" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/p4.jpeg",
    ],
    badge: "New",
    fabricCare: "98% Cotton, 2% Elastane. Machine wash cold. Hang to dry. Iron on low.",
    sizeGuide: "XS: Waist 26\", Hip 36\" | S: Waist 28\", Hip 38\" | M: Waist 30\", Hip 40\" | L: Waist 32\", Hip 42\" | XL: Waist 34\", Hip 44\"\nInseam: 30\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "40",
    name: "Drawstring Cotton Joggers",
    slug: "drawstring-cotton-joggers-p5",
    category: "Bottoms",
    price: 799,
    description:
      "Comfortable drawstring joggers made from soft cotton with a relaxed fit. Features an elasticated waistband with adjustable drawstring, side pockets, and tapered legs. Perfect for lounging, travel, or creating a smart-casual look with sneakers and a simple top.",
    colors: [
      { name: "Olive Green", hex: "#6B8E23" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/p5.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash gentle cycle. Tumble dry low. Iron on medium.",
    sizeGuide: "S: Waist 28-30\", Inseam 28\" | M: Waist 30-32\", Inseam 29\" | L: Waist 32-34\", Inseam 30\" | XL: Waist 34-36\", Inseam 30\" | XXL: Waist 36-38\", Inseam 31\"",
    modelInfo: "Model is 5'8\" wearing size M",
  },
  {
    id: "41",
    name: "Floral Print A-Line Dress",
    slug: "summer-florals-floral-print-dress",
    category: "Summer Florals",
    price: 1899,
    description:
      "A joyful summer dress covered in delicate floral prints on a lightweight fabric. The A-line silhouette skims the body gracefully, while the breathable cotton keeps you cool during warm days. Perfect for beach outings, brunches, and garden parties.",
    colors: [
      { name: "Sky Blue", hex: "#87CEEB" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/d1.jpeg",
      "/dress-2.jpg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Bust 36\", Waist 28\", Length 44\" | M: Bust 38\", Waist 30\", Length 45\" | L: Bust 40\", Waist 32\", Length 46\" | XL: Bust 42\", Waist 34\", Length 47\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "42",
    name: "Festive Bandhani Lehenga Set",
    slug: "festive-edit-bandhani-lehenga",
    category: "Festive Edit",
    price: 7999,
    description:
      "A lavish lehenga set featuring traditional Bandhani tie-dye patterns and rich zari embroidery. The flared skirt moves with elegance, paired with a matching choli and sheer dupatta. Designed for weddings, engagements, and grand festive celebrations.",
    colors: [
      { name: "Royal Fuchsia", hex: "#E0115F" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/d11.jpeg",
      "/d11c1.jpeg",
      "/d11c2.jpeg",
    ],
    badge: "New",
    fabricCare: "Silk Blend. Dry clean only. Store in garment bag. Handle with care.",
    sizeGuide: "XS: Bust 32\", Waist 26\", Hip 36\" | S: Bust 34\", Waist 28\", Hip 38\" | M: Bust 36\", Waist 30\", Hip 40\" | L: Bust 38\", Waist 32\", Hip 42\" | XL: Bust 40\", Waist 34\", Hip 44\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "43",
    name: "Simple Cotton Straight Kurta",
    slug: "daily-grace-cotton-straight-kurta",
    category: "Daily Grace",
    price: 1299,
    description:
      "An everyday essential — a clean, simple cotton kurta with a straight fit. The minimal design and soft fabric make it perfect for daily wear, office days, and casual errands. Easy to style with leggings, jeans, or joggers.",
    colors: [
      { name: "Off White", hex: "#FFFFF0" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/k1.jpeg",
      "/k5.jpeg",
    ],
    badge: "New",
    fabricCare: "100% Cotton. Machine wash gentle cycle. Hang to dry. Iron on medium.",
    sizeGuide: "S: Length 42\", Bust 36\" | M: Length 43\", Bust 38\" | L: Length 44\", Bust 40\" | XL: Length 45\", Bust 42\" | XXL: Length 45\", Bust 44\"",
    modelInfo: "Model is 5'6\" wearing size S",
  },
  {
    id: "44",
    name: "Elegant Evening Gown",
    slug: "evening-luxe-elegant-gown",
    category: "Evening Luxe",
    price: 6999,
    description:
      "A truly luxurious evening gown crafted from premium satin-like fabric with subtle shimmer. The fitted bodice and flowing train create a dramatic silhouette perfect for galas, receptions, and formal dinners. Exquisite beadwork along the neckline adds a touch of opulence.",
    colors: [
      { name: "Deep Black", hex: "#1A1A1A" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/e11.jpeg",
      "/e12.jpeg",
    ],
    badge: "New",
    fabricCare: "Premium Satin Blend. Dry clean only. Store on padded hanger. Avoid contact with jewelry.",
    sizeGuide: "XS: Bust 32\", Waist 26\", Length 60\" | S: Bust 34\", Waist 28\", Length 61\" | M: Bust 36\", Waist 30\", Length 62\" | L: Bust 38\", Waist 32\", Length 63\" | XL: Bust 40\", Waist 34\", Length 64\"",
    modelInfo: "Model is 5'7\" wearing size S",
  },
];

export const FREE_SHIPPING_THRESHOLD = 1999;
export const FREE_GIFT_THRESHOLD = 3999;