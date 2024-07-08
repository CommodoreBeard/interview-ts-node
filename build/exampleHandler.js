"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleHandler = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const client_1 = require("./db/client");
function exampleHandler() {
    return client_1.db.execute((0, drizzle_orm_1.sql) `
        SELECT *
        FROM sales_fact
        LIMIT 10;
    `);
}
exports.exampleHandler = exampleHandler;
