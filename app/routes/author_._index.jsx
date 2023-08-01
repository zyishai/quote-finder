import { Fragment, useState, useEffect } from "react";
import { useLoaderData, useActionData, useSubmit } from "@remix-run/react";
import { json } from "@remix-run/node";
import { fetchQuotesByAuthor } from "../api/fetch-quotes-by-author";
import { getAllAuthors } from "../api/get-all-authors";
import clsx from "clsx";
import { Switch } from "@headlessui/react";
import QuoteGrid from "../components/quotes-grid";
import EmptyGraphic from "../components/empty-graphic";

export const action = async ({ request }) => {
  const body = await request.json();
  const authors = body.authors;
  const quotes = await fetchQuotesByAuthor(...authors);

  return json({ authors, quotes });
};

export const loader = async () => {
  const authors = await getAllAuthors();
  return json({ authors });
};

export default function CategoriesPage() {
  const { authors } = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();
  const [selectedAuthors, setSelectedAuthors] = useState([]);

  useEffect(() => {
    if (selectedAuthors) {
      submit(
        { authors: selectedAuthors },
        { method: "post", encType: "application/json" }
      );
    }
  }, [selectedAuthors]);

  return (
    <main className="p-8">
      <h1 className="text-3xl text-gray-900 mb-2">
        <span className="font-semibold">Quotes by Author</span>
      </h1>
      <p className="text-sm text-gray-500">
        Select one or more authors to display.
      </p>

      <section className="mt-4">
        <ul className="flex flex-wrap gap-4">
          {authors.map((author) => (
            <li key={author.id}>
              <Switch
                as={Fragment}
                onChange={(checked) =>
                  setSelectedAuthors(
                    checked
                      ? [...selectedAuthors, author.spokesperson]
                      : selectedAuthors.filter((a) => a !== author.spokesperson)
                  )
                }
              >
                {({ checked }) => (
                  <button
                    type="button"
                    className={clsx([
                      "rounded-full px-3.5 py-2 text-sm font-light shadow-sm ring-1 ring-inset ring-gray-300",
                      { "text-white bg-gray-700": checked },
                      { "text-gray-800 bg-white hover:bg-gray-50": !checked },
                    ])}
                  >
                    <span className="sr-only">
                      Select {author.spokesperson}
                    </span>
                    <span>{author.spokesperson}</span>
                  </button>
                )}
              </Switch>
            </li>
          ))}
        </ul>
      </section>

      {actionData?.quotes && actionData.quotes.length > 0 ? (
        <QuoteGrid className="mt-16" quotes={actionData?.quotes} />
      ) : (
        <section className="p-8">
          <div className="inline-block">
            <p className="text-sm font-light text-gray-500 text-center mb-4">
              No authors selected
            </p>
            <EmptyGraphic className="h-64" />
          </div>
        </section>
      )}
    </main>
  );
}
