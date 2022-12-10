import React from "react";
import data from "../data";
import ProductsScreen from "./ProductsScreen";

export default function HomeScreen() {
  return (
    <div>
      <div className="content">
        <ul className="products">
          {data.products.map((product) => (
            <li>
              <ProductsScreen product={product}></ProductsScreen>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
