import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchQuotesByCategory } from "../api/fetch-quotes-by-category";
import QuotesGrid from "../components/quotes-grid";

export const loader = async ({ params }) => {
  const categoryName = params.category;
  const quotes = await fetchQuotesByCategory(categoryName.replace(" ", "-"));

  return json({ categoryName, quotes });
};

export default function CategoryPage() {
  const { categoryName, quotes } = useLoaderData();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold text-indigo-900">
        {categoryName
          ?.split(" ")
          .map((word) => `${word.at(0).toUpperCase()}${word.slice(1)}`)
          .join(" ")}
      </h1>

      <QuotesGrid className="mt-12" quotes={quotes} />
    </main>
  );
}
