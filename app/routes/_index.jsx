import { json } from "@remix-run/node";
import QuotesByAuthor from "../components/by-author-section";
import QuotesByCategory from "../components/by-category-section";
import DailyQuote from "../components/daily-quote";
import { useLoaderData } from "@remix-run/react";
import { getAllAuthors } from "../api/get-all-authors";
import { getAllCategories } from "../api/get-all-categories";
import { getDailyQuote } from "../api/get-daily-quote";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const categories = await getAllCategories();
  const authors = await getAllAuthors();
  const dailyQuote = await getDailyQuote();
  return json({ categories, authors, dailyQuote });
};

export default function Index() {
  const { categories, authors, dailyQuote } = useLoaderData();

  return (
    <>
      <DailyQuote quote={dailyQuote} />
      <QuotesByCategory categories={categories} />
      <QuotesByAuthor authors={authors} />
    </>
  );
}
