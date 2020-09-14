-- This is the first query:

--SELECT DISTINCT year from population_years;

-- Add your additional queries below:
--SELECT * from population_years;

--The largest population size for Gabon in his dataset
--SELECT * from population_years
--WHERE country = 'Gabon';

-- 10 lowest population countries in 2005
--SELECT * from population_years
--WHERE year = 2005
--ORDER BY population ASC
--LIMIT 10;

--All the distinct countries with a population of over
-- 100 million in the year 2010
--SELECT DISTINCT country from population_years
--WHERE year = 2010
--AND population > 100;

-- How many countries in this dataset have the word
-- "Islands" in their name
--SELECT DISTINCT country from population_years
--WHERE country LIKE '%Islands%';

--What is the difference in population between 2000
--and 2010 in Indonesia
SELECT population, year
FROM population_years
WHERE country = 'Indonesia'
  AND (year = 2010 OR year = 2000);