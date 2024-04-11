import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres("postgres://postgres:mysecretpassword@0.0.0.0:5432/sales");
export const db = drizzle(queryClient);