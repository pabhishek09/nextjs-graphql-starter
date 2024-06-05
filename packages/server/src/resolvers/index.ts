import { Resolvers } from '../types'

const fetchBooks = async (_, args: { searchTerm: string }, { dataSources }) => {
  console.log(`Searching for books with search term: ${args.searchTerm}`)
  const searchTerm = args?.searchTerm || "Harry";
  return dataSources.gbooks.fetchBooks(searchTerm);
};

const addReview = (_, args: { review: any }) => {
  console.log("add review", args);
  return args.review;
};

const resolvers: Resolvers = {
  Query: {
    books: fetchBooks,
  },
  Mutation: {
    review: addReview,
  },
};

export default resolvers;
