var gulp = require('gulp');

var tasks = require('gulp-load-plugins')();

/* commented as we're using the task loader
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var qunit = require('gulp-qunit');
*/

gulp.task('build', function() {

    return gulp.src(['js/lib/*.js', 'js/*.js'])
        .pipe(tasks.concat('dist/js/app.js'))
        .pipe(tasks.uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('test', function() {
    return gulp.src('./test/index.html')
        .pipe(tasks.qunit());
});