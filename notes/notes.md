# Notes

_Why was graphQL created?_

**RESTful** routing

/users/23/posts/23/link/2/......

the problems with RESTful routing become apparent when we're heavily nesting data, REST begins to break down or is at least harder to imp.

## 3 Issues with REST

- Heavily Nested Data

- Too Many HTTP requests

- Over fetching, get the whole company object when we only need the name

The above can be solved w/in REST, but it takes engineering time and effort

GRAPHQL can solve the above with minimal effort

Imagine all the data in a graph structure - nodes and relations

Edges are the relationships between nodes

We're not changing how we store data in a db
