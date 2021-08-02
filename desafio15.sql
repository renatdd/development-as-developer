DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo(IN job_title VARCHAR(100))
BEGIN
SELECT 
    ROUND(AVG(e.SALARY), 2) AS `Média salarial`
FROM
    hr.employees AS e
INNER JOIN
    hr.jobs AS j ON e.JOB_ID = j.JOB_ID AND j.JOB_TITLE = job_title;
END $$
DELIMITER ;
