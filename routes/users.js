const express = require("express");
// const router = express.Router();
const router = express.Router();
const uuidv4 = require("uuid");

const users = [
  {
    id: 1,
    firstName: "Naimur Rahman",
    lastName: "Rahman",
    age: 21,
  },
  {
    id: 2,
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
  users.push({ ...user });
  res.send(`User With UserName ${user.fristName} add to the database`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser)
});
module.exports = router;
