import { IssueList } from "@/features/issues/issue-list";

export default function IssuesPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <h1 className="text-2xl font-semibold">Issues</h1>
        <IssueList />
      </div>
    </main>
  );
}
