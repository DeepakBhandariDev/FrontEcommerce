import React from "react";
import CartCard from "../components/ProductCard";
import { AppState } from "../types";
import { useSelector } from "react-redux";
import "./index.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const products = useSelector((state: AppState) => state.cart.cartProducts);

  if (products.length !== 0) {
    return (
      <div className="crdd">
        <div className="hdd">
          <h1>Cart</h1>
        </div>
        {products.map((product) => (

          <CartCard
            _id={product._id}
            key={product.name}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
            brand={product.brand}
            category={product.category}
            price={product.price}
            countInStock={product.countInStock}
            quantity={product.quantity}
            
          />
        ))}
      </div>
    );
  }
  {
    return (
      <div>
        <div className="crt">
          <h1>Your Cart is empty. </h1>
        </div>
      </div>
    );
  }
}
