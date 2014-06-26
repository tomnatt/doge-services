module.exports = function(grunt) {

    grunt.initConfig({

        uglify: {
            build: {
                files: {
                    "dist/js/app.js": ["js/lib/jquery.min.js", "js/accordian.js"]
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["uglify:build"]);
};