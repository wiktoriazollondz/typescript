const products = [
  { id: 1, name: "Chleb", price: 5, inStock: true },
  { id: 2, name: "Mleko", price: 12, inStock: false },
  { id: 3, name: "Szynka", price: 25, inStock: true },
  { id: 4, name: "Ser", price: 15, inStock: true },
];

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const searchProduct = (products: Product[]): Product[] => {
  return products.filter((p) => p.inStock && p.price > 10);
};
