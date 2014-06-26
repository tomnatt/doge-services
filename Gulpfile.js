var gulp = require('gulp');
var tasks = require('gulp-load-plugins')();
var browserSync = require('browser-sync');


// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: "./"
    }
  });
});


gulp.task('test', ['lint'], function() {
  return gulp.src('./test/index.html').pipe(tasks.qunit());
});

gulp.task('sass', function() {
  gulp.src('sass/style.sass')
    .pipe(tasks.rubySass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('connect', function() {
  tasks.connect.server({
    root: '.',
    port: 3000
  });
});

gulp.task('watch',['sass', 'browser-sync'], function() {
  gulp.watch('sass/*.sass', ['sass']);
});


gulp.task('lint', function() {
  return gulp.src('./js/*.js')
    .pipe(tasks.jshint())
    .pipe(tasks.jshint.reporter('default'))
    .pipe(tasks.jshint.reporter('fail'));
});

gulp.task('uglify', function() {
  return gulp.src(['./js/lib/jquery.min.js', './js/*.js'])
    .pipe(tasks.concat('dist/app.js'))
    .pipe(tasks.uglify())
    .pipe(gulp.dest(''));
});

gulp.task('build', ['test', 'sass', 'uglify'], function() {});
