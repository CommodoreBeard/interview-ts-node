CREATE TABLE IF NOT EXISTS "date_dim" (
	"date" date PRIMARY KEY NOT NULL,
	"day" integer NOT NULL,
	"month" integer NOT NULL,
	"year" integer NOT NULL,
	"quarter" integer NOT NULL,
	"dayofweek" varchar(9) NOT NULL,
	"weekofyear" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sales_fact" (
	"saleid" serial PRIMARY KEY NOT NULL,
	"productid" integer,
	"retailerid" integer,
	"date" date,
	"quantity" integer NOT NULL,
	"price" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_dim" (
	"productid" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"brand" varchar(255),
	"category" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "retailer_dim" (
	"retailerid" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"channel" varchar(50),
	"location" varchar(255)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales_fact" ADD CONSTRAINT "sales_fact_date_fkey" FOREIGN KEY ("date") REFERENCES "public"."date_dim"("date") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales_fact" ADD CONSTRAINT "sales_fact_productid_fkey" FOREIGN KEY ("productid") REFERENCES "public"."product_dim"("productid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales_fact" ADD CONSTRAINT "sales_fact_retailerid_fkey" FOREIGN KEY ("retailerid") REFERENCES "public"."retailer_dim"("retailerid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
