import { GBooksAPI } from "./gbooks";

test("GBooksAPI should be defined", () => {
  const gbooks = new GBooksAPI();
  expect(gbooks).toBeDefined();
});

test("fetchBooks should return an array of books", async () => {
    const gbooks = new GBooksAPI();
    const books = await gbooks.fetchBooks("Harry");
    expect(books).toBeDefined();
    expect(books.length).toBeGreaterThan(0);
});
