const gulp = require('gulp');

gulp.task('default', () => {
  gulp
    .src('./node_modules/angular/angular.min.js')
    .pipe(gulp.dest('./js/vendor/'));

  gulp
    .src('./node_modules/angular-route/angular-route.min.js')
    .pipe(gulp.dest('./js/vendor/'));
});
