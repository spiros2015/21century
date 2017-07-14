/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var argv = require('yargs').argv;
var merge = require('merge-stream');
var browserify = require('browserify');
var shim = require('browserify-shim');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var commonConfig = {
    jsentry: 'src/js/app.jsx',
    output: 'bundle.js',
    jsdest: 'dist/js'
};

function buildCss(fileName, streams) {
    return merge(streams).pipe(concat(fileName + '_release.css'))
        .pipe(cssnano({ zindex: false }))
        .pipe(gulp.dest('dist/css'));
}

gulp.task('css-build', function () {
    var scss = gulp.src('src/css/*.scss');
    return buildCss('css', scss);
});

gulp.task('js-build', function () {
    browserify(commonConfig.jsentry)
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        //.transform(shim)
        .bundle()
        .pipe(source(commonConfig.output))
        .pipe(gulp.dest(commonConfig.jsdest));
});


gulp.task('default', ['script:build']);