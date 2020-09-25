-- SQL commands that help working
-- with data stored in multiple tables


SELECT *
FROM orders
LIMIT 5;

SELECT *
FROM subscriptions
LIMIT 5;

SELECT * 
FROM customers
LIMIT 5;



--Combining Tables with SQL

SELECT *
FROM orders
JOIN subscriptions
ON orders.subscription_id = subscriptions.subscription_id;

SELECT *
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id
WHERE subscriptions.description = 'Fashion Magazine';



--Inner Joins
-- Count the number of subscribers who get a print newspaper
SELECT COUNT(*)
FROM newspaper;

--Count the number of subscribers who get an online newspaper
SELECT COUNT(*)
FROM online;

--Join newspaper table and online table on their id columns
SELECT COUNT(*)
FROM newspaper
JOIN online
  ON newspaper.id = online.id;




--Left Joins
-- How many users subscribe to the print newspaper, but not to 
-- to the online
--Performing a left join of newspaper table and online table on
--their id columns

SELECT *
FROM newspaper
LEFT JOIN online
  ON newspaper.id = online.id;


SELECT *
FROM newspaper
LEFT JOIN online
  ON newspaper.id = online.id
WHERE online.id IS NULL;


-- Primary Key vs Foreign Key
-- Perform an inner join of classes and students
SELECT *
FROM classes
JOIN students
  ON classes.id = students.class_id;


--Cross Join
SELECT COUNT(*)
FROM newspaper
WHERE start_month <= 3
  AND end_month >= 3;

--Select all columns from the cross join of newspaper
--and months
SELECT *
FROM newspaper
CROSS JOIN months;


--Select all months where a user was subscribed
SELECT *
FROM newspaper
CROSS JOIN months
WHERE start_month <= month AND end_month >= month;

--Create a final query where you aggregate over each
--month to count the number of subscribers

SELECT month,
   COUNT(*)
FROM newspaper
CROSS JOIN months
WHERE start_month <= month 
   AND end_month >= month
GROUP BY month;



-- union

SELECT *
FROM newspaper
UNION
SELECT *
FROM online;


--With- combine two tables, but one of the tables is the result of another calculation.

WITH previous_query AS (
   SELECT customer_id,
   COUNT(subscription_id) AS 'subscriptions'
  FROM orders
  GROUP BY customer_id
)
SELECT  customers.customer_name, 
   previous_query.subscriptions
FROM previous_query
JOIN customers
  ON previous_query.customer_id = customers.customer_id;