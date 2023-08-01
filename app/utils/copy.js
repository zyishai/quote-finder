export async function copyQuoteTextToClipboard(quote) {
  if (navigator.clipboard) {
    return navigator.clipboard
      .writeText(quote.quote)
      .then(() => true)
      .catch(() => false);
  } else {
    const textArea = document.createElement("textarea");
    textArea.style.position = "fixed";
    textArea.style.top = -100;
    textArea.style.left = -100;

    textArea.style.width = "2em";
    textArea.style.height = "2em";

    textArea.style.padding = 0;

    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";

    textArea.style.background = "transparent";

    textArea.value = quote.quote;
    document.body.append(textArea);
    textArea.focus();
    textArea.select();
    const successfull = document.execCommand("copy");

    document.body.removeChild(textArea);

    return successfull;
  }
}
