module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    qunit: {
      all: ['test/*.html']
    },
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
    watch: {
      scripts: {
        files: 'sass/*.sass',
        tasks: ['sass'],
        options: {
          interrupt: true,
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'qunit']);
};
