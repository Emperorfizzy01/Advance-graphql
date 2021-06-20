const { ApolloServer, gql } = require("apollo-server");
const { mainCards, animals, categories } = require("./db")
const typeDefs = require("./schema")
const Animal = require("./resolvers/Animal")
const Category = require("./resolvers/Category")
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")


const server = new ApolloServer({ 
  typeDefs, 
  resolvers: {
    Animal,
    Category,
    Query,
    Mutation
  },
  context: {
    mainCards,
    animals,
    categories
  } 
   });

// The `listen` method launches a web server.
server.listen(3000, () => {
  console.log(`🚀  Server ready at 3000`);
})