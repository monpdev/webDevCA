-- Performing SQL Calculations.  Part of Codecademy/Web dev track.

SELECT COUNT(*)
FROM fake_apps
WHERE price = 0;


--SUM-Add all values in a particular column 
SELECT SUM(downloads)
FROM fake_apps;

SELECT MIN(downloads)
FROM fake_apps;



--Min and max

--SELECT MIN(downloads)
--FROM fake_apps;
SELECT MAX(price)
FROM fake_apps;


-- AVG() calculate value of a particular column
--SELECT AVG(downloads)
--FROM fake_apps;

SELECT AVG(price)
FROM fake_apps;


--Round -rounding to make the result table easier to read.

--SELECT name, ROUND(price, 0)
--FROM fake_apps;

SELECT ROUND(AVG(price),2)
FROM fake_apps;



-- Groupby
--SELECT price, COUNT(*)
--FROM fake_apps
--WHERE downloads > 20000
--GROUP BY price;

SELECT category, SUM(downloads)
FROM fake_apps
GROUP BY category;


--Groupby II
SELECT category,
      price,
      AVG(downloads)
FROM fake_apps
GROUP BY 1,2;


--HAVING
SELECT price, 
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;