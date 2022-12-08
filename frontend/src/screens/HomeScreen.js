import React from "react";
import data from "../data";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default function HomeScreen() {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  // Reducer Hook

  // Fetching Data

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });

      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });

        console.log(result.data);
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, []);

  console.log(products);
  return (
    <div>
      <h1>Featured Products</h1>

      <div className="products">
        {loading ? (
          <div>Loading...........</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>

              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>

                <p>
                  {" "}
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
