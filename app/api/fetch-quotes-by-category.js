import prisma from "../db.server";

export const fetchQuotesByCategory = async (...categoryNames) => {
  const quotes = await prisma.quotes.findMany({
    where: {
      subject: {
        in: categoryNames,
      },
    },
  });

  return quotes;
};
