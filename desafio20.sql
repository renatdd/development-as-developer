DELIMITER $$

CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN email_input VARCHAR(100))
BEGIN
SELECT 
    CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
    dept.DEPARTMENT_NAME AS 'Departamento',
    job.JOB_TITLE AS 'Cargo'
FROM hr.job_history AS hist
INNER JOIN
    hr.employees AS e ON e.EMPLOYEE_ID = hist.EMPLOYEE_ID
INNER JOIN
    hr.departments AS dept ON dept.DEPARTMENT_ID = hist.DEPARTMENT_ID
INNER JOIN
    hr.jobs AS job ON job.JOB_ID = hist.JOB_ID
WHERE e.EMAIL = email_input
ORDER BY `Departamento` , `Cargo`;
END $$
DELIMITER ;
