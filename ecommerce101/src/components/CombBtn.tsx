import React, { useContext } from "react";
import "./index.css";

import { AppState, Product } from "../types";

import { useDispatch, useSelector } from "react-redux";

import ThemeContext from "../themeContext";
import { addToCart } from "../redux/actions/cart";

import { deleteCartItem } from "../redux/actions/cart";

export default function CombBtn({
  _id,
  imageUrl,
  name,
  brand,
  category,
  description,
  price,
  countInStock,
  quantity,
}: Product) {
  const cartProducts: Product[] = useSelector(
    (state: AppState) => state.cart.cartProducts
  );

  const { theme, switchTheme } = useContext(ThemeContext);
  const style = { backgroundColor: theme.color };

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
    quantity,
  };
  const dispatch = useDispatch();
  return (
    <div className="dv">
      
        <button className="btn"  onClick={() => dispatch(addToCart(product))}>
          AddCart
        </button>
      
     
    </div>
  );
}
