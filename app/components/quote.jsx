import QuoteGraphic from "./quote-graphic";
import CopyGraphic from "./copy-graphic";
import SpokesPerson from "./spokesperson";
import { copyQuoteTextToClipboard } from "../utils/copy";
import { notify } from "../utils/toast";

export default function Quote({ quote }) {
  return (
    <article className="flex flex-col min-h-[200px]">
      <div className="relative flex-1">
        <h1 className="relative z-10 text-xl font-medium text-gray-800">
          {quote.quote}
        </h1>
        <QuoteGraphic className="absolute bottom-0 right-0 w-auto h-28 text-gray-100" />
      </div>
      <div className="flex items-center mt-8 gap-x-3">
        <SpokesPerson
          imageUrl={`/spokesman/${quote.spokesperson.toLowerCase()}.jpeg`}
          alt={quote.spokesperson}
        />
        {/* <div className="relative h-14 w-14 rounded-full overflow-hidden bg-gray-200 border-2 border-indigo-800">
          <img
            src={`/spokesman/${quote.spokesperson.toLowerCase()}.jpeg`}
            alt={quote.spokesperson}
            className="w-full h-full object-cover"
          />
        </div> */}
        <span className="text-xl font-light text-gray-600">
          {quote.spokesperson}
        </span>
      </div>
      <div className="flex items-center justify-end mt-4">
        <button
          type="button"
          className="flex items-center text-indigo-600 hover:text-indigo-500"
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
          <span>copy</span>
          <CopyGraphic className="h-4" />
        </button>
      </div>
    </article>
  );
}
