import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { queryQuotes } from "../api/query-quotes";
import QuotesGrid from "../components/quotes-grid";

export const loader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const searchTerm = searchParams.get("q");
  const quotes = await queryQuotes(searchTerm);

  return json({ searchTerm, quotes });
};

export default function QuotesPage() {
  const { searchTerm, quotes } = useLoaderData();

  return (
    <main className="p-8">
      <h1 className="text-3xl text-indigo-900">
        <span className="font-semibold mr-1.5">Results for:</span>
        <span className="font-light">
          {searchTerm
            ?.split(" ")
            .map((word) => `${word.at(0).toUpperCase()}${word.slice(1)}`)
            .join(" ")}
        </span>
      </h1>

      <QuotesGrid className="mt-12" quotes={quotes} />
    </main>
  );
}
