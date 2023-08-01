export default function AboutPage() {
  return (
    <main className="p-8 prose lg:prose-lg">
      <h1>
        About{" "}
        <span
          className="text-white"
          style={{
            textShadow:
              "-1px -1px 0 #8d8d8d, 1px -1px 0 #8d8d8d, -1px 1px 0 #8d8d8d, 1px 1px 0 #8d8d8d",
          }}
        >
          Quote
        </span>
        Finder
      </h1>

      <p>
        QuoteFinder is a side project of mine. Its purpose is to bring to the
        public the quotes of the great people of all times.
      </p>
      <p>
        In QuoteFinder you can look for quotes by: word in the quote, name of
        the spokesperson or even by the subject of the Quote.
      </p>
      <p>
        QuoteFinder was developed by Yishai Zehavi.
        <br />
        For my other side projects, visit me at{" "}
        <a href="https://yishaizehavi.com" target="_blank">
          https://yishaizehavi.com
        </a>
        .
        <br />
        You can contact me directly via email at{" "}
        <span className="font-medium text-gray-800">
          zehaviyishai [at] gmail.com
        </span>
        .
      </p>
    </main>
  );
}
