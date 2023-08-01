import prisma from "../db.server";

export const fetchQuotesByAuthor = async (...authorNames) => {
  const quotes = await prisma.quotes.findMany({
    where: {
      spokesperson: {
        in: authorNames,
      },
    },
  });

  return quotes;
};
