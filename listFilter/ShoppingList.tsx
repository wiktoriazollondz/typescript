import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
}

interface ProductsProps {
  products: Product[];
}

interface ProductItemProps {
  name: string;
  productDelete: () => void;
}

// TYLKO FUNCTION BO TO DZIECKO
function ProductItem({
  name,
  productDelete,
}: ProductItemProps): React.ReactElement {
  return (
    <div>
      <p>{name}</p>
      <button onClick={productDelete}>Usuń</button>
    </div>
  );
}

export default function ShoppingList({
  products: initialProducts,
}: ProductsProps): React.ReactElement {
  const [products, setProducts] = useState(initialProducts);
  const handleProductDelete = (productId: number) => {
    setProducts((prevProducts) => {
      const filteredProducts = prevProducts.filter((p) => p.id !== productId);
      return filteredProducts;
    });
  };
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {
              <ProductItem
                name={product.name}
                productDelete={() => handleProductDelete(product.id)}
              ></ProductItem>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

const initialProducts = [
  { id: 1, name: "Chleb", category: "Spożywcze" },
  { id: 2, name: "Mleko", category: "Spożywcze" },
  { id: 3, name: "Młotek", category: "Narzędzia" },
  { id: 4, name: "Baterie", category: "Elektronika" },
];
