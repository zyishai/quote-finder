// import { Link } from "@remix-run/react";
import { Link } from "@remix-run/react";
import Carousel from "./carousel";

export default function QuotesByAuthor({ authors }) {
  return (
    <section className="ml-4 sm:mx-10 lg:mx-28 xl:mx-36 my-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium">Quotes by author</h1>
        {/* <Link
          to="/"
          className="flex items-center text-indigo-500 self-end mt-4"
        >
          <span className="text-sm">All authors</span>
          <ArrowRightGraphic className="h-4" />
        </Link> */}
      </div>
      <Carousel className="mt-3">
        {authors.map((author) => (
          <AuthorCard
            key={author.id}
            imageUrl={`/spokesman/${author.spokesperson.toLowerCase()}.jpeg`}
            text={author.spokesperson.replace("-", " ")}
          />
        ))}
      </Carousel>
    </section>
  );
}

function AuthorCard({ imageUrl, text }) {
  return (
    <Link to={`/author/${text}`}>
      <article className="mx-auto group relative flex-shrink-0 h-48 w-48 grid place-content-center overflow-hidden rounded p-2">
        <h1 className="text-lg text-white uppercase font-light text-center z-20">
          {text}
        </h1>
        <img
          src={imageUrl}
          alt={text}
          className="absolute h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
        />
        <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
      </article>
    </Link>
  );
}
