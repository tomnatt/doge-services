var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('sass/style.sass')
        .pipe(rubySass({sourcemap: true}))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload({
            auto: false
        }));
});
