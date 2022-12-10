import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div class="grid-container">
          <header class="header">
            <div class="brand">
              <button onclick="openMenu()">&#9776;</button>
              <a href="index.html">amazona</a>
            </div>
            <div class="header-links">
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
            </div>
          </header>
          <aside class="sidebar">
            <h3>Shopping Categories</h3>
            <button class="sidebar-close-button" onclick="closeMenu()">
              x
            </button>
            <ul>
              <li>
                <a href="index.html">Pants</a>
              </li>

              <li>
                <a href="index.html">Shirts</a>
              </li>
            </ul>
          </aside>
          <main className="main">
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <footer className="footer">All right reserved.</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}
