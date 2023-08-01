import { Fragment, useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { json } from "@remix-run/node";
import { useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import clsx from "clsx";
import EmptyGraphic from "../components/empty-graphic";
import QuoteGrid from "../components/quotes-grid";
import { getAllCategories } from "../api/get-all-categories";
import { fetchQuotesByCategory } from "../api/fetch-quotes-by-category";

export const action = async ({ request }) => {
  const body = await request.json();
  const categories = body.categories;
  const quotes = await fetchQuotesByCategory(...categories);

  return json({ categories, quotes });
};

export const loader = async () => {
  const categories = await getAllCategories();
  return json({ categories });
};

export default function CategoriesPage() {
  const { categories } = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();
  const [activeCategories, setActiveCategories] = useState([]);

  useEffect(() => {
    if (activeCategories) {
      submit(
        { categories: activeCategories },
        { method: "post", encType: "application/json" }
      );
    }
  }, [activeCategories]);

  return (
    <main className="p-8">
      <h1 className="text-3xl text-gray-900 mb-2">
        <span className="font-semibold">Quotes by Category</span>
      </h1>
      <p className="text-sm text-gray-500">
        Select one or more categories to display.
      </p>

      <section className="mt-4">
        <ul className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Switch
                as={Fragment}
                onChange={(checked) =>
                  setActiveCategories(
                    checked
                      ? [...activeCategories, category.subject]
                      : activeCategories.filter((c) => c !== category.subject)
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
                    <span className="sr-only">Select {category.subject}</span>
                    <span>{category.subject}</span>
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
              No categories selected
            </p>
            <EmptyGraphic className="h-64" />
          </div>
        </section>
      )}
    </main>
  );
}
