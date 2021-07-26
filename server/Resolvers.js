const fetch = require("node-fetch");

const resolvers = {
  Query: {
    getAllPeople: async (_, { page }) => {
      const url = `https://swapi.dev/api/people/?${page}`;
      const res = await fetch(`${url}`);
      return await res.json();
    },

    getHomeWorld: async (_, { args }) => {
      const res = await fetch(args.getHomeWorld);
      return await res.json();
    },

    getPerson: async (_, { id }) => {
      const url = "https://swapi.dev/api/people/";
      const res = await fetch(`${url}${id}`);
      return await res.json();
    },

    getPeopleByName: async (_, { name }) => {
      const url = `https://swapi.dev/api/people/?search=${name}`;
      const res = await fetch(`${url}`);
      return await res.json();
    },
  },
};

module.exports = { resolvers };
