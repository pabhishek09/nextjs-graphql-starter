"use client";

import { useState, useEffect, useRef } from "react";

const books = [
  {
    title: "Meghan and Harry",
    authors: ["Lady Colin Campbell"],
  },
  {
    title: "Grandad's Camper",
    authors: ["Harry Woodgate"],
  },
  {
    title: "The Cadet Life of Prince Harry",
    authors: ["Vasile Michael"],
  },
  {
    title: "Prince Harry: The Inside Story",
    authors: ["Duncan Larcombe"],
  },
  {
    title: "The Irresistible Rise of Harry Potter",
    authors: ["Andrew Blake"],
  },
  {
    title: "The Making of the Potterverse",
    authors: ["Scott Thomas"],
  },
  {
    title: "Sir Harry",
    authors: ["Archibald Marshall"],
  },
  {
    title: "Harry",
    authors: ["Katie Nicholl"],
  },
  {
    title: "Harry and Meghan: A Love Story Coloring Book",
    authors: ["Teresa Goodridge"],
  },
  {
    title: "Harry's Holiday Level 1 Beginner/Elementary",
    authors: ["Antoinette Moses"],
  },
];

const BooksPage = () => {
  const firstEffect = useRef(true);
  const [searchInput, setSearchInput] = useState("");

  const [searchResults, setSearchresults] = useState<
    { title: string; authors: string[] }[]
  >([]);

  // Handle changes on searchInput
  useEffect(() => {
    if (firstEffect.current) {
      firstEffect.current = false;
      return;
    } else if (searchInput.length > 3) {
      console.log(`Trigger a search for ${searchInput}`);
      setSearchresults(books);
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
        {searchResults.length > 0 ? (
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
      </div>
    </main>
  );
};

export default BooksPage;
