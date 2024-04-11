import type { Config } from "drizzle-kit";
export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: "postgres://postgres:mysecretpassword@0.0.0.0:5432/sales",
  }
} satisfies Config;