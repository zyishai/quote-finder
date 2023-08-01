import { Link } from "@remix-run/react";
import QuoteGraphic from "./quote-graphic";
import ArrowRightGraphic from "./arrow-right-graphic";
import CopyGraphic from "./copy-graphic";
import { copyQuoteTextToClipboard } from "../utils/copy";
import { notify } from "../utils/toast";

export default function DailyQuote({ quote }) {
  return (
    <section className="py-6 px-12 bg-indigo-100 grid place-content-center">
      <div className="inline-flex flex-col sm:items-center">
        <h3 className="font-semibold text-sm sm:text-base text-indigo-700">
          The Daily Quote
        </h3>
        <div className="sm:hidden mt-4">
          <h1 className="text-2xl font-serif max-w-[35ch] leading-loose z-20 mr-10">
            {quote.quote}
          </h1>
          <div className="text-lg font-light text-right text-gray-600 mt-2">
            {quote.spokesperson}
          </div>
        </div>
        <div className="hidden relative sm:flex items-center mt-8">
          <div className="h-24 w-24 rounded-full bg-gray-50 overflow-hidden mr-8">
            {/* <div className="h-full w-full grid place-content-center text-center text-2xl font-medium text-indigo-600">
              {quote.spokesperson
                ?.split(" ")
                ?.map((word) => word.at(0).toUpperCase())}
            </div> */}
            <img
              src={`/spokesman/${quote.spokesperson.toLowerCase()}.jpeg`}
              alt="spokesman"
              className="w-full h-full object-cover text-xs"
            />
          </div>
          <h1 className="text-3xl font-serif max-w-[35ch] leading-normal z-20 mr-10">
            {quote.quote}
          </h1>
          <QuoteGraphic className="w-auto absolute -top-16 right-0 h-36 text-indigo-200" />
        </div>
        <button
          type="button"
          className="self-end mt-4 flex items-center text-indigo-600 hover:text-indigo-500"
          onClick={() =>
            copyQuoteTextToClipboard(quote).then((successfull) => {
              if (successfull) {
                notify("success", "Quote copied to clipboard!");
              } else {
                notify("error", "Copy failed");
              }
            })
          }
        >
          <span className="text-sm">copy</span>
          <CopyGraphic className="h-4" />
        </button>

        <Link
          to={`/author/${quote.spokesperson}`}
          className="self-center flex items-center text-indigo-500 mt-12 sm:mt-4"
        >
          <span className="text-sm">More from this author</span>
          <ArrowRightGraphic className="h-4" />
        </Link>
      </div>
    </section>
  );
}
