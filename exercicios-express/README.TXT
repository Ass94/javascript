1. No cmd, diretório: C:\Softwares\Java Script\Projetos\exercicios-web. Criar pasta exercicios-express:
    mkdir exercicios-express

2. C:\Softwares\Java Script\Projetos\exercicios-web\exercicios-express> npm init -y

3. C:\Softwares\Java Script\Projetos\exercicios-web\exercicios-express> npm i --save express

4. Criar arquivo .gitignore

5. instalar dependência apenas para ser utilizada no ambiente de desenvolvimento: npm i --save-dev nodemon
    nodemon: desparador. 

6. Caso necessário, instalar o nodemon de forma global: npm i -g nodemon

7. comando rs (rest no nodemon)

8. Comando iniciar: npm start

### PRODUÇÃO ###

1. Em produção, em vez de utilizar o nodemon, utilizamos o pm2 : https://pm2.keymetrics.io/

2. Comando de instalação global: npm install pm2 -g

3. Comando de start: pm2 start app.js (pode ser configurado de forma mais simples no package.json)

4. Comando aplicado na aula:
    1. npm i --save pm2 (Ou seja, instalando apenas para esse projeto)

5. Criar script production no pakage.json: "production": "pm2 start index.js --name appx-backend"
    1. production: nome do script chamado. Exemplo: npm run production
    2. index.js: nome do arquivo que será iniciado.
    3. --name: no que aparecerá quando o arquivo for iniciado

6. Instalar o pm2 de forma globa: npm i -g pm2

7. Comando para monitorar pm2: pm2 monit

8. Comando para verificar status: pm2 status

9. Monstrar detalhes da aplicação: pm2 show 0

10. Restart: pm2 restart 0 

11. Stop: pm2 stop 0

12. Matar a instancia: pm2 kill


## BODY PARSER ##

1. C:\Softwares\Java Script\Projetos\exercicios-web\exercicios-express> npm i --save body-parser