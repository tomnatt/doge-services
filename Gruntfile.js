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
        },

        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'dist/css/main.css': 'sass/style.sass'       // 'destination': 'source'
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
        }

    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-sass");

    // run these tasks in order, stopping if one fails
    grunt.registerTask("default", ["qunit", "uglify:build"]);

    // this is an alias
    grunt.registerTask("serve", ["connect"]);
};