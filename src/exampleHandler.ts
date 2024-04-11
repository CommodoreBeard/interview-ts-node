import { desc, eq, sql, sum } from 'drizzle-orm';
import { db } from "./db/client";
import { productDim, salesFact } from "./db/schema";

export function exampleORM() {
    return db.select({
            productId: salesFact.productid,
            productName: productDim.name,
            productBrand: productDim.brand,
            productCategory: productDim.category,
            totalQuantitySold: sql<number>`sum(${salesFact.quantity})`.as('totalQuantitySold'),
            totalRevenue: sql<number>`sum(${salesFact.quantity} * ${salesFact.price})`.as('totalRevenue')
        })
        .from(salesFact)
        .leftJoin(productDim, eq(salesFact.productid, productDim.productid))
        .groupBy(salesFact.productid, productDim.name, productDim.brand, productDim.category)
        .orderBy(desc(sql<number>`sum(${salesFact.quantity} * ${salesFact.price})`))
        .limit(10)
}

export function exampleRAW() {
    return db.execute(sql`
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