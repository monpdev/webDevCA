--How many entries in the countries table are from Africa
SELECT count(*)
FROM countries
WHERE continent = 'Africa';


-- What was the total population of the continent of
-- Oceania in 2005
SELECT SUM(population_years.population) AS 'Population',
countries.continent AS 'Oceania'
FROM population_years
JOIN countries
ON countries.id = population_years.country_id
WHERE countries.continent = 'Oceania'
AND population_years.year = 2005;


--What is the average population of countries in South
--America in 2003
SELECT AVG(population_years.population) As 'Average population'
FROM countries
JOIN population_years
ON countries.id = population_years.country_id
WHERE countries.continent = 'South America'
AND population_years.year = 2003;


--What country had the smallest population in 2007
SELECT countries.name AS 'Country with smallest population', MIN(population_years.population) AS 'Population'
FROM countries
JOIN population_years
ON countries.id = population_years.country_id
WHERE year = 2007;


--What is the average population of Poland during the time --period covered by this dataset
SELECT countries.name, ROUND(AVG(population_years.population),2) AS 'Population'
FROM countries
JOIN population_years
ON countries.id = population_years.country_id
WHERE countries.name = 'Poland';


--How many countries have the word "The" in their name?
SELECT COUNT(*)
FROM countries
WHERE name LIKE '%The%';


--What was the total population of each continent in 2010
SELECT countries.continent AS 'Continent', ROUND(SUM(population_years.population),2) AS 'Total population'
FROM countries
JOIN population_years
ON countries.id = population_years.country_id
WHERE year = 2010
GROUP BY countries.continent;







