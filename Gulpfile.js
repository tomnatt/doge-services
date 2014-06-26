var gulp = require('gulp');

var tasks = require('gulp-load-plugins')();

/* commented as we're using the task loader
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var qunit = require('gulp-qunit');
*/

gulp.task('uglify', function() {
    return gulp.src(['js/lib/*.js', 'js/*.js'])
        .pipe(tasks.concat('dist/js/app.js'))
        .pipe(tasks.uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
    return gulp.src('sass/style.sass')
        .pipe(tasks.rubySass({sourcemap: true}))
        .pipe(gulp.dest('dist/css'))
        .pipe(tasks.livereload({
            auto: false
        }));
});

gulp.task('test', function() {
    return gulp.src('./test/index.html')
        .pipe(tasks.qunit());
});

gulp.task('connect', function() {
    tasks.connect.server({
        root: '.',
        port: 3000
    });
});

// this makes watch depend on connect so we'll get both running from a single call
gulp.task('watch', ['connect'], function() {
    tasks.livereload.listen();
    gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('serve', ['connect']);
gulp.task('build', ['uglify', 'sass']);
