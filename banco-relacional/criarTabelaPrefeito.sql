CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR (255) NOT NULL,
    cidade_id INT UNSIGNED, 
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id),
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);

-- UNIQUE KEY -> CONSTRAINT
-- UNIQUE KEY (cidade_id): Ou seja, não pode haver chave repetida. 
-- Um prefeito pode exercer mantado apenas em uma cidade.
-- UNIQUE KEY (cidade_id): Também garante uma relação um para um.