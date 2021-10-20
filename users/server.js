const express = require('express');
// by convention, we always use GraphQL casing
const { graphqlHTTP } = require('express-graphql');
const app = express();

//* add middleware to reroute any /graphql routes to an instance of express-graphql
app.use('/graphql', graphqlHTTP({
    // graphiql for dev env
    graphiql: true
}))

const PORT = 4000
app.listen(PORT, () => console.log(`Listening on Port ${PORT} `))