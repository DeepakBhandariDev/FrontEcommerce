import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { CardDeck } from "react-bootstrap";
import { ProductsState, Product } from "../../types";
import "./index.css";
import CombBtn from "../CombBtn";
import DetailsBtn from "../DetailsBtn";

import ThemeContext from "../../themeContext";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ProductCard({
  _id,
  imageUrl,
  name,
  brand,
  category,
  description,
  price,
  countInStock,
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
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const viewProduct = () => {
    history.push(`/products/${_id}`);
  };

  const { theme, switchTheme } = useContext(ThemeContext);
  const style = { backgroundColor: theme.color };

  return (
    <CardDeck className="card-deck" style={{ margin: "15px" }}>
      <Card key="name">
        <img src={imageUrl} />

        <Card.Body className="card-body" style={style}>
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div className="btn-cntnr">
          <h4>{brand}</h4>
          <h4>{price}€</h4>
          <div className="btns">
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
            />
            <DetailsBtn viewProduct={viewProduct} />
          </div>
        </div>
      </Card>
    </CardDeck>
  );
}
