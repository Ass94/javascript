INSERT INTO empresas
    (nome, cnpj)
VALUES 
    ('Bradesco', 95694186000132),
    ('Vale', 27887148000146),
    ('Cielo', 01598317000134);

-- INSERIR EMPRESAS_UNIDADES

--(1- Bradesco, 1- Campinas, 1- Sede)
INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);
