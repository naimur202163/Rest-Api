import express from "express";
import data from "./data.js";
const port = 5000;
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({
      message: "Product Not Found",
    });
  }
});
app.get("/", (req, res) => {
  res.send("Hello From the server");
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
