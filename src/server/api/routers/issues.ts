import { z } from "zod";

import { assertWorkspaceMembership } from "@/server/auth/role-guards";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

const status = z.enum(["BACKLOG", "TODO", "IN_PROGRESS", "IN_REVIEW", "DONE", "CANCELED"]);

export const issuesRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string().cuid(),
        projectId: z.string().cuid().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      await assertWorkspaceMembership(ctx.userId, input.workspaceId);

      return ctx.db.issue.findMany({
        where: {
          workspaceId: input.workspaceId,
          ...(input.projectId ? { projectId: input.projectId } : {}),
        },
        include: {
          assignees: { include: { user: true } },
          labels: { include: { label: true } },
        },
        orderBy: { createdAt: "desc" },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string().cuid(),
        projectId: z.string().cuid(),
        title: z.string().min(2).max(200),
        description: z.string().max(10000).optional(),
        priority: z.number().int().min(1).max(4).default(3),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await assertWorkspaceMembership(ctx.userId, input.workspaceId);

      const creator = await ctx.db.user.findUnique({ where: { clerkUserId: ctx.userId }, select: { id: true } });
      if (!creator) {
        throw new Error("User record not found. Ensure Clerk sync is configured.");
      }

      return ctx.db.issue.create({
        data: {
          workspaceId: input.workspaceId,
          projectId: input.projectId,
          title: input.title,
          description: input.description,
          priority: input.priority,
          createdById: creator.id,
        },
      });
    }),

  updateStatus: protectedProcedure
    .input(
      z.object({
        issueId: z.string().cuid(),
        workspaceId: z.string().cuid(),
        status,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await assertWorkspaceMembership(ctx.userId, input.workspaceId);
      return ctx.db.issue.update({ where: { id: input.issueId }, data: { status: input.status } });
    }),
});
