import prisma from "../db.server";

export const getDailyQuote = async () => {
  const [dailyQuote] =
    await prisma.$queryRaw`select * from quotes limit 1 offset (select julianday()%20 from quotes);`;
  return dailyQuote;
};
