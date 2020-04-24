const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor (cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8082,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    //Qualquer mudança no arquivo:
    //Reload automático
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}


module.exports = {
    monitorarArquivos,
    servidor
}

/**
 * Comando:
 * C:\Softwares\Java Script\Projetos\exercicios-web\gulp\spa>gulp
*/