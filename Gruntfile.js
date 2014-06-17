module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    },
    sass: {
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
   connect: {
     server: {
       options: {
         port: 3000,
         keepalive: true
       }
     }
   },
    watch: {
      scripts: {
        files: 'sass/*.sass',
        tasks: ['sass'],
        options: {
          interrupt: true,
          livereload: true
        }
      }
    },
    uglify: {
      build: {
        files: {
          'dist/app.js': ['js/lib/jquery.min.js', 'js/accordion.js']
        }
      }
    }
  });
  grunt.loadTasks('grunt-tasks');

  grunt.registerTask('serve', ['connect']);
  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('build', ['test', 'sass', 'uglify']);

};
