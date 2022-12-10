import express from "express";
import data from "./data.js";
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Hello From the server");
});

app.listen(5000, () => {
  console.log(`The server is running on port 5000`);
});
