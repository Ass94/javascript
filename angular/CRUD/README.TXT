1. C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\backend> npm init -y
2. C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\backend> npm i json-server
3. C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD>npm i -g @angular/cli
4. C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD>ng new frontend -minimal
5. C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend> npm start
6. Configurar angular.json

7. main.ts (carrega o módulo principal -> AppModule)

8. Diretório: C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend> 
    a) comando: ng add @angular/material (thema, cor...)

9. Gerar componente (header): C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend> ng g c components/template/header
10. Em app.module.ts, importar: import { MatToolbarModule } from '@angular/material/toolbar';
11. Após importar, referenciar a variável MatToolbarModule na área de imports do app.module.ts

12. Gerar componente (footer): C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend> ng g c components/template/footer

13. Definir classes css para serem usadas de forma global no arquivo styles.css

14. Gerar componente (navegação): C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend> ng g c components/template/nav 

15. Importar mais dois módulos em app.module.ts
    a) import { MatSidenavModule } from '@angular/material/sidenav';
    b) import { MatListModule } from '@angular/material/list';

16. Gerar componente (home): C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend>ng g c views/home

17. Gerar componente (product): C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend>ng g c views/product-crud

18. Gerar diretiva de atributo (appRed): C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend>ng g d directives/red

19. Gerar divertiva estrutural (*myFor): C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend>ng g d directives/for

20. Instalar plugin de Auto Import

21 Gerar componente (product-create):ng g c components/product/product-create

22. Gerar service (product): ng g s components/product/product

23. Gerar component (product-read)ng g c components/product/product-read

24. Gerar Table schematic (Doc: https://material.angular.io/guide/schematics):
    a) diretório: C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend>
    b) comando: ng generate @angular/material:table components/product/product-read2

25. Gerar componente (update): ng g c components/product/product-update 

26. Gerar componente (delete): ng g c components/product/product-delete

27. Gerar service (): ng g s components/template/header/header


**Lembrete**
1. Iniciar backend: C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\backend> npm start
2. Inciar frontend: C:\Softwares\Java Script\Projetos\exercicios-web\angular\CRUD\frontend> npm start