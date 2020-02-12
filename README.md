# Node JWT Authentication

> Authenticate with JWT token

## Documentation 
![Click Here](https://github.com/auth0/node-jsonwebtoken)

## Why use JWT web tokens

These tokens are used to protect routes in an API, so that we can add
authentication to fetch a token and then we can make access to that token to get access to protected routes. If we have **node** on backend and **react** on front end we can make request to login and get the login stuff, thus we can get a token which can be saved anywhere and by that token we can get the protected stuffs that we need.

## Things available here

- A mock user.
- An overview of how to protect routes.
- How to get a token and how to use it to access routes.

## JWT Notes

- To implement the jwt web token we first need to get the token.
- We can get the token asychronously or synchronously.
- Read the documentation.
- JWT cycle goes like auth>varifies>jwt token
- Here we are using a mock user to give the payload parameter
- code goes here

```js
jwt.sign({ user }, "secretkey", (err, token) => {
  res.json({
    token
  });
});
```

- To protect the routes that are needed to be protected, we need to create a middleware.

- The middleware goes to the post method.

- Bearer <access_token>

- On entering the protected route we need to verify the token 