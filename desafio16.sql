DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(employee_email VARCHAR(10))
RETURNS INT READS SQL DATA
BEGIN
DECLARE total_jobs INT;
SELECT 
    COUNT(*)
FROM
    hr.job_history AS jh
        INNER JOIN
    hr.employees AS e ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID AND e.EMAIL = employee_email
INTO total_jobs;
    RETURN total_jobs;
END $$

DELIMITER ;
