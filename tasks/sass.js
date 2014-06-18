var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');

gulp.task('sass', function() {
  return gulp.src('sass/style.sass')
    .pipe(rubySass())
    .pipe(gulp.dest('css'))
});
