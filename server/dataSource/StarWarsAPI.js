const { RESTDataSource } = require("apollo-datasource-rest");
class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_ENDPOINT;
  }
}
module.exports = { StarWarsAPI };
