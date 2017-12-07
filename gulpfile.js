'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

gulp.task('default',['moveVendor','min-css','concat-js'], () => {});

gulp.task('moveVendor', () => {
  gulp
  .src('./node_modules/angular/angular.js')
  .pipe(gulp.dest('./js/vendor/'));

  gulp
    .src('./node_modules/angular-route/angular-route.js')
    .pipe(gulp.dest('./js/vendor/'));
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

gulp.task('min-css', () => {
  gulp
    .src('./css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('concat-js', () => {
  gulp.src(['./js/app.js', './js/config.js', './js/directives/*.js'])
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('./dist'));
});