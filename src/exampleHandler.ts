import { sql } from 'drizzle-orm';
import { db } from "./db/client";

export function exampleHandler() {
    return db.execute(sql`
        SELECT *
        FROM sales_fact
        LIMIT 10;
    `);
}