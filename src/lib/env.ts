import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().optional(),
  DIRECT_URL: z.string().optional(),
});

export const env = envSchema.parse(process.env);
