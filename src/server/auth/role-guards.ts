import { TRPCError } from "@trpc/server";

import { db } from "@/db/client";

export type MembershipRole = "OWNER" | "ADMIN" | "MEMBER";

export async function assertWorkspaceMembership(userId: string, workspaceId: string) {
  const membership = await db.workspaceMember.findUnique({
    where: {
      workspaceId_userId: {
        workspaceId,
        userId,
      },
    },
    select: {
      role: true,
    },
  });

  if (!membership) {
    throw new TRPCError({ code: "FORBIDDEN", message: "Not a member of this workspace" });
  }

  return membership.role;
}

export function assertMinRole(role: MembershipRole, allowed: MembershipRole[]) {
  if (!allowed.includes(role)) {
    throw new TRPCError({ code: "FORBIDDEN", message: "Insufficient role permissions" });
  }
}
