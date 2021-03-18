import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppState } from "../types";
import ProductCard from "../components/ProductCard";


export default function Product() {
  const { id } = useParams<{ id: string }>();

  const productsList = useSelector((state: AppState) => state.product.products);

  const product = productsList.find(
    (product) => product._id === id
  );
  console.log(product);

  if (product) {
    return (
     
        
        <div className="una">
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
          />
        </div>
     
    );
  } else {
    return <div>Product not found</div>;
  }
}
