const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const RES = 'res/';
const PUBLIC = 'dist/';

/* Clean */

function cleanCss() {
    return gulp
        .src(PUBLIC + 'css', {read: false, allowEmpty: true})
        .pipe(clean());
}

function cleanAll() {
    return gulp.series();
}

/* Copy */

/* Sass */

function buildSass() {
    return gulp.src(RES + 'sass/**/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(PUBLIC + 'css'));
}

/* JS */

function concatJs(cb) {
    return gulp
        .src(RES + 'js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest(PUBLIC + 'js'));
}

function uglifyJs(cb) {
    return gulp
        .src(PUBLIC + 'js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(PUBLIC + 'js'));
}

exports.dev = function () {
    gulp.watch(RES + 'js/**/*.js', gulp.series(concatJs))
    gulp.watch(RES + 'views/**/*.ejs', gulp.series(cleanCss, buildSass));
    gulp.watch(RES + 'sass/**/*.scss', gulp.series(cleanCss, buildSass));
}
exports.sass = gulp.series(cleanCss, buildSass);
exports.build = gulp.series(cleanAll);
exports.default = exports.build;