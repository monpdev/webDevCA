startups.sql


--startups.sql
-- Write queries with aggregate functions to retrieve
-- some interesting insights about these companies

--SELECT *
--FROM startups;

--SELECT COUNT(*)
--FROM startups;

-- Total value of all companies
SELECT SUM(valuation)
FROM startups;

--Highest amount raised by a startup
SELECT MAX(raised)
FROM startups;

--Returns the maximum amount of money raised suring Seed stage
SELECT MAX(raised)
FROM startups
WHERE stage = 'Seed';

--In what year was the oldest company on the list founded?
SELECT MIN(founded)
FROM startups;

--Return the average valuation
SELECT AVG(valuation)
FROM startups;

-- Return the avarage valuation in each category
--SELECT category, AVG(valuation)
--FROM startups
--GROUP BY category;


--Return the average valuation in each category
--SELECT category, ROUND(AVG(valuation),2)
--FROM startups
--GROUP BY category;


--Return the average valuation in each category
-- Round the averages to two decimal places
-- Order the list from highest average to lowest
--SELECT category, ROUND(AVG(valuation),2)
--FROM startups
--GROUP BY 1
--ORDER BY 2 DESC;


--Return the name of each category with the total
--number of companies that belong to it
--SELECT category, COUNT(*)
--FROM startups
--GROUP BY category;


--Filter the result to only include categories that have more --than 3 companies in them
SELECT category, COUNT(*)
FROM startups
GROUP BY category
HAVING COUNT(*) > 3
ORDER BY 2 DESC;

--Average size of a startup in each location
SELECT location, AVG(employees) 
FROM startups
GROUP BY location
HAVING AVG(employees) > 500;


--Average size of startup in each location
-- with average size above 500
SELECT location, AVG(employees) 
FROM startups
GROUP BY location
HAVING AVG(employees) > 500;
