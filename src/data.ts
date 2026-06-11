import { Product } from "./types";

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "candy-shop-tee",
    name: "Candy Shop Baby Top",
    price: 45000,
    image: "https://193igusa.com/cdn/shop/files/I_1_f74ab495-0af0-40b0-90bc-12daf3b9174b.png?v=1777613741&width=600",
    badge: { text: "HOT", bgColor: "bg-cyber-yellow" },
    bgColor: "bg-candy-pink",
    category: "tops"
  },
  {
    id: "cool-gal-outer",
    name: "i-rabbit T-shirt cream",
    price: 66000,
    image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/G_1_895dcb77-e857-40dd-b49f-1d251f65470a.png?v=1777613824",
    bgColor: "bg-slime-green",
    category: "tops"
  },
  {
    id: "messy-internet-tee",
    name: "Lococo Lace Rib Top",
    price: 87000,
    image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/D_1_2f9ab1eb-11cd-4f58-8c96-4f3b16d3b6db.png?v=1777613938",
    bgColor: "bg-sky-200",
    category: "tops"
  },
  {
    id: "starboy-knit",
    name: "Candy Shop Bear Zip Hoodie",
    price: 196000,
    image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/A_1_21b839aa-8402-4322-aae6-c533a040f6e9.png?v=1777614046",
    bgColor: "bg-yellow-100",
    category: "outer"
  },
  {
    id: "harajuku-dream-shorts",
    name: "Rose Mesh Midi Skirt",
    price: 93000,
    image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/R_1_ab3cbe68-0f4a-4aa5-a96f-f94581e24d37.png?v=1777611818",
    bgColor: "bg-purple-100",
    category: "bottoms"
  },
  {
    id: "y2k-layered-socks",
    name: "Couraged Knee-High",
    price: 40000,
    originalPrice: 45000,
    image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/motka2_Colorway_A_copy-Photoroom_copy.png?v=1776068249",
    badge: { text: "SALE", bgColor: "bg-brand-magenta" },
    bgColor: "bg-cyan-100",
    category: "acc"
  }
];

export const CURATED_ITEMS: Product[] = [
  {
    id: "candy-shop-top-curated",
    name: "美少女 T-shirt",
    price: 66000,
    image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/E_1_copy.png?v=1777613894",
    bgColor: "bg-emerald-100",
    category: "tops"
  },
  {
    id: "melody-bag-curated",
    name: "Melody Shoulder Bag",
    price: 154000,
    image: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/Photoroom_002_20251125_001304copy.png?v=1764002713",
    bgColor: "bg-sky-100",
    category: "bag"
  }
];

export const LOOKBOOK_IMAGES = [
  "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/DSC04884.jpg?v=1765523103",
  "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/r_1_f6966ca0-32df-4cba-bad8-f99092476b7e.png?v=1777613524",
  "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/E_1_copy.png?v=1777613894",
  "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/Photoroom_002_20251125_001304copy.png?v=1764002713",
  "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/DSC04884.jpg?v=1765523103",
  "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/G_1_895dcb77-e857-40dd-b49f-1d251f65470a.png?v=1777613824",
  "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/Photoroom_000_20251125_001304copy.png?v=1764002713"
];

export const SOCIAL_GRID = [
  { url: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/E_1_copy.png?v=1777613894" },
  { url: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/Photoroom_002_20251125_001304copy.png?v=1764002713" },
  { url: "https://193igusa.com/cdn/shop/files/5-Photoroom_4_03183315-ae94-4256-8879-d063ce64be95.png?v=1777525205&width=900" },
  { url: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/motka2_Colorway_A_copy-Photoroom_copy.png?v=1776068249" },
  { url: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/r_1_f6966ca0-32df-4cba-bad8-f99092476b7e.png?v=1777613524" },
  { url: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/I_1_f74ab495-0af0-40b0-90bc-12daf3b9174b.png?v=1777613741" },
  { url: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/G_1_895dcb77-e857-40dd-b49f-1d251f65470a.png?v=1777613824" },
  { url: "https://cdn.shopify.com/s/files/1/0825/4491/8821/files/DSC04884.jpg?v=1765523103" }
];

export const MARQUEE_IMAGES = [
  "https://193igusa.com/cdn/shop/files/1-Photoroom_4_8ebb518d-912f-4f79-bf8c-7c150160a911.png",
  "https://193igusa.com/cdn/shop/files/1-Photoroom_2_46c76fde-b623-4107-af76-f8037a6d1679.png",
  "https://193igusa.com/cdn/shop/files/5_copy-Photoroom_2025d069-9c56-4949-9ae5-775bb3ef89e1.png",
  "https://193igusa.com/cdn/shop/files/5-Photoroom_4_03183315-ae94-4256-8879-d063ce64be95.png",
  "https://193igusa.com/cdn/shop/files/4-Photoroom_10_3b54a9a6-2333-4ccd-8f58-8f0ba4c7320b.png",
  "https://193igusa.com/cdn/shop/files/7-Photoroom_157bc4b2-26e7-484d-ab32-9beca0615b37.png",
  "https://193igusa.com/cdn/shop/files/3-Photoroom_b4b6637f-c09b-4599-b091-dce8e8679488.png"
];
