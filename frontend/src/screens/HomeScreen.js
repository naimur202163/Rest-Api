import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductsScreen from "./ProductsScreen";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(`/api/products`);
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div>loading........</div>
      ) : error ? (
        { error }
      ) : (
        <div className="content">
          <ul className="products">
            {products.map((product) => (
              <li>
                <ProductsScreen product={product}></ProductsScreen>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
