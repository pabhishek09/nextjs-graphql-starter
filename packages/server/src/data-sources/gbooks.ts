import { RESTDataSource } from "@apollo/datasource-rest";

export class SpotifyAPI extends RESTDataSource {
  baseURL = "https://www.googleapis.com/books/v1/";
}
