SELECT 
    p.ProductName AS `Produto`, p.Price AS Preço
FROM w3schools.products AS p
WHERE
    EXISTS( SELECT 
            *
        FROM w3schools.order_details
        WHERE
            ProductID = p.ProductID
                AND Quantity > 80)
ORDER BY Produto;
