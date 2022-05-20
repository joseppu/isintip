import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `${process.env.DATABASE_URL!}?schema=${
        process.env.VERCEL_GIT_COMMIT_REF || "public"
      }`,
    },
  },
  log:
    process.env.NODE_ENV === "production"
      ? ["info", "warn", "error"]
      : ["query", "info", "warn", "error"],
});

export default prisma;
