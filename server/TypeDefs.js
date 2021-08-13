const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getAllPeople(page: Int!): People
    getHomeWorld(homeWorldUrl: String!): HomeWorld!
    getPeopleByName(name: String!): [Person!]
  }

  type People {
    people: [Person!]
    count: Int!
  }

  type HomeWorld {
    name: String
    rotation_period: String
    orbital_period: String
    diameter: String
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: String
    residents: [String]
    films: [String]
  }

  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }
`;
module.exports = { typeDefs };
