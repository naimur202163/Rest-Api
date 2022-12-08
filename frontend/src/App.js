import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import ProductScreen from "./screens/ProductScreen";
import { Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Amozona</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </main>

        <footer>
          
        </footer>
      </div>
    </BrowserRouter>
  );
}
