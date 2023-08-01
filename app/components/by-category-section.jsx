// import { Link } from "@remix-run/react";
import { Link } from "@remix-run/react";
import Carousel from "./carousel";

export default function QuotesByCategory({ categories }) {
  return (
    <section className="ml-4 sm:mx-10 lg:mx-28 xl:mx-36 my-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium">Quotes by category</h1>
        {/* <Link
          to="/"
          className="flex items-center text-indigo-500 self-end mt-4"
        >
          <span className="text-sm">All categories</span>
          <ArrowRightGraphic className="h-4" />
        </Link> */}
      </div>
      <Carousel className="mt-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            imageUrl={`/covers/${category.subject.toLowerCase()}.jpeg`}
            text={category.subject.replace("-", " ")}
          />
        ))}
      </Carousel>
    </section>
  );
}

function CategoryCard({ imageUrl, text }) {
  return (
    <Link to={`/category/${text}`}>
      <article className="mx-auto group relative flex-shrink-0 h-48 w-48 grid place-content-center overflow-hidden rounded">
        <h1 className="text-xl leading-none text-white uppercase font-light text-center z-20">
          {text}
        </h1>
        <img
          src={imageUrl}
          alt={text}
          className="absolute h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
          onError={
            (e) => (e.target.src = "https://picsum.photos/id/1018/200/200/") // fallback image
          }
        />
        <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
      </article>
    </Link>
  );
}
