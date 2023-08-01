import quotes from "../data/quotes.json";

export const fetchQuotesByAuthor = async (...authorNames) => {
  return quotes.filter((quote) => authorNames.includes(quote.spokesperson));
};
