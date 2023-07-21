'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const  rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const path = require('path');


gulp.task('less', function () {
    return gulp.src('./src/styles/styles.less')
        .pipe(plumber())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./src/styles/*.less', gulp.series('less'));
});