"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retailerDim = exports.productDim = exports.dateDim = exports.salesFact = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.salesFact = (0, pg_core_1.pgTable)("sales_fact", {
    saleid: (0, pg_core_1.serial)("saleid").primaryKey().notNull(),
    productid: (0, pg_core_1.integer)("productid").references(() => exports.productDim.productid),
    retailerid: (0, pg_core_1.integer)("retailerid").references(() => exports.retailerDim.retailerid),
    date: (0, pg_core_1.date)("date").references(() => exports.dateDim.date),
    quantity: (0, pg_core_1.integer)("quantity").notNull(),
    price: (0, pg_core_1.numeric)("price").notNull(),
});
exports.dateDim = (0, pg_core_1.pgTable)("date_dim", {
    date: (0, pg_core_1.date)("date").primaryKey().notNull(),
    day: (0, pg_core_1.integer)("day").notNull(),
    month: (0, pg_core_1.integer)("month").notNull(),
    year: (0, pg_core_1.integer)("year").notNull(),
    quarter: (0, pg_core_1.integer)("quarter").notNull(),
    dayofweek: (0, pg_core_1.varchar)("dayofweek", { length: 9 }).notNull(),
    weekofyear: (0, pg_core_1.integer)("weekofyear").notNull(),
});
exports.productDim = (0, pg_core_1.pgTable)("product_dim", {
    productid: (0, pg_core_1.serial)("productid").primaryKey().notNull(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    brand: (0, pg_core_1.varchar)("brand", { length: 255 }),
    category: (0, pg_core_1.varchar)("category", { length: 255 }),
});
exports.retailerDim = (0, pg_core_1.pgTable)("retailer_dim", {
    retailerid: (0, pg_core_1.serial)("retailerid").primaryKey().notNull(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    channel: (0, pg_core_1.varchar)("channel", { length: 50 }),
    location: (0, pg_core_1.varchar)("location", { length: 255 }),
});
