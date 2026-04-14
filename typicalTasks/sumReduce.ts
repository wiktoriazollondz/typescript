const cart = [
  { name: "Laptop", price: 3000, quantity: 1 },
  { name: "Myszka", price: 100, quantity: 2 },
  { name: "Monitor", price: 800, quantity: 1 }
];

interface Product {
    name: string;
    price: number;
    quantity: number;
}

const sumAllProductsPrices = (cart: Product[]): number => {
    return cart.reduce((acc, curr) => curr.price * curr.quantity + acc, 0)
}