DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(month_input INT, year_input INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE total_employees_hired INT;
SELECT 
    COUNT(*)
FROM
    hr.employees
    WHERE YEAR(HIRE_DATE) = year_input AND MONTH(HIRE_DATE) = month_input
INTO total_employees_hired;
    RETURN total_employees_hired;
END $$

DELIMITER ;
