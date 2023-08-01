import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchQuotesByAuthor } from "../api/fetch-quotes-by-author";
import QuotesGrid from "../components/quotes-grid";

export const loader = async ({ params }) => {
  const authorName = params.author;
  const quotes = await fetchQuotesByAuthor(authorName);

  return json({ authorName, quotes });
};

export default function AuthorQuotesPage() {
  const { authorName, quotes } = useLoaderData();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold text-indigo-900">
        {authorName
          ?.split(" ")
          .map((word) => `${word.at(0).toUpperCase()}${word.slice(1)}`)
          .join(" ")}
      </h1>

      <QuotesGrid className="mt-12" quotes={quotes} />
    </main>
  );
}
