const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("."))

const products = require("./products.json");

app.get("/products", function(req, res) {
    res.json(products);
});

app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});