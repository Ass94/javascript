const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build')) // Será gerado a pasta build com o código convertido de typeScript para javaScript. 
}

exports.default = series(transformacaoTS)

/*
* Comando no terminal:
* C:\Softwares\Java Script\Projetos\exercicios-web\gulp\typeScript>gulp
*/