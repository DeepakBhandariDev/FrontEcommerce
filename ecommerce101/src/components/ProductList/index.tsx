import React from "react";
import ProductCard from "../ProductCard";
import { AppState, ProductsState } from "../../types";
import { useSelector } from "react-redux";
import "./index.css";

export default function ProductList() {
  const products = useSelector((state: AppState) => state.product.products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          _id={product._id}
          key={product.name}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          brand={product.brand}
          category={product.category}
          price={product.price}
          countInStock={product.countInStock}
          quantity={1}
        />
      ))}
    </div>
  );
}
