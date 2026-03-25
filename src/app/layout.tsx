import type { Metadata } from "next";

import { AppProviders } from "@/components/providers/app-providers";

import "../styles/index.css";

export const metadata: Metadata = {
  title: "Linear-like App",
  description: "Modern full-stack Next.js application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
