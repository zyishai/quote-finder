import quotes from "../data/quotes.json";

export const fetchQuotesByCategory = async (...categoryNames) => {
  return quotes.filter((quote) => categoryNames.includes(quote.subject));
};
