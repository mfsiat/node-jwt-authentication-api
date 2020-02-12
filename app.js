const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API"
  });
});

// now lets create a route that we want to protect
// the route we want to protect 
// we need to create a middleware function 
app.post("/api/posts", verifyToken, (req, res) => {
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

// Format of token 
// Authorization: Bearer <access_token> 


// Verify Token 
// middlware function for protecting routes
function verifyToken(req, res, next) {
  // Get the auth header value 
  // so when we sent our token we want to sent it to the header 
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined 
  if(typeof bearerHeader !== 'undefined') {
    // split at the space 
    const bearer = bearerHeader.split(' ');
    // Get token from array 
    const bearerToken = bearer[1];
    // Set the token 
    req.token = bearerToken;
    // Next middleware 
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

app.listen(5000, () => console.log("Server started on port 5000"));
