export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: {
    text: string;
    bgColor: string; // e.g., 'bg-cyber-yellow', 'bg-brand-magenta'
  };
  bgColor?: string; // block background behind item (pink, green, yellow, etc.)
  category: string; // 'all' | 'outer' | 'tops' | 'bottoms' | 'bag' | 'acc'
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}
