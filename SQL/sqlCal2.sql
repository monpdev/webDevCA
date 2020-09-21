--Coding challenge/SQL calculation
--Part of Codecademy/Web Dev Track

SELECT COUNT(*)
FROM users
WHERE email LIKE '%.com';


SELECT  first_name, COUNT(*) AS 'count'
FROM users
GROUP BY first_name
ORDER BY 2 DESC;


-- Distribution of watch durations
-- Result to contain duration (rounded to the closest minute)
-- and count the number of watch evens falling into this bucket
SELECT
  ROUND(watch_duration_in_minutes,0) as duration,
  COUNT(*) as count
FROM watch_history
GROUP BY duration
ORDER BY duration ASC;


-- payments table
-- Find all the users that have successfully made a payment
-- to Codeflix and find their total amount paid
SELECT user_id, SUM(amount) AS 'total'
FROM payments
WHERE status = 'paid'
GROUP BY user_id
ORDER BY total DESC;


-- watch_history table
-- Generate a table of user ids and total watch duration
-- for users who watched more than 400 minutes of content

SELECT user_id, 
  SUM(watch_duration_in_minutes) as 'total_duration'
FROM watch_history
GROUP BY user_id
HAVING total_duration > 400;


--how many minutes of content were streamed
-- on Codeflix
SELECT ROUND(SUM(watch_duration_in_minutes),0)
FROM watch_history;


--Which days in this period did Codeflix
--collect the most money?

SELECT pay_date, SUM(amount)
FROM payments
WHERE status = 'paid'
GROUP BY pay_date
ORDER BY SUM(amount) DESC;



-- When users successfully pay Codeflix
-- What is the average payment amount?
SELECT AVG(amount)
FROM payments
WHERE status = 'paid';


-- watch_history table
-- What is the duration of the longest individual 
-- event? What is the duration of the shortest?

SELECT MAX(watch_duration_in_minutes) AS max,
  MIN(watch_duration_in_minutes) AS min
FROM watch_history;

