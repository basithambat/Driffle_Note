import { protectedProcedure, createTRPCRouter } from "@/server/api/trpc";

export const authRouter = createTRPCRouter({
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { clerkUserId: ctx.userId },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }),
});
