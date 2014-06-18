var gulp = require('gulp');
var tasks = require('gulp-load-plugins')();

gulp.task('sass', function() {
  return gulp.src('sass/style.sass')
    .pipe(tasks.rubySass())
    .pipe(gulp.dest('css'))
});
