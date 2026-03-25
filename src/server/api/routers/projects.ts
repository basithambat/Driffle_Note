import { z } from "zod";

import { assertMinRole, assertWorkspaceMembership } from "@/server/auth/role-guards";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const projectsRouter = createTRPCRouter({
  list: protectedProcedure
    .input(z.object({ workspaceId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      await assertWorkspaceMembership(ctx.userId, input.workspaceId);

      return ctx.db.project.findMany({
        where: { workspaceId: input.workspaceId },
        orderBy: { createdAt: "asc" },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string().cuid(),
        name: z.string().min(2).max(120),
        key: z.string().min(2).max(8),
        description: z.string().max(2000).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const role = await assertWorkspaceMembership(ctx.userId, input.workspaceId);
      assertMinRole(role, ["OWNER", "ADMIN"]);

      return ctx.db.project.create({
        data: {
          workspaceId: input.workspaceId,
          name: input.name,
          key: input.key.toUpperCase(),
          description: input.description,
        },
      });
    }),
});
