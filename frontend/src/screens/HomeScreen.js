import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import ProductsScreen from "./ProductsScreen";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <h2>This is Home Page</h2>
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
