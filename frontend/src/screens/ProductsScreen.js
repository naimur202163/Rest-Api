import React from "react";
import Rating from "../components/Rating";

export default function ProductsScreen(props) {
  const { product } = props;
  return (
    <div>
      <div key={product._id} className="product card">
        <img className="product-image" src="images/d1.jpg" alt="product" />
        <div className="product-name">
          <a href={`/product/${product._id}`}>{product.name}</a>
        </div>
        <div className="product-brand">Nike</div>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="product-price">${product.price}</div>
        <div className="product-rating">4.5 Stars (10 Reviews)</div>
      </div>
    </div>
  );
}
