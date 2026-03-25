import { createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "@/server/api/routers/auth";
import { issuesRouter } from "@/server/api/routers/issues";
import { projectsRouter } from "@/server/api/routers/projects";
import { usersRouter } from "@/server/api/routers/users";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  users: usersRouter,
  projects: projectsRouter,
  issues: issuesRouter,
});

export type AppRouter = typeof appRouter;
