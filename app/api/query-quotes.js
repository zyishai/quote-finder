import prisma from "../db.server";

export const queryQuotes = async (searchTerm) => {
  const quotes = await prisma.quotes.findMany({
    where: {
      OR: [
        {
          quote: {
            contains: searchTerm,
          },
        },
        {
          subject: {
            contains: searchTerm,
          },
        },
        {
          spokesperson: {
            contains: searchTerm,
          },
        },
        {
          tags: {
            contains: searchTerm,
          },
        },
      ],
    },
  });

  return quotes;
};
