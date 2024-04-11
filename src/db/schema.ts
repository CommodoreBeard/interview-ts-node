import { pgTable, date, integer, varchar, foreignKey, serial, numeric } from "drizzle-orm/pg-core";

export const salesFact = pgTable("sales_fact", {
	saleid: serial("saleid").primaryKey().notNull(),
	productid: integer("productid").references(() => productDim.productid),
	retailerid: integer("retailerid").references(() => retailerDim.retailerid),
	date: date("date").references(() => dateDim.date),
	quantity: integer("quantity").notNull(),
	price: numeric("price").notNull(),
});

export const dateDim = pgTable("date_dim", {
	date: date("date").primaryKey().notNull(),
	day: integer("day").notNull(),
	month: integer("month").notNull(),
	year: integer("year").notNull(),
	quarter: integer("quarter").notNull(),
	dayofweek: varchar("dayofweek", { length: 9 }).notNull(),
	weekofyear: integer("weekofyear").notNull(),
});

export const productDim = pgTable("product_dim", {
	productid: serial("productid").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	brand: varchar("brand", { length: 255 }),
	category: varchar("category", { length: 255 }),
});

export const retailerDim = pgTable("retailer_dim", {
	retailerid: serial("retailerid").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	channel: varchar("channel", { length: 50 }),
	location: varchar("location", { length: 255 }),
});