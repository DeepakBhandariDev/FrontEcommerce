import React from "react";
import "./index.css";

import { AppState, Product } from "../types";

import { useDispatch, useSelector } from "react-redux";

import ThemeContext from "../themeContext";
import { addToCart } from "../redux/actions/cart";

import { removeFromCart } from "../redux/actions/cart";

export default function AddButtonn({
  _id,
  imageUrl,
  name,
  brand,
  category,
  description,
  price,
  countInStock,
}: Product) {
  const cartProducts: Product[] = useSelector(
    (state: AppState) => state.cart.cartProducts
  );

  const productIncludedInCart = cartProducts.find((c) => c.name === name);

  const product = {
    _id,
    imageUrl,
    name,
    brand,
    category,
    description,
    price,
    countInStock,
  };
  const dispatch = useDispatch();
  return (
    <div className="dv">
      {!productIncludedInCart ? (
        <button className="btn" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      ) : (
        <button className="btn" onClick={() => dispatch(removeFromCart(_id))}>
          Remove From Cart
        </button>
      )}
    </div>
  );
}
