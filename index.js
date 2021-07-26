const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./server/TypeDefs");
const { resolvers } = require("./server/Resolvers");
const { StarWarsAPI } = require("./server/dataSource/StarWarsAPI");
const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");
const app = express();
dotenv.config();
app.use(cors());

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        starWarsAPI: new StarWarsAPI(),
      };
    },
  });
  await server.start();
  server.applyMiddleware({ app, path: "/" });

  const PORT = process.env.PORT || 4000;

  await app.listen(PORT, () => {
    console.log(`App Running at Port: ${PORT}`);
  });
  return { server, app };
}
startServer();
