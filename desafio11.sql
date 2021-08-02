SELECT 
    main.ContactName AS `Nome`,
    main.Country AS `País`,
    (SELECT 
            COUNT(*)
        FROM customers
        WHERE
            main.Country = Country
                AND main.CustomerID <> CustomerID) AS `Número de compatriotas`
FROM w3schools.customers AS main
WHERE
    EXISTS
    ( SELECT 
            *
        FROM customers
        WHERE
            main.Country = Country
                AND main.CustomerID <> CustomerID )
ORDER BY `Nome`;
