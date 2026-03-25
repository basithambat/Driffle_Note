import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

import { db } from "@/db/client";

export const createTRPCContext = async (opts?: { req?: Request }) => {
  const userId = opts?.req?.headers.get("x-user-id") ?? "local-dev-user";
  return {
    db,
    userId,
  };
};

const t = initTRPC.context<Awaited<ReturnType<typeof createTRPCContext>>>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      ...ctx,
      userId: ctx.userId,
    },
  });
});
