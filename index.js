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

app.listen(8800, () => {
    console.log("API running at 8800...");
});