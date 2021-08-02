(SELECT DISTINCT Country AS `País` FROM w3schools.customers)
UNION ALL
(SELECT DISTINCT Country AS `País` FROM w3schools.suppliers)
ORDER BY `País`
LIMIT 5;
