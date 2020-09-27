--Multiple SQL tables
--Join plans and premium_users and select, user_id
-- from premium_users and description from plans

SELECT premium_users.user_id,
  plans.description
FROM premium_users
JOIN plans
  ON plans.id = premium_users.membership_plan_id;



-- Select columns in the table "plays" and "songs" 
 SELECT plays.user_id,
  plays.play_date,
  songs.title
FROM plays
JOIN songs
  ON plays.song_id = songs.id;



--Which users aren't premium users
SELECT users.id
FROM users
LEFT JOIN premium_users
  ON users.id = premium_users.user_id
WHERE premium_users.user_id IS NULL;


--Use a WITH statement to create two temporary tables
WITH january AS (
  SELECT *
  FROM plays
  WHERE strftime("%m", play_date) = '01'
),
february AS (
  SELECT *
  FROM plays
  WHERE strftime("%m", play_date) = '02'

)
SELECT january.user_id
FROM january
LEFT JOIN february
	ON january.user_id = february.user_id
WHERE february.user_id IS NULL;



 -- For each month in months, we want to know if each
 -- user in premium_users was active or canceled
 -- Cross join months and premium_users

 SELECT premium_users.user_id,premium_users.purchase_date, premium_users.cancel_date, months.months
 FROM premium_users
 CROSS JOIN months;


-- active and not active status

SELECT premium_users.user_id,
  months.months,
  CASE
    WHEN (
      premium_users.purchase_date <=
             months.months
      )
      AND
      (
        (premium_users.cancel_date >=
                months.months)
        OR
        premium_users.cancel_date IS NULL
      )
    THEN 'active'
    ELSE 'not_active'
  END as status

FROM premium_users
CROSS JOIN months;



--Union
SELECT *
FROM songs
UNION
SELECT *
FROM bonus_songs
LIMIT 10;



--Union
SELECT '2017-01-01' AS 'month'
UNION
SELECT '2017-02-01' AS 'month'
UNION
SELECT '2017-03-01' AS 'month';



-- Number of times each song was played
WITH play_count AS (
  SELECT song_id,
   COUNT(*) AS 'times_played'
FROM plays
GROUP BY song_id)
SELECT songs.title,
  songs.artist,
  play_count.times_played
FROM play_count
JOIN songs
ON play_count.song_id = songs.id;