import React, { useContext, useEffect } from "react";
import {  Product } from "../../types";
import "./index.css";
import CombBtn from "../CombBtn";
import DetailsBtn from "../DetailsBtn";
import { useLocation } from 'react-router-dom'
import ThemeContext from "../../themeContext";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {AppState} from '../../types'

export default function CartCard({
  _id,
  imageUrl,
  name,
  brand,
  category,
  description,
  price,
  countInStock,
  quantity
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
    quantity
  };

  const location = useLocation();

  const dispatch = useDispatch();
  const history = useHistory();
  const viewProduct = () => {
    history.push(`/products/${_id}`);
  };

  useEffect(() => {
    console.log("changed")
  },[dispatch]);

  const { theme, switchTheme } = useContext(ThemeContext);
  const style = { backgroundColor: theme.color };

  return (
    <div className="cart-card">
      <div className="cart-image" key={_id}>
        <img src={imageUrl} />
        </div>
        <div className="card-body" style={style}>
          
            <h3>{name}</h3>
          <h2>{quantity}</h2>
          {description}
          <h4>{brand}</h4>
          <h4>{price}€</h4>
        </div>
        <div className="cart-btn-cntnr">
          
          
            <CombBtn
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
            <DetailsBtn viewProduct={viewProduct} />
          
        
      </div>
    </div>
  );
}
