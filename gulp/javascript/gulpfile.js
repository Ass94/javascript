const { series, parallel } = require('gulp')
const gulp = require ('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS (cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // Arquivos de comentários não deverão ser transferidos
            presets: ["env"] // Pegar tudo que há de mais moderno
        }))
        .pipe(uglify()) // Vai pegar todo código e vai converter para ser minificado
        .on('error', err => console.log(err))// Quando ocorrer determinado evento
        .pipe(concat('codigo.min.js')) // Vai pegar todo os arquivos selecionado e concatenar, passando o nome do arquivo que será gerado
        .pipe(gulp.dest('build')) // Destino
}

function fim (cb) {
    console.log('Fim!!!')
    return cb ()
}

exports.default = series(transformacaoJS, fim)
// exports.default = parallel(transformacaoJS, fim)