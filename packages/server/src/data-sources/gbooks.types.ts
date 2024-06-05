interface Book {
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
  
interface FetchBooksResponse {
    items: Array<Book>;
};

export {
    Book,
    FetchBooksResponse
}
