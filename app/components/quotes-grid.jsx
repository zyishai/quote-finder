import Quote from "./quote";

export default function QuotesGrid({ quotes, className }) {
  return (
    <section
      className={[
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-24",
        className,
      ].join(" ")}
    >
      {quotes.map((quote) => (
        <Quote key={quote.id} quote={quote} />
      ))}
    </section>
  );
}
