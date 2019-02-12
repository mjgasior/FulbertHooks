const express = require("express");
require("dotenv").config();

const app = express();

app.get("/public", function(req, res) {
  res.json({
    message: "Hello from public api"
  });
});

app.listen(3001);
console.log("Server working @" + process.env.REACT_APP_API_URL);