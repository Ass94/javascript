-- SUM (função agregadora)
SELECT 
    regiao AS 'Região',
    SUM(populacao) AS Total
FROM estados
GROUP BY regiao
ORDER BY Total DESC

-- AVG (função agregadora)
SELECT 
    regiao AS 'Região',
    AVG(populacao) AS Media
FROM estados
GROUP BY regiao
ORDER BY Media




