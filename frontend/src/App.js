import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import data from "./data";
import HomeScreen from "./screens/HomeScreen";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Amozona</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
          <h1>Featured Products</h1>

          <div className="products">
            {data.products.map((product) => (
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
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
