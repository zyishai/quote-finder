import prisma from "../db.server";

export const getAllAuthors = async () => {
  const authors = await prisma.quotes.findMany({
    select: { id: true, spokesperson: true },
    distinct: "spokesperson",
    orderBy: {
      spokesperson: "asc",
    },
  });

  return authors;
};
