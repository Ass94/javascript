1. Instalar dependências do projeto: 
    C:\Softwares\Java Script\Projetos\exercicios-web\Projeto-Final\versao-inicial\backend> npm install
    C:\Softwares\Java Script\Projetos\exercicios-web\Projeto-Final\versao-inicial\frontend> npm install

2. Executar projeto:
    Ambiente de dev: npm start
    Ambiente de produção: npm run production

3. Instalar knex.js (query builder):
    Documentation: http://knexjs.org/
    comando: npm i -g knex

### Migrations ###
    migration: controla de forma natural as evoluções do banco de dados.
    up() -> usado para evoluir esquemas (tabelas)
    down() -> utilizado para desfazer.
## Fim migrations ##

### Construindo Aplicação Backend ###

*utilizando a api do consign torna algumas interações mais simples.

1. Declarar e importar todas dependências.
2. Criar e configurar middlewares.js dentro da pasta config.
3. desenvolver index.js (parte do cosign)
4. criar pasta api. Cria arquivo user.js
5. em config, criar routes.js
6. criar data base (knowledge) no postgres
7. no projeto backend executar o comando: knex init (será criado o arquivo knexfile.js)
8. configurar knexfile.js
9. na pasta config, criar o arquivo: db.js
10. desenvolver index.js (parte do bd)
11. no backend, executar comando: knex migrate:make create_table_users (será criado a pasta migrations com arquivo js)
12. criar segunda migration: knex migrate:make create_table_categories  (cada migration é responsável por criar uma tabela no bd)
13. criar terceira migration: knex migrate:make create_table_articles
14. configurar migration users.
15. configurar migration categories.
16. configurar migration articles.
17. no backend, executar todas migrations: comando knex migrate:latest
18. verificando tables criadas no postgres: \dt 
19. caso necessário, comando de rollback das migrations: knex migrate:rollback
20. em bd.js, configurar o knex (sempre que iniciar o sistema, as migrations serão criadas, atualizadas ....)
21. criar arquivo validador dentro da pasta api (validation.js)
22. em user.js, inserir a dependência de bcrypt-nodejs. (responsável pela criptografia da senha)
23. configurar user.js (destructuring do módulo validation.js e implementação da lógica de validação do usuário)
24. configurar user.js (salvar e listar user do banco de dados)
25. configurar routes.js (encadear a chamada de listar user. Método http get)
26. em index.js, inserir o then referente ao validation
27. em user.js, implementar a função: getById()
28. em routes.js, atualizar rotas /users/:id. função getById()
30. na pasta api, criar módulo category.js e desenvolver todas funcionalidades
31. atualizar rotas (routes.js)
32. em category.js, criar sistemática que organizará o menu em árvores. (toTree())
33. atualizar rotas (routes.js). As rotas mais específicas devem ser declaradas antes.
34. consultas recursivas: https://www.postgresql.org/docs/10/
35. criar arquivo queries.js (nesse arquivo contém algumas consultas específicas)
36. em articles.js, criar função que pegará os ids da categoria. Importar o módulo queries.js
37. Atalho do VSC: CRTL + B (espandir a tela)
38. criar arquivo .env (configuração do token de autenticação)
39. no .gitignore, configurar para que o arquivo .env não seja enviado para o github.
40. criar módulo auth.js (responsável pela autenticação) 
41. data atual: Date.now(). Ou seja, data em milissegundos.
42. Math.floor(Date.now() / 1000). Agora o resultado será em segundos.
43. iat: sigla para descrever emitido em (issed at).
44. o token expira em: exp: now + (60 * 60 * 24 * 3). Ou seja, três dias. 60 segundos * 60 minutos * 24 horas * 3 dias.
45. payload (auth.js): verifica se o usuário está logado.
46. atualizar rotas (route.js)

