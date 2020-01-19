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
app.post("/api/login", (req, res) => {
  // To sign in we need to have an user 
  // Creating a mock user
  // this user credential will be used as payload to the token
  const user = {
    id: 1,
    username: 'siat',
    email: 'siat@gmail.com'
  }

  // payload goes here first parameter is the user or whatever you give 
  // second is the secret key 
  // we are using the asynchronous system so we need to have a callback
  // sending the parameters ES6 style 
  // so we are writting user and token instead of user: user and token: token
  jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
      token
    })
  });
});

app.listen(5000, () => console.log("Server started on port 5000"));
