CREATE VIEW SpotifyClone.faturamento_atual AS
SELECT 
ROUND(MIN(plans.price), 2) AS 'faturamento_minimo',
ROUND(MAX(plans.price), 2) AS 'faturamento_maximo',
ROUND(AVG(plans.price), 2) AS 'faturamento_medio',
ROUND(SUM(plans.price), 2) AS 'faturamento_total'
FROM SpotifyClone.User AS users
INNER JOIN
    SpotifyClone.Plan AS plans ON plans.plan_id = users.plan_id;
