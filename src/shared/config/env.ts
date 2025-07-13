import { z } from "zod";

const envSchema = z.object({
  isDev: z.boolean(),
  // PUBLIC_URL: z.string(),

  CONTENT_URL: z.string(),
  CONTENT_TOKEN: z.string().optional(),
});

export const env = envSchema.parse({
  ...process.env,
  isDev: process.env.NODE_ENV === "development",
  // PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL,
});
