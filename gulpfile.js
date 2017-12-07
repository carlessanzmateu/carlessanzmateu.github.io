'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

gulp.task('default', () => {
  gulp
    .src('./node_modules/angular/angular.js')
    .pipe(gulp.dest('./js/vendor/'));

  gulp
    .src('./node_modules/angular-route/angular-route.js')
    .pipe(gulp.dest('./js/vendor/'));

  gulp.src('./css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./dist'));

    // gulp.src('./css/**/*.css')
    // .pipe(minifyCSS())
    // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    // .pipe(concat('style.min.css'))
    // .pipe(gulp.dest('./dist/css'))
});

gulp.task('sass', () => {
  gulp
    .src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('minify-css', () => {
  return 
});