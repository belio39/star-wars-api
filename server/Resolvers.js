const axios = require("axios");

const resolvers = {
  Query: {
    getAllPeople: async (_, { page }) => {
      const result = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`
      );
      let res = {
        people: [Object],
        count: Number,
      };
      if (result.data && result.data.results) {
        res.people = result.data.results;
        res.count = result.data.count;
      }
      return res;
    },

    getHomeWorld: async (_, args) => {
      const result = await axios.get(args.homeWorldUrl);
      return result.data;
    },

    getPeopleByName: async (_, { name }) => {
      const result = await axios.get(
        `https://swapi.dev/api/people/?search=${name}`
      );
      return result.data && result.data.results ? result.data.results : [];
    },
  },
};

module.exports = { resolvers };
