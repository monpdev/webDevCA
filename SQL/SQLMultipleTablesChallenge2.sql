--Examine the three tables
--SELECT * FROM trips;
--SELECT * FROM riders;
--SELECT * FROM cars;


-- Cross join between riders and cars
--SELECT riders.first,
--      riders.last,
--      cars.model
--FROM riders, cars;


-- Join between trips and riders
-- and combine the 2 tables using a LEFT JOIN
--SELECT *
--FROM trips
--LEFT JOIN riders
--WHERE trips.rider_id = riders.id ;


--Join and combine the trips and cars table using
-- an INNER JOIN
--SELECT * 
--FROM trips
--INNER JOIN cars
--WHERE trips.car_id = cars.id ;


-- Stack the riders table on top of the new table named
-- riders2
--SELECT *
--FROM riders
--UNION 
--SELECT *
--FROM riders;


--What is the average cost for a trip?
--SELECT ROUND(AVG(cost),2)
--FROM trips;



--Find all the riders who have used REBU less than 500 --times (in both rider and riders2)
--SELECT *
--FROM riders
--WHERE total_trips < 500
--UNION
--SELECT *
--FROM riders2
--WHERE total_trips < 500;


--Calculate the number of cars that are active
--SELECT COUNT(*)
--FROM cars
--WHERE status = 'active';


--Write a query that finds the two cars that have the --highest trips_completed
SELECT *
FROM cars
ORDER BY trips_completed DESC
LIMIT 2;
