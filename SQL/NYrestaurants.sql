--SQL commands to query about dinner spots in New York
-- The table of restaurants data is called nomnom

-- 1. Getting a feel for the nomnom table
--SELECT *
--FROM nomnom;

-- 2.Get distinct neighborhood
--SELECT DISTINCT neighborhood
--FROM nomnom;

-- 3. Distinct cuisine types
--SELECT DISTINCT cuisine
--FROM nomnom;

-- 4.Looking for Chinese takewaway options
--SELECT *
--FROM nomnom
--WHERE cuisine = 'Chinese';


-- 5.Return all the restaurants with reviews of 4 and above
--SELECT *
--FROM nomnom
--WHERE review >= 4;


-- 6. Return all the restaurants that are Italian and $$$
--SELECT *
--FROM nomnom
--WHERE cuisine = 'Italian'
 -- AND price = '$$$';


-- 7.Find a restuarant that contain the word meatball
--SELECT *
--FROM nomnom
--WHERE name LIKE '%meatball%';

-- 8.Find a restuarant close by 
--SELECT *
--FROM nomnom
--WHERE neighborhood = 'Midtown' 
  --OR neighborhood = 'Downtown'
  --OR neighborhood = 'Chinatown';


-- 9. Find all the health grade pending restaurants (empty values)
--SELECT *
--FROM nomnom
--WHERE health IS NULL;


-- 10. Create a Top 10 Restaurants Ranking based on reviews
SELECT *
FROM nomnom
ORDER BY review DESC
LIMIT 10;

--11. Use A CASE statement to change the rating system 
SELECT name,
 CASE
 WHEN review > 4.5 THEN 'Extraordinary'
 WHEN review > 4 THEN 'Excellent'
 WHEN review > 3 THEN 'Good'
 WHEN review > 2 THEN 'Fair'
  ELSE 'Poor'
END AS 'Review Range'
FROM nomnom;


















