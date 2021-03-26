import React, { useContext, useEffect } from "react";
import { Product } from "../../types";
import "./index.css";
import CombBtn from "../CombBtn";
import DetailsBtn from "../DetailsBtn";
import { useLocation } from "react-router-dom";
import ThemeContext from "../../themeContext";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "../../types";

import { addQuantity, subtractQuantity, removeItem } from "../../redux/actions/cart";


export default function CartCard({
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
  const product = {
    _id,
    imageUrl,
    name,
    brand,
    category,
    description,
    price,
    countInStock,
    quantity:1,
  };

  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const viewProduct = () => {
    history.push(`/products/${_id}`);
  };


  
  useEffect(() => {
    console.log("changed");
  }, [dispatch]);

  const { theme, switchTheme } = useContext(ThemeContext);
  const style = { backgroundColor: theme.color };

  return (
    <div className="cart-list">
    <div className="cart-deck" style={{ margin: "15px" }}>
      <div key="name" className="cartIn">
        <img src={imageUrl} onClick={viewProduct}/>

        <div className="cart-body" style={style}>
          <div>
            <h5>{name}</h5>
          </div>
          <div>{description}</div>
        </div>
        <div className="btn-cntnr">
          <h6>{brand}</h6>
          <h4>{price}€</h4>
          <div className="btns">
        <h6>{quantity}x{price}€ = {(price)*(quantity as number)}</h6>
      </div>
      <div className="quantity">
        <button className="btn" onClick={() => dispatch(addQuantity(product))}>+</button>
        <h5>{"  "+quantity+"  "}</h5>
        {quantity!==1?<button className="btn" onClick={() => dispatch(subtractQuantity(product))}>-</button>:
        <button className="btn" onClick={() => dispatch(removeItem(product))}>-</button>}

      </div>
    </div>
    </div>
    </div></div>
  );
}
