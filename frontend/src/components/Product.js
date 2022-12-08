import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div>
      <Card className="product" key={product.slug}>
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
        </Link>
        <Card.Body>
          <div className="product-info">
            <Card.Title>
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
            </Card.Title>
            <Card.Text>
              <p>
                {" "}
                <strong>${product.price}</strong>
              </p>
            </Card.Text>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
            <Button>Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
