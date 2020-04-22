const gulp = require('gulp')
const { series, parallel } = require('gulp')



const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}


// cb -> callback
function copiar(cb) {
    gulp.src('pastaA/**/*.txt')
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}

//Executar as funções em série (uma atrás da outra)
module.exports.default = series (
    parallel (antes1,antes2), //Executam em paralelo
    copiar,
    fim,
)

/*Executar comando gulp:*/
// C:\Softwares\Java Script\Projetos\exercicios-web\gulp\basico>gulp