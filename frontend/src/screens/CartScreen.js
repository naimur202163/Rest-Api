import React from "react";

export default function CartScreen(props) {
  const productId = props.match.params.id;

  const qty = props.location.serach
    ? Number(props.location.serach.split("="[1]))
    : 1;

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductId :{productId} QTY:{qty}
      </p>
    </div>
  );
}
