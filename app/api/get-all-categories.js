import quotes from "../data/quotes.json";

export const getAllCategories = async () => {
  return [...new Set(quotes.map((quote) => quote.subject))];
};
