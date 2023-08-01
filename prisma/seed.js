const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const raw = [
    {
      subject: "science",
      spokesperson: "Albert Einstein",
      quote: "Imagination is more important than knowledge.",
      tags: "imagination, knowledge, science, inspiration",
    },
    {
      subject: "science",
      spokesperson: "Carl Sagan",
      quote: "The cosmos is within us. We are made of star-stuff.",
      tags: "cosmos, star-stuff, astronomy, universe",
    },
    {
      subject: "science",
      spokesperson: "Marie Curie",
      quote: "Nothing in life is to be feared, it is only to be understood.",
      tags: "fear, understanding, life, insight",
    },
    {
      subject: "science",
      spokesperson: "Neil deGrasse Tyson",
      quote:
        "The good thing about science is that it's true whether or not you believe in it.",
      tags: "truth, science, belief, reality",
    },
    {
      subject: "well-being",
      spokesperson: "Dalai Lama",
      quote:
        "Happiness is not something ready-made. It comes from your own actions.",
      tags: "happiness, well-being, actions, joy",
    },
    {
      subject: "well-being",
      spokesperson: "Brene Brown",
      quote:
        "Owning our story and loving ourselves through that process is the bravest thing that we'll ever do.",
      tags: "self-love, bravery, empowerment, self-acceptance",
    },
    {
      subject: "well-being",
      spokesperson: "Thich Nhat Hanh",
      quote:
        "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
      tags: "joy, smile, happiness, positive",
    },
    {
      subject: "well-being",
      spokesperson: "Deepak Chopra",
      quote:
        "In the midst of movement and chaos, keep stillness inside of you.",
      tags: "stillness, peace, serenity, mindfulness",
    },
    {
      subject: "productivity",
      spokesperson: "Stephen Covey",
      quote:
        "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
      tags: "prioritization, time management, planning, effectiveness",
    },
    {
      subject: "productivity",
      spokesperson: "Tim Ferriss",
      quote: "Focus on being productive instead of busy.",
      tags: "productivity, efficiency, effectiveness, focus",
    },
    {
      subject: "productivity",
      spokesperson: "David Allen",
      quote: "Your mind is for having ideas, not holding them.",
      tags: "mindfulness, creativity, idea generation, organization",
    },
    {
      subject: "productivity",
      spokesperson: "Thomas Edison",
      quote:
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
      tags: "genius, hard work, perseverance, innovation",
    },
    {
      subject: "business",
      spokesperson: "Warren Buffett",
      quote: "The best investment you can make is in yourself.",
      tags: "investment, self-development, personal growth, success",
    },
    {
      subject: "business",
      spokesperson: "Sheryl Sandberg",
      quote:
        "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
      tags: "opportunity, ambition, career, entrepreneurship",
    },
    {
      subject: "business",
      spokesperson: "Peter Drucker",
      quote: "The best way to predict the future is to create it.",
      tags: "future, prediction, innovation, vision",
    },
    {
      subject: "business",
      spokesperson: "Richard Branson",
      quote:
        "Train people well enough so they can leave, treat them well enough so they don't want to.",
      tags: "employee retention, leadership, management, employee satisfaction",
    },
    {
      subject: "politics",
      spokesperson: "Nelson Mandela",
      quote: "It always seems impossible until it's done.",
      tags: "impossible, achievable, perseverance, inspiration",
    },
    {
      subject: "politics",
      spokesperson: "Winston Churchill",
      quote:
        "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
      tags: "courage, communication, leadership, listening",
    },
    {
      subject: "politics",
      spokesperson: "Malala Yousafzai",
      quote:
        "We realize the importance of our voices only when we are silenced.",
      tags: "voice, activism, empowerment, advocacy",
    },
    {
      subject: "politics",
      spokesperson: "Barack Obama",
      quote:
        "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
      tags: "change, action, responsibility, leadership",
    },
  ];
  console.log(
    await Promise.all(raw.map((data) => prisma.quotes.create({ data })))
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
