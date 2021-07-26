const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getAllPeople(page: Int): People
    getPerson(id: Int!): Person
    getHomeWorld(homeWorldUrl: String!): HomeWorld!
    getPeopleByName(name: String!): SearchResults
  }

  type People {
    people: [Person!]
    count: Int
  }
  type SearchResults {
    results: [Person!]
    count: Int
  }

  type HomeWorld {
    name: String
    rotation_period: Int
    orbital_period: Int
    diameter: Int
    climate: String
    gravity: String
    terrain: String
    surface_water: Int
    population: Int
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
