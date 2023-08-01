import quotes from "../data/quotes.json";

export const queryQuotes = async (searchTerm) => {
  return quotes.filter(
    (quote) =>
      quote.quote.includes(searchTerm) ||
      quote.spokesperson.includes(searchTerm) ||
      quote.subject.includes(searchTerm) ||
      quote.tags.includes(searchTerm)
  );
};
