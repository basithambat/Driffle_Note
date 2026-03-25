import type { Metadata } from "next";

import { AppProviders } from "@/components/providers/app-providers";

import "../styles/index.css";

export const metadata: Metadata = {
  title: "Driffle — Stop scribbling. Start remembering.",
  description: "Driffle quietly listens to your meetings and turns your rough notes into clear, structured records — no bots, no interruptions.",
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
