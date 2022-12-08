import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import ProductScreen from "./screens/ProductScreen";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Amozona</a>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
