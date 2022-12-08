import express from "express";
import data from "./data.js";
const app = express();
const port = process.env.PORT || 4000;
// Middleware
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`The Server is running on https://localhost${port}`);
});
