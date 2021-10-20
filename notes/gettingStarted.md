# Getting Started

`👾 $npm init`

`👾 $npm i --save express express-graphql graphql lodash`

Typically, when we're referring to graphql in a node/express app, we will use GraphQL - casing

```js
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
  })
);

app.listen(4000);
```

The above code will fire a middleware error message

```json
{
  "errors": [
    {
      "message": "GraphQL     middleware      options must    contain a schema."
    }
  ]
}
```

The Schema is super important for all GraphQL files, it tells graphql how things relate
