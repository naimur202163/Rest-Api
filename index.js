const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const userRoute = require("./routes/users");
app.use(bodyParser.json());
// Routes

app.get("/", (req, res) => {
  console.log("TEst");
  res.send("HEllo From The Server");
});

app.use("/users", userRoute);
app.listen(PORT, () => {
  console.log(`Server is running on htts:localhost${PORT}`);
});
