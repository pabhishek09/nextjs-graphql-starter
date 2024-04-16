"use client";

import { useState, useEffect, useRef, useContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  ApolloQueryResult,
} from "@apollo/client";
import { ClientContext } from "../clientContext";

const GET_BOOKS = gql`
  query Books($searchTerm: String!) {
    books(searchTerm: $searchTerm) {
      title
      authors
    }
  }
`;

const BooksPage = () => {
  const firstEffect = useRef(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchresults] = useState<
    { title: string; authors: string[] }[]
  >([]);

  const { data, loading } = useQuery(GET_BOOKS, {
    variables: { searchTerm },
  });
  console.log({ data });

  useEffect(() => {
    if (data && data?.books) {
      setSearchresults(data?.books);
    } else {
      setSearchresults([]);
    }
  }, [data]);

  useEffect(() => {
    if (firstEffect.current) {
      firstEffect.current = false;
      return;
    } else if (searchInput.length > 3) {
      setSearchTerm(searchInput);
    }
  }, [searchInput]);

  return (
    <main className="all-books">
      <h1 className="text-center">Search Books</h1>
      <div className="my-8 flex justify-center">
        <div className="w-6/12">
          <input
            className="w-full border-solid border-2 border-indigo-600 p-4 rounded-md"
            placeholder="Search for title"
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
      </div>
      <div className="mt-8 border-solid border-2 border-indigo-600 p-4 rounded-md">
        {searchResults?.length > 0 ? (
          <div>
            <h1 className="text-center">Search results for {searchInput}</h1>
            {searchResults.map((result) => (
              <div className="py-4" key={result.title} onClick={() => {}}>
                {result.title} by {result.authors.join(", ")}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-center">Search for some books</h1>
          </div>
        )}
        {loading && <h1>loading results...</h1>}
      </div>
    </main>
  );
};

export default BooksPage;
