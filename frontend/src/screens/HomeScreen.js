import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductsScreen from "./ProductsScreen";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/products`);
      setProducts(data);
    };

   
    fetchData();
  }, []);
  return (
    <div>
      <div className="content">
        <ul className="products">
          {products.map((product) => (
            <li>
              <ProductsScreen product={product}></ProductsScreen>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
