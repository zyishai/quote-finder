import { json } from "@remix-run/node";
import QuotesByAuthor from "../components/by-author-section";
import QuotesByCategory from "../components/by-category-section";
import DailyQuote from "../components/daily-quote";
import prisma from "../db.server";
import { useLoaderData } from "@remix-run/react";
import { getDailyQuote } from "../api/get-daily-quote";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const categories = await prisma.quotes.findMany({
    select: { id: true, subject: true },
    distinct: "subject",
  });
  const authors = await prisma.quotes.findMany({
    select: { id: true, spokesperson: true },
    distinct: "spokesperson",
    orderBy: {
      spokesperson: "asc",
    },
  });
  return json({ categories, authors, dailyQuote: await getDailyQuote() });
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
