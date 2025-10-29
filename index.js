// import express
const express = require("express");
const app = express();

// JSON
app.use(express.json());
app.use(express.urlencoded());

app.get("/users", (req, res) => {
  res.json([
    { id: 3, name: "Alice", age: "20", access: true },
    { id: 2, name: "Bob", age: "22", access: false },
    { id: 1, name: "James", age: "18", access: true },
  ]);
});

app.get("/users/:ref", (req, res) => {
  const ref = req.params.ref;
  res.json({ ref });
});

app.post("/users", (req, res) => {
  const name = req.body?.name;
  if (!name) {
    return res.status(400).json({ msg: "Required" });
  }
  res.json({ name });
});

app.listen(8800, () => {
  console.log("API running...");
});
