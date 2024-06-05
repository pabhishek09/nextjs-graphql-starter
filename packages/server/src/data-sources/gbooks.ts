import { RESTDataSource } from "@apollo/datasource-rest";
import { FetchBooksResponse } from "./gbooks.types";

export class GBooksAPI extends RESTDataSource {

  baseURL = "https://www.googleapis.com/books/v1/";

  fetchBooks = async (searchTerm: string) => {
    const res: FetchBooksResponse = await this.get(`volumes?q=${searchTerm}`);
    return res.items.map((item: any) => ({
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
    }));
  }
}
