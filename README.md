# GFK Node / PG Challenge

## Challenge: Product Performance Analysis Endpoint

Scenario: You're tasked with creating an endpoint that returns total sales (quantity * price) grouped by year and quarter.

## Requirements:

### Endpoint Path: /api/products/analysis
### HTTP Method: GET
### Query Parameters:
- year: The year to filter the results by. (e.g. 2021)

## Hints:

- Use JOINs to connect the necessary tables.
- Validate and sanitize input parameters to protect against SQL injection and other common web vulnerabilities.
- Consider writing tests for your code.
