type Item = {
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    retailPrice: {
      amount: number;
      currencyCode: string;
    };
  };
};

type SearchRes = {
  items: Array<Item>;
};

const fetchBooks = async (_, args: { searchTerm: string }) => {
  const searchTerm = args?.searchTerm || "Harry";
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  );
  const json = (await res.json()) as SearchRes;
  const formattedJson = json.items.map((item) => ({
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
  }));
  console.log(`query successful for ${searchTerm}`);
  return formattedJson;
};

const addReview = (_, args: { review: any }) => {
  console.log("add review", args);
  return args.review;
};

const resolvers = {
  Query: {
    books: fetchBooks,
  },
  Mutation: {
    review: addReview,
  },
};

export default resolvers;
