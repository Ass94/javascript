-- Excecutar comandos no Workbanch, pois o plugin do VSC tem alguns bugs para esse tipo de consulta


-- INNER exibirá apenas o que está relacionado entre as duas tabelas.
SELECT * FROM cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;

-- Exibirá todas as cidades que tem relação com prefeitos + as demais cidades.
-- Left trará também todoas as cidades que não tem relacionadmento com prefeitos.
-- Esta é justamente a função do LEFT trazer todos à esquerda.
-- Trará cidade, pois é a tabela que está à esquerda no momento da consulta.
SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id;

-- Exibirá tudo que se relaciona entre as duas tabelas mais todos os demais campos da tabela prefeito (RIGHT).
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;

-- FULL JOIN. Como em MySql não possui tal comando, precisamos fazer a UNIÃO das consultas RIGHT JOIN e LEFT JOIN:
SELECT * FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id
UNION
SELECT * FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id;