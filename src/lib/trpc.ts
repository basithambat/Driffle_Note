"use client";

import { QueryClient } from "@tanstack/react-query";
import { createTRPCReact } from "@trpc/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import superjson from "superjson";

import type { AppRouter } from "@/server/api/root";

export const trpc = createTRPCReact<AppRouter>();

export const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30000,
        refetchOnWindowFocus: false,
      },
    },
  });

export const makeTrpcClient = () =>
  trpc.createClient({
    links: [
      loggerLink({
        enabled: (op) => process.env.NODE_ENV === "development" || (op.direction === "down" && op.result instanceof Error),
      }),
      httpBatchLink({
        url: "/api/trpc",
        transformer: superjson,
      }),
    ],
  });
