'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', () => {
  gulp
    .src('./node_modules/angular/angular.js')
    .pipe(gulp.dest('./js/vendor/'));

  gulp
    .src('./node_modules/angular-route/angular-route.js')
    .pipe(gulp.dest('./js/vendor/'));

  gulp
    .src('./node_modules/angular-aria/angular-aria.js')
    .pipe(gulp.dest('./js/vendor/'));

  gulp
    .src('./node_modules/angular-animate/angular-animate.js')
    .pipe(gulp.dest('./js/vendor/'));

  gulp
    .src('./node_modules/angular-material/angular-material.js')
    .pipe(gulp.dest('./js/vendor/'));

  gulp
    .src('./node_modules/angular-material/angular-material.min.css')
    .pipe(gulp.dest('./css/libraries/'));
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
