const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API"
  });
});

// now lets create a route that we want to protect
app.post("/api/posts", (req, res) => {
  res.json({
    message: "Post created..."
  });
});

// to implement jwt web token first we need to get the token
// lets create something for that 



app.listen(5000, () => console.log("Server started on port 5000"));
