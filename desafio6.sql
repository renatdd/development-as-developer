SELECT 
    CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
    j.JOB_TITLE AS 'Cargo',
    DATE(h.START_DATE) AS 'Data de início do cargo',
    d.DEPARTMENT_NAME AS 'Departamento'
FROM
hr.job_history AS h
        INNER JOIN
    hr.employees AS e ON h.EMPLOYEE_ID = e.EMPLOYEE_ID
        INNER JOIN
    hr.jobs AS j ON h.JOB_ID = j.JOB_ID
        INNER JOIN
    hr.departments AS d ON h.DEPARTMENT_ID = d.DEPARTMENT_ID
ORDER BY `Nome completo` DESC, `Cargo`;
