import quotes from "../data/quotes.json";
import { getJulianDate } from "../utils/date";

export const getDailyQuote = async () => {
  const dailyIndex = Math.floor(getJulianDate(new Date()) % quotes.length);
  return quotes[dailyIndex];
};
