export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: {
    type: "discount" | "new"; // Enforce specific values
    value?: string;
  };
};
