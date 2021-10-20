//? The Schema communicates the type of data over to GraphQL 
//? As well as the relationship between types

const graphql = require('graphql');

// destructure 
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphql


//* this reminds me of Mongoose schemas - 
        //!  if it was typed
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString } ,
        age: { type: GraphQLInt }
    }
})

//! THE ROOT QUERY
//? we need to give GraphQL the entry point of the query - in our course example
//? give me user : 23, all their friends, all of their friends companies....
//* User : 23 - would be the ROOT QUERY


//? You can read this as saying, you can give me a user - if you pass me the id,
//? I'll give you the UserType back to you....

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString }},
            //! Resolve, goes into the database and finds the data we're looking for
            //! ParentValue - not really used ever
            //! args is the object that gets called with the args in the query...
            resolve(parentValue, args) {

            }
        }
    }
})