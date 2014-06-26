var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var qunit = require('gulp-qunit');

gulp.task('build', function() {

    return gulp.src(['js/lib/*.js', 'js/*.js'])
        .pipe(concat('dist/js/app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('test', function() {
    return gulp.src('./test/index.html')
        .pipe(qunit());
});