# GFK Node / PG Challenge

## Challenge: Product Performance Analysis Endpoint

Scenario: You're tasked with creating an endpoint that provides a comprehensive analysis of product sales performance across different retailers. This analysis should include not only sales and revenue metrics but also incorporate insights into how products perform across different sales channels. The endpoint should allow filtering by time period (date range) and category, and return data sorted by total revenue, including retailer information where the product performs best.

## Requirements:

### Endpoint Path: /api/products/analysis
### HTTP Method: GET
### Query Parameters:
- startDate and endDate to filter sales within a specific date range.
- category to filter products by their category.
Response Data:
- Product ID, Name, Brand, Category.
- Total Quantity Sold, Total Revenue.
- Best Performing Retailer Name, Channel, and Location (based on revenue).
- Sorting: Results should be sorted by total revenue in descending order.
- Limit: Limit the results to the top 10 products.

## Hints:

- Use JOINs to connect the necessary tables.
- Consider using subqueries or window functions to identify the best-performing retailer for each product.
- Validate and sanitize input parameters to protect against SQL injection and other common web vulnerabilities.
- Consider writing tests for your code.
