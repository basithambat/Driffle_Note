"use client";

import { trpc } from "@/lib/trpc";

const FALLBACK_WORKSPACE = "cm8x0fa7k0000i2z7zvmk0000";

export function IssueList() {
  const { data, isLoading, error } = trpc.issues.list.useQuery({ workspaceId: FALLBACK_WORKSPACE });

  if (isLoading) return <div className="text-sm text-muted-foreground">Loading issues...</div>;
  if (error) return <div className="text-sm text-red-500">{error.message}</div>;

  if (!data?.length) {
    return <div className="rounded-lg border p-4 text-sm text-muted-foreground">No issues yet.</div>;
  }

  return (
    <ul className="space-y-2">
      {data.map((issue) => (
        <li key={issue.id} className="rounded-lg border p-3">
          <div className="flex items-center justify-between gap-4">
            <span className="font-medium">{issue.title}</span>
            <span className="text-xs text-muted-foreground">{issue.status}</span>
          </div>
          {issue.description ? <p className="mt-2 text-sm text-muted-foreground">{issue.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}
