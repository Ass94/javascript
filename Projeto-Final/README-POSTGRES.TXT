## Lemprete ##
    MySQL, SQLServer e PostgreSQL não devem utilizar a mesma porta padrão 3306. Configurar.

1. Baixar PostgreSQL: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

2. Instalar PostgreSQL: (next >> next >> next)
    Senha @123456
    Porta: 5432

3. Configurar variável de ambiente:
    POSTGRE_HOME: C:\Program Files\PostgreSQL\9.6\bin
    Path: C:\Program Files\PostgreSQL\9.6\bin

4. Comando: psql -U postgres
   Senha: @123456

5. Listar schems (esquemas): \l 

6. Criar banco de dados teste: create database teste_install;

7. Conectar-se ao banco criado: \c teste_install

8. Listar tabelas: \dt

9. Sair do client do postgres: \q


## CRIANDO BANCO DE DADOS E TABELAS PROJETO ##

1. CREATE DATABASE knowledge;
2. \c knowledge (conectar no banco).
3. Na pasta backend do projeto, inserir o comando knex init



## CRIANDO BANCO DE DADOS E TABELAS PROJETO FINAL ##

CREATE DATABASE knowledge_final;

c\ knowledge_final

\dt