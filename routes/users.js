const express = require("express");
// const router = express.Router();
const router = express.Router();

const users = [
  {
    firstName: "Naimur Rahman",
    lastName: "Rahman",
    age: 21,
  },
  {
    firstName: "Rny",
    lastName: "d",
    age: 31,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  console.log(user)
  res.send(`User With UserName ${user.fristName} add to the database`)
});

module.exports = router;
