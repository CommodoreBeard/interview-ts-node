"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleRAW = exports.exampleORM = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const client_1 = require("./db/client");
const schema_1 = require("./db/schema");
function exampleORM() {
    return client_1.db.select({
        productId: schema_1.salesFact.productid,
        productName: schema_1.productDim.name,
        productBrand: schema_1.productDim.brand,
        productCategory: schema_1.productDim.category,
        totalQuantitySold: (0, drizzle_orm_1.sql) `sum(${schema_1.salesFact.quantity})`.as('totalQuantitySold'),
        totalRevenue: (0, drizzle_orm_1.sql) `sum(${schema_1.salesFact.quantity} * ${schema_1.salesFact.price})`.as('totalRevenue')
    })
        .from(schema_1.salesFact)
        .leftJoin(schema_1.productDim, (0, drizzle_orm_1.eq)(schema_1.salesFact.productid, schema_1.productDim.productid))
        .groupBy(schema_1.salesFact.productid, schema_1.productDim.name, schema_1.productDim.brand, schema_1.productDim.category)
        .orderBy((0, drizzle_orm_1.desc)((0, drizzle_orm_1.sql) `sum(${schema_1.salesFact.quantity} * ${schema_1.salesFact.price})`))
        .limit(10);
}
exports.exampleORM = exampleORM;
function exampleRAW() {
    return client_1.db.execute((0, drizzle_orm_1.sql) `
        SELECT
            sales_fact.productid as productId,
            product_dim.name AS productName,
            product_dim.brand AS productBrand,
            product_dim.category AS productCategory,
            SUM(sales_fact.quantity) AS totalQuantitySold,
            SUM(sales_fact.quantity * sales_fact.price) AS totalRevenue
        FROM sales_fact
        LEFT JOIN product_dim ON sales_fact.productid = product_dim.productid
        GROUP BY sales_fact.productid, product_dim.name, product_dim.brand, product_dim.category
        ORDER BY totalRevenue DESC
        LIMIT 10;
    `);
}
exports.exampleRAW = exampleRAW;
