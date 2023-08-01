import prisma from "../db.server";

export const getAllCategories = async () => {
  const categories = await prisma.quotes.findMany({
    select: { id: true, subject: true },
    distinct: "subject",
    orderBy: {
      subject: "asc",
    },
  });

  return categories;
};
