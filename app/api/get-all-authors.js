import quotes from "../data/quotes.json";

export const getAllAuthors = async () => {
  return [...new Set(quotes.map((quote) => quote.spokesperson))];
};
