import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const usersRouter = createTRPCRouter({
  listByWorkspace: protectedProcedure
    .input(z.object({ workspaceId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      const memberships = await ctx.db.workspaceMember.findMany({
        where: { workspaceId: input.workspaceId },
        select: {
          role: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      return memberships;
    }),
});
