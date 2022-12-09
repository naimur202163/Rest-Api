import express from "express";
import data from "./data.js";
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  // const product=data.product
  const product = data.products.find((x) => x.slug === req.params.slug);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({
      message: "Product Not Found",
    });
  }
});

app.listen(port, () => {
  console.log(`The Server is running on https://localhost${port}`);
});
