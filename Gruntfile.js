module.exports = function(grunt) {

    grunt.initConfig({

        qunit: {
            all: ["test/*.html"]
        },

        uglify: {
            build: {
                files: {
                    "dist/js/app.js": ["js/lib/jquery.min.js", "js/accordian.js"]
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-qunit");

    grunt.registerTask("default", ["qunit", "uglify:build"]);
};